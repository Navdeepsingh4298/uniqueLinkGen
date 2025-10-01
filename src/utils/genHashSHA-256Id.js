// Only works in NODE.js environment
// For browser environment, use Web Crypto API
// https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest

// import crypto from 'crypto'; 

// const genHashId = ({ seed = '', length = 12, prefix = '', suffix = '' } = {}) => {
//   const base = seed || `${Date.now()}-${Math.random()}`;
//   const hash = crypto.createHash('sha256').update(base).digest('hex');
//   console.log('hash:', hash);
//   const result = `${prefix}${hash.slice(0, length)}${suffix}`;
//   console.log(result);
//   return `${prefix}${hash.slice(0, length)}${suffix}`;
// }

// Using Web Crypto API for browser environment

async function genHashSHA_256Id({ seed = '', length = 64, prefix = '', suffix = '' } = {}) {
  const base = seed || `${Date.now()}-${Math.random()}`;
  const encoder = new TextEncoder();
  const data = encoder.encode(base);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return `${prefix}${hashHex.slice(0, length)}${suffix}`;
}

export default genHashSHA_256Id;