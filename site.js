
//welcome greeting

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


//secret message
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





