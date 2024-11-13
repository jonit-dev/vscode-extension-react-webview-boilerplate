import * as vscode from 'vscode';

const isDevelopment = process.env.NODE_ENV === 'development';
const DEV_SERVER = 'http://localhost:3000';

export function activate(context: vscode.ExtensionContext) {
  console.log('Attempting to activate extension...');
  console.log('Extension URI:', context.extensionUri.toString());
  console.log('Development mode:', isDevelopment);

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
    context: vscode.WebviewViewResolveContext,
    _token: vscode.CancellationToken
  ) {
    console.log('Resolving WebviewView');
    webviewView.webview.options = {
      enableScripts: true,
      localResourceRoots: isDevelopment 
        ? [vscode.Uri.parse(DEV_SERVER)]
        : [
            vscode.Uri.joinPath(this._extensionUri, 'dist'),
            vscode.Uri.joinPath(this._extensionUri, 'src/webview'),
          ],
    };

    // Add CSP for development server
    const csp = isDevelopment
      ? `default-src 'none';
         img-src ${webviewView.webview.cspSource} https:;
         script-src ${DEV_SERVER} 'unsafe-inline' 'unsafe-eval';
         style-src ${webviewView.webview.cspSource} 'unsafe-inline';
         connect-src ${DEV_SERVER} ws: wss:;`
      : `default-src 'none';
         img-src ${webviewView.webview.cspSource} https:;
         script-src ${webviewView.webview.cspSource};
         style-src ${webviewView.webview.cspSource};`;

    webviewView.webview.html = this._getHtmlForWebview(webviewView.webview, csp);
    console.log('WebviewView resolved');
  }

  private _getHtmlForWebview(webview: vscode.Webview, csp: string) {
    // In development, use the dev server URL
    const scriptSrc = isDevelopment
      ? `${DEV_SERVER}/dist/webview.js`
      : webview.asWebviewUri(
          vscode.Uri.joinPath(this._extensionUri, 'dist', 'webview.js')
        );

    return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="Content-Security-Policy" content="${csp}">
                <title>React Webview</title>
                ${isDevelopment ? `
                <script>
                  const eventSource = new EventSource('${DEV_SERVER}/esbuild');
                  eventSource.addEventListener('change', () => location.reload());
                </script>
                ` : ''}
            </head>
            <body>
                <div id="root"></div>
                <script src="${scriptSrc}"></script>
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
        localResourceRoots: isDevelopment 
          ? [vscode.Uri.parse(DEV_SERVER)]
          : [
              vscode.Uri.joinPath(extensionUri, 'dist'),
              vscode.Uri.joinPath(extensionUri, 'src/webview'),
            ],
      }
    );

    ReactPanel.currentPanel = new ReactPanel(panel, extensionUri);
    console.log('ReactPanel created');
  }

  private _update() {
    const webview = this._panel.webview;
    this._panel.title = 'React Webview';

    // Add CSP for development server
    const csp = isDevelopment
      ? `default-src 'none';
         img-src ${webview.cspSource} https:;
         script-src ${DEV_SERVER} 'unsafe-inline' 'unsafe-eval';
         style-src ${webview.cspSource} 'unsafe-inline';
         connect-src ${DEV_SERVER} ws: wss:;`
      : `default-src 'none';
         img-src ${webview.cspSource} https:;
         script-src ${webview.cspSource};
         style-src ${webview.cspSource};`;

    this._panel.webview.html = this._getHtmlForWebview(webview, csp);
  }

  private _getHtmlForWebview(webview: vscode.Webview, csp: string) {
    // In development, use the dev server URL
    const scriptSrc = isDevelopment
      ? `${DEV_SERVER}/dist/webview.js`
      : webview.asWebviewUri(
          vscode.Uri.joinPath(this._extensionUri, 'dist', 'webview.js')
        );

    return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="Content-Security-Policy" content="${csp}">
                <title>React Webview</title>
                ${isDevelopment ? `
                <script>
                  const eventSource = new EventSource('${DEV_SERVER}/esbuild');
                  eventSource.addEventListener('change', () => location.reload());
                </script>
                ` : ''}
            </head>
            <body>
                <div id="root"></div>
                <script src="${scriptSrc}"></script>
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
