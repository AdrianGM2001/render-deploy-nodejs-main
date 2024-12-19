const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

const ingredientes = [
    {
        "id": 1,
        "nombre": "Mozzarella",
        "alergenos": ["Lactosa", "Gluten"]
    },
    {
        "id": 2,
        "nombre": "Parmesano",
        "alergenos": ["Lactosa"]
    },
    {
        "id": 3,
        "nombre": "Gorgonzola",
        "alergenos": ["Lactosa"]
    },
    {
        "id": 4,
        "nombre": "Ricotta",
        "alergenos": ["Lactosa"]
    },
    {
        "id": 5,
        "nombre": "Tomate",
        "alergenos": []
    },
    {
        "id": 6,
        "nombre": "Aceitunas negras",
        "alergenos": ["Sulfitos"]
    },
    {
        "id": 7,
        "nombre": "Piña",
        "alergenos": ["Sulfitos"]
    },
    {
        "id": 8,
        "nombre": "Pimiento",
        "alergenos": ["Apio"]
    },
    {
        "id": 9,
        "nombre": "Cebolla",
        "alergenos": []
    },
    {
        "id": 10,
        "nombre": "Champiñones",
        "alergenos": []
    },
    {
        "id": 11,
        "nombre": "Pepperoni",
        "alergenos": ["Sulfitos"]
    },
    {
        "id": 12,
        "nombre": "Pollo",
        "alergenos": ["Mostaza"]
    },
    {
        "id": 13,
        "nombre": "Bacon",
        "alergenos": ["Sulfitos"]
    },
    {
        "id": 14,
        "nombre": "Salchicha italiana",
        "alergenos": ["Lactosa", "Sulfitos"]
    },
    {
        "id": 15,
        "nombre": "Jamón",
        "alergenos": ["Lactosa", "Sulfitos"]
    },
    {
        "id": 16,
        "nombre": "Macarrones",
        "alergenos": ["Gluten"]
    },
    {
        "id": 17,
        "nombre": "Espaguetis",
        "alergenos": ["Gluten"]
    },
    {
        "id": 18,
        "nombre": "Ternera",
        "alergenos": []
    },
    {
        "id": 19,
        "nombre": "Queso",
        "alergenos": ["Lactosa"]
    }
];

const productos = [
    {
        "id": 1,
        "nombre": "Hot-N-Ready Pepperoni",
        "precio": 10.99,
        "tipo": "pizza",
        "size": null,
        "ingredientes": [
            ingredientes[10], // Pepperoni
            ingredientes[0],  // Mozzarella
            ingredientes[4],  // Tomate
            ingredientes[8]   // Cebolla
        ]
    },
    {
        "id": 2,
        "nombre": "Hot-N-Ready Cheese",
        "precio": 10.99,
        "tipo": "pizza",
        "size": null,
        "ingredientes": [
            ingredientes[0],  // Mozzarella
            ingredientes[1],  // Parmesano
            ingredientes[3],  // Ricotta
            ingredientes[2],  // Gorgonzola
            ingredientes[4]   // Tomate
        ]
    },
    {
        "id": 3,
        "nombre": "Sweet N Spicy Chicken",
        "precio": 16.2,
        "tipo": "pizza",
        "size": null,
        "ingredientes": [
            ingredientes[11], // Pollo
            ingredientes[0],  // Mozzarella
            ingredientes[8],  // Cebolla
            ingredientes[4]   // Tomate
        ]
    },
    {
        "id": 4,
        "nombre": "BBQ Chicken",
        "precio": 16.2,
        "tipo": "pizza",
        "size": null,
        "ingredientes": [
            ingredientes[11], // Pollo
            ingredientes[0],  // Mozzarella
            ingredientes[12], // Bacon
            ingredientes[8],  // Cebolla
            ingredientes[4]   // Tomate
        ]
    },
    {
        "id": 5,
        "nombre": "3 Meat Treat",
        "precio": 18.5,
        "tipo": "pizza",
        "size": null,
        "ingredientes": [
            ingredientes[10], // Pepperoni
            ingredientes[13], // Salchicha italiana
            ingredientes[12], // Bacon
            ingredientes[0],  // Mozzarella
            ingredientes[4]   // Tomate
        ]
    },
    {
        "id": 6,
        "nombre": "Hula Hawaiian",
        "precio": 16.2,
        "tipo": "pizza",
        "size": null,
        "ingredientes": [
            ingredientes[14], // Jamón
            ingredientes[6],  // Piña
            ingredientes[0],  // Mozzarella
            ingredientes[4]   // Tomate
        ]
    },
    {
        "id": 7,
        "nombre": "Ultimate Supreme",
        "precio": 18.5,
        "tipo": "pizza",
        "size": null,
        "ingredientes": [
            ingredientes[10], // Pepperoni
            ingredientes[13], // Salchicha italiana
            ingredientes[12], // Bacon
            ingredientes[7],  // Pimiento
            ingredientes[9],  // Champiñones
            ingredientes[0],  // Mozzarella
            ingredientes[4]   // Tomate
        ]
    },
    {
        "id": 8,
        "nombre": "Veggie",
        "precio": 16.2,
        "tipo": "pizza",
        "size": null,
        "ingredientes": [
            ingredientes[7],  // Pimiento
            ingredientes[8],  // Cebolla
            ingredientes[5],  // Aceitunas
            ingredientes[9],  // Champiñones
            ingredientes[4],  // Tomate
            ingredientes[0]   // Mozzarella
        ]
    },
    {
        "id": 9,
        "nombre": "Macarrones del mediterráneo",
        "precio": 6.5,
        "tipo": "pasta",
        "size": null,
        "ingredientes": [
            ingredientes[15], // Macarrones
            ingredientes[7],  // Pimiento
            ingredientes[5],  // Aceitunas
            ingredientes[18]  // Queso
        ]
    },
    {
        "id": 10,
        "nombre": "Espaguetis con tomate y cebolla",
        "precio": 7.5,
        "tipo": "pasta",
        "size": null,
        "ingredientes": [
            ingredientes[16], // Espaguetis
            ingredientes[4],  // Tomate
            ingredientes[8]   // Cebolla
        ]
    },
    {
        "id": 11,
        "nombre": "Espaguetis con tomate",
        "precio": 5.5,
        "tipo": "pasta",
        "size": null,
        "ingredientes": [
            ingredientes[16], // Espaguetis
            ingredientes[4],  // Tomate
            ingredientes[18]  // Queso
        ]
    },
    {
        "id": 12,
        "nombre": "Espaguetis con tomate, salchicha italiana y queso",
        "precio": 5.5,
        "tipo": "pasta",
        "size": null,
        "ingredientes": [
            ingredientes[16], // Espaguetis
            ingredientes[4],  // Tomate
            ingredientes[18], // Queso
            ingredientes[13]  // Salchicha italiana
        ]
    },
    {
        "id": 13,
        "nombre": "Espaguetis con tomate, ternera y queso",
        "precio": 5.5,
        "tipo": "pasta",
        "size": null,
        "ingredientes": [
            ingredientes[16], // Espaguetis
            ingredientes[4],  // Tomate
            ingredientes[18], // Queso
            ingredientes[17]  // Ternera
        ]
    },
    {
        "id": 14,
        "nombre": "Espaguetis con albóndigas",
        "precio": 5.5,
        "tipo": "pasta",
        "size": null,
        "ingredientes": [
            ingredientes[16], // Espaguetis
            ingredientes[17], // Ternera
            ingredientes[4],  // Tomate
            ingredientes[18]  // Queso
        ]
    },
    {
        "id": 15,
        "nombre": "Coca-Cola",
        "precio": 1.5,
        "tipo": "bebida",
        "size": null,
        "ingredientes": []
    },
    {
        "id": 16,
        "nombre": "Fanta de naranja",
        "precio": 1.5,
        "tipo": "bebida",
        "size": null,
        "ingredientes": []
    },
    {
        "id": 17,
        "nombre": "Cerveza",
        "precio": 1.5,
        "tipo": "bebida",
        "size": null,
        "ingredientes": []
    },
    {
        "id": 18,
        "nombre": "Cerveza sin alcohol",
        "precio": 1.5,
        "tipo": "bebida",
        "size": null,
        "ingredientes": []
    },
    {
        "id": 19,
        "nombre": "RedBull",
        "precio": 1.5,
        "tipo": "bebida",
        "size": null,
        "ingredientes": []
    },
    {
        "id": 20,
        "nombre": "RedBull zero",
        "precio": 1.5,
        "tipo": "bebida",
        "size": null,
        "ingredientes": []
    },
    {
        "id": 21,
        "nombre": "RedBull sin azúcar",
        "precio": 1.5,
        "tipo": "bebida",
        "size": null,
        "ingredientes": []
    }
];

// Ruta para obtener productos
app.get('/productos', (req, res) => {
  res.send(productos);  // Enviar solo la lista de productos
});

// Lista de clientes
let clientes = [
    {
        id: 1,
        dni: "12345678A",
        nombre: "Juan Pérez",
        direccion: "Calle Falsa 123",
        telefono: "555123456",
        email: "juan@gmail.com",
        password: "1234",
        pedidos: [] 
      }
]
app.get('/clientes', (req, res) => {
  res.send(clientes);
});

// Ruta para agregar un nuevo cliente
app.post('/clientes/registro', (req, res) => {
  console.log("Datos recibidos:" + req.body); 
  const { dni, nombre, direccion, telefono, email, password } = req.body;
  // Verificar si ya existe un cliente con el mismo email
  const clienteExistente = clientes.find(c => c.email === email);
  if (clienteExistente) {
    // Si el email ya está registrado, devolver un error
    return res.status(400).send({ message: 'El usuario con el email ${email} ya existe.' });
  }
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
