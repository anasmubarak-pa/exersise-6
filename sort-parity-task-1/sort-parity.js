function sortParity(input_array)
{
    let evenarray = []
    let oddarray = []
    for(let num of input_array)
    {
        if(num%2==0)
        {
            evenarray.push(num)
        }
        else
        {
            oddarray.push(num)
        }
    }

    return evenarray.concat(oddarray)
}

console.log(sortParity([3, 2, 4, 1, 5, 8]))