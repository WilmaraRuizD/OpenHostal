import express, { Request, Response, Router } from 'express'
import { pool } from '../sql/config';
export const roomRouter = express.Router()


roomRouter.use(express.json())


roomRouter.get('/room',async(req,res)=>{
    let cliente = await pool.connect()
    try{
        let result =await cliente.query('SELECT * FROM habitacion')
        res.json(result.rows)
    } catch(err) {
        console.log({ err })
        res.status(500).json({ error: 'Internal error server' })
}
})

roomRouter.get('/room/:id', async(req,res)=>{
    let cliente = await pool.connect()
    const { id } = req.params
    
    try{
 
        let result =await cliente.query(`SELECT * FROM habitacion WHERE id = $1`,
        [id])
       if(result.rows.length>0){
        res.json(result.rows)
       }else{
           res.send('NO EXISTE Habitación')
       }
    } catch(err) {
        console.log({ err })
        res.status(500).json({ error: 'Internal error server' })
}
})

roomRouter.post('/room',async(req,res)=>{
    try{
       
        const{
            tipo,
            descripcion,
            foto,
            estado,
            capacidad,
            servicios,
            id_hotales
        }=req.body
       
        const cliente=await pool.connect()
        const response=await cliente.query(
            `INSERT INTO habitacion(tipo,descripcion,foto,estado,capacidad,servicios,id_hotales)VALUES ($1,$2,$3,$4,$5,$6,$7)RETURNING id`,
            [  tipo,descripcion,foto,estado,capacidad,servicios,id_hotales]
        )
        if (response.rowCount > 0) {res.send ('Se crea habitacion correctamente')
            }
            else{  res.json({ message: 'No se pudo crear el habitacion' })}
            }catch(err){console.log(err)
                res.status(500).json({ error: 'Internal error server' })
            }
         } )

         roomRouter.put('/room/:id',async(req,res)=>{
            let cliente=await pool.connect()
            const{ id }=req.params
            const{ tipo,
                descripcion,
                foto,
                estado,
                capacidad,
                servicios,
                id_hotales
               
            }=req.body
            try{
                const result=await cliente.query(`UPDATE habitacion SET tipo = $1, descripcion=$2,foto = $3,estado=$4,capacidad=$5,servicios=$6,id_hotales=$7 WHERE id =$8`,
                    [  tipo,
                        descripcion,
                        foto,
                        estado,
                        capacidad,
                        servicios,
                        id_hotales,
                       id ]
                    ) 
                    if (result.rowCount > 0) {
                        res.json({ message: 'Actualización realizada correctamente' })
                      } else { res.status(503)
                        .json({ message: 'Ocurrio un envento inesperado, intente de nuevo' })}
                    }
                catch (err) {
                    console.log({ err })
                    res.status(500).json({ error: 'Internal error server' })
                }
            })

            roomRouter.delete('/room/:id', async (req, res) => {
                let cliente = await pool.connect()
                const { id } = req.params
                try{
                    const result=await cliente.query(`DELETE FROM habitacion WHERE id = $1`,[id])
                    if(result.rowCount>0){res.send('Se eliminado habitacion de manera exitosa')
                }else{
                    res.status(409).json({ message: 'Error en dato enviado' })
                }
            } catch(err){
                res.status(500).json({ error: 'Error server' })
            }
        })
