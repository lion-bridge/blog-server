import { diskStorage } from "@/utils/multer";
import { Injectable, Logger, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { paths } from "config";

@Injectable()
export class UploadService {

    constructor(private readonly logger: Logger){}
    /**
     * 单个上传
     * @param file 
     * @returns {string}
     */
    
    public upload(file: Express.Multer.File): string {
        this.logger.log('单个文件上传,path=', file.path);
        return `${paths.ACCESS_HOST}/images/${file.filename}`;
    }
    /**
     * 批量上传
     * @returns {string[]} urls
     */
    public uploadBatch(files: Express.Multer.File[]): string[] {
        const urls = files.map(v => v.path)
        this.logger.log('批量上传成功', urls);
        return files.map(v => `${paths.ACCESS_HOST}/images/${v.filename}`);
    }
}