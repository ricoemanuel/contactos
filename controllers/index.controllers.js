const getUsers=async (req,res)=>{
    const response=await fetch('https://crud-contactos-iefo-default-rtdb.firebaseio.com/users.json')
    const data=await response.json()
    res.send(data)
}

module.exports={getUsers}