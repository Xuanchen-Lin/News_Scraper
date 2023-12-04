
export declare class Logger {
  constructor(params: { logInfo?: boolean, logVerbose?: boolean, logWarning?: boolean, logError?: boolean });
  info(message?: any, ...optionalParams: any[]): void;
  verbose(message?: any, ...optionalParams: any[]): void;
  warn(message?: any, ...optionalParams: any[]): void;
  error(message?: any, ...optionalParams: any[]): void;
}
