import React from 'react';



const EditorToolbar = ({ onAction }) => {
  return (
    <div className="toolbar">
      <button onClick={() => onAction('bold')}>Bold</button>
      <button onClick={() => onAction('italic')}>Italic</button>
      <button onClick={() => onAction('underline')}>Underline</button>
      <select onChange={(e) => onAction('fontSize', e.target.value)}>
        <option value="12px">12px</option>
        <option value="16px">16px</option>
        <option value="20px">20px</option>
      </select>
      <select onChange={(e) => onAction('fontFamily', e.target.value)}>
        <option value="Arial">Arial</option>
        <option value="Courier New">Courier New</option>
        <option value="Times New Roman">Times New Roman</option>
      </select>
      <input type="color" onChange={(e) => onAction('color', e.target.value)} />
      <button onClick={() => onAction('clear')}>Clear Page</button>
      <button onClick={() => onAction('uppercase')}>Uppercase</button>
      <button onClick={() => onAction('lowercase')}>Lowercase</button>
      <button onClick={() => onAction('capitalize')}>Capitalize</button>
      <button onClick={() => onAction('alignLeft')}>Left</button>
      <button onClick={() => onAction('alignCenter')}>Center</button>
      <button onClick={() => onAction('alignRight')}>Right</button>
    </div>
  );
};

export default EditorToolbar;
