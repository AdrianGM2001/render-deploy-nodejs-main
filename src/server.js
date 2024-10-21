const express = require('express');
const app = express();
const port = 3000;

// Lista de productos
const productos = [
  { id: 1, nombre: 'Pizza Margherita', precio: 8.99 },
  { id: 2, nombre: 'Pizza Pepperoni', precio: 10.99 },
  { id: 3, nombre: 'Pasta Carbonara', precio: 12.50 }
];

// Ruta para obtener productos
app.get('/productos', (req, res) => {
  res.send(productos);  // Enviar solo la lista de productos
});

//Lista de clientes
let clientes = []
app.get('/clientes', (req, res) => {
  res.send(clientes);
});

// Ruta para agregar un nuevo cliente
app.post('/clientes', (req, res) => {
  const { dni, nombre, direccion, telefono, email, password } = req.body;

  // Crear un nuevo cliente
  const nuevoCliente = {
    id: clientes.length + 1, // Generar un nuevo ID
    dni,
    nombre,
    direccion,
    telefono,
    email,
    password,
    pedidos: [] // Inicialmente vacío
  };

  // Agregar el nuevo cliente a la lista
  clientes.push(nuevoCliente);

  // Responder con el nuevo cliente
  res.status(201).send(nuevoCliente);
});




// Servidor escuchando
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto: ${port}`);
});
