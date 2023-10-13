import { pool } from "../db.config.js";

export const PostUser = async(res, req) => {
    try {
        const {name_user, edad, password, email_user }= req.body

    const [rows] = await pool.query('INSERT INTO users (name_user,edad,password,email_user)VALUES(?,?,?,?)',
    [name_user,edad,password,email_user])

    res.json({
        id:rows.insertId,
        name_user,
        edad,
        password,
        email_user,
        message: "Usuario creado",
    })
    } catch (error) {
        console.error(error,"registro fallido")
        return res.status(500).json({message: 'Algo va mal'})
    }
    
}