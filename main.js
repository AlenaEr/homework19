// Вивести на сторінку в один рядок через кому числа від 10 до 20.
let num1 = 10;
let num2 = 20; // Включаючи число 20
let numbers = [];

for (let i = num1; i <= num2; i++) {
    numbers.push(i);
}

document.write('числа від 10 до 20.: ' + numbers.join(', ') + '<br>');

// Вивести квадрати чисел від 10 до 20.
let min = 10;
let max = 20;
let nums = [];

for (let i = min; i <= max; i++) {
    nums.push(i ** 2);
}

document.write('квадрати чисел від 10 до 20. : ' + nums.join(', ') + '<br>');

// Вивести таблицю множення на 7.
let mult = 7;
for (let i = 1; i <= 10; i++) {
    document.write(`${mult} x ${i} = ${mult * i}` + '<br>');
}

// Знайти суму всіх цілих чисел від 1 до 15.
let sum = 1;
for (let i = 1; i <= 15; i++) {
    sum += i;
}
document.write(`Сума цілих чисел від 1 до 15: ${sum}`);

// Знайти добуток усіх цілих чисел від 15 до 35.
let prod = 1;
for (let i = 15; i < 35; i++) {
    prod *= i;
}
document.write(`<br>Добуток цілих чисел від 1 до 15: ${prod}<br>`);

// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

let sum1 = 0;
for (let i = 1; i <= 500; i++) {
    sum1 += i;
}
let avg = sum1 / 500;
document.write(`Середнє арифметичне чисел від 1 до 500: ${avg}`);

// Вивести суму лише парних чисел в діапазоні від 30 до 80.
let sum2 = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        sum2 += i;
    }
}
document.write(`<br>Сума парних чисел від 30 до 80: ${sum2}<br>`);


// Вивести всі числа в діапазоні від 100 до 200 кратні 3.
document.write('Числа в діапазоні від 100 до 200 кратні 3: ');
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        document.write(i + '&nbsp;');
    }
}
// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// Визначити кількість його парних дільників.
// Знайти суму його парних дільників.
// let number = parseInt(+prompt('Введіть число:'));
let randomNumber = Math.floor(Math.random() * 20) + 1;
let divisors = [];
let pdCount = 0;
let sumPd = 0;
for (let i = 1; i <= randomNumber; i++) {
    if (randomNumber % i === 0) {
        divisors.push(i);
        if (i % 2 === 0) {
            pdCount++;
            sumPd += i;
        }
    }
}
document.write(`<br>Дільники числа ${randomNumber}: ${divisors}`);
document.write(`<br>Кількість парних дільників: ${pdCount}`);
document.write(`<br>Сума парних дільників: ${sumPd}<br>`);

// Надрукувати повну таблицю множення від 1 до 10.
for (let k = 1; k <= 10; k++) {
    for (let j = 1; j <= 10; j++) {
        const product = k * j;
        document.write(`${k} x ${j} = ${product}<br>`);
    }
    document.write('<br>');
}

// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
document.write('Числа від 20 до 30 через пропуск, використовуючи крок 0,5 ');
for (let i = 20; i <= 30; i += 0.5) {
    document.write(i + ' ');
}

// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
document.write('<br>Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.')
for (let i = 10; i < 101; i += 10) {
    document.write(i * 27 + '&nbsp')
}
// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
let n = Math.floor(Math.random() * 100) + 1; // Задане число N
document.write('<br>Цілі числа від 1 до 100, квадрат яких не перевищує числа N. Ваше число = ' + n + '<br>');
for (let i = 1; i <= n; i++) {
    let sqrt = i * i;
    if (sqrt <= n) {
        document.write(i + '&nbsp');
    }
}
// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
let numberToCheck = +prompt('Enter number to check');
if (isPrime(numberToCheck)) {
    document.write(`<br>${numberToCheck} є простим числом.`);
} else {
    document.write(`<br>${numberToCheck} не є простим числом.`);
}
// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
let inValue = +prompt('enter value')
function isPowerOfThree(inValue) {
    if (inValue <= 0) {
        document.write(`<br>${inValue} - не можна отримати з 3.`);
        return false;
    }
    
    while (inValue !== 1) {
        if (inValue % 3 !== 0) {
            document.write(`<br>${inValue} - не можна отримати з 3.`);
            return false;
        }
        inValue /= 3;
    }
    
    document.write(`<br>${inValue} - можна отримати з 3.`);
    return true;
}
isPowerOfThree(inValue);
