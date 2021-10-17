/**
 * @tutorial https://www.w3.org/TR/uievents-key/#named-key-attribute-values
 */

export enum Keys {
  // Special Keys
  Unidentified = 'Unidentified',

  // Modifier Keys
  Alt = 'Alt',
  AltGraph = 'AltGraph',
  CapsLock = 'CapsLock',
  Control = 'Control',
  Fn = 'Fn',
  FnLock = 'FnLock',
  Meta = 'Meta',
  NumLock = 'NumLock',
  ScrollLock = 'ScrollLock',
  Shift = 'Shift',
  Symbol = 'Symbol',
  SymbolLock = 'SymbolLock',

  // Whitespace Keys
  Enter = 'Enter',
  Tab = 'Tab',
  Space = ' ',

  // Navigation Keys
  ArrowDown = 'ArrowDown',
  ArrowLeft = 'ArrowLeft',
  ArrowRight = 'ArrowRight',
  ArrowUp = 'ArrowUp',
  End = 'End',
  Home = 'Home',
  PageDown = 'PageDown',
  PageUp = 'PageUp',

  // Editing Keys
  Backspace = 'Backspace',
  Clear = 'Clear',
  Copy = 'Copy',
  CrSel = 'CrSel',
  Cut = 'Cut',
  Delete = 'Delete',
  EraseEof = 'EraseEof',
  ExSel = 'ExSel',
  Insert = 'Insert',
  Paste = 'Paste',
  Redo = 'Redo',
  Undo = 'Undo',

  // UI Keys
  Accept = 'Accept',
  Again = 'Again',
  Attn = 'Attn',
  Cancel = 'Cancel',
  ContextMenu = 'ContextMenu',
  Escape = 'Escape',
  Execute = 'Execute',
  Find = 'Find',
  Help = 'Help',
  Pause = 'Pause',
  Play = 'Play',
  Props = 'Props',
  Select = 'Select',
  ZoomIn = 'ZoomIn',
  ZoomOut = 'ZoomOut',
}
export default Keys;
