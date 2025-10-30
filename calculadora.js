/// calculadora.js - CON PERSISTENCIA DE INTERESES ///
const visor = document.getElementById("visor");
let historial = [];
let valorManual = null;

// Cargar intereses desde LocalStorage al iniciar
function cargarIntereses() {
  const intereses = {
    interes3: localStorage.getItem('interes3') || '0',
    interes6: localStorage.getItem('interes6') || '0',
    interes9: localStorage.getItem('interes9') || '0',
    interes12: localStorage.getItem('interes12') || '5'
  };
  document.getElementById('interes3').value = intereses.interes3;
  document.getElementById('interes6').value = intereses.interes6;
  document.getElementById('interes9').value = intereses.interes9;
  document.getElementById('interes12').value = intereses.interes12;
}

// Guardar intereses en LocalStorage al cambiarlos
function guardarIntereses() {
  localStorage.setItem('interes3', document.getElementById('interes3').value);
  localStorage.setItem('interes6', document.getElementById('interes6').value);
  localStorage.setItem('interes9', document.getElementById('interes9').value);
  localStorage.setItem('interes12', document.getElementById('interes12').value);
}

// Formatear números
function formatearNumero(valor) {
  if (isNaN(valor)) return valor;
  const num = parseFloat(valor);
  return num.toLocaleString("es-AR", { maximumFractionDigits: 0 });
}

function clickBoton(v) {
  visor.value += v;
}

function borrar() {
  visor.value = "";
  historial = [];
}

function limpiarVisor() {
  visor.value = "";
}

function operaciones() {
  try {
    const ecuacion = visor.value.replace(/\./g, "");
    const resultado = eval(ecuacion);
    visor.value = formatearNumero(resultado);
    historial.push([ecuacion, resultado]);
  } catch (e) {
    visor.value = "Error";
  }
}

function calcularDescuento() {
  try {
    const entrada = visor.value.replace(/\./g, "");
    const partes = entrada.split("-");
    if (partes.length < 2) throw new Error();
    const valor = parseFloat(partes[0]);
    const porcentaje = parseFloat(partes[1].replace("%", ""));
    if (isNaN(valor) || isNaN(porcentaje)) throw new Error();
    const resultado = valor * (1 - porcentaje / 100);
    historial.push([`${formatearNumero(valor)} - ${porcentaje}%`, resultado]);
    visor.value = formatearNumero(resultado);
  } catch {
    visor.value = "Error";
  }
}

function guardarValorManual() {
  valorManual = visor.value.replace(/\./g, "");
}

function volverValorManual() {
  if (valorManual !== null) visor.value = formatearNumero(valorManual);
}

function calcularCuotas(num) {
  try {
    const ecuacion = visor.value.replace(/\./g, "");
    const resultado = eval(ecuacion);
    const interes = parseFloat(document.getElementById(`interes${num}`).value) || 0;
    const montoConInteres = resultado * (1 + interes / 100);
    const cuota = montoConInteres / num;
    historial.push([`${formatearNumero(resultado)} en ${num} cuotas (${interes}%)`, cuota]);
    visor.value = formatearNumero(Math.round(cuota));
  } catch {
    visor.value = "Error";
  }
}

// Modal de historial
function abrirHistorial() {
  const modal = document.getElementById("modalHistorial");
  const lista = document.getElementById("listaHistorial");
  lista.innerHTML = "";
  if (historial.length === 0) {
    lista.innerHTML = "<li>Historial vacío</li>";
  } else {
    historial.forEach(([expr, res], i) => {
      const li = document.createElement("li");
      li.textContent = `${i + 1}. ${expr} = ${formatearNumero(res)}`;
      li.onclick = () => {
        visor.value = formatearNumero(res);
        cerrarHistorial();
      };
      lista.appendChild(li);
    });
  }
  modal.classList.add('active');
}

function cerrarHistorial() {
  document.getElementById("modalHistorial").classList.remove('active');
}

// Teclado físico
document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (key === "Enter") {
    event.preventDefault();
    operaciones();
    return;
  }
  if (key === "0" && event.altKey) {
    clickBoton("000");
    return;
  }
  if (!isNaN(key) && !event.shiftKey) {
    clickBoton(key);
    return;
  }
  if (["+", "-", "*", "/"].includes(key)) {
    clickBoton(key);
    return;
  }
  if (key === "Backspace") {
    visor.value = visor.value.slice(0, -1);
    return;
  }
  if (key === "Escape") {
    limpiarVisor();
    return;
  }
  if (key === "Delete") {
    borrar();
    return;
  }
  if (key === "%") {
    clickBoton("%");
    return;
  }
  if (key === "." || key === ",") {
    clickBoton(".");
    return;
  }
});

// Cargar intereses al iniciar
document.addEventListener('DOMContentLoaded', cargarIntereses);

// Guardar intereses al cambiar
document.querySelectorAll('.interes').forEach(input => {
  input.addEventListener('change', guardarIntereses);
});