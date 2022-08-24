import express, { Request, Response } from "express";
<<<<<<< HEAD
import templateIds from '../constants/templateid.const';
import templateIds1 from '../constants/templateid.const1';
import templateIds2 from '../constants/templateid.const2';
import templateIds3 from '../constants/templateid.const3';
import generatecode from '../utilities/generarcodigo';
import sendEmail from '../utilities/sendgrid';
import { createValidator } from 'express-joi-validation'
import mailSchema from '../schemas-joi/main'

export const codigoRouter =express.Router();

const validator = createValidator()
codigoRouter.use(express.json());

codigoRouter.post('/registro', validator.body(mailSchema),async (_req: Request, res: Response) => {
  try{
 
   const {name, email}=_req.body  
   const codigo = `https://openhostal.web.app/registro`;
    await sendEmail(
      email,
      {
        subject: 'Validate email',
        name,
        codigo
      },
      templateIds.SEND_CODE
    )
    res.status(200).send('Mail send')
  }
  catch(error){
      console.log(error)
      res.status(500).send("error")

  }
})

codigoRouter.post('/SEND_CHECKIN',validator.body(mailSchema),async (_req: Request, res: Response) => {
  try{
 
   const {name, email}=_req.body  
   const codigo = generatecode();
    await sendEmail(
      email,
      {
        subject: 'Validate email',
        name,
        codigo
      },
      templateIds1.SEND_CHECKIN
    )
    res.status(200).send('Mail send')
  }
  catch(error){
      console.log(error)
      res.status(500).send("error")
  }
})

codigoRouter.post('/SEND_CheckOut', validator.body(mailSchema),async (_req: Request, res: Response) => {
  try{
 
   const {name, email}=_req.body  
   const codigo = generatecode();
    await sendEmail(
      email,
      {
        subject: 'Validate email',
        name,
        codigo
      },
      templateIds2.SEND_CheckOut
    )
    res.status(200).send('Mail send')
  }
  catch(error){
      console.log(error)
      res.status(500).send("error")

  }
})

codigoRouter.post('/validar', validator.body(mailSchema),async (_req: Request, res: Response) => {
  try{
 
   const {name, email}=_req.body  
   const codigo = `https://openhostal.web.app/registro`;
    await sendEmail(
      email,
      {
        subject: 'Validate email',
        name,
        codigo
      },
      templateIds3.SEND_VALIDAR
    )
    res.status(200).send('Mail send')
  }
  catch(error){
      console.log(error)
      res.status(500).send("error")

  }
})
=======
import templateIds from '../constants/templateid.const'
import generatecode from '../utilities/generarcodigo'
import sendEmail from '../utilities/sendgrid'
import { sendEmailVerification } from "firebase/auth";
export const codigoRouter =express.Router();

codigoRouter.use(express.json());

codigoRouter.post('/codigo',async (req: Request, res: Response) => {
    try{
   
     const {name, email,password}=req.body  
     console.log(name,email,password);
     const codigo = generatecode();
      await sendEmail(
        email,
        {
          subject: 'Validate email',
          name,
          codigo
        },
        templateIds.SEND_CODE
      )
      res.status(200).send('Mail send')
    }
    catch(error){
        res.status(500).send("error")

    }
})




>>>>>>> 39e61b5e994c40422e69a986eef44630543c365e
