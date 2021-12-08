// 1
// Функция принимает массив пользователей. Исходные данные см. ниже. Возвращает объект, состоящий из двух полей: female и male. Данные
//   поля являются массивами, в которых содержаться пользователи, подходящие по категории gender соответственно.
//   Также, вместо двух полей first_name и last_name у каждого из объектов должно быть поле fullName в котором будут объеденины убранные поля
// (first_name и last_name). Количество пользователей может быть не ограничено.

const users = [
    {
      id: 1,
      first_name: 'Jeanette',
      last_name: 'Penddreth',
      email: 'jpenddreth0@census.gov',
      gender: 'female',
      ip_address: '26.58.193.2',
    },
    {
      id: 2,
      first_name: 'Petr',
      last_name: 'Jackson',
      email: 'gfrediani1@senate.gov',
      gender: 'male',
      ip_address: '229.179.4.212',
    },
  ]
  
  const func = (arr) => {
    const arrWithFullName = arr.map((item) => {
      item.fullName = `${item.first_name} ${item.last_name}`
      delete item.last_name
      delete item.first_name
      return item
    })
  
    const women = arrWithFullName.filter((item) => item.gender === 'female')
    const men = arrWithFullName.filter((item) => item.gender === 'male')
    return { women: women, men: men }
  }
  console.log(func(users))
  
  // 2 
  // Преобразуйте массив в объект используя функцию reduce.
  
  const videos = [
    {
      id: 65432445,
      title: 'The Chamber',
    },
    {
      id: 675465,
      title: 'Fracture',
    },
    {
      id: 70111470,
      title: 'Die Hard',
    },
    {
      id: 654356453,
      title: 'Bad Boys',
    },
  ]
  
  const func2 = (arr) => {
    return arr.reduce((prev, cur) => {
      prev[cur.id] = cur.title
      return prev
    }, {})
  }
  console.log(func2(videos))
  
  // 3
  // Выведите массив ids для релизов у которых рейтинг 5.0
  const newReleases = [
    {
      id: 70111470,
      title: 'Die Hard',
      boxart: 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
      uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
      rating: [4.0],
      bookmark: [],
    },
    {
      id: 654356453,
      title: 'Bad Boys',
      boxart: 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
      uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
      rating: [5.0],
      bookmark: [{ id: 432534, time: 65876586 }],
    },
    {
      id: 65432445,
      title: 'The Chamber',
      boxart: 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
      uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
      rating: [4.0],
      bookmark: [],
    },
    {
      id: 675465,
      title: 'Fracture',
      boxart: 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
      uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
      rating: [5.0],
      bookmark: [{ id: 432534, time: 65876586 }],
    },
  ]
  const func3 = (arr) => {
    return arr
      .filter((item) => parseFloat(item.rating) === 5.0)
      .map((item) => item.id)
  }
  console.log(func3(newReleases))
  
  // 4
  // С помощью функций map, reduce, вывести url у которого самая большая площадь
  
  const boxarts = [
    {
      width: 200,
      height: 200,
      url: 'http://cdn-0.nflximg.com/images/2891/Fracture200.jpg',
    },
    {
      width: 150,
      height: 200,
      url: 'http://cdn-0.nflximg.com/images/2891/Fracture150.jpg',
    },
    {
      width: 300,
      height: 200,
      url: 'http://cdn-0.nflximg.com/images/2891/Fracture300.jpg',
    },
    {
      width: 425,
      height: 150,
      url: 'http://cdn-0.nflximg.com/images/2891/Fracture425.jpg',
    },
  ]
  const func4 = (arr) => {
    const squareArr = arr.map((item) => {
      const { width, height, url } = item
      const square = height * width
      return { url, square }
    })
    const reducedArr = squareArr.reduce((prev, cur) => {
      prev[cur.square] = cur.url
      return prev
    }, {})
    const keys = Object.keys(reducedArr).map((item) => Number(item))
    const maxKey = Math.max(...keys)
    return reducedArr[maxKey]
  }
  console.log(func4(boxarts))
  