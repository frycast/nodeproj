import path from 'path';
import fs from 'fs';

// Define the structure of secrets.json
export interface MySecret {
  PUBLIC: string;
  PRIVATE: string;
}
export interface Secrets {
  MYSECRET: MySecret;
  MYOTHERSECRET: string;
}

// We want secrets to optionally be supplied as a base64 string
// which is useful for CI/CD pipelines
export function loadSecrets(): Secrets {
  let secrets: Secrets;

  if (process.env.SECRETS_BASE64) {
    // Load from base64 encoded environment variable
    const decodedSecrets = Buffer.from(
      process.env.SECRETS_BASE64, 'base64').toString('utf-8');
    secrets = JSON.parse(decodedSecrets);
  } else {
    // Load from local file
    const resolvedPath = path.resolve(process.cwd(), 'secrets.json');
    if (fs.existsSync(resolvedPath)) {
      secrets = JSON.parse(
        fs.readFileSync(resolvedPath, 'utf-8'));
    } else {
      throw new Error(
        `SECRETS_BASE64 not provided and secrets file not found: ${resolvedPath}`);
    }
  }

  return secrets;
}