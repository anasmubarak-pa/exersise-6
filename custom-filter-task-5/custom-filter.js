function myFilter(arr,func)
{
    let return_list = []
    for(let element of arr)
    {
        if(func(element))
        {
            return_list.push(element)
        }
    }
    return return_list
}

let test_array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let greater_than = (a)=>a>10

//Better version assigning directly to prototype chain of Array object.

// console.log(myFilter(test_array,greater_than))

// let Prototypeobj = {
//     myFilter(callback)
//     {
//         console.log(this)
//         let return_list = []
//         for(let element of this)
//         {
//             if(callback(element))
//             {
//                 return_list.push(element)
//             }
//         }
//         return return_list
//     }
// }

// Object.assign(Array.prototype,Prototypeobj)

// console.log(test_array.myFilter(greater_than))

function typeAsserter(...typelist)
{
    let i =0
    for(i=0;i<typelist.length;i+=2)
    {
        if(typelist[i+1].indexOf('|')!=-1)
        {
            let tlist = typelist[i+1].split('|')
            if(!(tlist.find((e)=>e==typeof typelist[i])))
            {
                console.log(tlist)
                return false
            }
        }
        else if(Array.isArray(typelist[i])||Array.isArray(typelist[i+1]))
        {
            if(Array.isArray(typelist[i])&&(typelist[i+1]!=='Array'))
            {
                return false
            }
        }
        else if(typeof typelist[i]!=typelist[i+1])
        {
            return false
        }
    }
    return true
}

function testProgram(callback,inputArray,expectedOutputArray)
{
  function checkEqual(obj1,obj2)
  {
      let i = 0
      let keys = Object.keys(obj2)
      if(obj1.length!=obj2.length)
      {
        return 'Not Equal'
      }
      for(let key in obj1)
      {
          if(typeof obj1[key]=='object'||typeof obj2[keys[i]]=='object')
          {
              if(typeof obj1[key]!='object'||typeof obj2[keys[i]]!='object')
              {
                  return 'Not Equal'
              }
              else
              {
                  if(checkEqual(obj1[key],obj2[keys[i]])!='Equal')
                  {
                      return 'Not Equal'
                  }
              }
              i++
          }
          else
          {
            if(isNaN(key)||isNaN(obj1[key]))
            {
                if(isNaN(key)&&!(isNaN(keys[i]))||isNaN(obj1[key])&&!isNaN(obj2[keys[i]]))
                {
                    // console.log('nan2')
                    return 'Not Equal'
                }
            }
            else if(key!=keys[i]||obj1[key]!=obj2[keys[i]])
            {
                return 'Not Equal'
            }
            i++
          }
      }
      return 'Equal'
  }
  for(let i = 0;i<inputArray.length;i++)
  {
    if(typeof expectedOutputArray[i]=='object')
    {
        // console.log(i,'obj')
        // console.log(callback(...inputArray[i]),expectedOutputArray[i])
      if(checkEqual(callback(...inputArray[i]),expectedOutputArray[i])==='Equal')
      {
        console.log(`%c Passed`,'color:green; font-weight:700;font-size:25px')
      }
      else
      {
          console.log(`%c Failed`,'color:red; font-weight:700;font-size:25px')
      }
    }
    else{
        if(isNaN(callback(...inputArray[i])))
        {
            if(isNaN(expectedOutputArray[i]))
            {
                console.log(`%c Passed`,'color:green; font-weight:700;font-size:25px')
            }
            else
            {
                console.log(`%c Failed`,'color:red; font-weight:700;font-size:25px')
            }
        } 
      else if(callback(...inputArray[i])===expectedOutputArray[i])
      {
        console.log(`%c Passed`,'color:green; font-weight:700;font-size:25px')
      }
      else
      {
            console.log(`%c Failed`,'color:red; font-weight:700;font-size:25px')
      }
    }   
  }
}
let array1 = [1,2,3,4,5,6,7]
let array2 = ['1',2,3,'4',5,6,7]
let array3 = ['15','7','8','45','10','11','12']
let array4 = ['H','E','L','L','O',' ','W','O','R','L','D','!']

let function5= (e)=>e>5
let test17 = [6, 7]
let test18 = [6, 7]
let test19 = ['15', '7', '8', '45', '10', '11', '12']
let test20 = []

let function6 = (e)=>typeof(e)=='number'
let test21 = [...array1]
let test22 = [2,3,5,6,7]
let test23 = []
let test24 = []

let function7 = (e)=>typeof(e)=='string'
let test25 = []
let test26 = ['1','4']
let test27 = [...array3]
let test28 = [...array4]

let function8 = (e)=>typeof(e)=='object'
let test29 = []
let test30 = []
let test31 = []
let test32 = []

testProgram(myFilter,[[array1,function5],[array2,function5],[array3,function5],[array4,function5],
                    [array1,function6],[array2,function6],[array3,function6],[array4,function6],
                    [array1,function7],[array2,function7],[array3,function7],[array4,function7],
                    [array1,function8],[array2,function8],[array3,function8],[array4,function8]],
                    [test17,test18,test19,test20,test21,test22,test23,test24,test25,test26,
                        test27,test28,test29,test30,test31,test32])

