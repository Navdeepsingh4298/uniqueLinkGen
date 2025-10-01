import SHA512 from 'crypto-js/sha512';

// Utility to generate a unique ID using SHA-512 hash
function genHashSHA512Id() {
  const base = '' || `${Date.now()}-${Math.random()}`;
  const hash = SHA512(base).toString(); // hex string
  return hash;
}

export default genHashSHA512Id;



