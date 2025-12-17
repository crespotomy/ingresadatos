function procesar() {

    let nombre = document.getElementById("nombreCompleto").value;
    let fecha = new Date(document.getElementById("nacimiento").value);
    let sangre = document.getElementById("sangre").value;
    let alturaIn = Number(document.getElementById("alturaPulg").value);
    let pesoK = Number(document.getElementById("pesoKg").value);
    let genero = document.getElementById("sexo").value;

    let actual = new Date();
    let edad = actual.getFullYear() - fecha.getFullYear();

    let alturaCm = alturaIn * 2.54;
    let pesoLb = pesoK * 2.2;

    let imagen = "";
    if (genero === "femenino") {
        imagen = "femenino.jpeg";
    } else if (genero === "masculino") {
        imagen = "masculino.jpeg";
    }

    document.getElementById("salida").innerHTML =
        `<img src="${imagen}" class="icono">
        <p><b>Nombre:</b> ${nombre}</p>
        <p><b>Tipo de sangre:</b> ${sangre}</p>
        <p><b>Altura en cm:</b> ${alturaCm.toFixed(1)}</p>
        <p><b>Peso en libras:</b> ${pesoLb.toFixed(1)}</p>
        <p><b>Edad actual:</b> ${edad} años</p>`;
}