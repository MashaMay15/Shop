var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 сначала инкремент a=2,  следом присвоение c = a =2
d = b++; alert(d);           // 1 сначала вызов переменной b в присвоение (инкремент после переменной), потом увеличение переменной b 
c = (2 + ++a); alert(c);      // 5 a = 2 уже была увеличена, инкремент перед ее вызовом, сумма. Теперь a = 3, c = 5
d = (2 + b++); alert(d);      // 4 b=2 уже был уеличен, но инкремент произойдет после вызова переменной в выражении. теперь b=3, d=4
alert(a);                    // 3
alert(b);                     // 3


var a, b;
a = parseInt(prompt("введите значение переменной a"));
b = parseInt(prompt("введите значение переменной b"));

if (a >= 0 && b > 0) {
    alert("оба положительные! Произведение: " + (a - b));
}
else {
    alert("Знаки разные! Сумма: "(a + b));
}



var a = parseInt(prompt("Введите число от 1 до 15"));
switch (a) {
    case 0:
        document.write("0");
    case 1:
        document.write("1");
    case 2:
        document.write("2");
    case 3:
        document.write("3");
    case 4:
        document.write("4");
    case 5:
        document.write("5");
    case 6:
        document.write("6");
    case 7:
        document.write("7");
    case 8:
        document.write("8");
    case 9:
        document.write("9");
    case 10:
        document.write("10");
    case 11:
        document.write("11");
    case 12:
        document.write("12");
    case 13:
        document.write("13");
    case 14:
        document.write("14");
    case 15:
        document.write("15");
        break;
    default
        document.write("Неверно выполнен ввод числа");
        break;
}


var x, y;
function sum(x, y) {
    return x + y;
}
function dif(x, y) {
    return x - y;
}
function multi(x, y) {
    return x * y;
}
function dif(x, y) {
    if (y != 0)
        return x / y;
    return 0;
}


x = +prompt("Ведите первое число");
y = +prompt("Ведите второе число");
oper = prompt("Ведите знак + , - , * , /");
function mathOperation(x, y, oper) {
    switch (oper) {
        case "+":
            alert(sum(x, y));
            break;
        case "-":
            alert(dif(x, y));
            break;
        case "*":
            alert(multi(x, y));
            break;
        case "/":
            alert(div(x, y));
            break;
        default:
            alert('Введен неверный знак');
            break;
    }
}
mathOperation(x, y, oper)