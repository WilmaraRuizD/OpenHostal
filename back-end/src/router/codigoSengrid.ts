import express, { Request, Response } from "express";
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




