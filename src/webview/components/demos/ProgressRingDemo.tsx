import React, { useEffect, useState } from "react";
import { FormGroup } from "../vscode-elements/FormGroup";
import { FormHelper } from "../vscode-elements/FormHelper";
import { ProgressRing } from "../vscode-elements/ProgressRing";

export const ProgressRingDemo: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + 10));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>ProgressRing Examples</h2>

      <FormGroup>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <ProgressRing />
          <FormHelper>Default indeterminate progress</FormHelper>
        </div>
      </FormGroup>

      <FormGroup>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <ProgressRing size={32} />
          <FormHelper>Larger size (32px)</FormHelper>
        </div>
      </FormGroup>

      <FormGroup>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <ProgressRing size={24} indeterminate={false} />
          <FormHelper>Determinate progress (not animated)</FormHelper>
        </div>
      </FormGroup>

      <h2>Different Sizes</h2>
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <ProgressRing size={16} />
        <ProgressRing size={24} />
        <ProgressRing size={32} />
        <ProgressRing size={48} />
      </div>
    </div>
  );
};
