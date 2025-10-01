// Utility function to generate multiple IDs using a provided generation method
const generateMultipleIds = async (count, genMethod) => {
  const promises = Array.from({ length: count }, () => genMethod());
  const resolvedIds = await Promise.all(promises);
  return resolvedIds;
};

export default generateMultipleIds;