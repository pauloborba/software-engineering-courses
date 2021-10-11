1. Install TypeScript globally

  $> npm install -g typescript
  $> tsc --version

2. Create file tsconfig.json

  Obs. check that because of "DOM" was listed on the lib property, it
  is possible to auto-complete native DOM classes without compilation
  errors.  

3. Transpile hello.ts and run it

  $> tsc
  $> node hello.js

  Obs. if you open this file on VSCode, IntelliSense will show you that
  the return type of the hello function is string, which is inferred 
  automatically as it is a basic type.

4. Install lodash and lodash type declarations

  $> npm i lodash
  $> npm i -D @types/lodash

5. Walk through file types_basic_lesson.js