let revstr = "";
str = prompt("Введите строку:");
for (i = str.length ; i>=0 ; i--)
{
    revstr = revstr + str.charAt(i);
}
console.log(revstr);