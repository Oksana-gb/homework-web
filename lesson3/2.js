// Cоздать функцию greeting, которая принимает имя и выводит приветствие, используя переданное имя, в консоль.
// Необходимо у пользователя запросить имя и вызвать функцию greeting, передав туда данное значение.

function greeting(userName) {
    console.log(`Привет, ${userName}`);
}
const firstName = prompt('Введите имя');

greeting(firstName);