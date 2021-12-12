// 6
// Написать асинхронную функцию, которая делает запрос на
// https://pokeapi.co/api/v2/pokemon и в консоль выводит массив полученых покемонов

async function getPokemons() {
  let response = await fetch('https://pokeapi.co/api/v2/pokemon')
  console.log(response)
  let result = await response.json()
  console.log(result.results)
}
getPokemons()
// 7
// Написать асинхронную функцию, которая в качестве параметра получает имя покемона,
// и делает запрос на получение подробной информации о нём.
// Как должен выглядеть запрос для получение данной информации вы сможете найти
// на сайте апишки покемонов.

// В случае, если покемон найден не будет, в консоль выводить сообщение
// ‘Покемон, по имени <имя запрошенного покемона> не найден.’
async function getPokemonInfo(name) {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  if (response.ok) {
    let result = await response.json()
    console.log(result)
  } else {
    console.log(`Покемон по имени ${name} не найден`)
  }
}
getPokemonInfo('bulbasaur')

getPokemonInfo('бормбормор')

// 8
// Написать асинхронную функцию которая делает запрос на адрес,
// который предоставлен в первой задаче. Как вы могли заметить, результатом этого запроса
// является массив объектов с двумя полями, имя покемона и url.
// url каждого элемента массива позволит вам получить подробную информацию о покемоне.
// Результатом выполнения вашей функции должен быть массив из объектов,
// в которых хранится подробная информация о покемоне.
async function getPokemonsDescription() {
  const pokemonsResponse = await fetch('https://pokeapi.co/api/v2/pokemon')
  const pokemonsResult = await pokemonsResponse.json()
  console.log('pokemonsResult', pokemonsResult.results)
  let array = []
  const description = pokemonsResult.results.reduce(async (result, pokemon) => {
    const { name, url } = pokemon
    const response = await fetch(url)
    const description = await response.json()
    const obj = { name: name, description: description }
    array.push(obj)
    return (result = [...array])
  }, [])
  const descriptionResponse = await description
  console.log('descriptionResponse', descriptionResponse)
}
// 9	Написать функцию которая принимает 2 аргумента. 1 – любое значение, 2 - задержка
// const getValue = (value, delay) => {
//     setTimeout(() => console.log(value), delay)
// }
// console.log(getValue('Hello', 2000))
// console.log(getValue('World', 5000))
