import { Controller, Get, Post, UploadedFile, UseInterceptors, Logger, Inject, LoggerService, UploadedFiles, Query } from "@nestjs/common";
import { FileInterceptor, FilesInterceptor } from "@nestjs/platform-express";
import { diskStorage, Storage } from '../utils/multer';
import { paths } from 'config'
import { UploadService } from "@/service/upload.service";
@Controller('/image')
export class ImageController {
    constructor(
        private readonly logger: Logger,
        private readonly service: UploadService,
    ) { }
    /**
     * 单个上传
     * @param file 
     * @returns 
     */
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
    public upload(@UploadedFile() file: Express.Multer.File): string {
        Logger.log('file=', file)
        this.logger.log('file-logger=', file)
        return `${paths.ACCESS_HOST}/images/${file.filename}`;
    }
    /**
     * 单个上传
     * @param file 
     * @returns 
     */
    @UseInterceptors(FileInterceptor('file', { storage: diskStorage }))
    @Post('/uploadOne')
    public uploadAFile(@UploadedFile() file: Express.Multer.File) {
        return this.service.upload(file);
    }
    /**
     * 批量上传
     * @param files 
     * @returns 
     */
    @Post('/uploadBatch')
    @UseInterceptors(FilesInterceptor('files', 10, { storage: diskStorage}))
    public uploadBatch(@UploadedFiles() files: Express.Multer.File[]) {
        return this.service.uploadBatch(files);
    }

    @Get('/test')
    public test() {
        console.log('test....')
    }
}