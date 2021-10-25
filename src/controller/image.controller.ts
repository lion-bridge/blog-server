import { Controller, Get, Post, UploadedFile, UseInterceptors, Logger } from "@nestjs/common";
import { FileInterceptor  } from "@nestjs/platform-express";
import  {Storage } from '../utils/multer'
@Controller('/image')
export class ImageController {
    
    @Post('/upload')
    @UseInterceptors(FileInterceptor('file', {
        storage: Storage.diskStorage({
            destination: '/opt/homebrew/var/www/images',
            filename: (req, file, cb) => {
                Logger.log('storage.file=', file)
                cb(null, `${Date.now()}-${file.originalname}`);
            }
        }),
    }))
    public upload(@UploadedFile() file: Express.Multer.File):string {
        Logger.log('file=', file)
        return `http://localhost:8080/images/${file.filename}`;
    }
    @Get('/test')
    public test() {
        console.log('test....')
    }
}