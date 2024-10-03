function startWhithUpperCase(str) {
    return /^[A-Z]/.test(str);
}

const strings = [
    'Hello world',
    'hello world',
    'JavaScript is fun',
    '123abc',
    'Good Morning!',
    ''
];

strings.forEach(s => {
    console.log(`Строка: "${s}", Начинается с заглавной буквы: ${startWhithUpperCase(s)}`);
});
