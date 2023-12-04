
import { Logger } from '../../index.js';

// Some basic tests...
(async () => {
  let logger = new Logger({ logInfo: true, logVerbose: true, logWarning: true, logError: true });
  logger.info(`info message`);
  logger.verbose(`verbose message`);
  logger.warn(`warning message`);
  logger.error(`error message`);
  console.log();
  logger.info(`info message with params: %s, %d`, 'param 1', 99);
  logger.verbose(`verbose message with params: %s, %d`, 'param 1', 99);
  logger.warn(`warning message with params: %s, %d`, 'param 1', 99);
  logger.error(`error message with params: %s, %d`, 'param 1', 99);
  console.log();
  logger = new Logger({ logInfo: true, logVerbose: false, logWarning: false, logError: false });
  logger.info(`only info message displays`);
  logger.verbose(`verify verbose message does not display`);
  logger.warn(`verify warning message does not display`);
  logger.error(`verify error message does not display`);
  console.log();
  logger = new Logger({ logInfo: false, logVerbose: true, logWarning: false, logError: false });
  logger.info(`verify info message does not display`);
  logger.verbose(`only verbose message displays`);
  logger.warn(`verify warning message does not display`);
  logger.error(`verify error message does not display`);
  console.log();
  logger = new Logger({ logInfo: false, logVerbose: false, logWarning: true, logError: false });
  logger.info(`verify info message does not display`);
  logger.verbose(`verify verbose message does not display`);
  logger.warn(`only warning message displays`);
  logger.error(`verify error message does not display`);
  console.log();
  logger = new Logger({ logInfo: false, logVerbose: false, logWarning: false, logError: true });
  logger.info(`verify info message does not display`);
  logger.verbose(`verify verbose message does not display`);
  logger.warn(`verify warning message does not display`);
  logger.error(`only error message displays`);
  console.log();
  logger = new Logger({ logInfo: true });
  logger.info(`only info message displays`);
  logger.verbose(`verify verbose message does not display`);
  logger.warn(`verify warning message does not display`);
  logger.error(`verify error message does not display`);
  console.log();
})();
