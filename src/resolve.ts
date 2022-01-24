const analysis = require("./utils/analysis.ts");
const cac = require("cac").cac();
const path = require("path");
const fs = require("fs");

cac
  .command("analysis", "Analysis a qrcode img")
  .option("--val <val>", "Set qrcode value")
  .action((options) => {
    const url = path.resolve(__dirname, options.val);
    fs.readFile(url, (err, buffer) => {
      if (err) throw err;
      analysis(buffer, (data) => {
        console.warn("当前二维码内容: ", data);
      });
    });
  });

cac.help();

cac.parse();

// const parsed = cli.parse();

// console.log(JSON.stringify(parsed, null, 2));
