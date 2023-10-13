import createpool from "mysql2/promise";
export const pool = createpool({
    host: 'localhost',
    user: 'root',
    passworod: "",
    port: 3306,
    database: "backend_pratica"
});

