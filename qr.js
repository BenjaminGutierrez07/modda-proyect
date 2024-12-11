function onScanSuccess(decodedText, decodedResult) {
    // Muestra el resultado escaneado en el contenedor
    document.getElementById('result-data').textContent = decodedText;

    // Opcional: Usa el resultado para realizar acciones, como redirigir al usuario
    console.log(`Code scanned = ${decodedText}`, decodedResult);
}

function onScanError(error) {
    // Opcional: Manejo de errores durante el escaneo
    console.error(`Error scanning QR code: ${error}`);
}

// Inicializar el lector con los callbacks de éxito y error
const qrReader = new Html5Qrcode("qr-reader");
qrReader.start(
    { facingMode: "enviroment" }, // Cámara trasera del dispositivo
    {
        fps: 10, // Frames por segundo
        qrbox: { width: 250, height: 250 } // Tamaño del área de escaneo
    },
    onScanSuccess,
    onScanError
).catch(err => {
    console.error(`Unable to start QR scanner: ${err}`);
    document.getElementById('result-data').textContent = "Unable to access the camera.";
});