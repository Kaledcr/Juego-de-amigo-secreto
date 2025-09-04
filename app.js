var listaDeAmigos = [];

function agregarAmigo() {
  if (document.querySelector("#amigo").value == "") {
    asignarTextoElemento(
      "h2",
      "No puedes ingresar un espacio vacio, agregue un nombre valido"
    );
  } else {
    listaDeAmigos.push(document.querySelector("#amigo").value);
    alert("Amigo agregado de manera correcta");
    limpiarCaja();
    listarNombreDeAmigos();
    condicionesIniciales();
  }
}

function limpiarCaja() {
  document.querySelector("#amigo").value = "";
}

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function listarNombreDeAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  for (let index = 0; index < listaDeAmigos.length; index++) {
    let li = document.createElement("li");
    li.textContent = listaDeAmigos[index];
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  if (listaDeAmigos.length === 0) {
    alert("No hay amigos ingresados");
  } else {
    document.getElementById("listaAmigos").style.display = "none";
    let lista = document.getElementById("resultado");
    lista.innerHTML = "";
    var amigoSeleccionado =
      listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
    let li = document.createElement("li");
    li.textContent = amigoSeleccionado;
    lista.appendChild(li);
    document.getElementById("botonAmigoSecreto").style.display = "none";
    document.getElementById("agregarAmigo").setAttribute("disabled", "true");
    document.getElementById("amigo").setAttribute("disabled", "true");
    asignarTextoElemento("h2", "Gracias por jugar");
  }
}

function condicionesIniciales() {
  asignarTextoElemento("h2", "Digite el nombre de sus amigos");
}
