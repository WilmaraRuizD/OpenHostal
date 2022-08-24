const navBtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel-btn');
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal');

navBtn.addEventListener("click", function(){
    sideNav.classList.add('show');
    modal.classList.add('showModal');
});

cancelBtn.addEventListener('click', function(){
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});

window.addEventListener('click', function(event){
    if(event.target === modal){
        sideNav.classList.remove('show');
        modal.classList.remove('showModal');
    }
});

div=document.getElementById('prueba')

fetch('http://34.139.251.13:4000/api/hostal') //Peticion GET
    .then(res => res.json())
    .then(data => {
      console.log(data)
      
data.forEach(hostal => {
  const{
    id,
    nombre,
    ciudad,
    sede,
    foto,
    descripcion,
    direccion
  }=hostal
  
  div.innerHTML += `<article class = "room" style="width:500px ; height: 600px;>
  <div class = "room-image">
      <img src = "https://storage.cloud.google.com/${foto}" alt = "room image" style="width:300px ; height: 300px;>
  </div>
  <div class = "room-text">
      <h3>${nombre}</h3>
      <ul>
          <li>
              <i class = "fas fa-arrow-alt-circle-right"></i>
              ${sede}.
          </li>
          <li>
              <i class = "fas fa-arrow-alt-circle-right"></i>
              ${direccion}.
          </li>
          <li>
              <i class = "fas fa-arrow-alt-circle-right"></i>
              ${ciudad}.
          </li>
      </ul>
      <p>${descripcion}</p>
      <a class="btn btn-primary verRoom _id=${id}">Ver habitaciones</a>
      
  </div>
</article>`
})   
    })
    .catch(err => console.log(err))

    if (e.target.classList.contains("verRoom")) {
      let param = e.target.classList.value;
   console.log(param)}