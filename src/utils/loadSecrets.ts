import path from 'path';
import fs from 'fs';
import { config } from '../config';

// We want secrets to optionally be supplied as a base64 string
// which is useful for CI/CD pipelines (e.g., GitHub Actions with secrets).
// We also want to support local development with a secrets.json file,
// and a secrets.example.json file for testing.
export function loadSecrets() {
  const node_env = config.get('node_env');
  const secretsFileName = node_env === 'test' ? 'secrets.example.json' : 'secrets.json';
  const resolvedPath = path.resolve(__dirname, `../../${secretsFileName}`);

  if (process.env.SECRETS_BASE64) {
    const decodedSecrets = Buffer.from(process.env.SECRETS_BASE64, 'base64').toString('utf-8');
    const secrets = JSON.parse(decodedSecrets);
    config.set('secrets', secrets);
  } else if (fs.existsSync(resolvedPath)) {
      const secrets = JSON.parse(fs.readFileSync(resolvedPath, 'utf-8'));
      config.set('secrets', secrets);
  } else {
    throw new Error(`SECRETS_BASE64 not provided and secrets file not found: ${resolvedPath}`);
  }
}