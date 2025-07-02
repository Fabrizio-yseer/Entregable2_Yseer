document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formRegistro');
  const listaUsuarios = document.getElementById('listaUsuarios');

  let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  function mostrarUsuarios() {
    listaUsuarios.innerHTML = '';
    usuarios.forEach(usuario => {
      const li = document.createElement('li');
      li.textContent = `${usuario.nombre} - ${usuario.email} - ${usuario.edad} años`;
      listaUsuarios.appendChild(li);
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const edad = parseInt(document.getElementById('edad').value);

    if (!nombre || !email || isNaN(edad)) return;

    const nuevoUsuario = { nombre, email, edad };
    usuarios.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    mostrarUsuarios();
    form.reset();
  });

  mostrarUsuarios();
});
