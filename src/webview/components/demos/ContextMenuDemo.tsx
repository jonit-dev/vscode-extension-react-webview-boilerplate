import React, { MouseEvent, useCallback, useEffect, useState } from 'react';
import { ContextMenu } from '../vscode-elements/ContextMenu';

const menuItems = [
  {
    label: 'Command palette...',
    keybinding: 'Ctrl+Shift+A',
    value: 'menuitem1',
  },
  {
    separator: true,
  },
  {
    label: 'Settings',
    keybinding: 'Ctrl+Comma',
    value: 'menuitem2',
  },
  {
    label: 'Extensions',
    keybinding: 'Ctrl+Shift+X',
    value: 'menuitem3',
  },
];

export const ContextMenuDemo: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleClickOutside = useCallback((event: globalThis.MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest('.menu-wrapper')) {
      setMenuVisible(false);
    }
  }, []);

  useEffect(() => {
    if (menuVisible) {
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }
  }, [menuVisible, handleClickOutside]);

  const toggleMenu = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setMenuVisible(!menuVisible);
  };

  const handleSelect = (value: string) => {
    console.log('Selected:', value);
    setMenuVisible(false);
  };

  return (
    <div className="demo-section">
      <h2>Context Menu</h2>
      <div className="menu-wrapper">
        <button
          className="toggle-menu-button"
          onClick={toggleMenu}
          title="Toggle Menu"
        >
          ⋮
        </button>
        <ContextMenu
          show={menuVisible}
          items={menuItems}
          onSelect={handleSelect}
          className="context-menu"
        />
      </div>
    </div>
  );
};
