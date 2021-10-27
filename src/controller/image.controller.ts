import { Controller, Get, Post, UploadedFile, UseInterceptors, Logger, Inject, LoggerService } from "@nestjs/common";
import { FileInterceptor  } from "@nestjs/platform-express";
import  {Storage } from '../utils/multer';
import {paths} from 'config'
@Controller('/image')
export class ImageController {
    constructor(private readonly logger: Logger ){}
    @Post('/upload')
    @UseInterceptors(FileInterceptor('file', {
        storage: Storage.diskStorage({
            destination: paths.IMAGES_STATIC_DIR,
            filename: (req, file, cb) => {
                Logger.log('storage.file=', file)
                cb(null, `${Date.now()}-${file.originalname}`);
            }
        }),
    }))
    public upload(@UploadedFile() file: Express.Multer.File):string {
        Logger.log('file=', file)
        this.logger.log('file-logger=', file)
        return `${paths.ACCESS_HOST}/images/${file.filename}`;
    }
    @Get('/test')
    public test() {
        console.log('test....')
    }
}