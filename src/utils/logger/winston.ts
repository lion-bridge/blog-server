import { paths } from "config";
import { WinstonModule, utilities } from "nest-winston";
import winston = require("winston");

const {format, transports,} = winston;
const {timestamp, combine, splat, simple, ms} = format;

const nestLike = utilities.format.nestLike('my-blog', { prettyPrint: true });
const winstonLogger = WinstonModule.createLogger({
    transports: [
        new transports.File({ 
            filename: `${paths.LOG_DIR}/acccess.log`,
            format: combine(
                simple(), 
                timestamp(),
                nestLike),
        }),
        new transports.Http({
            level: 'info',
            format: simple(),
            silent: process.env.NODE_ENV === 'production'
        }),
        new transports.Console({
            format: combine(
                timestamp(),
                ms(),
                nestLike,
            ),
        }),
    ],
});

export default winstonLogger;