import chalk from 'chalk';

const clrInfo = chalk.whiteBright;
const clrVerbose = chalk.yellowBright;
const clrWarn = chalk.rgb(255, 165, 0); // Orange
const clrError = chalk.redBright;

export class Logger {
  logging: boolean;
  logInfo: boolean;
  logVerbose: boolean;
  logWarning: boolean;
  logError: boolean;

  constructor(params: {
    logInfo?: boolean,
    logVerbose?: boolean,
    logWarning?: boolean,
    logError?: boolean
  }) {
    this.logInfo = params && params.logInfo === true;
    this.logVerbose = params && params.logVerbose === true;
    this.logWarning = params && params.logWarning === true;
    this.logError = params && params.logError === true;
    if (!this.logInfo && !this.logVerbose && !this.logWarning && !this.logError) {
      this.logging = false;
    } else {
      this.logging = true;
    }
  }

  info(message?: any, ...optionalParams: any[]): void {
    if (!this.logging || !this.logInfo || !message) return;
    console.info(clrInfo(message), ...optionalParams);
  }

  verbose(message?: any, ...optionalParams: any[]): void {
    if (!this.logging || !this.logVerbose || !message) return;
    console.info(clrVerbose(message), ...optionalParams);
  }

  warn(message?: any, ...optionalParams: any[]): void {
    if (!this.logging || !this.logWarning || !message) return;
    console.warn(clrWarn(message), ...optionalParams);
  }

  error(message?: any, ...optionalParams: any[]): void {
    if (!this.logging || !this.logError || !message) return;
    console.error(clrError(message), ...optionalParams);
  }

}
