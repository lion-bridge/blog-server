import { Controller, Get, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";


@Controller('/image')
export class ImageController {
    @Post('/upload')
    @UseInterceptors(FileInterceptor('file', {
        dest: '/opt/homebrew/var/www/images',
        fileFilter: (req, file, cb) => {
        }
    }))
    public upload(@UploadedFile() file: Express.Multer.File):string {
        console.log('file=', file);
        
        return '上传成功！';
    }
    @Get('/test')
    public test() {
        console.log('test....')
    }
}