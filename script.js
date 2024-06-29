function agregarTarea() {
  const entrada = document.getElementById("entrada-tarea");
  const tarea = entrada.value.trim();
  if (tarea) {
    const listaPorHacer = document.getElementById("lista-por-hacer");
    const nuevaTarea = document.createElement("li");
    nuevaTarea.classList.add("tarea-elemento");
    nuevaTarea.appendChild(document.createTextNode(tarea));
    
    const iconoCompletar = document.createElement("span");
    iconoCompletar.classList.add("iconos-material");
    iconoCompletar.textContent = "Completada";
    iconoCompletar.addEventListener("click", completarTarea);
    nuevaTarea.appendChild(iconoCompletar);
    
    const iconoBorrar = document.createElement("span");
    iconoBorrar.classList.add("iconos-material");
    iconoBorrar.textContent = "Borrar";
    iconoBorrar.addEventListener("click", borrarTarea);
    nuevaTarea.appendChild(iconoBorrar);
    
    listaPorHacer.appendChild(nuevaTarea);
    entrada.value = "";
  }
}

function completarTarea(evento) {
  const tarea = evento.target.parentElement;
  const listaCompletadas = document.getElementById("lista-completadas");
  tarea.removeChild(tarea.querySelector('.iconos-material'));
  listaCompletadas.appendChild(tarea);
}

function borrarTarea(evento) {
  const tarea = evento.target.parentElement;
  tarea.remove();
}
