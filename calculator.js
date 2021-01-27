'use strict';
// element selection, numbers
const no1 = document.querySelector('#btn-1');
const no2 = document.querySelector('#btn-2');
const no3 = document.querySelector('#btn-3');
const no4 = document.querySelector('#btn-4');
const no5 = document.querySelector('#btn-5');
const no6 = document.querySelector('#btn-6');
const no7 = document.querySelector('#btn-7');
const no8 = document.querySelector('#btn-8');
const no9 = document.querySelector('#btn-9');
const no0 = document.querySelector('#btn-0');
// element selection operators
const add1 = document.querySelector('#btn-add');
const sub1 = document.querySelector('#btn-subtract');
const mul1 = document.querySelector('#btn-multiply');
const div1 = document.querySelector('#btn-div');
const exp1 = document.querySelector('#btn-exponent');
const cl = document.querySelector('#clear1');
let result1 = document.querySelector('#result');
let current1 = document.querySelector('#current-calculation');
let final1 = document.querySelector('#current-result');
let currentmsg = document.querySelector('#msg1');
let historyMsg = document.querySelector('#msg2');
// final result message declaration
current1.textContent=0;
final1.textContent = 0;
// variable declaration
let num1 =0;
let num2 =0;
let num;
let sum;
let sub;
let mul;
let div;
let exp;
let currentmsgs = [];
// number display
const display1 = ()=> current1.textContent += 1;
const display2 = ()=> current1.textContent += 2;
const display3 = ()=> current1.textContent += 3;
const display4 = ()=> current1.textContent += 4;
const display5 = ()=> current1.textContent += 5;
const display6 = ()=> current1.textContent += 6;
const display7 = ()=> current1.textContent += 7;
const display8 = ()=> current1.textContent += 8;
const display9 = ()=> current1.textContent += 9;
const display0 = ()=> current1.textContent += 0;
function displaycl(){
    current1.textContent = 0; 
    final1.textContent = 0;
    currentmsg.textContent =0;
}
// onclick events
no1.addEventListener('click', display1);
no2.addEventListener('click', display2);
no3.addEventListener('click', display3);
no4.addEventListener('click', display4);
no5.addEventListener('click', display5);
no6.addEventListener('click', display6);
no7.addEventListener('click', display7);
no8.addEventListener('click', display8);
no9.addEventListener('click', display9);
no0.addEventListener('click', display0);
cl.addEventListener('click', displaycl);
// operators
add1.addEventListener('click',add11);
sub1.addEventListener('click',sub11);
mul1.addEventListener('click',mul11);
div1.addEventListener('click',div11);
exp1.addEventListener('click',exp11);
// exp1.addEventListener('click',ex);

result1.addEventListener('click', result);

function add11(){
 num1 = Number(current1.textContent);
 currentmsg.textContent = `${num1}`
 current1.textContent = 0;
 sum = true;
}
function sub11(){
    num1 = Number(current1.textContent);
    currentmsg.textContent = `${num1}`
    current1.textContent = 0;
    sub = true;
   }
   function mul11(){
    num1 = Number(current1.textContent);
    currentmsg.textContent = `${num1}`
    current1.textContent = 0;
    mul = true;
   }   
   function div11(){
    num1 = Number(current1.textContent);
    currentmsg.textContent = `${num1}`
    current1.textContent = 0;
    div = true;
   }
   function exp11(){
    num1 = Number(current1.textContent);
    currentmsg.textContent = `${num1}`
    current1.textContent = 0;
    exp = true;
   }

function result(){
        num2 = Number(current1.textContent);
       if(sum){
           num= num2+num1;
           
           final1.textContent = Number(String(num).slice(0,10));
           currentmsg.textContent = `${num1}+${num2}:${final1.textContent}`
           sum = false;
        currentmsgs.push( currentmsg.textContent);
           current1.textContent = 0;
        }else if(sub){
            num= num1-num2;
            sub = false;
            final1.textContent = Number(String(num).slice(0,10));
            currentmsg.textContent = `${num1}-${num2}:${final1.textContent}`
            currentmsgs.push( currentmsg.textContent);
            current1.textContent = 0;
        }else if(mul){
            num = num2*num1;          
            mul = false;
            final1.textContent = Number(String(num).slice(0,10)); 
            currentmsg.textContent = `${num1}*${num2}:${final1.textContent}`
            currentmsgs.push( currentmsg.textContent);
            current1.textContent = 0;
        }else if(div){
            num = num1 / num2;           
            div = false;
            final1.textContent = Number(String(num).slice(0,10));
            currentmsg.textContent = `${num1} % ${num2} : ${final1.textContent}`
            currentmsgs.push( currentmsg.textContent);
            current1.textContent = 0;
        }else if(exp){
            num =num2**num1;        
            exp = false;
            final1.textContent = Number(String(num).slice(0,10));
            currentmsg.textContent = `${num1} ^ ${num2} : ${final1.textContent}`
            currentmsgs.push( currentmsg.textContent);
           current1.textContent = 0;
}
}

// single operand operation

const square1 = document.querySelector('#btn-sqr');
const cube1 = document.querySelector('#btn-cube');
const squareRoot1 = document.querySelector('#btn-root');
const factorial1 = document.querySelector('#btn-factorial1');

square1.addEventListener('click',square11);
cube1.addEventListener('click',cube11);
squareRoot1.addEventListener('click',squareRoot11);
factorial1.addEventListener('click', factorial11);

function square11(){
    num1 = Number(current1.textContent);
    currentmsg.textContent = `${num1}` 
    num2 =2;   
    num =num1**2;   
    final1.textContent = Number(String(num).slice(0,10));;
    currentmsg.textContent = `${num1} ^ 2 : ${final1.textContent}`; 
    currentmsgs.push( currentmsg.textContent);
    current1.textContent = 0;
    }

    function cube11(){
        num1 = Number(current1.textContent);
        currentmsg.textContent = `${num1}` 
        num2 = 3;   
        num =num1**3;      
        final1.textContent = Number(String(num).slice(0,10));;
        currentmsg.textContent = `${num1} ^ 3 : ${final1.textContent} `; 
        currentmsgs.push( currentmsg.textContent);
        current1.textContent = 0;
        // let k1 =1;
    }
  
  function squareRoot11(){
    num1 = Number(current1.textContent);
    currentmsg.textContent = `${num1}`    
    num = Math.sqrt(num1);
    final1.textContent = Number(String(num).slice(0,10));;
    currentmsg.textContent = `sqrt(${num1}) : ${final1.textContent} `; 
    currentmsgs.push( currentmsg.textContent);
    current1.textContent = 0;
   
  }   

  function factorial11(){
    num1 = Number(current1.textContent);
    let fact = 1;
    for (let i = 1; i <= num1; i++) {
        fact *= i;
    }    
    final1.textContent = Number(String(fact).slice(0,10));; 
    currentmsg.textContent = `${num1}! : ${final1.textContent} `;
    currentmsgs.push( currentmsg.textContent);
}
const btnHist = document.querySelector('#btn-history');
// const clrHist = document.querySelector('#btn-clrhistort')
btnHist.addEventListener('click', history11);
// btnHist.addEventListener('click', clrhistory11);

function history11(){   
    if(currentmsgs.length < 10){
        currentmsgs.forEach((m,idx,currentmsgs)=>{
            let para = document.createElement("P");                       // Create a <p> node
            let text1 = document.createTextNode(`(${idx})  ${m}`);      // Create a text node
            para.appendChild(text1);                                          // Append the text to <p>
            document.getElementById("history1").appendChild(para); 
        // historyMsg.textContent = `(${idx})  ${m}`;
        });
    }else if(currentmsgs.length>9){
       currentmsgs.splice(0,currentmsgs.length-10);
       currentmsgs.forEach((m,idx,currentmsgs)=>{
        let para = document.createElement("P");                       // Create a <p> node
        let text2 = document.createTextNode(`(${idx})  ${m}`);      // Create a text node
        para.appendChild(text2);                                          // Append the text to <p>
        document.getElementById("history1").appendChild(para);         
        });
    }  
        }

        // function clrhistory11(){
        //     if(document.getElementById("history1").hasChildNodes){
        //         document.getElementById("history1").textContent = '';
        //     }
            
        // }

      
     
 


