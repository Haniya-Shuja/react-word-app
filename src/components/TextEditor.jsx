import React, { useState } from 'react';
import EditorToolbar from './EditorToolbar';

const TextEditor = () => {
  const [content, setContent] = useState('');
  const [style, setStyle] = useState({});

  const handleAction = (action, value) => {
    switch (action) {
      case 'bold':
        setStyle({ ...style, fontWeight: style.fontWeight === 'bold' ? 'normal' : 'bold' });
        break;
      case 'italic':
        setStyle({ ...style, fontStyle: style.fontStyle === 'italic' ? 'normal' : 'italic' });
        break;
      case 'underline':
        setStyle({ ...style, textDecoration: style.textDecoration === 'underline' ? 'none' : 'underline' });
        break;
      case 'fontSize':
        setStyle({ ...style, fontSize: value });
        break;
      case 'fontFamily':
        setStyle({ ...style, fontFamily: value });
        break;
      case 'color':
        setStyle({ ...style, color: value });
        break;
      case 'clear':
        setContent('');
        setStyle({});
        break;
      case 'uppercase':
        setContent(content.toUpperCase());
        break;
      case 'lowercase':
        setContent(content.toLowerCase());
        break;
      case 'capitalize':
        setContent(content.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));
        break;
      case 'alignLeft':
        setStyle({ ...style, textAlign: 'left' });
        break;
      case 'alignCenter':
        setStyle({ ...style, textAlign: 'center' });
        break;
      case 'alignRight':
        setStyle({ ...style, textAlign: 'right' });
        break;
      default:
        break;
    }
  };

  const handleInput = (e) => {
    const text = e.currentTarget.textContent;
    setContent(text);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Backspace') {
      // Remove the last character from the content
      setContent(content.slice(0, -1));
    }
  };

  return (
    <div className="editor">
      <EditorToolbar onAction={handleAction} />
      <div
        contentEditable
        className="text-area"
        style={style}
        onInput={handleInput}
        onKeyDown={handleKeyDown} // Handle backspace key event
      >
        {content}
      </div>
    </div>
  );
};

export default TextEditor;

