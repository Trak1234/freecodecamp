Вам дадут слово. Ваша задача — вернуть средний символ слова. Если длина слова нечетная, вернуть средний символ. Если длина слова четная, верните средние 2 символа.

someNumber = 'asff'

var isEven = function(someNumber) {
    return (str.someNumber % 2 == 0) ? true : false;
  };

console.log(isEven(''asff''asff''));
#Примеры:

Kata.getMiddle("test") должен возвращать "es"

Kata.getMiddle("testing") должен возвращать "t"

Kata.getMiddle("middle") должен возвращать "dd"

Kata.getMiddle("A") должен вернуть "A"
#Вход

Слово (строка) длиной 0 < str < 1000 (в javascript вы можете получить чуть больше 1000 в некоторых тестовых примерах из-за ошибки в тестовых примерах). Вам не нужно тестировать для этого. Это только здесь, чтобы сказать вам, что вам не нужно беспокоиться о тайм-ауте вашего решения.

#Вывод

Средний символ (символы) слова, представленного в виде строки.