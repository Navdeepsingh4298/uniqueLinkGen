import MD5 from 'crypto-js/md5';

// Utility to generate a unique ID using MD5 hash
function genHashMd5Id() {
  const base = '' || `${Date.now()}-${Math.random()}`;
  const hash = MD5(base).toString(); // hex string
  return hash;
}

export default genHashMd5Id;