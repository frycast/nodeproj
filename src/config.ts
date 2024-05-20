import dotenv from 'dotenv';
import path from 'path';
import { Secrets, loadSecrets } from './utils/loadSecrets';

// Ensure NODE_ENV is set to 'development' if not already set
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
const env = process.env.NODE_ENV;

// Load environment variables from the .env file
if (!['dev', 'test'].includes(env)) {
  throw new Error(`Invalid NODE_ENV: ${env}`);
}
dotenv.config({ path: path.resolve(__dirname, `.env.${env}`) });

// Load secrets
const secrets: Secrets = loadSecrets();

export interface EnvConfig {
  NODE_ENV: string;
  MYVAR: string;
}

export interface Config extends EnvConfig {
  secrets: Secrets;
  [key: string]: any; // To allow other environment variables
}

// We want the config object to hold everything
const config: Config = {
  NODE_ENV: process.env.NODE_ENV,
  MYVAR: process.env.MYVAR,
  secrets
};
export { config };