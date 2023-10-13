import { pool } from "mysql";

export const RecoverPassword = async (req, res) => {
    try {
        const {email_user, password} = req.body;
        const [pass] = await pool.query("SELECT password FROM users WHERE email_user = ?",[email_user, password]);
        if (pass){
            const recover = `UPDATE users SET password='${password}' WHERE email_user=${email_user}`;
            await pool.query(recover);
        }else{
            return res.send('Error');
        };
    } catch (error) {
        res.status(404).send("Error");
    };
};
