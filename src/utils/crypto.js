// import CryptoJS from 'react-native-crypto-js'
// const CryptoJS = require('crypto-js');
import CryptoJS from "crypto-js";
const Crypto = {
  encrypt(pData, pPassword = "oke google") {
    return new Promise((resolve, reject) => {
      if (pData.toString().length === 0) reject("Invalid data");

      if (pPassword.toString().length === 0) reject("Invalid password");

      var iv = CryptoJS.enc.Hex.parse("e84ad660c4721ae0e84ad660c4721ae0");

      var Pass = CryptoJS.enc.Utf8.parse(pPassword);

      var Salt = CryptoJS.enc.Utf8.parse("insight123resultxyz");

      var key128Bits1000Iterations = CryptoJS.PBKDF2(
        Pass.toString(CryptoJS.enc.Utf8),
        Salt,
        { keySize: 128 / 32, iterations: 1000 }
      );

      var encrypted = CryptoJS.AES.encrypt(pData, key128Bits1000Iterations, {
        mode: CryptoJS.mode.CBC,
        iv: iv,
        padding: CryptoJS.pad.Pkcs7,
      });
      resolve(encrypted.toString());
    });
  },
  decrypt(pEncryptedData, pPassword) {
    return new Promise((resolve, reject) => {
      if (pEncryptedData.toString().length === 0) reject("Invalid data");

      if (pPassword.toString().length === 0) reject("Invalid password");

      var iv = CryptoJS.enc.Hex.parse("e84ad660c4721ae0e84ad660c4721ae0");

      var Pass = CryptoJS.enc.Utf8.parse(pPassword);

      var Salt = CryptoJS.enc.Utf8.parse("insight123resultxyz");

      var key128Bits1000Iterations = CryptoJS.PBKDF2(
        Pass.toString(CryptoJS.enc.Utf8),
        Salt,
        { keySize: 128 / 32, iterations: 1000 }
      );

      var cipherParams = CryptoJS.lib.CipherParams.create({
        ciphertext: CryptoJS.enc.Base64.parse(pEncryptedData),
      });

      var decrypted = CryptoJS.AES.decrypt(
        cipherParams,
        key128Bits1000Iterations,
        { mode: CryptoJS.mode.CBC, iv: iv, padding: CryptoJS.pad.Pkcs7 }
      );

      resolve(decrypted.toString(CryptoJS.enc.Utf8));
    });
  },
  encryptImg(pUri = "") {
    let encodedString = null;
    if (!pUri.includes("https")) {
      encodedString = CryptoJS.enc.Base64.stringify(
        CryptoJS.enc.Utf8.parse(pUri)
      );
    } else encodedString = pUri;
    return encodedString;
  },
  decryptImg(pUri = "") {
    let decodedString = null;
    if (!pUri.includes("https")) {
      decodedString = CryptoJS.enc.Utf8.stringify(
        CryptoJS.enc.Base64.parse(pUri)
      );
    } else decodedString = pUri;

    return decodedString;
  },
};
export default Crypto;
