import { Logger, ConsoleLogger } from '@nestjs/common';

export class CustomLogger extends ConsoleLogger {
    log(message: any, context?: string) {
        super.log(message, context);
    }
}