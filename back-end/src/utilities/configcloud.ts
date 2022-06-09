// const uploadFileGoogle= require('../storage');
import fs from "fs"

const GOOGLE_CLOUD_PROJECT='trusty-coder-350212';
//nombre de bucket
export const GOOGLE_CLOUD_BUCKET='semilleroshapi_350212';

//clear el cliente de cloud storage
const {Storage}=require('@google-cloud/storage');
const storage = new Storage({
    projertId : GOOGLE_CLOUD_PROJECT,
    keyFilename:'./src/utilities/key.json'
});
// //subi una imagen a mi bucket en GCP
export const uploadFileGoogle=async(originalname)=>{
  const res=await storage.bucket(GOOGLE_CLOUD_BUCKET).upload(`dist/src/public/uploads/${originalname}`,{
           destination:`${originalname} `
          })
          console.log(`${originalname} uploaded to ${GOOGLE_CLOUD_BUCKET}`);
          try {
             fs.unlinkSync(`dist/src/public/uploads/${originalname}`)
            console.log('File removed')
           } catch(err) {
            console.error('Something wrong happened removing the file', err)
           }
}