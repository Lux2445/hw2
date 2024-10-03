function containsDigit(str) {
    return /\d/.test(str);
}

const strings = [
    'Hello World!',
    'Today is 2024.',
    'My lucky number is 7.',
    'No digits here!',
    'Price: $50.',
    ''
];

strings.forEach(s => console.log(`Строка: "${s}", Содержит цифры: ${containsDigit(s)}`));
