function onScanSuccess(decodedText, decodedResult) {
    // Mostrar el texto decodificado en el contenedor
    document.getElementById('result-data').textContent = decodedText;
    console.log(`Código escaneado = ${decodedText}`, decodedResult);
}

function onScanError(error) {
    // Opcional: manejo de errores
    console.error(`Error al escanear el QR: ${error}`);
}

// Inicializar el lector con la cámara
const qrReader = new Html5Qrcode("qr-reader");
qrReader.start(
    { facingMode: "environment" }, // Cámara trasera
    {
        fps: 10, // Frames por segundo
        qrbox: { width: 250, height: 250 } // Tamaño del área de escaneo
    },
    onScanSuccess,
    onScanError
).catch(err => {
    console.error(`No se puede iniciar el escáner QR: ${err}`);
    document.getElementById('result-data').textContent = "No se puede acceder a la cámara.";
});