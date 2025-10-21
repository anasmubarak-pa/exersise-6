function flattenArray(array,return_array=[])
{
    for(let element of array)
    {
        if(!(Array.isArray(element)))
        {
            return_array.push(element)
        }
        else
        {
            flattenArray(element,return_array)
        }
    }  
    
    return return_array
}

console.log(flattenArray([1, [2, [3, [4]], 5]]))