// Utility function to generate a unique ID based on the current timestamp
function genTimestampId({ prefix = '', suffix = '' } = {}) {
  const timestamp = Date.now().toString(36); // base36 for compactness
  const random = Math.random().toString(36).slice(2, 6); // adds entropy
  return `${prefix}${timestamp}${random}${suffix}`;
}

export default genTimestampId;