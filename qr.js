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

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    console.log("La cámara está disponible. Intentando iniciar el escáner.");

    // Inicializar el lector QR solo si se obtiene acceso a la cámara
    const qrReader = new Html5Qrcode("qr-reader");
    qrReader.start(
        { facingMode: "environment" }, // Usar la cámara trasera
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
} else {
    console.error("El navegador no soporta el acceso a la cámara.");
    document.getElementById('result-data').textContent = "Camera access is not supported.";
}