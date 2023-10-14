import { pool } from "../db.config.js";
import { encryptPassword } from "../helpers/Bycrypt.js";

export const PostUser = async(req,res) => {
    try {
    const { name_user, edad, password, email_user }= req.body;
    const encrypt = await encryptPassword(password)
    const [rows] = await pool.query( 'INSERT INTO users (name_user, edad, password, email_user) VALUES (?,?,?,?)',
    [name_user, edad, encrypt , email_user])

    res.send({
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