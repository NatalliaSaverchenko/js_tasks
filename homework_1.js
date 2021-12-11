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

const divideUserByGender = (userList) => {
  return userList.reduce((result, user) => {
    const { first_name, last_name, ...otherFields } = user
    const updatedUser = {
      fullName: `${first_name} ${last_name}`,
      ...otherFields,
    }
    const genderKey = updatedUser.gender
    result[genderKey] = !result[genderKey]
      ? [updatedUser]
      : [...result[genderKey], updatedUser]
    return result
  }, {})
}
console.log(divideUserByGender(users))

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

const getObjectOfVideos = (videoList) => {
  return videoList.reduce((result, video) => {
    result[video.id] = video.title
    return result
  }, {})
}
console.log(getObjectOfVideos(videos))

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
const getReleases = (releaseList) => {
  return releaseList.reduce((result, release) => {
    if (parseInt(release.rating) === 5.0) {
      result.push(release.id)
    }
    return result
  }, [])
}
console.log(getReleases(newReleases))

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
const findMaxSquareUrl = (imageList) => {
  return imageList.reduce((previousImage, currentImage) => {
    const previousSquare = previousImage.width * previousImage.height
    const currentSquare = currentImage.width * currentImage.height
    return previousSquare > currentSquare ? previousImage : currentImage
  }).url
}
console.log(findMaxSquareUrl(boxarts))
