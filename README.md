## compile

when you wanna compile or whenever you add updates on your ts file, you need to run this command;
`tsc SAMPLE.tsx` or `tsc SAMPLE.tsx MAIN.js`

## watch file

you wanna keep compiling witout keeping type command, try this;
`tsc main.ts -w`

## build

you can make separate dir to store build files and src files.

1. make ts config file
   `tsc --init`

2. edit the tsconfig file
   there is bunch of comment out line. you can change them like below;

- `"rootDir": "./src"` : you can define the path of your src dir
- `"outDir": "./build/js"` : you can define the path of your build dir

after that, you can add `tsc -w`, and then automatically compile js file in `./build/js/*`

### NOTE

- the reason compiled js use `let` is the compiler targets ES2016 in tsconfig as you can see ` "target": "es2016"`. You can also roll back to let them compile using `var` by editing that.

3. change setting

- `"include": ["src"]`
  : try not compile any tsfiles outside of src dir

- `"noEmitOnError": true`
  : try not compile any tsfiles if they have any type error
- `tsc --noEmitOnError -w`
  : another option to do so witout editing tsconfig
