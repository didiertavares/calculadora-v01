// estado da aplicação
const input = document.querySelector("input")

const p = document.querySelector("p")

const inputContent = []

let newEntry


function int1() {
    newEntry = 1
    inputContent.push(newEntry)
    console.log(inputContent)
    input.value = inputContent.join("")
    console.log(inputContent.join(""))
}
function int2() {
    newEntry = 2
    inputContent.push(newEntry)
    console.log(inputContent)
    input.value = inputContent.join("")
    console.log(inputContent.join(""))
}
function int3() {
    newEntry = 3
    inputContent.push(newEntry)
    console.log(inputContent)
    input.value = inputContent.join("")
    console.log(inputContent.join(""))
}
function int4() {
    newEntry = 4
    inputContent.push(newEntry)
    console.log(inputContent)
    input.value = inputContent.join("")
    console.log(inputContent.join(""))
}
function int5() {
    newEntry = 5
    inputContent.push(newEntry)
    console.log(inputContent)
    input.value = inputContent.join("")
    console.log(inputContent.join(""))
}
function int6() {
    newEntry = 6
    inputContent.push(newEntry)
    console.log(inputContent)
    input.value = inputContent.join("")
    console.log(inputContent.join(""))
}
function int7() {
    input.value =newEntry = 7
    inputContent.push(newEntry)
    console.log(inputContent)
    input.value = inputContent.join("")
    console.log(inputContent.join(""))
}
function int8() {
    newEntry = 8
    inputContent.push(newEntry)
    console.log(inputContent)
    input.value = inputContent.join("")
    console.log(inputContent.join(""))
}
function int9() {
    newEntry = 9
    inputContent.push(newEntry)
    console.log(inputContent)
    input.value = inputContent.join("")
    console.log(inputContent.join(""))
}
function int0() {
    newEntry = 0
    inputContent.push(newEntry)
    console.log(inputContent)
    input.value = inputContent.join("")
    console.log(inputContent.join(""))
}
function comma() {
    newEntry = "."
    inputContent.push(newEntry)
    console.log(inputContent)
    input.value = inputContent.join("")
    console.log(inputContent.join(""))
}
function addition()  {
    newEntry = ('  +  ')
    input.value = inputContent.join("") + newEntry
    console.log(input.value)
}