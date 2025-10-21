function patternPrinter(size)
{
    for(let i=1;i<=size;i++)
    {
        console.log(...Array(i).fill(String.fromCharCode(65+i-1)))
    }
}

patternPrinter(5)