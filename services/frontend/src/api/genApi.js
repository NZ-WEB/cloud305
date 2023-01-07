// eslint-disable-next-line @typescript-eslint/no-var-requires
const { codegen } = require('swagger-axios-codegen');
codegen({
  methodNameMode: 'operationId',
  source: require('./swagger.json'),
  outputDir: '../gen',
});
