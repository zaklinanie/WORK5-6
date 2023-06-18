  function showPopup(taskId) {
  let popup = document.getElementById("popup");
  let taskTitle = "";
  let taskDesc = "";
  let taskRez = "";
  let btnFunc = null;

switch (taskId) {

    case "task0":
      taskTitle = "Приветствие";
      taskDesc = "Введите своё имя! После этого оно будет отображаться на главной странице сайта в правом верхнем углу.";
      taskRez = "Решением данной задачи является функция, которая запрашивает имя пользователя через окно ввода и сохраняет его в локальном хранилище localStorage. Затем создается элемент span с текстом приветствия и добавляется имя пользователя. Этот элемент добавляется на страницу в блок с определённым классом. Кроме того, после обновления страницы проверяется, не пусто ли локальное хранилище. Если нет - выводим сохраненное значение в шапке сайта.";
      btnFunc = function() {
        const name = prompt('Как вас зовут?');
        if (name) {
          localStorage.setItem('username', name);
          const greeting = document.createElement('span');
          greeting.textContent = `Привет, ${name}! `;
          const qwe = document.querySelector(".qwe");
          qwe.appendChild(greeting);
          
        };
      };
      break;


    case "task1":
    taskTitle = "Площадь треугольника";
    taskDesc = "Введите основание и высоту треугольника. Функция посчитает площадь треугольника с заданными параметрами.";
    taskRez = "Для решения данной задачи необходимо написать функцию, которая будет запрашивать у пользователя основание и высоту треугольника через окно ввода, вычислять площадь треугольника с помощью формулы и выводить ее на страницу в блок с определённым классом. Для запроса данных от пользователя можно использовать функцию prompt().";
    btnFunc = function() {
      const base = parseFloat(prompt('Введите основание треугольника'));
      const height = parseFloat(prompt('Введите высоту треугольника'));
      const area = (base * height) / 2;
      const result = document.querySelector(".qwe");
      result.textContent = `Площадь треугольника равна ${area}`;
    };
    break;


    case "task2":
    taskTitle = "Сравнение строк";
    taskDesc = "Введите две строки. Функция сравнит количество символов в строках и выдаст результат сравнения.";
    taskRez = "Функция принимает два аргумента - строки str1 и str2. Она сравнивает количество символов в этих строках с помощью свойства length и возвращает результат сравнения в виде логического значения true или false. Результат выводится на страницу в блок с определённым классом с помощью метода textContent.";
    btnFunc = function() {
      let str1 = prompt("Введите первую строку");
      let str2 = prompt("Введите вторую строку");
      function compareStrings(str1, str2) {
        return str1.length === str2.length;
      }
      let equalLengths = compareStrings(str1, str2);
      const result = document.querySelector(".qwe");
      result.textContent = `${equalLengths}`
    };
    break;


    case "task3":
    taskTitle = "Поиск минимума и максимума в массиве";
    taskDesc = "Введите массив из 5 элементов. Функция выдаст минимальное и максимальное значение массива.";
    taskRez = "Функция с помощью цикла ищет минимальное и максимальное значение в массиве из 5 элементов, которые пользователь вводит через функцию prompt(). Если в массиве есть нечисловые элементы, то выводится сообщение об ошибке. Результат поиска минимального и максимального значения выводится на страницу в блок с определённым классом";
    btnFunc = function() {
      let arr = [];
      for (let i = 1; i <= 5; i++) {
      let value = prompt(`Введите значение ${i}-го элемента массива`);
      arr.push(parseInt(value));
      if (arr.some(isNaN)) {
      alert("Ошибка: массив должен содержать только числа");
      return;
      }
      }
      function findMinMax(arr) {
        let min = arr[0];
        let max = arr[0];
        for (let i = 1; i < arr.length; i++) {
          if (arr[i] < min) {
            min = arr[i];
          }
          if (arr[i] > max) {
            max = arr[i];
          }
        }
        return { min, max };
      }
      let resultat = findMinMax(arr);
      const result = document.querySelector(".qwe");
      result.textContent = `Минимальное значение: ${resultat.min}, Максимальное значение: ${resultat.max}`
    };
    break;


    case "task4":
      taskTitle = "Таймер";
      taskDesc = "Таймер с возможностью остановить отсчёт, посмотреть значение и сбросить.";
      taskRez = "Для реализации данной функции могут быть использованы следующие функции: setInterval() - функция, которая позволяет выполнять определенный код через определенные промежутки времени. В данном случае, она используется для запуска таймера и обновления значения времени на странице каждую секунду. clearInterval() - функция, которая останавливает выполнение кода, который был запущен через setInterval(). В данном случае, она используется для остановки таймера при нажатии на кнопку Стоп.";
      btnFunc = function() {
        const result = document.querySelector(".qwe");
        let myButton1 = document.createElement("button");
        myButton1.innerHTML = "Старт";
        result.appendChild(myButton1);
        myButton1.onclick =startTimer; 
        let myButton2 = document.createElement("button");
        myButton2.innerHTML = "Стоп";
        result.appendChild(myButton2);
        myButton2.onclick =stopTimer;         
        let myButton3 = document.createElement("button");
        myButton3.innerHTML = "Сброс";
        result.appendChild(myButton3);
        myButton3.onclick =resetTimer; 
        let startTime;
        let intervalId;
        function startTimer() {
          startTime = Date.now();
          intervalId = setInterval(() => {
            const timer = document.querySelector(".timer");
            const elapsed = Math.floor((Date.now() - startTime) / 1000); 
            timer.textContent = `Прошло ${elapsed} секунд`;
          }, 1000);
        }
        function stopTimer() {
          clearInterval(intervalId);
        }
        function resetTimer() {
          clearInterval(intervalId);
          const timer = document.querySelector(".timer");
          timer.textContent = '';
        }
      };
      break;


      case "task5":
        taskTitle = "Тест";
        taskDesc = "Ответьте письменно на вопросы.";
        taskRez = "В функции имеется список вопросов и правильных ответов. Пользователь отвечает на каждый вопрос через всплывающее окно prompt. Затем проверяется правильность ответа и формируется строка с результатами теста, которая выводится на страницу. Если пользователь ответил правильно, его результат увеличивается на 1.";
        const questions = [
          { question: 'Что такое Javascript?', answer: 'Язык программирования' },
          { question: 'Какой оператор используется для присвоения значения переменной?', answer: '=' },
          { question: 'Что значит слово "null"?', answer: 'Отсутствие значения' },
          { question: 'Что такое массив?', answer: 'Упорядоченный набор данных' },
          { question: 'Что такое цикл?', answer: 'Повторение' },
          { question: 'Какое ключевое слово используется для объявления переменной?', answer: 'let' },
          { question: 'Расшифровка DOM (по-русски)?', answer: 'Объектная модель документа' },
          { question: 'Java Script - типизированный язык?', answer: 'Нет' },
          { question: 'Какой язык нужен для создания интерактивных элементов на странице?', answer: 'JavaScript' },
          { question: 'С помощью какой функции пользователь может ввести значение во всплывающем окне?', answer: 'prompt' },
        ];
        btnFunc = function() {
          const test = document.querySelector(".qwe");
          test.innerHTML = '';
          let score = 0;
          for (let i = 0; i < questions.length; i++) {
            const answer = prompt(`Вопрос ${i + 1}: ${questions[i].question}`);
            const result = document.createElement('p');
            result.textContent = `Вопрос ${i + 1}: ${answer === questions[i].answer ? 'Верно' : 'Неверно'}. Ответ: ${questions[i].answer}`;
            test.appendChild(result);
            if (answer === questions[i].answer) {
              score++;
            }
          }
          test.prepend(`Вы ответили правильно на ${score} из ${questions.length} вопросов.\n`);
      };
      break;



      case "task6":
        taskTitle = "Заставка";
        taskDesc = "При нажатии на кнопку появляется заставка на весь экран с красивым фоном,текущей датой и именем пользователя. ";
        taskRez = "Сначала функция запрашивает имя пользователя через prompt и получает текущую дату с помощью объекта Date. Затем функция находит в коде элемент всплывающего окна (по его id) и добавляет в него строку с именем пользователя и текущей датой. Далее функция задает окну фоновое изображение с помощью style.backgroundImage. Затем функция скрывает в нем все элементы (кроме имени и даты) и устанавливает ширину и высоту на 100% от ширины и высоты окна браузера.";
      btnFunc = function() {
      const test = document.querySelector(".qwe");
      let userName = prompt("Введите ваше имя");
      let currentDate = new Date().toLocaleDateString();
      test.prepend(`${userName} , текущая дата ${currentDate}`);

      let element = document.getElementById("popup");
      element.style.backgroundImage = "url('image/2.jpg')";
      let popup3 = document.getElementById("popup-title");
      popup3.style.display = "none";

      let popup4 = document.getElementById("popup-desc");
      popup4.style.display = "none";

      let popup1 = document.getElementById("popup-btn");
      popup1.style.display = "none";

      let popup2 = document.getElementById("popup-rez");
      popup2.style.display = "none";

      element.style.width = "100vw";
      element.style.height = "90vh";

    } ;  break;

    }

  document.getElementById("popup-title").innerText = taskTitle;
  document.getElementById("popup-desc").innerText = taskDesc;
  document.getElementById("popup-rez").innerText = taskRez;
  document.getElementById("popup-btn").onclick = btnFunc;

  let overlay = document.getElementById("overlay");
  overlay.style.display = "flex";
  }

  function hidesPopup() {
  let overlay = document.getElementById("overlay");
  overlay.style.display = "none";
  const result = document.querySelector(".qwe");
  result.innerText = "";
  let element = document.getElementById("popup");
  element.style.backgroundImage = "none";
    element.style.width = "auto";
    element.style.height = "auto";
    let popupy = document.getElementById("popup-title");
    popupy.style.display = "block";
    let popupu = document.getElementById("popup-desc");
    popupu.style.display = "block";
    let popup1 = document.getElementById("popup-btn");
    popup1.style.display = "block";
    let popup2 = document.getElementById("popup-rez");
    popup2.style.display = "block";
  }
