const express = require('express');
const app = express();
const port = 3000;

// Simulación de productos
const productos = [
  { id: 1, nombre: 'Pizza Margherita', precio: 8.99 },
  { id: 2, nombre: 'Pizza Pepperoni', precio: 10.99 },
  { id: 3, nombre: 'Pasta Carbonara', precio: 12.50 }
];

// Ruta para obtener productos
app.get('/productos', (req, res) => {
  res.send({
    message: "Lista de productos",
    data: productos
  });
});

// Servidor escuchando
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto: ${port}`);
});
