<<<<<<< HEAD
import multer from 'multer';
import path from "path";

const storage =
multer.diskStorage({
    destination:path.join(__dirname,'../src/public/uploads'),
     filename:(req,file,cb)=>{
         cb(null,file.originalname);
     }
})
//limite y cantidad del archivo 
export const uploadFile =multer({
    storage,
    limits:{
        fileSize:1000000
    }
}).single('foto')

export const uploadFile1 =multer({
    storage,
    limits:{
        fileSize:657128,files:4
    }
}).array('foto',4)


=======
import multer from "multer";
import path from "path";

const storage =
multer.diskStorage({
    destination:path.join(__dirname,'../src/public/uploads'),
     filename:(req,file,cb)=>{
         cb(null,file.originalname);
     }
})
//limite y cantidad del archivo 
export const uploadFile =multer({
    storage,
    limits:{
        fileSize:1000000
    }
}).single('foto')


   // uploadFile(req, res, err => {
        // if (err) {
        //   console.log(err)
        //   err.message = 'Error al cargar el archivo'
        //   res.send(err)
        // }
        // if (req.file) console.log(req.file)
        // else if (req.files) console.log(req.files)
        // res.send('Archivo cargado')    
>>>>>>> 39e61b5e994c40422e69a986eef44630543c365e
