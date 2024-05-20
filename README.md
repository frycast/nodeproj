### Setup

Node and ts init
```bash
curl -fsSL https://fnm.vercel.app/install | bash
fnm use --install-if-missing 20
node -v # should print `v20.13.1`
npm -v # should print `10.5.2`
npm init -y
npm install --save-dev typescript
tsc -v # should be 5.4.5
npx tsc --init
```

Change Typescript configs
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

Debugger settings vscode. In debug panel choose 'create a `.vscode/launch.json` file'. In the options that appear click node.js.
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


