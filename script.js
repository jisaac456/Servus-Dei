const fecha = new Date();
const iso = fecha.toISOString().split('T')[0];
document.getElementById('fecha').textContent =
  fecha.toLocaleDateString('es-ES', { year:'numeric', month:'long', day:'numeric' });

// Cargar Santo del Día desde archivo local
fetch('santos.json')
  .then(r => r.json())
  .then(data => {
    document.getElementById('santoTexto').textContent = data[iso].nombre || 'No disponible';
    document.getElementById('santoImagen').src = data[iso].imagen || 'https://cdn-icons-png.flaticon.com/512/3176/3176365.png';
  }).catch(_ => {
    document.getElementById('santoTexto').textContent = 'Error al cargar santo';
  });

// Cargar Evangelio del Día desde archivo local
fetch('evangelios.json')
  .then(r => r.json())
  .then(data => {
    document.getElementById('evangelioTexto').textContent = data[iso] || 'No disponible';
  }).catch(_ => {
    document.getElementById('evangelioTexto').textContent = 'Error al cargar evangelio';
  });
