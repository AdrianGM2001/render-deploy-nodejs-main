const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

// Lista de productos
const productos = [
  {
      "id": 1,
      "nombre": "Pizza Margarita",
      "precio": 8.50,
      "tipo": "pizza",
      "size": "GRANDE",
      "ingredientes": [
          {
              "id": 1,
              "nombre": "Mozzarella",
              "alergenos": ["Lácteos"]
          },
          {
              "id": 2,
              "nombre": "Tomate",
              "alergenos": []
          },
          {
              "id": 3,
              "nombre": "Albahaca",
              "alergenos": []
          }
      ]
  },
  {
      "id": 2,
      "nombre": "Pizza Pepperoni",
      "precio": 9.00,
      "tipo": "pizza",
      "size": "MEDIANA",
      "ingredientes": [
          {
              "id": 1,
              "nombre": "Mozzarella",
              "alergenos": ["Lácteos"]
          },
          {
              "id": 4,
              "nombre": "Pepperoni",
              "alergenos": []
          }
      ]
  },
  {
      "id": 3,
      "nombre": "Espagueti a la Boloñesa",
      "precio": 7.00,
      "tipo": "pasta",
      "size": null,
      "ingredientes": [
          {
              "id": 5,
              "nombre": "Espagueti",
              "alergenos": ["Gluten"]
          },
          {
              "id": 6,
              "nombre": "Carne Molida",
              "alergenos": []
          },
          {
              "id": 7,
              "nombre": "Salsa Boloñesa",
              "alergenos": ["Lácteos"]
          }
      ]
  },
  {
      "id": 4,
      "nombre": "Coca-Cola",
      "precio": 2.50,
      "tipo": "bebida",
      "size": "MEDIANA",
      "ingredientes": [] // No tiene ingredientes
  },
  {
      "id": 5,
      "nombre": "Agua Mineral",
      "precio": 1.50,
      "tipo": "bebida",
      "size": "PEQUENA",
      "ingredientes": [] // No tiene ingredientes
  }
]

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
