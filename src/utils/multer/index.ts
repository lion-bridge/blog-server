import { paths } from 'config';
import multer = require('multer');
import { v4 as uuidv4 } from 'uuid'

export * as Storage from './storage';

export const diskStorage = multer.diskStorage({
    destination: paths.IMAGES_STATIC_DIR,
    filename: (req, file, callback) => {
        callback(null, `${uuidv4()}-${file.originalname}`)
        // Todo: 如何处理上传过程中的异常
    },
});