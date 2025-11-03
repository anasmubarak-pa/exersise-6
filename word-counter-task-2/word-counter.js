function wordCounter(sentene)
{
    if(!typeAsserter(sentene,'string')||sentene=='')
    {
        return 'Invalid argument'
    }
    let new_sentence = sentene.toLowerCase().replaceAll(/[!\,\.]/g,'')
    let return_obj = {}
    for(let word of new_sentence.split(' '))
    {
        return_obj[word] = (return_obj[word]||0)+1
    }
    console.log(return_obj)
    return return_obj
}

// console.log(wordCounter("Hello hello world, world!"))

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

let input1 = ['hello Hello']
let ouput1 = {'hello':2}
let input2 = ['hello world WORLD HELLO']
let ouput2 = {'hello':2,'world':2}
let input3 = ['2 3 3 4 2 2 2 2 4 5 7 7 7 7 7 7 7']
let ouput3 = {2:5,3:2,4:2,5:1,7:7}
let input4 = [213123]
let ouput4 = 'Invalid argument'
let input5 = ['good morning']
let ouput5 = {'good':1,'morning':1}
let input6 = [[NaN]]
let ouput6 = 'Invalid argument'
let input7 = [[100,[200]]]
let ouput7 = 'Invalid argument'
let input8 = ['[100,200]']
let ouput8 = {'[100200]':1}
let input9 = ['2!']
let ouput9 = {'2':1}
let input10 = [{obj:{1:2}}]
let ouput10 = 'Invalid argument'
let input11 = [0]
let ouput11 = 'Invalid argument'
let input12 = ['']
let ouput12 = 'Invalid argument'
let input13 = []
let ouput13 = 'Invalid argument'
let input14 = ['1 2 2 3 3 3 4 4 4 4']
let ouput14 = {'1':1,'2':2,'3':3,'4':4}
let input15 = [[[],[]]]
let ouput15 = 'Invalid argument'

testProgram(wordCounter,[input1,input2,input3,input4,input5,input6,input7,input8,input9,input10,
                    input11,input12,input13,input14,input15],
                    [ouput1,ouput2,ouput3,ouput4,ouput5,ouput6,ouput7,ouput8,ouput9,ouput10,
                    ouput11,ouput12,ouput13,ouput14,ouput15])