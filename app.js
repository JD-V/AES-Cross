var aes = require('aes-cross');

var testTxt = 'password';
// thisIsASecretKey => [0x74,0x68,0x69,0x73,0x49,0x73,0x41,0x53,0x65,0x63,0x72,0x65,0x74,0x4b,0x65,0x79]
var key = Buffer.from('thisIsASecretKey', 'ascii');

/**
 * encText/decText : text encription
 * @param  {string} text 
 * @param  {Buffer} key         the length must be 16 or 32
 * @param  {Buffer} [newIv]       optional,default is [0,0...0]
 * @param  {string} [input_encoding]  optional,"utf8" -default,"ascii","base64","binary"...(https://nodejs.org/api/buffer.html#buffer_buffer)
 * @param  {string} [output_encoding] optional,"base64" -default,"hex"...
 * @return {string}                 encription result
 */
console.log(key)
var enc = aes.encText(testTxt,key);
console.log('enc:%s',enc);
var dec = aes.decText(enc,key);


console.log('dec:%s',dec);
 // for buffer 
var testBuff = new Buffer([23,42,55,11,33,45,55]);

/**
 * encBytes/decBytes: buffer/bytes encription
 * @param  {Buffer} buff 
 * @param  {Buffer} key  the length must be 16 or 32
 * @param  {Buffer} [newIv]   optional,default is [0,0...0]
 * @return {Buffer}
 */

// var encBuff = aes.encBytes(testBuff,key);
// console.dir(encBuff);
// var decBuff = aes.decBytes(encBuff,key);
// console.dir(decBuff);