# logger
Logs info and verbose messages to stdout, warn and errors messages to stderr

## Install

`npm install @soralinks/logger`

## Use in your app

```javascript
import { Logger } from '@soralinks/logger';

// Turn on all logging: info, verbose, warning and error
let logger: Logger = new Logger({ logInfo: true, logVerbose: true, logWarning: true, logError: true });
logger.info(`logging some info: %s`, 'hello there!');
logger.verbose(`logging some verbose info: %s`, 'hello there again!');
logger.warn(`logging a warning: %s`, 'my warning message');
logger.error(`logging an error: %s`, 'my error message');

// Only turn on info and error logging
logger = new Logger({ logInfo: true, logError: true });
logger.info(`logging some info: %s`, 'hello there!');
logger.verbose(`logging some verbose info: %s`, 'hello there again!'); // this message will *not* get logged
logger.warn(`logging a warning: %s`, 'my warning message');  // this message will *not* get logged
logger.error(`logging an error: %s`, 'my error message');

```
