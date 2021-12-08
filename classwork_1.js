// 1
const cutString = (str, n) => {
    if (str.length > n) {
       return `${str.slice(0, n)}...` 
    }
    else return str
    }
    console.log(cutString('Hello', 3))
    
    // 2
    const findRepeatedElem = (arr) => {
    
    const obj = arr.reduce((prev, cur) => {
            prev[cur] = (prev[cur] || 0) + 1
            return prev
        }
    ,{})
    const keys = Object.keys(obj)
    const values = Object.values(obj)
    const maxValue = Math.max(...values)
    const maxIndex = values.findIndex(item => item === maxValue)
    return keys[maxIndex]
    }
    console.log(findRepeatedElem([3,4,5,4,6,7,4,8,,1,1,2,3,4]))
    
    // 3
    const createList = (arr) => {
        return arr.map((item, index) => {
            return {elementValue: `${item}`, elementType: `${typeof item}`, elementIndex: `${index}`}
        })
    }
    console.log (createList([1,'Hello', true]))