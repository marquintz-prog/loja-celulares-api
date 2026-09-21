import pool from '../db.js';

class CelularService {

    async listarTodos() {
        const resultado = await Pool.query(
            'SELECT * FROM celulares'
        );

        return resultado.rows;
    }

   
    async cadastrar(id, modelo, marca,preco, quantidade_estoque) {
        const resultado = await Pool.query(
            `INSERT INTO celulares 
            (id, modelo, marca, preco, quantidade_estoque)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *`,
            [id, modelo, marca,preco, quantidade_estoque]
        );

        return resultado.rows[0];
    }

    
    }


export default CelularService;