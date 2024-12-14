const imagen = document.getElementById("img1");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("S2");
const img3 = document.getElementById("S3");
const img4 = document.getElementById("R4");
const img5 = document.getElementById("R5");
const img6 = document.getElementById("R6");
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div5 = document.getElementById("div5");
const div5F = document.getElementById("D5");
const div4 = document.getElementById("div4");
const divmovi = document.getElementById("movimientos");
let segundos = 0;
let minutos = 0;
let intervalo;
let corriendo = false;

const cronometroElemento = document.getElementById("cronometro");
const botonIniciar = document.getElementById("iniciar");

function actualizarCronometro() {
  segundos++;

  if (segundos === 60) {
    segundos = 0;
    minutos++;
  }

  // Formatear el tiempo para mostrarlo como MM:SS
  const tiempoFormateado = `${minutos < 10 ? "0" : ""}${minutos}:${
    segundos < 10 ? "0" : ""
  }${segundos}`;
  cronometroElemento.textContent = tiempoFormateado;
}

function iniciarCronometro() {
  if (!corriendo) {
    intervalo = setInterval(actualizarCronometro, 1000); // Ejecutar cada segundo
    corriendo = true;
  } else {
    clearInterval(intervalo); // Detener el cronómetro
    corriendo = false;
    botonIniciar.textContent = "Reiniciar Cronómetro"; // Cambiar texto del botón a "Reiniciar"
    // Reiniciar el cronómetro a 00:00
    segundos = 0;
    minutos = 0;
    cronometroElemento.textContent = "00:00";
  }
}

// Iniciar el cronómetro automáticamente cuando se carga la página
window.onload = function () {
  iniciarCronometro(); // Comienza el cronómetro al cargar la página
};
let pasajeros = 0;
let miArreglo = [];
let movimientos = 0;
let robots1 = 3;
let cientificos1 = 3;
let robots2 = 0;
let cientificos2 = 0;
img1.addEventListener("click", (event) => {
  let name = event.target.getAttribute("name");
  mover(img1, name);
});

img2.addEventListener("click", (event) => {
  let name = event.target.getAttribute("name");
  mover(img2, name);
});
img3.addEventListener("click", (event) => {
  let name = event.target.getAttribute("name");
  mover(img3, name);
});
img4.addEventListener("click", (event) => {
  let name = event.target.getAttribute("name");
  mover(img4, name);
});
img5.addEventListener("click", (event) => {
  let name = event.target.getAttribute("name");
  mover(img5, name);
});
img6.addEventListener("click", (event) => {
  let name = event.target.getAttribute("name");
  mover(img6, name);
});

function mover(objeto, nombre) {
  if (pasajeros < 2) {
    if (div2.parentElement === div5) {
      if (objeto.parentElement === div1) {
        pasajeros++;
        sumar(nombre, "SD5");

        miArreglo[pasajeros] = objeto;

        objeto.classList.add("move-to-right");
        setTimeout(() => {
          div2.appendChild(objeto);
          objeto.classList.remove("move-to-right");
        }, 500); // Tiempo de la animación en milisegundos
      }
    }
    if (div2.parentElement === div4) {
      if (objeto.parentElement === div5F) {
        pasajeros++;
        sumar(nombre, "RD5");

        miArreglo[pasajeros] = objeto;

        objeto.classList.add("move-to-leftdiv");
        setTimeout(() => {
          div2.appendChild(objeto);
          objeto.classList.remove("move-to-leftdiv");
        }, 500); // Tiempo de la animación en milisegundos
      }
    }
  }
  if (div2.parentElement === div5) {
    if (objeto.parentElement === div2) {
      pasajeros = pasajeros - 1;
      sumar(nombre, "RD5");
      objeto.classList.add("move-to-left");
      setTimeout(() => {
        div1.appendChild(objeto);
        objeto.classList.remove("move-to-left");
      }, 500); // Tiempo de la animación en milisegundos
    }
  }
  if (div2.parentElement === div4) {
    if (objeto.parentElement === div2) {
      pasajeros = pasajeros - 1;
      sumar(nombre, "SD5");
      objeto.classList.add("move-to-right");
      setTimeout(() => {
        div5F.appendChild(objeto);
        objeto.classList.remove("move-to-right");
      }, 500); // Tiempo de la animación en milisegundos
    }
  }
}
function sumar(clasifi, accion) {
  if (clasifi == "cientifica") {
    if (accion == "SD5") {
      cientificos2++;
      cientificos1--;
    }
    if (accion == "RD5") {
      cientificos2--;
      cientificos1++;
    }
  }
  if (clasifi == "robot") {
    if (accion == "SD5") {
      robots2++;
      robots1--;
    }
    if (accion == "RD5") {
      robots2--;
      robots1++;
    }
  }
}

function limpiar(elemento) {
  if (div2.parentElement === div4) {
    if (elemento.parentElement === div2) {
      elemento.classList.add("move-to-right");
      setTimeout(() => {
        div5F.appendChild(elemento);
        elemento.classList.remove("move-to-right");
      }, 500); // Tiempo de la animación en milisegundos
    }
  }
  if (div2.parentElement === div5) {
    if (elemento.parentElement === div2) {
      elemento.classList.add("move-to-leftdiv");
      setTimeout(() => {
        div1.appendChild(elemento);
        elemento.classList.remove("move-to-leftdiv");
      }, 500); // Tiempo de la animación en milisegundos
    }
  }
}

const btnEC = document.getElementById("btnEC");
btnEC.addEventListener("click", () => {
  if (pasajeros > 0) {
    console.log("cientidficos 1" + cientificos1);
    console.log("cientidficos 2" + cientificos2);
    console.log("ro 1" + robots1);
    console.log("ro 2" + robots2);
    movimientos++;
    evaluacion();
    const mov = `${movimientos}`;
    divmovi.textContent = mov;
    if (div2.parentElement === div5) {
      div2.classList.add("move-to-rightdiv");
      setTimeout(() => {
        div4.appendChild(div2);
        div2.classList.remove("move-to-rightdiv");
        miArreglo.forEach(function (elemento) {
          limpiar(elemento);
        });
        pasajeros = 0;
      }, 500); // Tiempo de la animación en milisegundos
    }
    if (div2.parentElement === div4) {
      div2.classList.add("move-to-leftdiv");
      setTimeout(() => {
        div5.appendChild(div2);
        div2.classList.remove("move-to-leftdiv");
        miArreglo.forEach(function (elemento) {
          limpiar(elemento);
        });
        pasajeros = 0;
      }, 500); // Tiempo de la animación en milisegundos
    }
  } else {
    alert("Por favor envié un pasajero ");
  }
});
function evaluacion() {
  if (robots2 == 3 && cientificos2 == 3) {
    Swal.fire({
      title: `Felicidades lo lograste en: ${minutos}:${segundos} con ${movimientos} Movimientos`,

      width: 600,
      padding: "3em",
      color: "#716add",
      background: "#fff url(/img/trees.png)",
      backdrop: `
      rgba(0,0,123,0.4)
      url("/img/nyan-cat.gif")
      left top
      no-repeat
    `,
    }).then((result) => {
      if (result.isConfirmed || result.dismiss) {
        // Si el usuario cerró la alerta (por cualquier motivo)
        window.location.href = "/index.html"; // Redirige a otra página
      }
    });
    }
    if (robots1>cientificos1 || robots2>cientificos2) {
        if (cientificos1==0 || cientificos2 ==0) {
           
        } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Los caminos de la vida no son como piensas ",
              footer: "<h1>Has perdido </h1>",
            }).then((result) => {
              if (result.isConfirmed || result.dismiss) {
                // Si el usuario cerró la alerta (por cualquier motivo)
                window.location.href = "/index.html"; // Redirige a otra página
              }
            });
        }
    }
}
