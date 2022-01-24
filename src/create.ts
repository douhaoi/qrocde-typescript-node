const cli = require("cac").cac();
const generate = require('./utils/generate.ts');

cli
  .command('create', 'Create a qrcode img')
  .option('--val <val>', 'Set qrcode value')
  .action((options) => {
    generate(options)
  })

cli.help()

cli.parse()

// const parsed = cli.parse();

// console.log(JSON.stringify(parsed, null, 2));
