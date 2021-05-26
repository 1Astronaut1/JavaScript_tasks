let arr = [1, "2", 3, 4, 5, "Elite Dangerous - good game", "@!#&?", null];
function ArrayAnalizator(arr) 
{
    console.log("Анализатор массивов v2.0 - Теперь фунция! =)");
    console.log(`Анализируеммай массив: ${arr}`);
    let even = 0;
    let odd = 0;
    let n = 0;
    let other = 0;
    for (i = 0 ; i < arr.length ; i++)
    {
        if (arr[i] == null)
        {
            n++;
        }
        else
        {
            if (isNaN(+arr[i]))
            {
                other++;
            }
            else
            {
                if (+arr[i] % 2 == 0) 
                {
                    even++;
                }
                else 
                {
                    odd++;
                }
            }
        }
    }

    console.log(`Чётных чисел: ${even}`);
    console.log(`Нечётных чисел: ${odd}`);
    console.log(`Ячеек со значением null: ${n}`);
    console.log(`Не чисел: ${other}`);
}
ArrayAnalizator(arr);