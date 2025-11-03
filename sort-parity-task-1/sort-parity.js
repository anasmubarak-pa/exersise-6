function sortParity(input_array)
{
    if(!typeAsserter(input_array,'Array'))
    {
        return 'Invalid argument'
    }
    let evenarray = []
    let oddarray = []
    for(let num of input_array)
    {
        if(!(typeof num=='number'&&isFinite(num)))
        {
            return 'Invalid argument'
        }
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

// console.log(sortParity([3, 2, 4, 1, 5, 8]))

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
                // console.log(tlist)
                return false
            }
        }
        else if(Array.isArray(typelist[i])||typelist[i+1]=='Array')
        {
            if(!Array.isArray(typelist[i])||(typelist[i+1]!=='Array'))
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
    function getcopy(element){
        return structuredClone(element)
    }
  function checkEqual(obj1,obj2)
  {
      let i = 0
      let keys = Object.keys(obj2)
      if(Object.keys(obj1).length!=Object.keys(obj2).length)
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
            if((typeof key=='number'&&isNaN(key)||(typeof obj1[key]=='number')&&isNaN(obj1[key])))
            {
                if((typeof key=='number'||typeof obj1[key]=='number')&&(isNaN(key)&&!(isNaN(keys[i]))||isNaN(obj1[key])&&!isNaN(obj2[keys[i]])))
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
        // console.log(i,...inputArray[i])
      if(checkEqual(callback(...getcopy(inputArray[i])),expectedOutputArray[i])==='Equal')
      {
        console.log(`%c Test ${i+1} Passed`,'color:green; font-weight:700;font-size:25px')
      }
      else
      {
        console.log(`%c Test ${i+1} Failed`,'color:red; font-weight:700;font-size:25px')
      }
    }
    else{
        if((typeof callback(...getcopy(inputArray[i]))=='number')&&(isNaN(callback(...getcopy(inputArray[i])))))
        {
            if(isNaN(expectedOutputArray[i]))
            {
                console.log(`%c Test ${i+1} Passed`,'color:green; font-weight:700;font-size:25px')
            }
            else
            {
                console.log(`%c Test ${i+1} Failed`,'color:red; font-weight:700;font-size:25px')
            }
        } 
        else if((callback(...getcopy(inputArray[i])))===expectedOutputArray[i])
        {
            console.log(`%c Test ${i+1} Passed`,'color:green; font-weight:700;font-size:25px')
        }
        else
        {
            console.log(`%c Test ${i+1} Failed`,'color:red; font-weight:700;font-size:25px')
        }
    }   
  }
}

let input1 = [[5,5,2]]
let ouput1 = [2,5,5]
let input2 = [[10]]
let ouput2 = [10]
let input3 = [[2,15]]
let ouput3 = [2,15]
let input4 = [[214,59,23,3233,122,2,22]]
let ouput4 = [214,122,2,22,59,23,3233]
let input5 = [[1,2,3,4,5,6,7,8,9]]
let ouput5 = [2,4,6,8,1,3,5,7,9]
let input6 = [[NaN]]
let ouput6 = 'Invalid argument'
let input7 = [[100,[200]]]
let ouput7 = 'Invalid argument'
let input8 = [[100,200]]
let ouput8 = [100,200]
let input9 = ['2']
let ouput9 = 'Invalid argument'
let input10 = [{obj:{1:2}}]
let ouput10 = 'Invalid argument'
let input11 = [0]
let ouput11 = 'Invalid argument'
let input12 = [[]]
let ouput12 = []
let input13 = []
let ouput13 = 'Invalid argument'
let input14 = [[8]]
let ouput14 = [8]
let input15 = [[[],[]]]
let ouput15 = 'Invalid argument'

testProgram(sortParity,[input1,input2,input3,input4,input5,input6,input7,input8,input9,input10,
                    input11,input12,input13,input14,input15],
                    [ouput1,ouput2,ouput3,ouput4,ouput5,ouput6,ouput7,ouput8,ouput9,ouput10,
                    ouput11,ouput12,ouput13,ouput14,ouput15])