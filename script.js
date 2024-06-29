function agregarTarea() {
  const entrada = document.getElementById("entrada-tarea");
  const tarea = entrada.value.trim();
  if (tarea) {
    const listaPorHacer = document.getElementById("lista-por-hacer");
    const nuevaTarea = document.createElement("li");
    nuevaTarea.classList.add("tarea-elemento");
    nuevaTarea.appendChild(document.createTextNode(tarea));

    const botonCompletar = document.createElement("button");
    botonCompletar.textContent = "Completada";
    botonCompletar.addEventListener("click", completarTarea);
    nuevaTarea.appendChild(botonCompletar);

    const botonBorrar = document.createElement("button");
    botonBorrar.textContent = "Borrar";
    botonBorrar.addEventListener("click", borrarTarea);
    nuevaTarea.appendChild(botonBorrar);

    listaPorHacer.appendChild(nuevaTarea);
    entrada.value = "";
  }
}

function completarTarea(evento) {
  const tarea = evento.target.parentElement;
  const listaCompletadas = document.getElementById("lista-completadas");
  const botonCompletar = tarea.querySelector("button");
  tarea.removeChild(botonCompletar);
  listaCompletadas.appendChild(tarea);
}

function borrarTarea(evento) {
  const tarea = evento.target.parentElement;
  tarea.remove();
}
