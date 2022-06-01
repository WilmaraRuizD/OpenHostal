import express, { Request, Response } from "express";
import auth from "../firebase/auth";
import templateIds from '../constants/templateid.const'
import generatecode from '../utilities/generarcodigo'
import sendEmail from '../utilities/sendgrid'
//import { sendEmailVerification } from "firebase/auth";
export const authRouter =express.Router();

authRouter.use(express.json());

authRouter.post('/createUser',async (req: Request, res: Response) => {
    try{
    console.log(req.body)
     const code = generatecode();
     const {name, email,password}=req.body   

     await sendEmail(
        email,
        {
          subject: 'Validate email',
          name,
          code
        },
        templateIds.SEND_CODE
      )
      res.status(200).send('Mail send')

    //  const result=await auth.createUser(email,password);
    //  res.status(201).json(result)
    }
    catch(error){
        res.status(500).send("error")

    }
})


authRouter.post("/login", async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const result = await auth.logIn(email, password);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(error);
    }
})

