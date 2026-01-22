const para=document.getElementById("para")
para.textcontent="this is updated one"
para.style.color="green"
console.log(para)


const para=document.getElementByClassName("para")
para.textcontent="this is updated one"
para.style.color="green"
console.log(para)



const para=document.querySelectorALL(".para") //return nodelist
para[0].textcontent="this is updated one"
para[1].style.color="green"
console.log(para)



const container=document.querySelectorALL(".container")
container.innerHTML="<h1>this is a heading</h1>"
console.log(container)


 const button=document.querySelector("button")
 button.classList.add("btn")


function show(){
    alert("you have clicked the button")
}
button.addEventListner('mouseover',show)



const button=document.querySelector("button")
button.classList.add("btn")
button.classList.add("btn2")


function show(){
     alert("you have clicked the button")
 }

 button.addEventListner('click',show)
 Stop.addEventListner('click',Function(){
    btn.removeEventListner('click',show)
 })
 
 
const btn=document.querySelector("#btn")
btn.addEventListener('keyup',"event=>"{
    console.log(event.key)
})

const Form=document.querySelector("#form")
Form.addEventListener('keyup',(event)=>{
    event.preventDefault()
    console.log(event.target[0].value)
    console.log(event.target[1].value)
    console.log(event)
})










