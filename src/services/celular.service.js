import { pool } from "../config/db"

class CelularService {
    async listarCelular() {
        const res = await pool.query("SELECT*FROM celulares")
        return res.rows
    }

}