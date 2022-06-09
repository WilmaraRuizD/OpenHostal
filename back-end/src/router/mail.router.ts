import express, { Request, Response } from 'express'
import sendEmail from '../utilities/sendgrid'
import templateIds from '../constants/templateid.const'
import generatecode from '../utilities/generarcodigo'
export const mailRouter = express.Router()

mailRouter.use(express.json())


mailRouter.post(
  '/send_code',
  async (_req: Request, res: Response) => {
    try {

      const { name, email } = _req.body;
      const code = generatecode();

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
    } catch (error) {
      console.log(error)
      res.status(500).send(error.message)
    }
  }
)