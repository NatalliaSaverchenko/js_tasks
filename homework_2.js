// 1
// Функция принимает массив чисел. Возвращает массив уникальных чисел
// fn([1,1,1,2,2,2,3,4,5,5,6]) // [1,2,3,4,5,6]

const uniqueList = (list) => {
    return Array.from(new Set(list))
}
console.log(uniqueList([1,1,1,2,2,2,3,4,5,5,6]))

// 2
// Функция принимает массив чисел, где есть единственное число,
// которое встречается нечётное количество раз.
// Результатом этой функции должно быть найденное число.

const getNumber = (numberList) => {
  const obj = numberList.reduce((result, number) => {
    result[number] = (result[number] || 0) + 1
    return result
  }, {})
  return Object.keys(obj).find((key) => obj[key] % 2 !== 0)
}
console.log(getNumber([7]))
console.log(getNumber([0]))
console.log(getNumber([1,1,2]))
console.log(getNumber([0,1,0,1,0]))
console.log(getNumber([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]))

// 3
// Написать функцию которая принимает число. Логика функции будет следующая: сумма цифр числа.

const getNumbersSum = (number) => {
  const sum = String(number).split('').reduce((result, number) => result + +number, 0)
  return sum < 10 ? sum : getNumbersSum(sum)
}
console.log(getNumbersSum(16))
console.log(getNumbersSum(942))
console.log(getNumbersSum(132189))
console.log(getNumbersSum(493193))

// 4
// Написать свою собственную реализацию метода map,
// которая работает в точности как существующий
Array.prototype.myCustomMap = function (callback) {
    let newArray = []
    for (let element of this) {
        newArray.push(callback(element))
    }
return newArray
}
console.log([1,2,3].myCustomMap(number => number*2))

// 5
// Написать свою собственную реализацию метода filter,
// которая работает в точности как существующий

Array.prototype.myCustomFilter = function (callback) {
  let newArray = []
  for (let element of this) {
    if (callback(element)) {
      newArray.push(element)
    }
  }

  return newArray
}
let arr = [1, 2, 3]
console.log(arr.myCustomFilter((number) => number > 1)) // [2,3]
console.log(arr)
