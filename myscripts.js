const result = document.querySelector('#result'), // Вибір елемента з ідентифікатором і збереження посилання в змінну
      expression = document.querySelector('#expression'), 
      num = document.querySelectorAll('.number:not(.equals)'), 
      operation = document.querySelectorAll('.operation'), 
      equals = document.querySelector('.equals'), 
      clear = document.querySelector('#clear'), 
      ce = document.querySelector('#ce'); 
let ex = ''; // Ініціалізація змінної для зберігання виразу, який буде оброблятися

result.innerHTML = '0'; // Встановлення початкового значення '0' для 'result'


function clickN() { // Коли ми нажимаємо на кнопку
  if (!ex || typeof(ex) === 'number' || ex === '0') { // Перевірка, чи змінна ex є пустою, числом або має значення '0'
    expression.innerHTML = this.id; // Присвоєння значення id натиснутої кнопки до вмісту елемента з ідентифікатором 'expression'
    ex = this.id; // Присвоєння значення id натиснутої кнопки змінній ex
  } else { // В іншому випадку (якщо змінна ex не пуста і не є числом)
    expression.innerHTML += this.id; // Додавання значення id натиснутої кнопки до кінця вмісту елемента з ідентифікатором 'expression'
    ex += this.id; // Додавання значення id натиснутої кнопки до кінця значення змінної ex
  }
  result.innerHTML = ex.split(/\/|\*|\+|-|=/).pop(); // ex розділяється на частини(+-=*/),а потім остання з цих частин встановлюється як вміст елемента result.
  checkLength(result.innerHTML); // Виклик функції checkLength з аргументом, який є вмістом елемента з ідентифікатором 'result'
};

//функція відповідає за оновлення виразу та результату на екрані калькулятора після натискання кнопки оператора
function click0() {

  if (!ex) { // Перевірка, чи змінна ex є пустою
    return; // Повернення з функції, якщо ex пустий
  }

  ex = ex.toString().replace(/=/, ''); // Видалення знаку рівності (=) з кінця змінної ex, якщо він є

  if (ex.match(/\/|\*|\+|-|=/)) { // Перевірка, чи є в змінній ex будь-які з операторів ділення, множення, додавання, віднімання або рівності
    ex = eval(ex).toString(); // Оцінка виразу, якщо він містить оператори, і перетворення результату на рядок
  } 

  expression.innerHTML = expression.innerHTML.replace(/=/, '') + this.id; // Оновлення вмісту елемента шляхом додавання id натиснутої кнопки (оператора)
  ex += this.id; // Додавання id натиснутої кнопки (оператора) до змінної ex
  result.innerHTML = this.id; // Встановлення вмісту елемента з ідентифікатором 'result' рівним id натиснутої кнопки (оператора)

};




Array.from(num).forEach(function(element) { // Проходження по кожному елементу в масиві num та встановлення події 'click' на функцію clickN
      element.addEventListener('click', clickN);
    });

Array.from(operation).forEach(function(element) {
      element.addEventListener('click', clickO);
    });




equals.addEventListener('click', ()=> { // Додання'click' до елементу equals для обробки натискання на '='
  if (!ex) { // Перевірка, чи змінна ex не є пустою
    result.innerHTML = '0'; // Якщо ex пуста, встановлення вмісту елемента з ідентифікатором 'result' рівним '0'
  } else { // В іншому випадку (якщо ex не пуста)
    ex = eval(ex); // Обчислення значення виразу, який міститься у змінній ex, eval() і збереження результату 
    expression.innerHTML += '='; // Додавання символу '=' до вмісту елемента з ідентифікатором 'expression'
  }
})




function sumOfDigits() { // Функція для обчислення суми цифр у введеному числі
  var n, remainder, sum = 0; // Оголошення змінних n, remainder і sum з початковими значеннями 0
  n = parseInt(document.getElementById("thenumber").value); // Отримання введеного числа з відповідного поля та перетворення його в ціле число

  while (n) { // Початок циклу while, який виконується, поки n не дорівнює 0
    remainder = n % 10; // Знаходження остачі від ділення n на 10
    sum = sum + remainder; // Додавання остачі до змінної sum
    n = Math.floor(n / 10); // Отримання нового значення n, яке є цілою частиною від ділення попереднього n на 10
  }

  document.getElementById("thesum").value = sum; // Встановлення значення відповідного поля на сторінці рівним сумі цифр
}


function prodOfDigits(){  // Функція для обчислення добудку цифр у введеному числі
        var n = 0;
	n = parseInt(document.getElementById("thenumber").value);
  var product = 1; // Ініціалізація змінної product з початковим значенням 1

  while (n !== 0) { // Початок циклу while, який виконується, поки n не дорівнює 0
      product *= (n % 10); // Обчислення добутку цифр числа та оновлення значення змінної product
      n = Math.floor(n / 10); // Отримання нового значення n, яке є цілою частиною від ділення попереднього n на 10
  }

  document.getElementById("prod").value = product; // Встановлення значення відповідного поля на сторінці рівним добутку цифр
}