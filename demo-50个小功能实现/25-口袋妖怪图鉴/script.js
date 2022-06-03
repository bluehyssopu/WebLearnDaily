// 选中容器 向容器中增加子元素
const poke_container = document.getElementById('poke-container')
// 150只
const pokemon_count = 150
// 以颜色作为 口袋妖怪属性标识
const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}

const main_types = Object.keys(colors)

// for循环 得到图鉴编号id 
const fetchPokemons = async () => {
  for(let i=1; i<=pokemon_count; i++) {
    await getPokemon(i)
  }
}

// 通过id拼接url 得到一个json对象
const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const res = await fetch(url)
  const data = await res.json()
  console.log(data);
  createPokemonCard(data)
}

// 利用对象中的信息  图鉴中口袋妖怪的name和type
const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement('div')
  pokemonEl.classList.add('pokemon')

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
  // console.log(name);
  const id = pokemon.id.toString().padStart(3, '0')
  // console.log(id);
  const poke_types = pokemon.types.map(type => type.type.name)
  // 妖怪属性
  const type = main_types.find(type => poke_types.indexOf(type) > -1)
  // 图鉴背景颜色
  const color = colors[type]

  pokemonEl.style.backgroundColor = color

  // 原链接为 https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon 换了下cdn
  const pokemonInnerHTML = `
  <div class="img-container">
      <img src="https://raw.staticdn.net/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"" alt="${name}">
  </div>
  <div class="info">
      <span class="number">#${id}</span>
      <h3 class="name">${name}</h3>
      <small class="type">Type: <span>${type}</span> </small>
  </div>
  `

  pokemonEl.innerHTML = pokemonInnerHTML
  poke_container.appendChild(pokemonEl)
}

fetchPokemons()