   function Nãoguerreiroz2(){

  fetch("main.php")
 .then(resposta => resposta.json())
 .then(data => {const area = document.getElementById("DragonBall");
area.innerHTML = `<div class="card" style=" width: 50%;  background-color: black ;">
  <img class="card-img-top" src="img/erro650.png"  alt="Imagem de capa do card">
  <div class="card-body" style="background-color: black;">
    <h5 class="card-title" style="color: white;">Você não é um guerreiro Z</h5>
    <p  class="card-text" style="color: white;"></p>
  </div>
</div>`
 })
 .catch(erro =>{ alert("erro ao encaminhar resposta");
  console.log(alert("erro ao encaminhar resposta", erro));
 })
 
}
       function MestreKame2(){
        fetch("main.php")
        .then(resposta => resposta.json())
        .then(data =>{const area = document.getElementById("DragonBall")
            area.innerHTML = `<div class="card" style=" width: 50%;  background-color: orangered ;">
  <img class="card-img-top" src="img/MestreKame650.jpg"  alt="Imagem de capa do card">
  <div class="card-body" style="background-color: orangered;">
    <h5 class="card-title" style="color: white;">Você é o Mestre Kame</h5>
    <p  class="card-text" style="color: white;">${data.MestreKame}</p>
  </div>
</div>`
        })
       .catch(erro =>{ alert("erro ao encaminhar resposta");
  console.log(alert("erro ao encaminhar resposta", erro));
 })
    }
function Androide172(){
   fetch("main.php")
    .then(resposta => resposta.json())
    .then(data => {const area = document.getElementById("DragonBall")
    area.innerHTML = `<div class="card" style=" width: 50%;  background-color: green ;">
  <img class="card-img-top" src="img/android17.avif"  alt="Imagem de capa do card">
  <div class="card-body" style="background-color: green;">
    <h5 class="card-title" style="color: white;">Você é o Androide 17</h5>
    <p  class="card-text" style="color: white;">${data.Androide17}</p>
  </div>
</div>`
    })
    .catch(erro =>{ alert("erro ao encaminhar resposta");
  console.log(alert("erro ao encaminhar resposta", erro));
 }) 
}

function MajinBoo2(){
   fetch("main.php")
    .then(resposta => resposta.json())
    .then(data => {const area = document.getElementById("DragonBall")
    area.innerHTML = `<div class="card" style=" width: 50%;  background-color: rgb(224, 7, 79) ;">
  <img class="card-img-top" src="img/MajinBoo650.webp"  alt="Imagem de capa do card">
  <div class="card-body" style="background-color: rgb(224, 7, 79);">
    <h5 class="card-title" style="color: white;">Você é o Majin Boo</h5>
    <p  class="card-text" style="color: white;">${data.MajinBoo}</p>
  </div>
</div>`
    })
    .catch(erro =>{ alert("erro ao encaminhar resposta");
  console.log(alert("erro ao encaminhar resposta", erro));
 }) 
}
function Tenshinhan2(){
   fetch("main.php")
    .then(resposta => resposta.json())
    .then(data => {const area = document.getElementById("DragonBall")
    area.innerHTML = `<div class="card" style=" width: 50%;  background-color: green ;">
  <img class="card-img-top" src="img/Tenshinhan650.webp"  alt="Imagem de capa do card">
  <div class="card-body" style="background-color: green;">
    <h5 class="card-title" style="color: white;">Você é o Tenshinhan</h5>
    <p  class="card-text" style="color: white;">${data.Tenshinhan}</p>
  </div>
</div>`
    })
    .catch(erro =>{ alert("erro ao encaminhar resposta");
  console.log(alert("erro ao encaminhar resposta", erro));
 })
}
function Chaos2(){
   fetch("main.php")
    .then(resposta => resposta.json())
    .then(data => {const area = document.getElementById("DragonBall")
    area.innerHTML = `<div class="card" style=" width: 50%;  background-color: green ;">
  <img class="card-img-top" src="img/Chaos650.jpg"  alt="Imagem de capa do card">
  <div class="card-body" style="background-color: green;">
    <h5 class="card-title" style="color: white;">Você é o Chaos</h5>
    <p  class="card-text" style="color: white;">${data.Chaos}</p>
  </div>
</div>`
    })
    .catch(erro =>{ alert("erro ao encaminhar resposta");
  console.log(alert("erro ao encaminhar resposta", erro));
 }) 
}
function Tenshinhan2(){
   fetch("main.php")
    .then(resposta => resposta.json())
    .then(data => {const area = document.getElementById("DragonBall")
    area.innerHTML = `<div class="card" style=" width: 50%;  background-color: green ;">
  <img class="card-img-top" src="img/Tenshinhan650.webp"  alt="Imagem de capa do card">
  <div class="card-body" style="background-color: green;">
    <h5 class="card-title" style="color: white;">Você é o Tenshinhan</h5>
    <p  class="card-text" style="color: white;">${data.Tenshinhan}</p>
  </div>
</div>`
    })
    .catch(erro =>{ alert("erro ao encaminhar resposta");
  console.log(alert("erro ao encaminhar resposta", erro));
 })
}
function Goten2(){
   fetch("main.php")
    .then(resposta => resposta.json())
    .then(data => {const area =document.getElementById("DragonBall");
    area.innerHTML = `<div class="card" style=" width: 50%;  background-color: orangered ;">
  <img class="card-img-top" src="img/Goten650.webp"  alt="Imagem de capa do card">
  <div class="card-body" style="background-color: orangered ;">
    <h5 class="card-title" style="color: white;">Você é o Goten</h5>
    <p  class="card-text" style="color: white;">${data.Goten}</p>
  </div>
</div>`})
.catch(erro =>{ alert("erro ao encaminhar resposta");
  console.log(alert("erro ao encaminhar resposta", erro));
 });

}
function Trunsks2(){
    fetch("main.php")
    .then(resposta => resposta.json())
    .then(data => {const area =document.getElementById("DragonBall");
    area.innerHTML = `<div class="card" style=" width: 50%;  background-color: blue ;">
  <img class="card-img-top" src="img/Trunsks650.webp"  alt="Imagem de capa do card">
  <div class="card-body" style="background-color: blue ;">
    <h5 class="card-title" style="color: white;">Você é o Trunsks</h5>
    <p  class="card-text" style="color: white;">${data.Trunsks}</p>
  </div>
</div>`})
.catch(erro =>{ alert("erro ao encaminhar resposta");
  console.log(alert("erro ao encaminhar resposta", erro));
 });
}
function Yamcha2(){
   fetch("main.php")
    .then(resposta => resposta.json())
    .then(data => {const area =document.getElementById("DragonBall");
    area.innerHTML = `<div class="card" style=" width: 50%;  background-color: orangered ;">
  <img class="card-img-top" src="img/Yamcha650.jpg"  alt="Imagem de capa do card">
  <div class="card-body" style="background-color: orangered ;">
    <h5 class="card-title" style="color: white;">Você é o Yamcha</h5>
    <p  class="card-text" style="color: white;">${data.Yamcha}</p>
  </div>
</div>`})
.catch(erro =>{ alert("erro ao encaminhar resposta");
  console.log(alert("erro ao encaminhar resposta", erro));
 });

}

function Goku2(){
    
    fetch("main.php")
    .then(resposta => resposta.json())
    .then(data => {const area =document.getElementById("DragonBall");
    area.innerHTML = `<div class="card" style=" width: 50%;  background-color: orangered ;">
  <img class="card-img-top" src="img/Goku650.webp"  alt="Imagem de capa do card">
  <div class="card-body" style="background-color: orangered ;">
    <h5 class="card-title" style="color: white;">Você é o Goku</h5>
    <p  class="card-text" style="color: white;">${data.Goku}</p>
  </div>
</div>`})
.catch(erro =>{ alert("erro ao encaminhar resposta");
  console.log(alert("erro ao encaminhar resposta", erro));
 });

}
function Androide182(){
  fetch("main.php")
  .then(responde => responde.json())
  .then(data =>{const area = document.getElementById("DragonBall");
  area.innerHTML = `<div class="card" style=" width: 50%;  background-color: blue ;">
<img class="card-img-top" src="img/android18.avif"  alt="Imagem de capa do card">
<div class="card-body" style="background-color: blue;">
<h5 class="card-title" style="color: white;">Você é o Androide 18</h5>
<p  class="card-text" style="color: white;">${data.Androide18}</p>
</div>
</div>`
  })
  .catch(erro =>{ alert("erro ao encaminhar resposta");
console.log(alert("erro ao encaminhar resposta", erro));
});
}
   function Vegeta2(){

  fetch("main.php")
 .then(resposta => resposta.json())
 .then(data => {const area = document.getElementById("DragonBall");
area.innerHTML = `<div class="card" style=" width: 50%;  background-color: blue ;">
  <img class="card-img-top" src="img/Vegeta650.jpg"  alt="Imagem de capa do card">
  <div class="card-body" style="background-color: blue;">
    <h5 class="card-title" style="color: white;">Você é o Vegeta</h5>
    <p  class="card-text" style="color: white;">${data.Vegeta}</p>
  </div>
</div>`
 })
 .catch(erro =>{ alert("erro ao encaminhar resposta");
  console.log(alert("erro ao encaminhar resposta", erro));
 })
 
}
 function Broly2(){
    fetch("main.php")
    .then(resposta => resposta.json())
    .then(data => {const area = document.getElementById("DragonBall")
    area.innerHTML = `<div class="card" style=" width: 50%;  background-color: green ;">
  <img class="card-img-top" src="img/broly650.webp"  alt="Imagem de capa do card">
  <div class="card-body" style="background-color: green;">
    <h5 class="card-title" style="color: white;">Você é o Broly</h5>
    <p  class="card-text" style="color: white;">${data.Broly}</p>
  </div>
</div>`
    })
    .catch(erro =>{ alert("erro ao encaminhar resposta");
  console.log(alert("erro ao encaminhar resposta", erro));
 })
    }
    function Yajirobe2(){
      fetch("main.php")
      .then(resposta => resposta.json())
      .then(data =>{const area = document.getElementById("DragonBall")
          area.innerHTML = `<div class="card" style=" width: 50%;  background-color:  rgb(70, 39, 0) ;">
<img class="card-img-top" src="img/Yajirobe2.jpg"  alt="Imagem de capa do card">
<div class="card-body" style="background-color:  rgb(70, 39, 0);">
  <h5 class="card-title" style="color: white;">Você é o Yajirobe</h5>
  <p  class="card-text" style="color: white;">${data.Yajirobe}</p>
</div>
</div>`
      })
     .catch(erro =>{ alert("erro ao encaminhar resposta");
console.log(alert("erro ao encaminhar resposta", erro));
})
  }
   function Gohan2(){
        fetch("main.php")
        .then(resposta => resposta.json())
        .then(data =>{const area = document.getElementById("DragonBall")
            area.innerHTML = `<div class="card" style=" width: 50%;  background-color: purple ;">
  <img class="card-img-top" src="img/Gohan650.jpg"  alt="Imagem de capa do card">
  <div class="card-body" style="background-color: purple;">
    <h5 class="card-title" style="color: white;">Você é o Gohan</h5>
    <p  class="card-text" style="color: white;">${data.Gohan}</p>
  </div>
</div>`
        })
       .catch(erro =>{ alert("erro ao encaminhar resposta");
  console.log(alert("erro ao encaminhar resposta", erro));
 })
    }
     function Piccolo2(){
        fetch("main.php")
        .then(resposta => resposta.json())
        .then(data =>{const area = document.getElementById("DragonBall")
            area.innerHTML = `<div class="card" style=" width: 50%;  background-color: green ;">
  <img class="card-img-top" src="img/Piccolo650.jpg"  alt="Imagem de capa do card">
  <div class="card-body" style="background-color: green;">
    <h5 class="card-title" style="color: white;">Você é o Piccolo</h5>
    <p  class="card-text" style="color: white;">${data.Piccolo}</p>
  </div>
</div>`
        })
      .catch(erro =>{ alert("erro ao encaminhar resposta");
  console.log(alert("erro ao encaminhar resposta", erro));
 })
    }
       function Kuririn2(){
        fetch("main.php")
        .then(resposta => resposta.json())
        .then(data =>{const area = document.getElementById("DragonBall")
            area.innerHTML = `<div class="card" style=" width: 50%;  background-color: orangered ;">
  <img class="card-img-top" src="img/Kuririn650.jpg"  alt="Imagem de capa do card">
  <div class="card-body" style="background-color: orangered;">
    <h5 class="card-title" style="color: white;">Você é o Kuririn</h5>
    <p  class="card-text" style="color: white;">${data.Kuririn}</p>
  </div>
</div>`
        })
       .catch(erro =>{ alert("erro ao encaminhar resposta");
  console.log(alert("erro ao encaminhar resposta", erro));
 })
    }
 
 
    
document.getElementById("formulario").addEventListener("submit", function(event){
event.preventDefault();
const seletores = this.querySelectorAll(".seletor");
let todos = true;
const valores = [];
seletores.forEach((seletor, index)  => {
    if(seletor.value === ""){
        todos = false;
    }else{
        valores.push(seletor.value);
    }
}
)

if (!todos) {
    alert("Por favor, preencha todos os campos.");
    return;
    
}
else if(valores.includes("21") && valores.includes("19") && valores.includes("22")) {
  
  MajinBoo2();
}
else if(valores.includes("21") && valores.includes("19")) {
  
  MajinBoo2();
}
else if(valores.includes("20") && valores.includes("8")) {
  
  Androide172();
}
else if(valores.includes("19") && valores.includes("22")) {
  
  MajinBoo2();
}
else if(valores.includes("23") && valores.includes("8")) {
  
  MestreKame2();
}
else if(valores.includes("24") && valores.includes("8")) {
  
  MestreKame2();
}
else if(valores.includes("23") && valores.includes("14")) {
  
  MestreKame2();
}
else if(valores.includes("23") && valores.includes("14")) {
  
  MestreKame2();
}

else if(valores.includes("21") && valores.includes("22")) {
  
  MajinBoo2();
}
else if(valores.includes("18") && valores.includes("19") && valores.includes("9")) {
  
  Yajirobe2();
}

else if(valores.includes("18") && valores.includes("19")) {
  
  Yajirobe2();
}
else if(valores.includes("18") && valores.includes("9")) {
  
  Yajirobe2();
}
else if(valores.includes("19") && valores.includes("9")) {
  
  Yajirobe2();
}
else if(  valores.includes("15") && valores.includes("16") ) {
  
  Chaos2();
}
else if(  valores.includes("15") && valores.includes("8") ) {
  
  Chaos2();
}

else if(  valores.includes("1") && valores.includes("14") ) {
  
  Tenshinhan2();
  Piccolo2();
}
else if(valores.includes("14") ) {
  
  Tenshinhan2();
}
else if(  valores.includes("1") && valores.includes("7") ) {
  
  Vegeta2();
}

else if (valores.includes("1") && valores.includes("11")){
   
    Vegeta2();
}
else if(valores.includes("7") && valores.includes("11")){
    
    Vegeta2();
}

else if(  valores.includes("1") && valores.includes("7") && valores.includes("11") ) {
  
  Vegeta2();
}
else if(valores.includes("7")) {
  
  Vegeta2();
}

else if(valores.includes("2") && valores.includes("10")){
    
    Goku2();
}
else if(valores.includes("2") && valores.includes("6") && valores.includes("10")){
 
    Goku2();
}
else if(valores.includes("6") && valores.includes("10")){
  
    Goku2();
}
else if(valores.includes("2") && valores.includes("6")){
  
    Goku2();
}
else if(valores.includes("13") && valores.includes("8")){
  Androide182();
}
else if(valores.includes("13") && valores.includes("17")){
  Yamcha2();
}

else if(valores.includes("3") && valores.includes("5")){
   Gohan2();
}
else if(valores.includes("5")){
   Gohan2();
}
else if(valores.includes("3")){
   Gohan2();
}
else if(valores.includes("13") && valores.includes("8")) {
  
  Androide182();
}
else if(valores.includes("3") && valores.includes("9")){
     Gohan2();
}
else if(valores.includes("5") && valores.includes("9")){
   Gohan2();
}
else if(valores.includes("3") && valores.includes("5") && valores.includes("9")){
    Gohan2();
}
else if(valores.includes("3") && valores.includes("8") && valores.includes("9")){
  Gohan2();
}
else if(valores.includes("3") && valores.includes("8")){
  Gohan2();
}

else if (valores.includes("1") && valores.includes("12")){
Piccolo2();
}
else if (valores.includes("14") && valores.includes("12")){
Piccolo2();
}
else if (valores.includes("8") && valores.includes("12")){
Piccolo2();
}

else if(valores.includes("4") && valores.includes("8")){
 Broly2();
}
else if(valores.includes("2") && valores.includes("8") && valores.includes("9")){
   Goten2();
}
else if(valores.includes("2") && valores.includes("8")){
   Kuririn2();
}
else if(valores.includes("1") && valores.includes("8") && valores.includes("9")){
   Trunsks2();
}



else{
  Nãoguerreiroz2();
  
 

}
console.log(valores);
});
 document.getElementById("limpar").addEventListener("click", function(){
    const seletores = document.querySelectorAll(".seletor");
    seletores.forEach(seletor => {
   seletor.value = "";
  
  });
  document.getElementById("DragonBall").innerHTML = "";
});


