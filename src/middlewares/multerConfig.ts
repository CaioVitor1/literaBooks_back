import multer from "multer";
import path from 'path';


export const storage = (multer({
    storage: multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, path.resolve("/tmp/"))
        },
        filename: (req, file, callback) => {
    
            callback(null, `${file.originalname}`);
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