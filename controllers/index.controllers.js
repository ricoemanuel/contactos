require('dotenv').config();
const url=process.env.URL
const getUsers=async (req,res)=>{
    const response=await fetch(`${url}/users.json`)
    const data=await response.json()
    res.send(data)
}
const postUsers=async (req,res)=>{
    const newuser=req.body
    const response=await fetch(`${url}/users.json`,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(newuser)
    })
    res.send(response)
}

module.exports={getUsers,postUsers}