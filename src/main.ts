import { config } from './config';
import { loadSecrets } from './utils/loadSecrets';

// Load secrets
loadSecrets();

// Log the configuration
console.log('Configuration: ' + config.toString());