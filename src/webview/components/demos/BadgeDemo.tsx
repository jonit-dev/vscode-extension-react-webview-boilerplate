import React from 'react';
import { Badge } from '../vscode-elements/Badge';

export const BadgeDemo: React.FC = () => {
  return (
    <div>
      <h2>Badges</h2>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Badge>308 Settings Found</Badge>
        <Badge variant="counter">42</Badge>
        <Badge variant="activity-bar-counter">42</Badge>
      </div>
    </div>
  );
};
