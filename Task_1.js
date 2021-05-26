numb = prompt("Введите целое число:");
numb = +numb;
if (typeof numb == "number" && numb){
    if (numb % 2 == 0) {
        alert( "Чётное");
    }
    else {
        alert( "Нечётное");
    }
}
else {
    alert("Упс, кажется вы ошиблись");
}