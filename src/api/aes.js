/* eslint-disable */
var CryptoJS = require("crypto-js");

export default {
  /**
   * aes加密解密
   * 加密encrypt
   * 解密decrypt
   */
  encrypt(data, G_KP) {
    var key = CryptoJS.enc.Utf8.parse(G_KP.key);
    var iv = CryptoJS.enc.Utf8.parse(G_KP.iv);
    var encrypted = CryptoJS.AES.encrypt(data, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    return encrypted.toString();
  },


  decrypt(data, G_KP) {
    // console.log("KEYIV ======> ", G_KP);
    var key = CryptoJS.enc.Utf8.parse(G_KP.key);
    var iv = CryptoJS.enc.Utf8.parse(G_KP.iv);

    // var base64 = CryptoJS.enc.Base64.parse(data);
    // var src = CryptoJS.enc.Base64.stringify(base64);

    var decrypted = CryptoJS.AES.decrypt(data, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    // console.log("Decrypted Text ===========> ", decrypted);
    return decrypted.toString(CryptoJS.enc.Utf8);
  },


  gameEncrypt(data,G_KP) {
    var key = CryptoJS.enc.Utf8.parse(G_KP.key);
    var iv = CryptoJS.enc.Utf8.parse(G_KP.iv);
     
    // if (keyStr) {
    //   key = CryptoJS.enc.Utf8.parse(keyStr);
    //   iv = CryptoJS.enc.Utf8.parse(ivStr);
    // }
    // console.log("accept ", data, G_KP)
    let srcs = CryptoJS.enc.Utf8.parse(data);
    var encrypted = CryptoJS.AES.encrypt(srcs, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.ZeroPadding
    });
    // console.log("-=-=-=-", encrypted.ciphertext)
    return CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
  },


  payEncrypt(data, G_KP) {
    var key = CryptoJS.enc.Utf8.parse(G_KP.key);
    var iv = CryptoJS.enc.Utf8.parse(G_KP.iv);

    var encrypted = CryptoJS.AES.encrypt(data, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });

    var str = CryptoJS.enc.Utf8.parse(encrypted.toString());
    var base64 = CryptoJS.enc.Base64.stringify(str);

    // console.log('raw encrypt data is ', data);
    // console.log('base64 is ' , base64);

    return base64;
  },


  paymentDecrypt(data, G_KP) {

    var key = CryptoJS.enc.Utf8.parse(G_KP.key);
    var iv = CryptoJS.enc.Utf8.parse(G_KP.iv);

    // if (keyStr) {
    //   key = CryptoJS.enc.Utf8.parse(keyStr);
    //   iv = CryptoJS.enc.Utf8.parse(ivStr);
    // }

    let base64 = CryptoJS.enc.Base64.parse(data);
    let src = CryptoJS.enc.Base64.stringify(base64);

    var decrypt = CryptoJS.AES.decrypt(src, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.ZeroPadding
    });

    var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();
  },

  gameDecrypt(data, G_KP) {

    var key = CryptoJS.enc.Utf8.parse(G_KP.key);
    var iv = CryptoJS.enc.Utf8.parse(G_KP.iv);

    // if (keyStr) {
    //   key = CryptoJS.enc.Utf8.parse(keyStr);
    //   iv = CryptoJS.enc.Utf8.parse(ivStr);
    // }

    let base64 = CryptoJS.enc.Base64.parse(data);
    let src = CryptoJS.enc.Base64.stringify(base64);

    var decrypt = CryptoJS.AES.decrypt(src, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.ZeroPadding
    });

    var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();
  },


};
