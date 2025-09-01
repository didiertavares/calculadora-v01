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
        console.log('clicked button value:', keyValue)
        data.push(keyValue)
        console.log(data)
        dataFormatted = Number(data.join(''))
        display.innerText = dataFormatted
        console.log(typeof dataFormatted)
        savedData1 = dataFormatted
        console.log(savedData1)
    })
})

mathOps.forEach(button => {
    button.addEventListener('click', function() {
        
        data.length = 0
        console.log(data)
        operValue = this.value
        display.innerHTML = operValue
        console.log('clicked button value:', operValue)

    })
})

function calculus() {
    if (operValue === '+') {
        result = savedData1 + dataFormatted
    } else if (operValue === "-") {
        result = savedData1 - dataFormatted
    } else if (operValue === "*") {
        result = savedData1 * dataFormatted
    } else {
        if (dataFormatted === 0) {
            result = "Error"
        } else {
            result = savedData1 / dataFormatted
        }
    }
    console.log(result)
    display.innerText = result
    savedData1 = result
    data.length = 0
    console.log(data)
}

enterButton.addEventListener('click', calculus)

// function decimalSeparator() {
//     newEntry = "."
//     inputContent.push(newEntry)
//     console.log(inputContent)
//     input.value = inputContent.join("")
//     console.log(inputContent.join(""))
// }
// function addition()  {
//     newEntry = ('  +  ')
//     data1 = inputContent.join("")
//     input.value = newEntry
//     p.innerText = data1
//     console.log(input.value)
// }