// estado da aplicação
const display = document.querySelector("p")
const keypad = document.querySelectorAll('.key')
const mathOps = document.querySelectorAll('.op')
const button = document.querySelector('button')
const enterButton = document.getElementById('enter')

let result
const data = []
let dataFormatted

let savedData1
let savedData2

let keyValue
let operValue

keypad.forEach(button => {
    button.addEventListener('click', function() {
        keyValue = this.value
        console.log(result)
        console.log('clicked button value:', keyValue)
        data.push(keyValue)
        console.log(data)
        dataFormatted = Number(data.join(''))
        display.innerText = dataFormatted
        console.log(typeof dataFormatted)
        console.log(dataFormatted)
        // console.log(result)
    })
})

function deleteNumber() {
    data.pop()
    dataFormatted = Number(data.join(''))
    display.innerText = dataFormatted
}

mathOps.forEach(button => {
    button.addEventListener('click', function() {
        if (savedData1 == null) {
            savedData1 = dataFormatted
        } else {
            // do nothing
        }
        console.log(savedData1)
        console.log(savedData2)
        data.length = 0
        console.log(data)
        operValue = this.value
        display.innerHTML = operValue
        console.log('clicked button value:', operValue)

    })
})

function displayResult() {
    if (Number.isInteger(result)) {
        display.innerText = result
    } else {
        display.innerText = result.toFixed(2)
    }
}

function calculus() {
    savedData2 = dataFormatted
    console.log(savedData2)
    if (operValue === "+") {
        result = savedData1 + savedData2
    } else if (operValue === "-") {
        result = savedData1 - savedData2
    } else if (operValue === "*") {
        result = savedData1 * savedData2
    } else if (operValue === "/") {
        if (savedData2 === 0) {
            result = "error"
        } else {
            result = savedData1 / savedData2
        }
    } else if (operValue ==='²') {
        result = savedData1 ** 2
    } else if (operValue ==='yˣ') {
        result = savedData1 ** savedData2
    } else {
        result = Math.sqrt(savedData1)
    }
    console.log(result)
    displayResult()
    savedData1 = result
    operValue = null
    result = null
}

enterButton.addEventListener('click', calculus)