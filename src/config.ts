import convict from 'convict';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from the .env file
dotenv.config({ 
  path: path.resolve(__dirname, `../.env.${process.env.NODE_ENV || 'dev'}`) 
});

// Define config schema
const config = convict({
  node_env: {
    doc: 'The application environment.',
    format: ['prod', 'dev', 'test'],
    default: 'dev',
    env: 'NODE_ENV'
  },
  myvar: {
    doc: 'An example variable',
    format: String,
    default: undefined,
    env: 'MYVAR'
  },
  secrets: {
    mysecret: {
      public: {
        doc: 'Example public key',
        format: String,
        default: undefined,
        env: 'MYSECRET_PUBLIC'
      },
      private: {
        doc: 'Example secret key',
        format: String,
        default: undefined,
        env: 'MYSECRET_PRIVATE',
        sensitive: true
      }
    },
    myothersecret: {
      doc: 'Another secret',
      format: String,
      default: undefined,
      env: 'MYOTHERSECRET',
      sensitive: true
    }
  }
});

// Perform validation
config.validate({ allowed: 'strict' });

export { config };

// Export the ProjConfig type for clarity with TypeScript
type ConfigSchema = typeof config;
export type ProjConvig = ReturnType<ConfigSchema['getProperties']>;