document.body.onload = switchBetweenKeyboards;

const letterFirstRowTab = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
const letterSecondRowTab = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
const letterThirdRowTab = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<--'];
const letterFourthRowTab = ['123', 'Spacebar', 'Enter'];
const numFirstRowTab = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const numSecondRowTab = ['-', '/', ':', ';', '(', ')', '$', '&', '@', '"'];
const numThirdRowTab = ['#+=', '.', ',', '?', '!', "'", '<--'];
const numForthRowTab = ['ABC', 'Spacebar', 'Enter'];
const symbolsFirstRowTab = ['[', ']', '{', '}', '#', '%', '^', '*', '+', '='];
const symbolsSecondRowTab = ['/', '\\', '|', '~', '<', '>', '€', '£', '¥', '·'];
const symbolsThirdRowTab = ['123', '.', ',', '?', '!', "'", '<--'];
const desktopFirstRow = [
	'Esc',
	'`',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'0',
	'-',
	'=',
	'<--',
];
const desktopSecondRow = [
	'Tab',
	'q',
	'w',
	'e',
	'r',
	't',
	'y',
	'u',
	'i',
	'o',
	'p',
	'[',
	']',
	'\\',
	'Del',
];
const desktopThirdRow = [
	'Caps',
	'a',
	's',
	'd',
	'f',
	'g',
	'h',
	'j',
	'k',
	'l',
	';',
	"'",
	'Enter',
];
const desktopFourthRow = [
	'Shift',
	'z',
	'x',
	'c',
	'v',
	'b',
	'n',
	'm',
	',',
	'.',
	'/',
	'up',
	'Shift',
];
const desktopFifthRow = [
	'Ctrl',
	'Fn',
	'Alt',
	'Spacebar',
	'AltGr',
	'Ctrl',
	'left',
	'down',
	'right',
	'styl',
];
const desktopAltGrFirstRow = [
	'Esc',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'<--',
];
const desktopAltGrSecondRow = [
	'Tab',
	'',
	'',
	'ę',
	'',
	'',
	'',
	'€',
	'',
	'ó',
	'',
	'',
	'',
	'',
	'Del',
];
const desktopAltGrThirdRow = [
	'Caps',
	'ą',
	'ś',
	'',
	'',
	'',
	'',
	'',
	'',
	'ł',
	'',
	'',
	'Enter',
];
const desktopAltGrFourthRow = [
	'Shift',
	'ż',
	'ź',
	'ć',
	'',
	'',
	'ń',
	'',
	'',
	'',
	'',
	'up',
	'Shift',
];
const symbolsButtonsTab = [
	symbolsFirstRowTab,
	symbolsSecondRowTab,
	symbolsThirdRowTab,
	numForthRowTab,
];
const letterButtonsTab = [
	letterFirstRowTab,
	letterSecondRowTab,
	letterThirdRowTab,
	letterFourthRowTab,
];
const numButtonsTab = [
	numFirstRowTab,
	numSecondRowTab,
	numThirdRowTab,
	numForthRowTab,
];
const desktopButtonTab = [
	desktopFirstRow,
	desktopSecondRow,
	desktopThirdRow,
	desktopFourthRow,
	desktopFifthRow,
];
const desktopAltGrButtonTab = [
	desktopAltGrFirstRow,
	desktopAltGrSecondRow,
	desktopAltGrThirdRow,
	desktopAltGrFourthRow,
	desktopFifthRow,
];
let browserWidth = window.innerWidth;

window.addEventListener('resize', reportWindowSize);
function reportWindowSize() {
	browserWidth = window.innerWidth;
	switchBetweenKeyboards();
	console.log('robi bobi' + browserWidth);
}
function addingSymbolsToNumbers(a) {
	const char = document.createElement('a');
	let number = document.createTextNode(a);
	char.appendChild(number);
	char.classList.add('signs');
	return char;
}
const textArea = document.querySelector('.textEditor');
let coursorPosition = 0;

function rowRemover() {
	document.querySelectorAll('.row').forEach((row) => {
		row.remove();
	});
}

function switchBetweenKeyboards() {
	if (window.innerWidth > 1200) {
		document.querySelector('.keyboard').classList.add('desktopVersion');
		document.querySelector('.keyboard').classList.remove('mobileVersion');
		if (document.querySelector('.keyboard').classList.contains('AltGrActive')) {
			console.log('active!!!!!!!!!!!');
			rowRemover();
			createKeyboard(desktopAltGrButtonTab);
			document.querySelector('.keyboard').classList.add('AltGrActive');
		} else {
			rowRemover();
			createKeyboard(desktopButtonTab);
		}
	} else {
		document.querySelector('.keyboard').classList.add('mobileVersion');
		document.querySelector('.keyboard').classList.remove('desktopVersion');
		if (
			document.querySelector('.keyboard').classList.contains('number') &&
			document.querySelector('.keyboard').classList.contains('char')
		) {
			rowRemover();
			createKeyboard(symbolsButtonsTab);
		} else if (
			document.querySelector('.keyboard').classList.contains('number')
		) {
			rowRemover();
			createKeyboard(numButtonsTab);
		} else {
			rowRemover();
			createKeyboard(letterButtonsTab);
		}
	}
}

function createKeyboard(keyboardType) {
	let count = 1;
	const createKeyboardButtons = keyboardType.map((tab) => {
		const row = document.createElement('div');
		row.classList.add('keyboard__row' + count.toString());
		row.classList.add('row');
		document.querySelector('.keyboard').appendChild(row);
		const createButtons = tab.map((letter) => {
			const div = document.createElement('button');
			let button = document.createTextNode(letter.toString());
			div.appendChild(button);
			if (
				document.querySelector('.keyboard').classList.contains('desktopVersion')
			) {
				switch (letter.toString()) {
					case 'Shift':
						div.classList.add('Shift');
						break;
					case 'Caps':
						div.classList.add('Caps');
						break;
					case 'Spacebar':
						div.classList.add('Spacebar');
						break;
					case 'Tab':
						div.classList.add('Tab');
						break;
					case '<--':
						div.classList.add('Backspace');
						div.removeChild(button);
						break;
					case 'Enter':
						div.classList.add('Enter');
						break;
					case 'styl':
						div.classList.add('styl');
						break;
					case 'Esc':
						div.classList.add('Esc');
						break;
					case 'Del':
						div.classList.add('Del');
						break;
					case 'Ctrl':
						div.classList.add('Ctrl');
						break;
					case 'Fn':
						div.classList.add('Fn');
						break;
					case 'Alt':
						div.classList.add('Al2');
						break;
					case 'AltGr':
						div.classList.add('AltGr');
						break;
					case 'up':
						div.classList.add('up');
						break;
					case 'down':
						div.classList.add('down');
						break;
					case 'left':
						div.classList.add('left');
						break;
					case 'right':
						div.classList.add('right');
						break;
					case '`':
						div.appendChild(addingSymbolsToNumbers('~'));
						div.classList.add('charContain');
						break;
					case '1':
						div.appendChild(addingSymbolsToNumbers('!'));
						div.classList.add('charContain');
						break;
					case '2':
						div.appendChild(addingSymbolsToNumbers('@'));
						div.classList.add('charContain');
						break;
					case '3':
						div.appendChild(addingSymbolsToNumbers('#'));
						div.classList.add('charContain');
						break;
					case '4':
						div.appendChild(addingSymbolsToNumbers('$'));
						div.classList.add('charContain');
						break;
					case '5':
						div.appendChild(addingSymbolsToNumbers('%'));
						div.classList.add('charContain');
						break;
					case '6':
						div.appendChild(addingSymbolsToNumbers('^'));
						div.classList.add('charContain');
						break;
					case '7':
						div.appendChild(addingSymbolsToNumbers('&'));
						div.classList.add('charContain');
						break;
					case '8':
						div.appendChild(addingSymbolsToNumbers('*'));
						div.classList.add('charContain');
						break;
					case '9':
						div.appendChild(addingSymbolsToNumbers('('));
						div.classList.add('charContain');
						break;
					case '0':
						div.appendChild(addingSymbolsToNumbers(')'));
						div.classList.add('charContain');
						break;
					case '-':
						div.appendChild(addingSymbolsToNumbers('_'));
						div.classList.add('charContain');
						break;
					case '=':
						div.appendChild(addingSymbolsToNumbers('+'));
						div.classList.add('charContain');
						break;
					case '[':
						div.appendChild(addingSymbolsToNumbers('{'));
						div.classList.add('charContain');
						break;
					case ']':
						div.appendChild(addingSymbolsToNumbers('}'));
						div.classList.add('charContain');
						break;
					case ';':
						div.appendChild(addingSymbolsToNumbers(':'));
						div.classList.add('charContain');
						break;
					case '\\':
						div.appendChild(addingSymbolsToNumbers('|'));
						div.classList.add('charContain');
						break;
					case "'":
						div.appendChild(addingSymbolsToNumbers('"'));
						div.classList.add('charContain');
						break;
					case ',':
						div.appendChild(addingSymbolsToNumbers('<'));
						div.classList.add('charContain');
						break;
					case '.':
						div.appendChild(addingSymbolsToNumbers('>'));
						div.classList.add('charContain');
						break;
					case '/':
						div.appendChild(addingSymbolsToNumbers('?'));
						div.classList.add('charContain');
						break;

					default:
						div.classList.add('letter');
				}
			} else if (
				document.querySelector('.keyboard').classList.contains('mobileVersion')
			) {
				if (letter.toString().length == 1) {
					div.classList.add('letter');
				} else if (letter.toString() === '<--') {
					div.classList.add('Backspace');
					div.removeChild(button);
				} else if (letter.toString() === 'Shift') {
					div.classList.add('Shift');
				} else if (letter.toString() === 'Spacebar') {
					div.classList.add('Spacebar');
				} else if (letter.toString() === 'Enter') {
					div.classList.add('Enter');
				}
			}

			div.classList.add('button');
			document
				.querySelector('.keyboard__row' + count.toString())
				.appendChild(div);
		});
		count = count + 1;
	});
	addingEventListener();
}

function addingEventListener() {
	document.querySelectorAll('.button').forEach((item) => {
		item.addEventListener('click', (event) => {
			document.querySelector('.textEditor').focus();
			// console.log('Content :' + item.textContent.length);
			console.log('Pustaki: ' + item.textContent.length);
			if (item.textContent.length == 1) {
				if (
					item.classList.contains('shift') &&
					!item.classList.contains('caps')
				) {
					console.log('Ten shift');
					console.log(textArea.selectionStart);
					const string = textArea.value.toString();
					textArea.value = [
						string.slice(0, textArea.selectionStart),
						item.textContent.toUpperCase(),
						string.slice(textArea.selectionStart),
					].join('');
					textArea.selectionStart = coursorPosition + 1;
					textArea.selectionEnd = textArea.selectionStart;
					coursorPosition = textArea.selectionEnd;
					document.querySelectorAll('.shift').forEach((item) => {
						item.classList.toggle('shift');
					});
					document.querySelectorAll('.active').forEach((item) => {
						item.classList.toggle('active');
					});
				} else if (
					item.classList.contains('caps') &&
					!item.classList.contains('shift')
				) {
					console.log('Caps');
					console.log(textArea.selectionStart);
					const string = textArea.value.toString();
					textArea.value = [
						string.slice(0, textArea.selectionStart),
						item.textContent.toUpperCase(),
						string.slice(textArea.selectionStart),
					].join('');
					textArea.selectionStart = coursorPosition + 1;
					textArea.selectionEnd = textArea.selectionStart;
					coursorPosition = textArea.selectionEnd;
				} else if (
					item.classList.contains('shift') &&
					item.classList.contains('caps')
				) {
					console.log('Ten shift');
					console.log(textArea.selectionStart);
					const string = textArea.value.toString();
					textArea.value = [
						string.slice(0, textArea.selectionStart),
						item.textContent,
						string.slice(textArea.selectionStart),
					].join('');
					textArea.selectionStart = coursorPosition + 1;
					textArea.selectionEnd = textArea.selectionStart;
					coursorPosition = textArea.selectionEnd;
					document.querySelectorAll('.shift').forEach((item) => {
						item.classList.toggle('shift');
					});
					document.querySelectorAll('.active').forEach((item) => {
						item.classList.toggle('active');
					});
				} else {
					console.log(textArea.selectionStart);
					const string = textArea.value.toString();
					textArea.value = [
						string.slice(0, textArea.selectionStart),
						item.textContent,
						string.slice(textArea.selectionStart),
					].join('');
					textArea.selectionStart = coursorPosition + 1;
					textArea.selectionEnd = textArea.selectionStart;
					coursorPosition = textArea.selectionEnd;
				}
			} else if (item.textContent == 'Spacebar') {
				const string = textArea.value.toString();
				textArea.value = [
					string.slice(0, textArea.selectionStart),
					' ',
					string.slice(textArea.selectionStart),
				].join('');
				textArea.selectionStart = coursorPosition + 1;
				textArea.selectionEnd = textArea.selectionStart;
				coursorPosition = textArea.selectionEnd;
			} else if (item.textContent == '') {
				if (item.classList.contains('Backspace')) {
					if (textArea.selectionStart === textArea.selectionEnd) {
						if (textArea.selectionStart === 0) {
							console.log('nie ma co kasować');
						} else {
							const string = textArea.value.toString();
							textArea.value =
								string.slice(0, textArea.selectionStart - 1) +
								string.slice(textArea.selectionStart, string.length);
							textArea.selectionStart = coursorPosition - 1;
							coursorPosition = textArea.selectionStart;
							textArea.selectionEnd = textArea.selectionStart;
						}
					} else {
						console.log('zaznaczenie');
						console.log(coursorPosition);
						coursorPosition = textArea.selectionStart;
						const string = textArea.value.toString();
						textArea.value =
							string.slice(0, textArea.selectionStart) +
							string.slice(textArea.selectionEnd, string.length);

						textArea.selectionStart = coursorPosition;
						textArea.selectionEnd = coursorPosition;
					}
				}
			} else if (item.textContent == 'Shift') {
				document.querySelectorAll('.letter').forEach((letter) => {
					console.log('shift');
					letter.classList.toggle('shift');
				});
				document.querySelectorAll('.charContain').forEach((item) => {
					item.classList.toggle('shift');
				});
				document.querySelectorAll('.signs').forEach((item) => {
					item.classList.toggle('active');
				});
			} else if (item.textContent == 'Enter') {
				console.log('enter');
				const string = textArea.value.toString();
				textArea.value = [
					string.slice(0, textArea.selectionStart),
					'\r\n',
					string.slice(textArea.selectionStart),
				].join('');
				textArea.selectionStart = coursorPosition + 1;
				textArea.selectionEnd = textArea.selectionStart;
				coursorPosition = textArea.selectionEnd;
			} else if (item.textContent == '123') {
				console.log('123');
				if (document.querySelector('.keyboard').classList.contains('number')) {
					document.querySelector('.keyboard').classList.remove('char');
					switchBetweenKeyboards();
				} else {
					document.querySelector('.keyboard').classList.add('number');
					switchBetweenKeyboards();
				}
			} else if (item.textContent == 'ABC') {
				console.log('ABC');
				document.querySelector('.keyboard').classList.remove('number');
				document.querySelector('.keyboard').classList.remove('char');
				switchBetweenKeyboards();
			} else if (item.textContent == '#+=') {
				console.log('#+=');
				document.querySelector('.keyboard').classList.add('char');
				switchBetweenKeyboards();
			} else if (item.textContent.length == 2) {
				console.log(item.children[0].textContent);
				if (item.classList.contains('shift')) {
					const string = textArea.value.toString();
					textArea.value = [
						string.slice(0, textArea.selectionStart),
						item.children[0].textContent,
						string.slice(textArea.selectionStart),
					].join('');
					document.querySelectorAll('.shift').forEach((item) => {
						item.classList.toggle('shift');
					});
					document.querySelectorAll('.active').forEach((item) => {
						item.classList.toggle('active');
					});
					textArea.selectionStart = coursorPosition + 1;
					textArea.selectionEnd = textArea.selectionStart;
					coursorPosition = textArea.selectionEnd;
				} else {
					const string = textArea.value.toString();
					textArea.value = [
						string.slice(0, textArea.selectionStart),
						item.firstChild.textContent,
						string.slice(textArea.selectionStart),
					].join('');
					textArea.selectionStart = coursorPosition + 1;
					textArea.selectionEnd = textArea.selectionStart;
					coursorPosition = textArea.selectionEnd;
				}
			} else if (item.textContent == 'AltGr') {
				console.log('AltGR');
				document.querySelector('.keyboard').classList.toggle('AltGrActive');
				switchBetweenKeyboards();
			} else if (item.textContent == 'Del') {
				const string = textArea.value.toString();
				textArea.value =
					string.slice(0, textArea.selectionStart) +
					string.slice(textArea.selectionStart + 1, string.length);
				textArea.selectionStart = coursorPosition;
				coursorPosition = textArea.selectionStart;
				textArea.selectionEnd = textArea.selectionStart;
			} else if (item.textContent == 'Caps') {
				document.querySelectorAll('.letter').forEach((letter) => {
					console.log('shift');
					letter.classList.toggle('caps');
				});
			} else if (item.textContent == 'left') {
				textArea.selectionStart = coursorPosition - 1;
				coursorPosition = textArea.selectionStart;
				textArea.selectionEnd = textArea.selectionStart;
				console.log('pozycja: ' + textArea.selectionStart);
			} else if (item.textContent == 'right') {
				textArea.selectionStart = coursorPosition + 1;
				coursorPosition = textArea.selectionStart;
				textArea.selectionEnd = textArea.selectionStart;
				console.log('pozycja: ' + textArea.selectionStart);
			}
		});
	});
}

textArea.addEventListener('click', (e) => {
	coursorPosition = textArea.selectionStart;
	console.log('pozycja: ' + coursorPosition);
	console.log('start' + textArea.selectionStart);
	console.log('end' + textArea.selectionEnd);
});

