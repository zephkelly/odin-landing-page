"use strict" // name = 5; no longer allowed

let myName = "John"
let a = 10

console.log(myName + " is a cool guy")
console.log()
console.log((4 * a + 6 * a + 9 * a) / (77 * a))
console.log()

const greeting = "hello"
const person = "Greg"

console.log(`${greeting} ${person}`)
console.log()

const button = document.querySelector("button")
button.addEventListener("click", Signup)

let text = "ABCDEFGHIJK,LMNOPQRSTUVWXYZ"
let length = text.length

function Signup() {
  const name = prompt("Who's there?")

  if (name.toLowerCase() === "cancel") {
    alert("Goodbye!")
    return
  }
  if (name.toLowerCase() !== "admin") {
    alert("I don't know you")
    return
  }

  const password = prompt("Password?")

  if (password.toLowerCase() === "cancel") {
    alert("Goodbye!")
    return
  }
  if (password !== "TheMaster") {
    alert("Wrong password")
    return
  }

  alert("Welcome!")
}

console.log(
  "the following are slices:",
  text.slice(2, 8),
  text.slice(-22),
  text.slice(13)
)

console.log()

console.log("the following is a substring:", text.substring(2, 8))

console.log()

console.log("the following is a replace:", text.replace("ABCDEFG", "1234567"))

let txt2 = text.padStart(20, "0")
console.log("the following is a padStart:", txt2)

console.log()

console.log("char at:", text.charAt(4))

console.log()

let character = text[4]

console.log("split:", text.split(",")) //split via commas
console.log("char split:", character.split("")) //split into individual characters
