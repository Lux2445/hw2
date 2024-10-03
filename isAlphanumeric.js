function containsOnlyLettersAndDigits(str) {
    return /^[a-zA-Z0-9]+$/.test(str);
}

const strings = [
    'Hello123',
    'Hello 123',
    'Hello!',
    '12345',
    'abcABC',
    ''
];

strings.forEach(s => console.log(`Строка: "${s}", Содержит только буквы и цифры: ${containsOnlyLettersAndDigits(s)}`));
