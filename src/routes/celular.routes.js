import { Router } from 'express';

export const celularRouter = Router()

celularRouter.get("/", async (req, res) =>{
    try{
        const result = await
    }catch(error){

    }
})

import pg from 'pg'
import 'dotenv/config'
const { Pool } = pg
 
const pool = new Pool()


pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

const celular  = await pool.query
('SELECT * FROM celulares')

console.log(celular.row);