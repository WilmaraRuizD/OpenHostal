import express, { Request, Response, Router } from 'express';
import { pool } from '../sql/config';
export const hostalRouter = express.Router()

hostalRouter.use(express.json())


hostalRouter.get('/hostal',async(req,res)=>{
    let cliente = await pool.connect()
    try{
        let result =await cliente.query('SELECT * FROM hotales')
        res.json(result.rows)
    } catch(err) {
        console.log({ err })
        res.status(500).json({ error: 'Internal error server' })
}
})

hostalRouter.post('/hostal',async(req,res)=>{
    try{
       
        const{
            nombre,
            ciudad,
            sede,
            descripcion,
            direccion,
            foto,
            coordenadas
        }=req.body
       
        const cliente=await pool.connect()
        const response=await cliente.query(
            `INSERT INTO hotales(nombre,ciudad,sede,descripcion,direccion,foto,coordenadas)VALUES ($1,$2,$3,$4,$5,$6,$7)RETURNING id`,
            [  nombre,
                ciudad,
                sede,
                descripcion,
                direccion,
                foto,
                coordenadas]
        )
        if (response.rowCount > 0) {res.send ('Se crea hotal correctamente')
            }
            else{  res.json({ message: 'No se pudo crear el hotal' })}
            }catch(err){console.log(err)
                res.status(500).json({ error: 'Internal error server' })
            }
         } )

         hostalRouter.put('/Hosteles/:id',async(req,res)=>{
            let cliente=await pool.connect()
            const{ id }=req.params
            const{
                nombre,
                ciudad,
                sede,
                descripcion,
                direccion,
                foto,
                coordenadas
            }=req.body
            try{
                const result=await cliente.query(`UPDATE hotales SET nombre = $1, ciudad=$2,sede = $3,descripcion =$4,direccion=$5,foto=$6,coordenadas=$7 WHERE id =$8`,
                    [  nombre,
                       ciudad,
                       sede,
                       descripcion,
                       direccion,
                       foto,
                       coordenadas,
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

            hostalRouter.delete('/hostal/:id', async (req, res) => {
                let cliente = await pool.connect()
                const { id } = req.params
                try{
                    const result=await cliente.query(`DELETE FROM hotales WHERE id = $1`,[id])
                    if(result.rowCount>0){res.send('Se eliminado hotal de manera exitosa')
                }else{
                    res.status(409).json({ message: 'Error en dato enviado' })
                }
            } catch(err){
                res.status(500).json({ error: 'Error server' })
            }
        })
