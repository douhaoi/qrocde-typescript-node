const qrcode = require("qrcode-terminal");

module.exports = function (params) {
  const { val } = params;
  if (!val) throw new Error('请输入需要生成文本');
  qrcode.generate(val, { small: true },(qrcode) => {
    console.log(qrcode);
  });
};
