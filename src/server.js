const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

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
app.post('/clientes/registro', (req, res) => {
  console.log("Datos recibidos:" + req.body); // Verificar los datos recibidos en el cuerpo
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


// Ruta para login de un cliente
app.post('/clientes/login', (req, res) => {
  const { email, password } = req.body;

  // Buscar el cliente por email
  const cliente = clientes.find(c => c.email === email);

  // Verificar si el cliente existe y si la contraseña coincide
  if (cliente && cliente.password === password) {
    res.status(200).send(cliente);
  } else {
    res.status(401).send({ message: 'Email o contraseña incorrectos' });
  }
});

// Servidor escuchando
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto: ${port}`);
});
