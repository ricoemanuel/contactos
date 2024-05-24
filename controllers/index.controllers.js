// const { Pool } = require('pg')

// new Pool({

// })

const getUsers = async (req, res) => {
    try {
        const response = await fetch('https://crud-contactos-iefo-default-rtdb.firebaseio.com/users.json');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener usuarios', error: error.message });
    }
}

const postUsers = async (req, res) => {
    const newUser = req.body;
    try {
        const response = await fetch('https://crud-contactos-iefo-default-rtdb.firebaseio.com/users.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        });
        const data = await response.json();
        res.status(201).json({ message: 'Usuario creado exitosamente', userId: data.name });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear usuario', error: error.message });
    }
}

const putUsers=async (req,res)=>{
    const userId = req.params.userId;
    const updatedUser = req.body;
    try {
      await fetch(`https://crud-contactos-iefo-default-rtdb.firebaseio.com/users/${userId}.json`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      });
      res.json({ message: 'Usuario actualizado exitosamente' });
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar usuario', error: error.message });
    }
}
const deleteUsers=async (req,res)=>{
    const userId = req.params.userId;
  try {
    await fetch(`https://crud-contactos-iefo-default-rtdb.firebaseio.com/users/${userId}.json`, {
      method: 'DELETE',
    });
    res.json({ message: 'Usuario eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar usuario', error: error.message });
  }
}

module.exports = { getUsers, postUsers, putUsers, deleteUsers }