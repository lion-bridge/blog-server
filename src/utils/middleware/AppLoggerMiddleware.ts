import { Logger, NestMiddleware } from "@nestjs/common";
import type { Request, Response, NextFunction } from 'express';
/**
 * logger中间件
 */
export class AppLoggerMiddleware implements NestMiddleware {
    private readonly logger = new Logger('HTTP');
    use(req: Request, res: Response, next: NextFunction) {
        const { ip, method, originalUrl: url, query, body } = req;
        const userAgent = req.get('user-agent') || '';
        const { statusCode } = res;
        this.logger.log(``)
        res.on('close', () => {
            const contentLength = res.get('content-length') || 0;
            this.logger.log(`request: ${method} ${ip} ${url} ${userAgent}`,query);
        })
        next()
    }
}