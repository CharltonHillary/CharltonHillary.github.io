
//welcome greeting-----

const hours = new Date().getHours() // get the current hour
const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

let greeting;
    if (isMorning) {
        greeting = "Good Morning!";
    } else if (isAfternoon) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    
const welcome = document.querySelector('#welcome')
welcome.textContent = greeting


//secret message------
const key = "It's a secret to everybody."
const question = 'Why did the yogurt go to the art exhibition?'
const answer = '- Because it was cultured.'

const message = { question, answer }
    localStorage.setItem(key, JSON.stringify(message))

const data = localStorage.getItem(key)
try {
    const { question, answer } = JSON.parse(data)
    console.log(question)
    console.log(answer)

}
catch {
    console.log('Invalid json in local storage')
}

//carousel-----
const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')


let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
        
    })
}

const next = document.getElementById('next')
const prev = document.getElementById('prev')

const nextImageSet = () =>{currentImage = (currentImage + 3) % urls.length, showImages()}
const prevImageSet = () =>{currentImage = (currentImage - 3) % urls.length, showImages()}

next.addEventListener('click', () => nextImageSet())
prev.addEventListener('click', () => prevImageSet())

setInterval(() => nextImageSet(), 5000)

showImages()

//to-do list -----

 const todoList = document.querySelector('.todo-list')
 const input = document.querySelector('#new-todo')
 const addBtn = document.querySelector('#btn-add')


// Get the list from local storage
const todos = JSON.parse(localStorage.getItem('.todo-list')) || []

//Arrow function
const renderTodos = () => {
    // Clear the li's before we recreate them
    todoList.innerHTML = ''

    // Create and add new list items to the DOM
    todos.forEach(todo=> {
    const li = document.createElement('li')
    li.textContent = todo.text
    todoList.append(li)
    })
}

//Load list when page is refreshed
renderTodos();


// Add a new item to the list
addBtn.addEventListener('click', () =>{

    todos.push({ text: input.value, completed: false })

    // Save the list to local storage
    localStorage.setItem('.todo-list', JSON.stringify(todos))
    renderTodos();

})

//pokemon API Fetch


    const getRandomPokemon = async ()=> {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150)

    try{

    const response = await fetch(url)
    const pokemon = await response.json()
    return pokemon;

        }catch(error){
            console.log(error)
        }

    }


const renderPokemon = (pokemon) => {
const parentElement = document.getElementById('sprite')

const img = document.createElement('img')
img.src = pokemon.sprites.front_default;
img.alt = pokemon.name;
parentElement.append(img)
}

 (async () => {    
    const randomPokemon = await getRandomPokemon();
     if (randomPokemon)
        {
            renderPokemon(randomPokemon)
        }
  
})() 




