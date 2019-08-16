import { terser } from 'rollup-plugin-terser';


export default [
  {
    input: 'src/index.js',
    plugins: [terser()],
    output: {
        file: 'umd/gyration_crustacean_clean_weather.js',
        format: 'umd',
        name: 'gyration_crustacean_clean_weather',
        esModule: false
    }
  },
  {
    input: 'src/index.js',
    output: {
      file: 'esm/index.js',
      format: 'esm'
    }
  }
];

