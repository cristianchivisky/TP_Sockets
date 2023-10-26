const net = require('net');

const hostLocal = 'localhost';
const hostLinuxLab = 'ip_de_la_maquina_linux'; // Reemplaza con la dirección IP de la máquina Linux en el laboratorio

// Función para verificar la conexión a un puerto en un host
function checkPort(host, port) {
  const client = new net.Socket();

  client.connect(port, host, () => {
    console.log(`Puerto ${port} en host ${host} está abierto`);
    client.destroy(); // Cierra la conexión
  });

  client.on('error', (err) => {
    console.log(`Puerto ${port} en host ${host} está cerrado o no se pudo establecer la conexión: ${err.message}`);
  });
}

// Verificar puertos en el host local
for (let port = 1; port <= 1024; port++) {
  checkPort(hostLocal, port);
}

// Verificar puertos en la máquina Linux del laboratorio
for (let port = 1; port <= 1024; port++) {
  checkPort(hostLinuxLab, port);
}
