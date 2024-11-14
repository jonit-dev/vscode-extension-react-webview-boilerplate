import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log('Attempting to activate extension...');
  console.log('Extension URI:', context.extensionUri.toString());

  // Register Webview View Provider
  const provider = new ReactWebviewViewProvider(context.extensionUri);
  console.log('Created WebviewViewProvider');

  try {
    context.subscriptions.push(
      vscode.window.registerWebviewViewProvider('react-webview.view', provider)
    );
    console.log('Successfully registered WebviewViewProvider');
  } catch (error) {
    console.error('Failed to register WebviewViewProvider:', error);
  }

  // Register Command
  try {
    let disposable = vscode.commands.registerCommand(
      'vscode-extension-react-webview.openWebview',
      () => {
        console.log('Executing openWebview command');
        ReactPanel.createOrShow(context.extensionUri);
      }
    );
    context.subscriptions.push(disposable);
    console.log('Successfully registered openWebview command');
  } catch (error) {
    console.error('Failed to register command:', error);
  }

  console.log(
    'Extension "vscode-extension-react-webview" activation complete!'
  );
}

class ReactWebviewViewProvider implements vscode.WebviewViewProvider {
  constructor(private readonly _extensionUri: vscode.Uri) {}

  public resolveWebviewView(
    webviewView: vscode.WebviewView,
    _context: vscode.WebviewViewResolveContext,
    _token: vscode.CancellationToken
  ) {
    console.log('Resolving WebviewView');
    webviewView.webview.options = {
      enableScripts: true,
      localResourceRoots: [
        vscode.Uri.joinPath(this._extensionUri, 'dist'),
        vscode.Uri.joinPath(this._extensionUri, 'node_modules'),
      ],
    };

    webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);
    console.log('WebviewView resolved');
  }

  private _getHtmlForWebview(webview: vscode.Webview) {
    const scriptUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, 'dist', 'webview.js')
    );

    const stylesUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, 'dist', 'styles', 'main.css')
    );

    const codiconUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, 'dist', 'styles', 'external', 'codicon.css')
    );

    const vscodeElementsUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, 'node_modules', '@vscode-elements', 'elements', 'dist', 'bundled.js')
    );

    return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>React Webview</title>
                <link href="${codiconUri}" rel="stylesheet">
                <link href="${stylesUri}" rel="stylesheet">
                <script src="${vscodeElementsUri}" type="module"></script>
            </head>
            <body>
                <div id="root"></div>
                <script src="${scriptUri}"></script>
            </body>
            </html>`;
  }
}

class ReactPanel {
  public static currentPanel: ReactPanel | undefined;
  private static readonly viewType = 'reactWebview';
  private readonly _panel: vscode.WebviewPanel;
  private readonly _extensionUri: vscode.Uri;
  private _disposables: vscode.Disposable[] = [];

  private constructor(panel: vscode.WebviewPanel, extensionUri: vscode.Uri) {
    this._panel = panel;
    this._extensionUri = extensionUri;

    this._update();

    this._panel.onDidDispose(() => this.dispose(), null, this._disposables);

    this._panel.onDidChangeViewState(
      () => {
        if (this._panel.visible) {
          this._update();
        }
      },
      null,
      this._disposables
    );

    this._panel.webview.onDidReceiveMessage(
      (message) => {
        switch (message.command) {
          case 'alert':
            vscode.window.showInformationMessage(message.text);
            return;
        }
      },
      null,
      this._disposables
    );
  }

  public static createOrShow(extensionUri: vscode.Uri) {
    console.log('Creating or showing ReactPanel');
    const column = vscode.window.activeTextEditor
      ? vscode.window.activeTextEditor.viewColumn
      : undefined;

    if (ReactPanel.currentPanel) {
      ReactPanel.currentPanel._panel.reveal(column);
      return;
    }

    const panel = vscode.window.createWebviewPanel(
      ReactPanel.viewType,
      'React Webview',
      column || vscode.ViewColumn.One,
      {
        enableScripts: true,
        localResourceRoots: [
          vscode.Uri.joinPath(extensionUri, 'dist'),
          vscode.Uri.joinPath(extensionUri, 'node_modules'),
        ],
      }
    );

    ReactPanel.currentPanel = new ReactPanel(panel, extensionUri);
    console.log('ReactPanel created');
  }

  private _update() {
    const webview = this._panel.webview;
    this._panel.title = 'React Webview';
    this._panel.webview.html = this._getHtmlForWebview(webview);
  }

  private _getHtmlForWebview(webview: vscode.Webview) {
    const scriptUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, 'dist', 'webview.js')
    );

    const stylesUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, 'dist', 'styles', 'main.css')
    );

    const codiconUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, 'dist', 'styles', 'external', 'codicon.css')
    );

    const vscodeElementsUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, 'node_modules', '@vscode-elements', 'elements', 'dist', 'bundled.js')
    );

    return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>React Webview</title>
                <link href="${codiconUri}" rel="stylesheet">
                <link href="${stylesUri}" rel="stylesheet">
                <script src="${vscodeElementsUri}" type="module"></script>
            </head>
            <body>
                <div id="root"></div>
                <script src="${scriptUri}"></script>
            </body>
            </html>`;
  }

  public dispose() {
    ReactPanel.currentPanel = undefined;

    this._panel.dispose();

    while (this._disposables.length) {
      const disposable = this._disposables.pop();
      if (disposable) {
        disposable.dispose();
      }
    }
  }
}
