// let obj={
//  name:"Devendra",
//      age:"13",
//      address:"GGN"
//  }


//  console.log(obj.name)

//  obj.age=24

//  console.log(obj)

//  const para=document.getElementsByClassName("para")
//  para[0].textContent="This is updated para"
//  para[1].style.color="red"
//  console.info(para)


//  let obj={
//      name:"yash",
//      section:"FSDB",
//      phone:8675754645
//  }

//  let obj2={
//      name:"alex",
//      section:"FSDB",
//      phone:8675754645
//  }

//  obj.name="Aditya"
//  console.log(obj)

//  console.log(document)

//  const para=document.getElementById("para")
//  para.textContent="This is updated one"
//  para.style.color="green"
//  console.log(para)

//  const para2=document.getElementsByClassName("para") //return HTMLCollection
//  para[0].textContent="This is updated one"
//  para[1].style.color="green"
//  console.log(para2)

//  const para=document.querySelector(".para")
//  para.innerText="This is updated one"
//  para.style.color="green"
//  console.log(para)

//  const para=document.querySelectorAll(".para") //return NodeList 
//  para[0].textContent="This is updated one"
//  para[1].style.color="green"
//  console.log(para)

//  let arr=[234,345,456,2342,346]

//  const newArrr=arr.map(function(ele){
//      return ele*2
//  })
//  console.log(newArrr)
//  arr.forEach(function(ele){
//      console.log(ele)

//  })

//  const container=document.querySelector(".container")
//  container.innerHTML="<h1>This is a heading</h1>"
//  console.log(container)

//  const button=document.querySelector("button")
//  button.classList.add("btn")
//  button.classList.add("btn2")
 // button.classList.remove("btn2")


//  function show(event){
//      console.log(event)
//      alert("You have clicked the button")
//  }

//  button.addEventListener('click',show)
//  button.removeEventListener('click',show)

//  const btn=document.querySelector("#btn")
//  const stop=document.querySelector("#stop")


//  btn.addEventListener('keydown',(event)=>{
//      console.log(event.key)
//  })
//  btn.addEventListener('keyup',(event)=>{
//      console.log(event.key)
//  })
//  stop.addEventListener('click',function(){
//      btn.removeEventListener('click',show)
//  })

//  const form=document.querySelector("form")
//  form.addEventListener('submit',(event)=>{
//      event.preventDefault()
//      console.log(event.target[0].value)
//      console.log(event.target[1].value)
//      console.log(event)
//      console.log("button Clicked")
//  })

//  console.log("Updated code")

//  debugger
//  console.log(a)
//  console.log(b)

//  debugger
//  var a=3453
//  let b=456;  //script scope for let and const

//  console.log(a)
//  console.log(b)

//  function print(){
//      let c=40
//      console.log("Inside fn")
//  }

//  console.log(c)
//  print()



//  function first(){
//      second()
//  }
//  function second(){
//      third()
//  }
//  function third(){
//      console.trace()
//  }
//  first()

//  function infinite(){
//      infinite()
//  }

//  infinite()

//  console.log(a)//TDZ
//  console.log(b)  


//  let a=34;
// //  var b=78

//  let total=345;

//  function calculate(){
//      console.log(total)
//      var total=565
//      console.log(total)
//  }

//  calculate()


// console.log("This is the beginning of the code")
// const timeout=setTimeout(()=>{console.log("After 2 sec")},2000)
// clearTimeout(timeout)
// console.log("This is the end of the code")

// const interval=setInterval(()=>{console.log("Printing at every two seconds")},2000)

// setTimeout(()=>{clearInterval(interval)},10000)

// const interval2=setInterval(()=>{console.log("Printing at every two seconds")},2000)
// console.log(interval2)



// let count=0;

// const interval=setInterval(()=>{
//     count+=1
//     console.log(count)
//     if(count===10){
//         clearInterval(interval)
//     }
// },1000)

// console.log("First line")
// setTimeout(()=>console.log("inside timeout"),0)

// console.log("last line")


// const studentName=document.querySelector('#name')
// const button=document.querySelector('.btn')
// const list=document.querySelector('.list')


// button.addEventListener('click',()=>{

//     //creating the element
//    const li= document.createElement('li')
//    const deleteButton= document.createElement('button')
//     //providing the text
//     li.innerText=studentName.value
//     deleteButton.innerText="Delete"

//     deleteButton.addEventListener('click',()=>{
//         // li.remove()
//         list.removeChild(li)
//     })

//     li.appendChild(deleteButton)
//     list.appendChild(li)
//     studentName.value=""
// })

// function print(name){ //callback fn
//     console.log("inside print",name)
// }

// function greet(print){ //higher order fn
//     setTimeout(()=>{
//         console.log("Hello students")
//         let name="Yash"
//         print(name)
//     },2000)
    
// }

//  greet(print)

// const p= new Promise((res,rej)=>{
//    console.log("Going to do the homework!!")

//    setTimeout(()=>{
//     const done=true;
//     if(done){
//         res("Success")
//     }else{
//         rej("Failed to fetch Data from the server")
//     }
//    },3000)
// })

// p.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })


//     if (!Response.ok){
//     throw new error("something went wrong")
// }


// alert("hellow lord");
// alert("worning to do !");
// alert("lets play");
// alert("play safe!");
// alert("hi hi hi by by by")
// alert("play duviug!");
// alert("hi viboboo by")


let heading=document.getElementById("maintitle");
console.log(heading.textContent);

let paragraph=document.getElementsByClassName("para");
console.log(paragraph[0].textContent);



let card=document.querySelector(".container");
console.log(card.textContent);



let diver=document.querySelectorAll("dive");
console.log(diver.textContent);


document.getElementById("why").innerText="how are you";
document.getElementById("box").innerHTML=" <strong>are you here</strong>";
document.getElementById("photo").textContent="you are best";

document.getElementById("div1");
document.getElementById("btn").addEventListener("click",function(){
    alert("butten was clicked");
});


// Element.addEventListener("click",function(event){                //problem
//     console.log(event);                               
// });




const button=document.getElementById("on");
const stopbtn=document.getElementById("stop");

function showmessage(){
    alert("message shown");
};
button.addEventListener("click",showmessage);
stopbtn.addEventListener("click",function(){
    button.removeEventListener("click",showmessage);
});

document.getElementById("btttt").addEventListener("mouseover",function(){
    alert(" button clicked early!");
});

document.getElementById("btt").addEventListener("mouseover",function(){
    alert("hover on button!");
});

const hoverbox=document.getElementById("hover-box");            //colour nahi aa raha 
hoverbox.addEventListener("mouseover",()=>{
    hoverbox.style.backgroundColor='red';
});

document.getElementById("key").addEventListener("keydown",function(event){
    alert("you pressed:" + event.key);
});
document.getElementById("key").addEventListener("keyup",function(event){
    alert("you released a key:" , event.key);
});


const keytype=document.getElementById("key-input");
keytype.addEventListener("keydown",(Event)=>{
    console.log('key presed:${Event.key}');
})


// const form=document.getElementById("myform");
// form.addEventListener("sumbit",function(event){
//     event.preventDefault();
//     alert("form sumbited");
// })



console.log("firstmessage");
setTimeout(()=>{
    console.log("secondmessage(after 2 sec)");
},2000);
console.log("thirdmessage")



console.log("showmessage");
// setInterval(() => {
//     console.log("showmessage")
// },2000);


function greet(name){
    console.log('hellow,${shara}!');
}
setTimeout(()=>{
    greet("shara");
},3000);


let count = 5;

console.log("Starting countdown...");

const countdownInterval = setInterval(() => {
  if (count > 0) {
    console.log(count);
    count--;
  } else {
    console.log("Blast off!");
    // Stop the interval from running again
    clearInterval(countdownInterval);
  }
}, 1000); // Run every 1 second


console.log("Scheduling a message for 5 seconds from now...");

// Schedule the message and store its ID
const timeoutId = setTimeout(() => {
  console.log("This message should not appear.");
}, 5000);

console.log(`Timeout has been scheduled with ID: ${timeoutId}`);

// After 2 seconds, cancel the first timeout
setTimeout(() => {
  clearTimeout(timeoutId);
  console.log(`Timeout ID ${timeoutId} has been cleared! The message will not appear.`);
}, 2000);




document.getElementById("outer").addEventListener("click",()=>{
    alert('outer div capturing');
},true);
document.getElementById("inner").addEventListener("click",()=>{
    alert('inner div ');
},true);
document.getElementById("button").addEventListener("click",()=>{
    alert('button clicked');
});



// document.getElementById("outer").addEventListener("click",()=>{
//     alert('outer div capturing');
// });
// document.getElementById("inner").addEventListener("click",()=>{
//     alert('inner div ');
// });
// document.getElementById("bt").addEventListener("click",()=>{
//     alert('button clicked');
// });



const Form=document.getElementById("myform");

Form.addEventListener('submit',function(event){
    event.preventDefault();
    alert("form submitted");
});



document.getElementById("outer").addEventListener("click",()=>{
    alert('outer div capturing');
});
document.getElementById("inner").addEventListener("click",()=>{
    alert('inner div ');
});
document.getElementById("bt").addEventListener("click",()=>{
    alert('button clicked');
});



let a=10;
var b=20;
const c=0;
console.log(window.a);
console.log(window.b);
console.log(window.c);

function greet(){
    var message="hellow user";
    console.log(message);
}

greet();
// console.log(message);  //problem ha 

let n=10;
console.log(window.n);

var h=20;
console.log(window.h);

let j=10;
console.log(window.j);


// let k=10;
// console.log(window.k);

// let u=10;
// console.log(window.u);

// let y=10;
// console.log(window.y);



function main(){
    console.log("main start");
    helper();
    console.log("main end");
}

function helper(){
    console.log("helper running");
}

main();



let total=100;
function calculate() {
    let total;
    console.log(total);
    total=50;
    console.log(total);
}
calculate();


// let Total=100;
// function calculate() {
//     let total;
//     console.log(Total);
//     total=50;
//     console.log(Total);
// }
// calculate();



// let l=10;
// console.log(window.l);

// let f=10;
// console.log(window.f);

// let s=10;
// console.log(window.s);


alert("biejnhtibv");
alert("bhjcijo")
alert("hbvdnl");
alert("bhjvino")