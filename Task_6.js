let arr = ["element_1", "element_1", "element_1", "element_1", "element_1"];
for (i = 0 ; i < arr.length ; i++)
{
    if (arr[0] != arr[i]) 
    {
        console.log("false");
        break;
    }
    if (i == arr.length - 1) 
    {
        console.log("true");
    }
}