import { createPool } from "mysql2/promise";

export const pool = createPool({
    host: '192.168.12.36',
    user: 'root',
    port: 3306,
    database:'backend_practica',
    password: ''
});

