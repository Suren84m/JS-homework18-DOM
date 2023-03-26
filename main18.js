let arr = ["Navy","Aqua","Lime","Olive","Yellow","Maroon","Purple","Fuchsia","Brown",
"Goldenrod","Indigo","DarkMagenta","DeepSkyBlue","OrangeRed","DeepPink","DarkGreen",
"Aquamarine","MistyRose","LightSlateGray","Teal"];

let key = document.body.style
setInterval(() =>key.background = arr[Math.floor(Math.random()*arr.length)], 200);

let key_1 = document.body.firstElementChild.style
setInterval(()=>key_1.background = arr[Math.floor(Math.random()*arr.length)],200);

let circle_1 = document.body.firstElementChild.firstElementChild.childNodes[1].style
setInterval(()=>circle_1.background = arr[Math.floor(Math.random()*arr.length)],200);

let circle_2 = document.body.firstElementChild.firstElementChild.childNodes[3].style;
setInterval(()=>circle_2.background = arr[Math.floor(Math.random()*arr.length)],200);

let circle_3 = document.body.firstElementChild.firstElementChild.childNodes[5].style;
setInterval(()=>circle_3.background = arr[Math.floor(Math.random()*arr.length)],200);

let circle_4 = document.body.firstElementChild.firstElementChild.childNodes[7].style
setInterval(()=>circle_4.background = arr[Math.floor(Math.random()*arr.length)],200);



let circle_5 = document.body.firstElementChild.firstElementChild.nextElementSibling.childNodes[1].style
setInterval(()=>circle_5.background = arr[Math.floor(Math.random()*arr.length)],200);

let circle_6 = document.body.firstElementChild.firstElementChild.nextElementSibling.childNodes[3].style
setInterval(()=>circle_6.background = arr[Math.floor(Math.random()*arr.length)],200);

let circle_7 = document.body.firstElementChild.firstElementChild.nextElementSibling.childNodes[5].style
setInterval(()=>circle_7.background = arr[Math.floor(Math.random()*arr.length)],200);

let circle_8 = document.body.firstElementChild.firstElementChild.nextElementSibling.childNodes[7].style
setInterval(()=>circle_8.background = arr[Math.floor(Math.random()*arr.length)],200);



let circle_9 = document.body.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.childNodes[1].style
setInterval(()=>circle_9.background = arr[Math.floor(Math.random()*arr.length)],200);

let circle_10 = document.body.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.childNodes[3].style
setInterval(()=>circle_10.background = arr[Math.floor(Math.random()*arr.length)],200);

let circle_11 = document.body.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.childNodes[5].style
setInterval(()=>circle_11.background = arr[Math.floor(Math.random()*arr.length)],200);

let circle_12 = document.body.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.childNodes[7].style
setInterval(()=>circle_12.background = arr[Math.floor(Math.random()*arr.length)],200);



console.log( document.body.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.lastElementChild);





// for(let i=1;i<document.body.childNodes.length;i+=2){
//     for (let j = 1; j < document.childNodes[i].childNodes.length; j+=2) {
//        setInterval(()=>document.body.childNodes[i].childNodes[j].style.background=arr[Math.floor(Math.random()*arr.length)],100);
//        setInterval(() =>document.body.childNodes[i].childNodes[j].style.background=arr[Math.floor(Math.random()*arr.length)],300);
//        setInterval(() =>document.body.childNodes[i].childNodes[j].style.background=arr[Math.floor(Math.random()*arr.length)],500);
       
//     }
// }