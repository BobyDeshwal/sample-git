// const para=document.getElementById("para")
// para.textcontent="this is updated one"
// para.style.color="green"
// console.log(para)


// const para=document.getElementByClassName("para")
// para.textcontent="this is updated one"
// para.style.color="green"
// console.log(para)



// const para=document.querySelectorALL(".para") //return nodelist
// para[0].textcontent="this is updated one"
// para[1].style.color="green"
// console.log(para)



// const container=document.querySelectorALL(".container")
// container.innerHTML="<h1>this is a heading</h1>"
// console.log(container)


//  const button=document.querySelector("button")
//  button.classList.add("btn")


// function show(){
//     alert("you have clicked the button")
// }
// button.addEventListner('mouseover',show)



// const button=document.querySelector("button")
// button.classList.add("btn")
// button.classList.add("btn2")


// function show(){
//      alert("you have clicked the button")
//  }

//  button.addEventListner('click',show)
//  Stop.addEventListner('click',Function(){
//     btn.removeEventListner('click',show)
//  })
 
 
// const btn=document.querySelector("#btn")
// btn.addEventListener('keyup',"event=>"{
//     console.log(event.key)
// })

// const Form=document.querySelector("#form")
// Form.addEventListener('keyup',(event)=>{
//     event.preventDefault()
//     console.log(event.target[0].value)
//     console.log(event.target[1].value)
//     console.log(event)
// })


// var a=3453
// print()



// let b=456;

// console.log(a)
// console.log(b)


// function print(){
//     console.log("inside fn")
// }

// print()




// calculate()

// console.log("this is the bigning of code")
// settimeout(()=>{console.log("After 2 sec")},2000)
// clearTimeout(Timeout)
// console.log("this is the end of code")


// setInterval(()=>{console.log("print at every two seconds")},2000)
// console.log(interval12)


// const setInterval(()=>{console.log("print at every two seconds")},2000)
// settimeout(()=>{clearinterval(interval)})


// let count=0;

// constinterval=setInterval(()=>{
//     count+=1
//     console.log(count)
//     if (count==10){
//         clearInterval(interval)
//     }
// },1000)


// const studentname=document.queryselector('#name')
// const button=document.quarryselector('.btn')
// const list=document.quarryselector('.list')

// const li=document.createElement('li')
// const deletebutton=document.createElement('button')
// li.innertext=studentname.value
// deletebutton.innertext="delete"

// deletebutton.addeventlistner('click',()=>{
//     list.removechild(li)
// })

// button.addEventListner('click',()=>{
//     const li=document.createElement('li')
//     li.innerText=studentname.value
//     li.appendchild(deletebutton)
//     list.appendchild(li)
//     studentname.value=""
// })


// function print(){
//     console.log("inside print")
// }
// function greet(print){//higher order function
//     settimeout(()=>{
//         console.log("hello students")
//     },2000)
// }
// greet(print)


// console.log("starting homework");

// setTimeout(()=>{
//     console.log("homework done!");
//     console.log("starting dinner");

//     setTimeout(()=>{
//         console.log("dinner done!");
//         console.log("getting ready to go out");

//         setTimeout(()=>{
//             console.log("getting ready to go playground");
//         },1000);
//     },1500);

// },2000);



const p=new Promise((resolve,reject)=>{
   console.log("going to homework")

   settimeout(()=>{
    const done=true;
    if(done){
        resolve("succes")
    }else{
        reject("failed to fetch data from the server")
    }
   },3000)
})

p.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})



