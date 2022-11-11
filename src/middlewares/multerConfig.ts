import multer from "multer";
import path from 'path';

/*
export const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.resolve("./assets/uploads"))
    },
    filename: (req, file, callback) => {
        const time = new Date().getTime();

        callback(null, `${time}_${file.originalname}`);
    },fileFilter: (req, file, callback) => {
        const extensionImg = ['image/png', 'image/jpg','image/jpeg']       
       }
}), */
console.log("chegou aqui")
export const storage = (multer({
    storage: multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, path.resolve("src/assets/uploads"))
        },
        filename: (req, file, callback) => {
            const time = new Date().getTime();
    
            callback(null, `${time}_${file.originalname}`);
        }
        
    }),
    fileFilter: (req, file, callback) => {
        const extensionImg = ['image/png', 'image/jpg','image/jpeg'].find
        (acceptedFormat => acceptedFormat == file.mimetype);

        if(extensionImg){
            return callback(null, true);
        }else {
            return callback(null, false)
        }
    }
}))