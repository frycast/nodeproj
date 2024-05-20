import { config } from './config';

// Access environment variables directly
console.log(`NODE_ENV: ${config.NODE_ENV}`);
console.log(`MYVAR: ${config.MYVAR}`);

// Access secrets
console.log(`mysecret (public): ${config.secrets.MYSECRET.PUBLIC}`);
console.log(`mysecret (private): ${config.secrets.MYSECRET.PRIVATE}`);
console.log(`myothersecret (private): ${config.secrets.MYOTHERSECRET}`);