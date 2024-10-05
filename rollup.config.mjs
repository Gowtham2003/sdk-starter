import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";
const pkgName = require("./package.json").name;
export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: `dist/${pkgName}.cjs.js`,
        format: "cjs", // CommonJS
        sourcemap: true,
      },
      {
        file: `dist/${pkgName}.esm.js`,
        format: "es", // ES module
        sourcemap: true,
      },
      {
        file: `dist/${pkgName}.umd.js`,
        format: "umd", // UMD format
        name: "MyLibrary", // Specify the global variable name
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      json(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
    ],
  },
];
