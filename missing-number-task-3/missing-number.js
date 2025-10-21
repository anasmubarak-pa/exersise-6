function missingNumber(input_array)
{
    for(let i=1;i<input_array[input_array.length-1];i++)
    {
        if(i!=input_array[i-1])
        {
            return i
        }
    }
}

console.log(missingNumber([1, 2, 3, 5, 6]))