# Learnings

**_1. target property:_**
The target property enables us to set what version of js we want to use for our project. Without a tsconfig.json file, the default
target will be **ES6** as it is supported by most mordern browsers.

**Without tsconfig.json**

_source file_

```javascript
let a = 2;
let b = 3;
```

_compiled file_

```javascript
var a = 2;
var b = 3;
```

In the compiled file _var_ is used, although we used _let_ in the source file.

**With tsconfig.json file & target set to ES2016**

_compiled file_

```javascript
let a = 2;
let b = 3;
```

**_2. Setting Directories for source & compiled files:_**
Using the **rootDir** and **outDir** properties we can set the targets for ts compiler to watch specific directories and compile to specific directories.

**_3. Using noEmitOnError property:_** The ts files are compiled to js files even if there are type errors in ts file. To disable this behaviour we set _noEmitOnError_ property to **true**.
