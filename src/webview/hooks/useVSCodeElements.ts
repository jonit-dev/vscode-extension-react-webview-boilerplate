import { useEffect, useState } from "react";

export const useVSCodeElements = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const importElements = async () => {
      if (!customElements.get("vscode-button")) {
        await import("@vscode-elements/elements/dist/vscode-button");
      }
      if (!customElements.get("vscode-badge")) {
        await import("@vscode-elements/elements/dist/vscode-badge");
      }
      if (!customElements.get("vscode-checkbox")) {
        await import("@vscode-elements/elements/dist/vscode-checkbox");
        await import("@vscode-elements/elements/dist/vscode-checkbox-group");
      }
      if (!customElements.get("vscode-collapsible")) {
        await import("@vscode-elements/elements/dist/vscode-collapsible");
        await import("@vscode-elements/elements/dist/vscode-icon");
      }
      if (!customElements.get("vscode-tabs")) {
        await import("@vscode-elements/elements/dist/vscode-tabs");
        await import("@vscode-elements/elements/dist/vscode-tab-header");
        await import("@vscode-elements/elements/dist/vscode-tab-panel");
      }
      if (!customElements.get("vscode-scrollable")) {
        await import("@vscode-elements/elements/dist/vscode-scrollable");
      }
      if (!customElements.get("vscode-divider")) {
        await import("@vscode-elements/elements/dist/vscode-divider");
      }
      if (!customElements.get("vscode-form-container")) {
        await import("@vscode-elements/elements/dist/vscode-form-container");
      }
      if (!customElements.get("vscode-form-group")) {
        await import("@vscode-elements/elements/dist/vscode-form-group");
      }
      if (!customElements.get("vscode-form-helper")) {
        await import("@vscode-elements/elements/dist/vscode-form-helper");
      }
      if (!customElements.get("vscode-label")) {
        await import("@vscode-elements/elements/dist/vscode-label");
      }
      if (!customElements.get("vscode-multi-select")) {
        await import("@vscode-elements/elements/dist/vscode-multi-select");
        await import("@vscode-elements/elements/dist/vscode-option");
      }
      if (!customElements.get("vscode-single-select")) {
        await import("@vscode-elements/elements/dist/vscode-single-select");
        await import("@vscode-elements/elements/dist/vscode-option");
      }
      if (!customElements.get("vscode-progress-ring")) {
        await import("@vscode-elements/elements/dist/vscode-progress-ring");
      }
      if (!customElements.get("vscode-radio")) {
        await import("@vscode-elements/elements/dist/vscode-radio");
        await import("@vscode-elements/elements/dist/vscode-radio-group");
      }
      if (!customElements.get("vscode-context-menu")) {
        await import("@vscode-elements/elements/dist/vscode-context-menu");
      }
      if (!customElements.get("vscode-table")) {
        await import("@vscode-elements/elements/dist/vscode-table");
        await import("@vscode-elements/elements/dist/vscode-table-header");
        await import("@vscode-elements/elements/dist/vscode-table-header-cell");
        await import("@vscode-elements/elements/dist/vscode-table-row");
        await import("@vscode-elements/elements/dist/vscode-table-cell");
        await import("@vscode-elements/elements/dist/vscode-table-body");
      }
      if (!customElements.get("vscode-textarea")) {
        await import("@vscode-elements/elements/dist/vscode-textarea");
      }
      setIsLoading(false);
    };

    try {
      importElements();
    } catch (error) {
      console.error("Failed to import VSCode elements:", error);
      setIsLoading(false);
    }
  }, []);

  return isLoading;
};
