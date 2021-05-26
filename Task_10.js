num = prompt("Введите целое число:");
function IsPrimeNumber(numb) 
{
    numb = +numb;
    if (typeof numb == "number" && !isNaN(numb)) 
    {
        if(numb == 2) 
        {
            console.log(`${numb} - простое число.`);
        }
        else
        {
            if (numb > 1000) 
            {
                console.log("Эй, это перебор! Эта программа не расчитана на числа больше 1000.");
            }
            else
            {
                if (numb <= 1)
                {
                    console.log("Простых чисел меньше двух нет)");
                }
                else
                {
                    for(i = 2 ; i < numb ; i++) 
                    {
                        if (numb % i == 0) {
                            console.log(`${numb} не простое число.`);
                            break;
                        }
                        if (i == numb - 1)
                        {
                            console.log(`${numb} - простое число.`);
                        }
                    }
                }
            }
        }
    }
    else 
    {
        console.log(`Знаешь, что плохо ломать чужие программы? ${numb} - не целое число.`);
    }
}
IsPrimeNumber(num);