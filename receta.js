document.getElementById("btnRegistrar").addEventListener("click", function(event){
    event.preventDefault(); // Evitar el envío del formulario por defecto

    // Obtener valores de los campos
    var nombre = document.getElementById("nombre").value.trim();
    var correo = document.getElementById("correo").value.trim();
    var contrasena = document.getElementById("contrasena").value.trim();
    var rut = document.getElementById("rut").value.trim();
    var genero = document.querySelector("input[name='genero']:checked");
    var conocimiento = document.querySelector("input[name='conocimiento']:checked");
    var pais = document.getElementById("pais").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;

    // Validar que todos los campos obligatorios estén completos
      if (!nombre || !correo || !contrasena || !rut || !genero || !conocimiento || pais === "" || correo.indexOf('@') === -1) {
        alert("Por favor complete todos los campos y asegúrese de que el correo sea válido.");
        return;
    }

    // Mostrar los datos en la alerta atractiva
    mostrarAlerta(`
        - Usted se ha registrado correctamente 
        - Nombre: ${nombre}
        - Correo: ${correo}
        - Contraseña: ${contrasena}
        - RUT: ${rut}
        - Género: ${genero.value}
        - Conocimiento de cocina: ${conocimiento.value}
        - País: ${pais}
        - Fecha de Nacimiento: ${fechaNacimiento}
    `);

    // Ocultar la alerta después de 5 segundos
    setTimeout(function() {
        document.getElementById("alerta").style.opacity = "0";
        setTimeout(function() {
            document.getElementById("alerta").remove();
        }, 300);
    }, 6000);
});

// Función para crear y mostrar la alerta atractiva
function mostrarAlerta(mensaje) {
    // Crear elemento div para la alerta
    var div = document.createElement("div");
    div.id = "alerta";
    div.innerHTML = `
        <h3>Registro Exitoso</h3>
        <p>${mensaje}</p>
    `;

    // Añadir la alerta al cuerpo del documento
    document.body.appendChild(div);

    // Mostrar la alerta
    setTimeout(function() {
        div.style.opacity = "1";
    }, 100);
}