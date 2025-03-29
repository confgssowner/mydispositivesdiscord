
module.exports = class DeviceTimePlugin {
    constructor() {
        this.devices = []; // Lista para guardar los dispositivos
    }

    start() {
        this.initialize();
    }

    initialize() {
        // Simulando algunos dispositivos conectados
        this.addDevice("Dispositivo 1");
        this.addDevice("Dispositivo 2");

        // Crear la ventana para mostrar los dispositivos
        this.createDeviceWindow();
    }

    addDevice(deviceName) {
        const currentTime = new Date(); // Obtenemos el objeto Date completo
        const formattedTime = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`; // Formato: HH:MM:SS
        const deviceInfo = {
            name: deviceName,
            connectedAt: formattedTime
        };

        // Añadir dispositivo a la lista
        this.devices.push(deviceInfo);
    }

    // Método para crear la ventana en la UI de Discord
    createDeviceWindow() {
        // Crear el contenedor de la ventana
        const windowDiv = document.createElement('div');
        windowDiv.style.backgroundColor = '#ff4d4d'; // Fondo rojo
        windowDiv.style.padding = '20px';
        windowDiv.style.color = '#ffffff'; // Texto blanco
        windowDiv.style.position = 'absolute';
        windowDiv.style.top = '50px';
        windowDiv.style.right = '50px';
        windowDiv.style.borderRadius = '10px';
        windowDiv.style.width = '300px';
        windowDiv.style.height = 'auto';
        windowDiv.style.maxHeight = '400px';
        windowDiv.style.overflowY = 'scroll';
        windowDiv.style.fontFamily = 'Arial, sans-serif';
        windowDiv.style.fontSize = '14px';

        // Título de la ventana
        const title = document.createElement('h3');
        title.textContent = 'Dispositivos Conectados';
        title.style.marginBottom = '15px';
        title.style.textAlign = 'center';
        windowDiv.appendChild(title);

        // Crear lista de dispositivos conectados
        const deviceList = document.createElement('ul');
        this.devices.forEach(device => {
            const deviceItem = document.createElement('li');
            deviceItem.textContent = `${device.name} - Conectado a las: ${device.connectedAt}`;
            deviceItem.style.marginBottom = '10px';
            deviceItem.style.fontSize = '14px';
            deviceItem.style.lineHeight = '1.5';
            deviceList.appendChild(deviceItem);
        });

        windowDiv.appendChild(deviceList);

        // Agregar botón para minimizar
        const minimizeButton = document.createElement('button');
        minimizeButton.textContent = 'Minimizar';
        minimizeButton.style.marginTop = '10px';
        minimizeButton.style.padding = '8px 12px';
        minimizeButton.style.backgroundColor = '#333';
        minimizeButton.style.color = '#fff';
        minimizeButton.style.border = 'none';
        minimizeButton.style.cursor = 'pointer';
        minimizeButton.onclick = () => {
            windowDiv.style.display = windowDiv.style.display === 'none' ? 'block' : 'none';
        };

        windowDiv.appendChild(minimizeButton);

        // Añadir la ventana a la interfaz de Discord
        document.body.appendChild(windowDiv);
    }

    stop() {
        console.log("El plugin se ha detenido.");
    }
};
