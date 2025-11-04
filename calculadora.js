/// calculadora.js - CON PERSISTENCIA DE INTERESES ///

let visor = null;
let historial = [];
let valorManual = null;

// === INICIALIZACIÓN SEGURA ===
document.addEventListener('DOMContentLoaded', () => {
  visor = document.getElementById("visor");

  cargarIntereses();

  document.querySelectorAll('.interes').forEach(input => {
    input.addEventListener('change', guardarIntereses);
  });

  const tabGuardada = localStorage.getItem('tabActiva') || 'calculadora';
  cambiarTab(tabGuardada);

  // === LIMPIAR MENSAJE AL ESCRIBIR ===
  const inputCodigo = document.getElementById('codigoProducto');
  if (inputCodigo) {
    inputCodigo.addEventListener('input', () => {
      document.getElementById('mensajePromocion').textContent = '';
    });
  }

  // === ASIGNAR EVENTOS A LOS BOTONES DE TABS ===
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab');
      cambiarTab(tab);
    });
  });
});

// === CARGAR INTERESES ===
function cargarIntereses() {
  const intereses = {
    interes3: localStorage.getItem('interes3') || '0',
    interes6: localStorage.getItem('interes6') || '0',
    interes9: localStorage.getItem('interes9') || '0',
    interes12: localStorage.getItem('interes12') || '5'
  };
  const el3 = document.getElementById('interes3');
  const el6 = document.getElementById('interes6');
  const el9 = document.getElementById('interes9');
  const el12 = document.getElementById('interes12');
  if (el3) el3.value = intereses.interes3;
  if (el6) el6.value = intereses.interes6;
  if (el9) el9.value = intereses.interes9;
  if (el12) el12.value = intereses.interes12;
}

// === GUARDAR INTERESES ===
function guardarIntereses() {
  localStorage.setItem('interes3', document.getElementById('interes3')?.value || '0');
  localStorage.setItem('interes6', document.getElementById('interes6')?.value || '0');
  localStorage.setItem('interes9', document.getElementById('interes9')?.value || '0');
  localStorage.setItem('interes12', document.getElementById('interes12')?.value || '5');
}

// === FORMATEAR NÚMERO ===
function formatearNumero(valor) {
  if (isNaN(valor)) return valor;
  const num = parseFloat(valor);
  return num.toLocaleString("es-AR", { maximumFractionDigits: 0 });
}

// === FUNCIONES DE CALCULADORA ===
function clickBoton(v) {
  if (visor) visor.value += v;
}

function borrar() {
  if (visor) visor.value = "";
  historial = [];
}

function limpiarVisor() {
  if (visor) visor.value = "";
}

function borrarUltimo() {
  if (visor) visor.value = visor.value.slice(0, -1);
}

function operaciones() {
  if (!visor) return;
  try {
    const ecuacion = visor.value.replace(/\./g, "");
    const resultado = eval(ecuacion);
    visor.value = formatearNumero(resultado);
    historial.push([ecuacion, resultado]);
  } catch (e) {
    visor.value = "Error";
  }
}

function calcularPorcentaje() {
  if (!visor) return;
  try {
    const entrada = visor.value.replace(/\./g, "");
    let operador = '-';
    let partes = entrada.split('-');
    if (partes.length < 2) {
      partes = entrada.split('+');
      if (partes.length < 2) throw new Error();
      operador = '+';
    }
    const valor = parseFloat(partes[0]);
    const porcentaje = parseFloat(partes[1].replace("%", ""));
    if (isNaN(valor) || isNaN(porcentaje)) throw new Error();
    const factor = (operador === '+') ? (1 + porcentaje / 100) : (1 - porcentaje / 100);
    const resultado = valor * factor;
    historial.push([`${formatearNumero(valor)} ${operador} ${porcentaje}%`, resultado]);
    visor.value = formatearNumero(resultado);
  } catch {
    visor.value = "Error";
  }
}

function guardarValorManual() {
  if (visor) valorManual = visor.value.replace(/\./g, "");
}

function volverValorManual() {
  if (valorManual !== null && visor) visor.value = formatearNumero(valorManual);
}

function calcularCuotas(num) {
  if (!visor) return;
  try {
    const ecuacion = visor.value.replace(/\./g, "");
    const resultado = eval(ecuacion);
    const interesEl = document.getElementById(`interes${num}`);
    const interes = parseFloat(interesEl?.value) || 0;
    const montoConInteres = resultado * (1 + interes / 100);
    const cuota = montoConInteres / num;
    historial.push([`${formatearNumero(resultado)} en ${num} cuotas (${interes}%)`, cuota]);
    visor.value = formatearNumero(Math.round(cuota));
  } catch {
    visor.value = "Error";
  }
}

// === MODAL HISTORIAL ===
function abrirHistorial() {
  const modal = document.getElementById("modalHistorial");
  const lista = document.getElementById("listaHistorial");
  if (!modal || !lista) return;
  lista.innerHTML = "";
  if (historial.length === 0) {
    lista.innerHTML = "<li>Historial vacío</li>";
  } else {
    historial.forEach(([expr, res], i) => {
      const li = document.createElement("li");
      li.textContent = `${i + 1}. ${expr} = ${formatearNumero(res)}`;
      li.onclick = () => {
        if (visor) visor.value = formatearNumero(res);
        cerrarHistorial();
      };
      lista.appendChild(li);
    });
  }
  modal.classList.add('active');
}

function cerrarHistorial() {
  const modal = document.getElementById("modalHistorial");
  if (modal) modal.classList.remove('active');
}

// === CAMBIAR TABS (con persistencia) ===
function cambiarTab(tab) {
  const tabs = document.querySelectorAll('.tab-content');
  const botones = document.querySelectorAll('.tab-btn');
  
  tabs.forEach(t => t.classList.remove('active'));
  botones.forEach(b => b.classList.remove('active'));
  
  const tabElement = document.getElementById(`tab-${tab}`);
  const btnElement = document.querySelector(`.tab-btn[data-tab="${tab}"]`);
  
  if (tabElement) tabElement.classList.add('active');
  if (btnElement) btnElement.classList.add('active');
  
  localStorage.setItem('tabActiva', tab);
}

// === VERIFICAR PROMOCIÓN ===
function verificarPromocion() {
  const input = document.getElementById('codigoProducto');
  const mensaje = document.getElementById('mensajePromocion');
  if (!input || !mensaje) return;

  const codigo = input.value.trim().toUpperCase();
  if (codigo === '') {
    mensaje.textContent = 'Por favor, ingrese un código de producto.';
    mensaje.style.color = '#E74C3C';
    return;
  }
  if (productosEnPromocion.includes(codigo)) {
    mensaje.textContent = '¡Aprobado! Este producto aplica a la promoción.';
    mensaje.style.color = '#2ECC71';
  } else {
    mensaje.textContent = 'Lo sentimos, este producto no aplica a ninguna promoción.';
    mensaje.style.color = '#E74C3C';
  }
}

// === TECLADO FÍSICO ===
document.addEventListener("keydown", (event) => {
  if (!visor) return;
  const key = event.key;
  const activeElement = document.activeElement;

  // Ctrl+C / Ctrl+V
  if (event.ctrlKey && key.toLowerCase() === "c") {
    event.preventDefault();
    if (visor.value && visor.value !== "0") {
      navigator.clipboard.writeText(visor.value.replace(/\./g, "").replace(/,/g, ""))
        .then(() => {
          const original = visor.style.border;
          visor.style.border = "2px solid #2ECC71";
          setTimeout(() => visor.style.border = original, 300);
        });
    }
    return;
  }

  if (event.ctrlKey && key.toLowerCase() === "v") {
    event.preventDefault();
    navigator.clipboard.readText()
      .then(text => {
        const cleaned = text.replace(/[^0-9.,]/g, "").replace(/,/g, ".");
        if (cleaned && !isNaN(cleaned)) {
          visor.value = formatearNumero(cleaned);
        } else {
          visor.value = "Error";
          setTimeout(() => visor.value = "", 1000);
        }
      });
    return;
  }

  // Inputs de interés
  if (activeElement && activeElement.classList.contains('interes')) {
    if (!isNaN(key) || ["Backspace", "Delete", "Enter", "ArrowLeft", "ArrowRight", "Tab"].includes(key)) return;
    if (key === "." || key === ",") {
      if (key === ",") {
        setTimeout(() => activeElement.value = activeElement.value.replace(",", "."), 0);
      }
      return;
    }
    event.preventDefault();
    return;
  }

  // Visor
  if (key === "Enter") { event.preventDefault(); operaciones(); return; }
  if (key === "0" && event.altKey) { clickBoton("000"); return; }
  if (!isNaN(key) && !event.shiftKey) { clickBoton(key); return; }
  if (["+", "-", "*", "/"].includes(key)) { clickBoton(key); return; }
  if (key === "Backspace") { visor.value = visor.value.slice(0, -1); return; }
  if (key === "Escape") { limpiarVisor(); return; }
  if (key === "Delete") { borrar(); return; }
  if (key === "%") { clickBoton("%"); return; }
  if (key === "." || key === ",") { clickBoton("."); return; }
});