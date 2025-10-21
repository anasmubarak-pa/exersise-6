function wordCounter(sentene)
{
    let new_sentence = sentene.toLowerCase().replaceAll(/[!\,\.]/g,'')
    let return_obj = {}
    for(let word of new_sentence.split(' '))
    {
        return_obj[word] = (return_obj[word]||0)+1
    }
    return return_obj
}

console.log(wordCounter("Hello hello world, world!"))