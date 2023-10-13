import {createpool} from "mysql2/promise";

export const pool = createpool({
    host: ' 192.168.12.36',
    user: 'root',
    passworod: "",
    port: 3306,
    database: "backend_pratica"
});

