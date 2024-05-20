## Setup

### Prerequisites

Ensure you have the following installed:
- Node.js (v20.13.1)
- npm (v10.5.2)

You can use `fnm` (Fast Node Manager) to install and manage Node.js versions.

```bash
curl -fsSL https://fnm.vercel.app/install | bash
fnm use --install-if-missing 20
node -v # should print `v20.13.1`
npm -v # should print `10.5.2`
```

### Installation Steps

Clone the repo and then:

1. **Install Project Dependencies**:
    ```bash
    npm install
    ```

2. **Verify TypeScript and Vitest Installation**:
    ```bash
    tsc -v # should be 5.4.5
    npm list vitest # should be vitest@1.6.0
    ```

### Running the project

1. Compile typescript
    ```bash
    npx tsc
    ```

2. Run tests
    ```bash
    npm test
    ```

# Original setup 2024-05-20

Installed node, ts and vitest
```bash
curl -fsSL https://fnm.vercel.app/install | bash
fnm use --install-if-missing 20
node -v # should print `v20.13.1`
npm -v # should print `10.5.2`
npm init -y
npm install --save-dev typescript
tsc -v # should be 5.4.5
npx tsc --init
npm install --save-dev vitest
npm list vitest # should be vitest@1.6.0
```

Changed Typescript configs
```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    // Location of ts files
    "rootDir": "./src",
    // Location of emitted (js) files
    "outDir": "./dist",
    //interoperability between CommonJS and ES Modules
    "esModuleInterop": true, 
    // Enforces consistent casing in import paths.
    "forceConsistentCasingInFileNames": true,  
    // Enables all strict type-checking options
    "strict": true,
    //Skips type checking of declaration files (.d.ts).
    "skipLibCheck": true,
    // No js files produced on error
    "noEmitOnError": true,
    // Creates `index.js.map` for debugger
    "sourceMap": true,
    // Generate error on unused parameters
    "noUnusedParameters": true,
    // Avoid implicitly returning undefined etc
    "noImplicitReturns": true,
    // Avoid declaring values that are never used
    "noUnusedLocals": true
  }
}
```

Included `"test": "vitest"` in package.json
```json
  "name": "soltrug",
  "version": "1.0.0",
  "description": "Add description here",
  "main": "index.js",
  "scripts": {
    "test": "vitest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "typescript": "^5.4.5",
    "vitest": "^1.6.0"
  }
}
```

Edited debugger settings vscode. In debug panel choose 'create a `.vscode/launch.json` file'. In the options that appear click node.js.
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "skipFiles": [
        "<node_internals>/**"
      ],
      "program": "${file}",
      // Ensures ts code is compiled before running the debugger
      "preLaunchTask": "tsc: build - tsconfig.json"
    }
  ]
}
```

Created `./src/example.ts` and `./tests/example.ts.test` 


