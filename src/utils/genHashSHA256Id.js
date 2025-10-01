import SHA256 from 'crypto-js/sha256';

// Utility to generate a unique ID using SHA-256 hash
function genHashSHA256Id() {
  const base = '' || `${Date.now()}-${Math.random()}`;
  const hash = SHA256(base).toString(); // hex string
  return hash;
}

export default genHashSHA256Id;