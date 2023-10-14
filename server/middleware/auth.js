import jwt from "jsonwebtoken"
import  SECRETKEY  from "";


export const isAuth = async (req, res, next) =>{
  const token = req.header("Authorization");
  if (!token) return res.json({ message: 'Token de usuario no encontrado'});
  try {
    const validaToken = jwt.verify(token,SECRETKEY);
    console.log("validacion", validaToken);
    next()
  } catch (error) {
    return res.status(401).json({error: error.message});
  }
  
};

