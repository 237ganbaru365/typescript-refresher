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

```
the reason compiled js use `let` is the compiler targets ES2016 in tsconfig as you can see ` "target": "es2016"`. You can also roll back to let them compile using `var` by editing that.
```

3. change setting

- `"include": ["src"]`
  : try not compile any tsfiles outside of src dir

- `"noEmitOnError": true`
  : try not compile any tsfiles if they have any type error
- `tsc --noEmitOnError -w`
  : another option to do so witout editing tsconfig

## Terminology

- statically typed language : TypeScript
- dynamically typed language : JavaScript

- Implicit : JS define the types impicity, because it is dynamically typed language which means after compiling, JS try to understand what types the value has
- Explicit : TS wanna make sure what type the value has

- Union tpe : you can set more then one type using `|`
- `RegExp` type
- Tuple : `[string, number, boolean]` this strictry cares the exact same position and type in array. It is not same with `['a', 1, true]` without type definition

- type : `type TYPENAME = {}` you can define type
- interface : `interface TYPENAME {}`

- ? : if you use `?`, and then it could be optional

- Enums : 数値列挙型。　初期値がない場合、上から順番に数値が当てられる。一部が定義されている場合はその数値を基準にインクリメントされる。

```
ex) enum Months {
  January = 1,
  ...,
  December
}
```

## Type Alies

you can reuse type alies for oher value

`type` : type alies (without propery name)
`interface` : class defenision

both are almost same, but they use different syntax or rules

## Literal types

you can asign actual value as a type. it's usefull when you wanna check the data if it has exact same value you want.

## Functions

- void type: function not have return should be void type

- default params: default types cannot access any function with default params

- rest parameters : it's always considerd as an array at the end

- never type: return error (inifinite roop)
