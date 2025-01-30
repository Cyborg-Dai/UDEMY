function comenzarReloj() {
    setInterval(contadorTiempo, 1000);
}

function contadorTiempo() {
    let tiempoActual = new Date();
    let horas = tiempoActual.getHours();
    let minutos = tiempoActual.getMinutes();
    let segundos = String(tiempoActual.getSeconds()).padStart(2, "0"); //Largo máximo de 2 dígitos y si es de menos de dos dígitos, se le agrega un 0

    let tiempo = `${horas}:${minutos}:${segundos}`;
    document.getElementById("reloj").innerHTML = tiempo;
}