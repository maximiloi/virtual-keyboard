const row1 = [{
  keyName: 'backquote',
  eng: {
    caseDown: '`', caseUp: '~', caps: '`', shiftCaps: '~',
  },
  rus: {
    caseDown: 'ё', caseUp: 'Ё', caps: 'Ё', shiftCaps: 'ё',
  },
}, {
  keyName: 'digit1',
  eng: {
    caseDown: '1', caseUp: '!', caps: '1', shiftCaps: '!',
  },
  rus: {
    caseDown: '1', caseUp: '!', caps: '1', shiftCaps: '!',
  },
}, {
  keyName: 'digit2',
  eng: {
    caseDown: '2', caseUp: '@', caps: '2', shiftCaps: '@',
  },
  rus: {
    caseDown: '2', caseUp: '"', caps: '2', shiftCaps: '"',
  },
}, {
  keyName: 'digit3',
  eng: {
    caseDown: '3', caseUp: '#', caps: '3', shiftCaps: '#',
  },
  rus: {
    caseDown: '3', caseUp: '№', caps: '3', shiftCaps: '№',
  },
}, {
  keyName: 'digit4',
  eng: {
    caseDown: '4', caseUp: '$', caps: '4', shiftCaps: '$',
  },
  rus: {
    caseDown: '4', caseUp: ';', caps: '4', shiftCaps: ';',
  },
}, {
  keyName: 'digit5',
  eng: {
    caseDown: '5', caseUp: '%', caps: '5', shiftCaps: '%',
  },
  rus: {
    caseDown: '5', caseUp: '%', caps: '5', shiftCaps: '%',
  },
}, {
  keyName: 'digit6',
  eng: {
    caseDown: '6', caseUp: '^', caps: '6', shiftCaps: '^',
  },
  rus: {
    caseDown: '6', caseUp: ':', caps: '6', shiftCaps: ':',
  },
}, {
  keyName: 'digit7',
  eng: {
    caseDown: '7', caseUp: '&', caps: '7', shiftCaps: '&',
  },
  rus: {
    caseDown: '7', caseUp: '?', caps: '7', shiftCaps: '?',
  },
}, {
  keyName: 'digit8',
  eng: {
    caseDown: '8', caseUp: '*', caps: '8', shiftCaps: '*',
  },
  rus: {
    caseDown: '8', caseUp: '*', caps: '8', shiftCaps: '*',
  },
}, {
  keyName: 'digit9',
  eng: {
    caseDown: '9', caseUp: '(', caps: '9', shiftCaps: '(',
  },
  rus: {
    caseDown: '9', caseUp: '(', caps: '9', shiftCaps: '(',
  },
}, {
  keyName: 'digit0',
  eng: {
    caseDown: '0', caseUp: ')', caps: '0', shiftCaps: ')',
  },
  rus: {
    caseDown: '0', caseUp: ')', caps: '0', shiftCaps: ')',
  },
}, {
  keyName: 'minus',
  eng: {
    caseDown: '-', caseUp: '_', caps: '-', shiftCaps: '_',
  },
  rus: {
    caseDown: '-', caseUp: '_', caps: '-', shiftCaps: '_',
  },
}, {
  keyName: 'equal',
  eng: {
    caseDown: '=', caseUp: '+', caps: '=', shiftCaps: '+',
  },
  rus: {
    caseDown: '=', caseUp: '+', caps: '=', shiftCaps: '+',
  },
}, {
  keyName: 'backspace',
  eng: {
    caseDown: 'Backspace', caseUp: 'Backspace', caps: 'Backspace', shiftCaps: 'Backspace',
  },
  rus: {
    caseDown: 'Backspace', caseUp: 'Backspace', caps: 'Backspace', shiftCaps: 'Backspace',
  },
}];

const row2 = [{
  keyName: 'Tab',
  eng: {
    caseDown: 'Tab', caseUp: 'Tab', caps: 'Tab', shiftCaps: 'Tab',
  },
  rus: {
    caseDown: 'Tab', caseUp: 'Tab', caps: 'Tab', shiftCaps: 'Tab',
  },
}, {
  keyName: 'KeyQ',
  eng: {
    caseDown: 'q', caseUp: 'Q', caps: 'Q', shiftCaps: 'q',
  },
  rus: {
    caseDown: 'й', caseUp: 'Й', caps: 'Й', shiftCaps: 'й',
  },
}, {
  keyName: 'KeyW',
  eng: {
    caseDown: 'w', caseUp: 'W', caps: 'W', shiftCaps: 'w',
  },
  rus: {
    caseDown: 'ц', caseUp: 'Ц', caps: 'Ц', shiftCaps: 'ц',
  },
}, {
  keyName: 'KeyE',
  eng: {
    caseDown: 'e', caseUp: 'E', caps: 'E', shiftCaps: 'e',
  },
  rus: {
    caseDown: 'у', caseUp: 'У', caps: 'У', shiftCaps: 'у',
  },
}, {
  keyName: 'KeyR',
  eng: {
    caseDown: 'r', caseUp: 'R', caps: 'R', shiftCaps: 'r',
  },
  rus: {
    caseDown: 'к', caseUp: 'К', caps: 'К', shiftCaps: 'к',
  },
}, {
  keyName: 'KeyT',
  eng: {
    caseDown: 't', caseUp: 'T', caps: 'T', shiftCaps: 't',
  },
  rus: {
    caseDown: 'е', caseUp: 'Е', caps: 'Е', shiftCaps: 'е',
  },
}, {
  keyName: 'KeyY',
  eng: {
    caseDown: 'y', caseUp: 'Y', caps: 'Y', shiftCaps: 'y',
  },
  rus: {
    caseDown: 'н', caseUp: 'Н', caps: 'Н', shiftCaps: 'н',
  },
}, {
  keyName: 'KeyU',
  eng: {
    caseDown: 'u', caseUp: 'U', caps: 'U', shiftCaps: 'u',
  },
  rus: {
    caseDown: 'г', caseUp: 'Г', caps: 'Г', shiftCaps: 'г',
  },
}, {
  keyName: 'KeyI',
  eng: {
    caseDown: 'i', caseUp: 'I', caps: 'I', shiftCaps: 'i',
  },
  rus: {
    caseDown: 'ш', caseUp: 'Ш', caps: 'Ш', shiftCaps: 'ш',
  },
}, {
  keyName: 'KeyO',
  eng: {
    caseDown: 'o', caseUp: 'O', caps: 'O', shiftCaps: 'o',
  },
  rus: {
    caseDown: 'щ', caseUp: 'Щ', caps: 'Щ', shiftCaps: 'щ',
  },
}, {
  keyName: 'KeyP',
  eng: {
    caseDown: 'p', caseUp: 'P', caps: 'P', shiftCaps: 'p',
  },
  rus: {
    caseDown: 'з', caseUp: 'З', caps: 'З', shiftCaps: 'з',
  },
}, {
  keyName: 'BracketLeft',
  eng: {
    caseDown: '[', caseUp: '{', caps: '{', shiftCaps: '[',
  },
  rus: {
    caseDown: 'х', caseUp: 'Х', caps: 'Х', shiftCaps: 'х',
  },
}, {
  keyName: 'BracketRight',
  eng: {
    caseDown: ']', caseUp: '}', caps: '}', shiftCaps: ']',
  },
  rus: {
    caseDown: 'ъ', caseUp: 'Ъ', caps: 'Ъ', shiftCaps: 'ъ',
  },
}, {
  keyName: 'Backslash',
  eng: {
    caseDown: '\\\\', caseUp: '|', caps: '|', shiftCaps: '\\\\',
  },
  rus: {
    caseDown: '\\\\', caseUp: '/', caps: '/', shiftCaps: '\\\\',
  },
}, {
  keyName: 'Delete',
  eng: {
    caseDown: 'Del', caseUp: 'Del', caps: 'Del', shiftCaps: 'Del',
  },
  rus: {
    caseDown: 'Del', caseUp: 'Del', caps: 'Del', shiftCaps: 'Del',
  },
}];

const row3 = [{
  keyName: 'CapsLock',
  eng: {
    caseDown: 'CapsLock', caseUp: 'CapsLock', caps: 'CapsLock', shiftCaps: 'CapsLock',
  },
  rus: {
    caseDown: 'CapsLock', caseUp: 'CapsLock', caps: 'CapsLock', shiftCaps: 'CapsLock',
  },
}, {
  keyName: 'KeyA',
  eng: {
    caseDown: 'a', caseUp: 'A', caps: 'A', shiftCaps: 'a',
  },
  rus: {
    caseDown: 'ф', caseUp: 'Ф', caps: 'Ф', shiftCaps: 'ф',
  },
}, {
  keyName: 'KeyS',
  eng: {
    caseDown: 's', caseUp: 'S', caps: 'S', shiftCaps: 's',
  },
  rus: {
    caseDown: 'ы', caseUp: 'Ы', caps: 'Ы', shiftCaps: 'ы',
  },
}, {
  keyName: 'KeyD',
  eng: {
    caseDown: 'd', caseUp: 'D', caps: 'D', shiftCaps: 'd',
  },
  rus: {
    caseDown: 'в', caseUp: 'В', caps: 'В', shiftCaps: 'в',
  },
}, {
  keyName: 'KeyF',
  eng: {
    caseDown: 'f', caseUp: 'F', caps: 'F', shiftCaps: 'f',
  },
  rus: {
    caseDown: 'а', caseUp: 'А', caps: 'А', shiftCaps: 'а',
  },
}, {
  keyName: 'KeyG',
  eng: {
    caseDown: 'g', caseUp: 'G', caps: 'G', shiftCaps: 'g',
  },
  rus: {
    caseDown: 'п', caseUp: 'П', caps: 'П', shiftCaps: 'п',
  },
}, {
  keyName: 'KeyH',
  eng: {
    caseDown: 'h', caseUp: 'H', caps: 'H', shiftCaps: 'h',
  },
  rus: {
    caseDown: 'р', caseUp: 'Р', caps: 'Р', shiftCaps: 'р',
  },
}, {
  keyName: 'KeyJ',
  eng: {
    caseDown: 'j', caseUp: 'J', caps: 'J', shiftCaps: 'j',
  },
  rus: {
    caseDown: 'о', caseUp: 'О', caps: 'О', shiftCaps: 'о',
  },
}, {
  keyName: 'KeyK',
  eng: {
    caseDown: 'k', caseUp: 'K', caps: 'K', shiftCaps: 'k',
  },
  rus: {
    caseDown: 'л', caseUp: 'Л', caps: 'Л', shiftCaps: 'л',
  },
}, {
  keyName: 'KeyL',
  eng: {
    caseDown: 'l', caseUp: 'L', caps: 'L', shiftCaps: 'l',
  },
  rus: {
    caseDown: 'д', caseUp: 'Д', caps: 'Д', shiftCaps: 'д',
  },
}, {
  keyName: 'Semicolon',
  eng: {
    caseDown: ';', caseUp: ':', caps: ':', shiftCaps: ';',
  },
  rus: {
    caseDown: 'ж', caseUp: 'Ж', caps: 'Ж', shiftCaps: 'ж',
  },
}, {
  keyName: 'Quote',
  eng: {
    caseDown: '\'', caseUp: '"', caps: '"', shiftCaps: '\'',
  },
  rus: {
    caseDown: 'э', caseUp: 'Э', caps: 'Э', shiftCaps: 'э',
  },
}, {
  keyName: 'Enter',
  eng: {
    caseDown: 'Enter', caseUp: 'Enter', caps: 'Enter', shiftCaps: 'Enter',
  },
  rus: {
    caseDown: 'Enter', caseUp: 'Enter', caps: 'Enter', shiftCaps: 'Enter',
  },
}];

const row4 = [{
  keyName: 'ShiftLeft',
  eng: {
    caseDown: 'Shift', caseUp: 'Shift', caps: 'Shift', shiftCaps: 'Shift',
  },
  rus: {
    caseDown: 'Shift', caseUp: 'Shift', caps: 'Shift', shiftCaps: 'Shift',
  },
}, {
  keyName: 'KeyZ',
  eng: {
    caseDown: 'z', caseUp: 'Z', caps: 'Z', shiftCaps: 'z',
  },
  rus: {
    caseDown: 'я', caseUp: 'Я', caps: 'Я', shiftCaps: 'я',
  },
}, {
  keyName: 'KeyX',
  eng: {
    caseDown: 'x', caseUp: 'X', caps: 'X', shiftCaps: 'x',
  },
  rus: {
    caseDown: 'ч', caseUp: 'Ч', caps: 'Ч', shiftCaps: 'ч',
  },
}, {
  keyName: 'KeyC',
  eng: {
    caseDown: 'c', caseUp: 'C', caps: 'C', shiftCaps: 'c',
  },
  rus: {
    caseDown: 'с', caseUp: 'С', caps: 'С', shiftCaps: 'с',
  },
}, {
  keyName: 'KeyV',
  eng: {
    caseDown: 'v', caseUp: 'V', caps: 'V', shiftCaps: 'v',
  },
  rus: {
    caseDown: 'м', caseUp: 'М', caps: 'М', shiftCaps: 'м',
  },
}, {
  keyName: 'KeyB',
  eng: {
    caseDown: 'b', caseUp: 'B', caps: 'B', shiftCaps: 'b',
  },
  rus: {
    caseDown: 'и', caseUp: 'И', caps: 'И', shiftCaps: 'и',
  },
}, {
  keyName: 'KeyN',
  eng: {
    caseDown: 'n', caseUp: 'N', caps: 'N', shiftCaps: 'n',
  },
  rus: {
    caseDown: 'т', caseUp: 'Т', caps: 'Т', shiftCaps: 'т',
  },
}, {
  keyName: 'KeyM',
  eng: {
    caseDown: 'm', caseUp: 'M', caps: 'M', shiftCaps: 'm',
  },
  rus: {
    caseDown: 'ь', caseUp: 'Ь', caps: 'Ь', shiftCaps: 'ь',
  },
}, {
  keyName: 'Comma',
  eng: {
    caseDown: ',', caseUp: '<', caps: '<', shiftCaps: ',',
  },
  rus: {
    caseDown: 'б', caseUp: 'Б', caps: 'Б', shiftCaps: 'б',
  },
}, {
  keyName: 'Period',
  eng: {
    caseDown: '.', caseUp: '>', caps: '>', shiftCaps: '.',
  },
  rus: {
    caseDown: 'ю', caseUp: 'Ю', caps: 'Ю', shiftCaps: 'ю',
  },
}, {
  keyName: 'Slash',
  eng: {
    caseDown: '/', caseUp: '?', caps: '?', shiftCaps: '/',
  },
  rus: {
    caseDown: '.', caseUp: ',', caps: ',', shiftCaps: '.',
  },
}, {
  keyName: 'ArrowUp',
  eng: {
    caseDown: '&#8227;', caseUp: '&#8227;', caps: '&#8227;', shiftCaps: '&#8227;',
  },
  rus: {
    caseDown: '&#8227;', caseUp: '&#8227;', caps: '&#8227;', shiftCaps: '&#8227;',
  },
}, {
  keyName: 'ShiftRight',
  eng: {
    caseDown: 'Shift', caseUp: 'Shift', caps: 'Shift', shiftCaps: 'Shift',
  },
  rus: {
    caseDown: 'Shift', caseUp: 'Shift', caps: 'Shift', shiftCaps: 'Shift',
  },
}];

const row5 = [{
  keyName: 'ControlLeft',
  eng: {
    caseDown: 'Ctrl', caseUp: 'Ctrl', caps: 'Ctrl', shiftCaps: 'Ctrl',
  },
  rus: {
    caseDown: 'Ctrl', caseUp: 'Ctrl', caps: 'Ctrl', shiftCaps: 'Ctrl',
  },
}, {
  keyName: 'AltLeft',
  eng: {
    caseDown: 'Alt', caseUp: 'Alt', caps: 'Alt', shiftCaps: 'Alt',
  },
  rus: {
    caseDown: 'Alt', caseUp: 'Alt', caps: 'Alt', shiftCaps: 'Alt',
  },
}, {
  keyName: 'CmdLeft',
  eng: {
    caseDown: 'Cmd', caseUp: 'Cmd', caps: 'Cmd', shiftCaps: 'Cmd',
  },
  rus: {
    caseDown: 'Cmd', caseUp: 'Cmd', caps: 'Cmd', shiftCaps: 'Cmd',
  },
}, {
  keyName: 'Space',
  eng: {
    caseDown: ' ', caseUp: ' ', caps: ' ', shiftCaps: ' ',
  },
  rus: {
    caseDown: ' ', caseUp: ' ', caps: ' ', shiftCaps: ' ',
  },
}, {
  keyName: 'CmdRight',
  eng: {
    caseDown: 'Cmd', caseUp: 'Cmd', caps: 'Cmd', shiftCaps: 'Cmd',
  },
  rus: {
    caseDown: 'Cmd', caseUp: 'Cmd', caps: 'Cmd', shiftCaps: 'Cmd',
  },
}, {
  keyName: 'AltRight',
  eng: {
    caseDown: 'Alt', caseUp: 'Alt', caps: 'Alt', shiftCaps: 'Alt',
  },
  rus: {
    caseDown: 'Alt', caseUp: 'Alt', caps: 'Alt', shiftCaps: 'Alt',
  },
}, {
  keyName: 'ArrowLeft',
  eng: {
    caseDown: '&#8227;', caseUp: '&#8227;', caps: '&#8227;', shiftCaps: '&#8227;',
  },
  rus: {
    caseDown: '&#8227;', caseUp: '&#8227;', caps: '&#8227;', shiftCaps: '&#8227;',
  },
}, {
  keyName: 'ArrowDown',
  eng: {
    caseDown: '&#8227;', caseUp: '&#8227;', caps: '&#8227;', shiftCaps: '&#8227;',
  },
  rus: {
    caseDown: '&#8227;', caseUp: '&#8227;', caps: '&#8227;', shiftCaps: '&#8227;',
  },
}, {
  keyName: 'ArrowRight',
  eng: {
    caseDown: '&#8227;', caseUp: '&#8227;', caps: '&#8227;', shiftCaps: '&#8227;',
  },
  rus: {
    caseDown: '&#8227;', caseUp: '&#8227;', caps: '&#8227;', shiftCaps: '&#8227;',
  },
}];
