// 1
const cutString = (string, charsQuantity) => {
  if (string.length > charsQuantity) {
    return `${string.slice(0, charsQuantity)}...`
  }
}
console.log(cutString('Hello', 3))

// 2
const findMaxRepeatedNumber = (numbersList) => {
  const numberMeetingMap = numbersList.reduce((result, number) => {
    result[number] = (result[number] || 0) + 1
    return result
  }, {})
  return +Object.keys(numberMeetingMap).reduce((result, key) => {
    return numberMeetingMap[result] > numberMeetingMap[key] ? result : key
  })
}
console.log(findMaxRepeatedNumber([3, 4, 5, 4, 6, 7, 4, 8, , 1, 1, 2, 3, 4]))

// 3
const getItemsDescription = (mixedDataList) => {
  return mixedDataList.map((item, index) => ({
    elementValue: item,
    elementIndex: index,
    elementType: typeof item
  }))
}
console.log(getItemsDescription([1, 'Hello', true]))
