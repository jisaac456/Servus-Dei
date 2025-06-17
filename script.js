// Mostrar la fecha actual
const fecha = new Date();
document.getElementById('fecha').textContent =
  fecha.toLocaleDateString('es-ES', { year:'numeric', month:'long', day:'numeric' });

// Formatear fecha YYYY-MM-DD
const iso = fecha.toISOString().split('T')[0];

// API alternativa de Santo del Día (temporalmente fijo mientras encontramos API abierta)
document.getElementById('santoTexto').textContent = 'San Gregorio Barbarigo';

// Obtener versículo bíblico del día (API funcional)
fetch('https://getdailybible.net/v1/?lang=es')
  .then(r => r.json())
  .then(json => {
    document.getElementById('evangelioTexto').textContent = json.text || 'No disponible';
  }).catch(_ => {
    document.getElementById('evangelioTexto').textContent = 'Error al cargar texto bíblico';
  });
