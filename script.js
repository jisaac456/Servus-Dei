// Mostrar la fecha actual
const fecha = new Date();
document.getElementById('fecha').textContent =
  fecha.toLocaleDateString('es-ES', { year:'numeric', month:'long', day:'numeric' });

// Formatear fecha YYYY-MM-DD
const iso = fecha.toISOString().split('T')[0];

// Obtener Santo del Día
fetch(`https://santodelgiorno.mintdev.me/api/santo/${iso}`)
  .then(r => r.json())
  .then(json => {
    document.getElementById('santoTexto').textContent = json.name || 'No encontrado';
  }).catch(_ => {
    document.getElementById('santoTexto').textContent = 'Error al cargar santo';
  });

// Obtener Evangelio en español (lecturas evangelio.org API)
fetch('https://api.laborde.dev/api/evangelio')
  .then(r => r.json())
  .then(json => {
    document.getElementById('evangelioTexto').textContent = json.evangelio || 'No disponible';
  }).catch(_ => {
    document.getElementById('evangelioTexto').textContent = 'Error al cargar texto bíblico';
  });

    
