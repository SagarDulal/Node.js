const encodeeanddecode = (string) => {
    const buff = Buffer.alloc(string.length);
    buff.write(string);
    console.log("The string passed is" + string);
    //  Encoding the string to base 64 format.
    let stringEncode = buff.toString("base64");
    console.log("Encoded form: " + stringEncode);
    let stringDecode = buff.toString("ascii");
    console.log("Decoded form :" + stringDecode);
  };
  module.exports = { encodeeanddecode };
  