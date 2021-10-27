import { paths } from "config";
import { WinstonModule, utilities } from "nest-winston";
import winston = require("winston");

const winstonLogger = WinstonModule.createLogger({
    transports: [
        new winston.transports.File({ filename: `${paths.LOG_DIR}/acccess.log`, }),
        new winston.transports.Http({
            level: 'info',
            format: winston.format.simple(),
            silent: process.env.NODE_ENV === 'production'
        }),
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.ms(),
                utilities.format.nestLike('MyApp', { prettyPrint: true }),
            ),
        }),
    ],
});

export default winstonLogger;