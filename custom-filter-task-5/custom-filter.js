// function myFilter(arr,func)
// {
//     let return_list = []
//     for(let element of arr)
//     {
//         if(func(element))
//         {
//             return_list.push(element)
//         }
//     }
//     return return_list
// }

let test_array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let greater_than = (a)=>a>10

// console.log(myFilter(test_array,greater_than))

let Prototypeobj = {
    myFilter(callback)
    {
        console.log(this)
        let return_list = []
        for(let element of this)
        {
            if(callback(element))
            {
                return_list.push(element)
            }
        }
        return return_list
    }
}

Object.assign(Array.prototype,Prototypeobj)

console.log(test_array.myFilter(greater_than))