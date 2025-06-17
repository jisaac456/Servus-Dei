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

// Obtener Evangelio (ejemplo fijo Juan 3:16)
fetch('https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-asv/books/john/chapters/3/verses/16.json')
  .then(r => r.json())
  .then(json => {
    document.getElementById('evangelioTexto').textContent = json.text;
  }).catch(_ => {
    document.getElementById('evangelioTexto').textContent = 'Error al cargar texto bíblico';
  });
