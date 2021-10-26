import { Logger, NestMiddleware } from "@nestjs/common";
import type { Request, Response, NextFunction } from 'express';

/**
 * logger中间件
 */
export class AppLoggerMiddleware implements NestMiddleware {
    private logger = new Logger('HTTP');
    use(req: Request, res: Response, next: NextFunction) {
        const { ip, method, path: url } = req;
        const userAgent = req.get('user-agent') || '';
        res.on('close', () => {
            const { statusCode } = res;
            const contentLength = res.get('content-length') || 0;

            this.logger.log(
                `${method} ${url} ${statusCode} ${contentLength} - ${userAgent} ${ip}`
            );
        })
        next()
    }
}