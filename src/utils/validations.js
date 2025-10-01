const validations = (inputData) => {
  // Check number of links
  if (inputData.numberOfLinks < 1) {
    throw new Error('Please enter a valid number of links.');
  }

  // Check base link presence
  if (!inputData.link) {
    throw new Error('Please enter a base link.');
  }

  // Check generation method
  if (inputData.genMethod === 'default' || inputData.genMethod === '') {
    throw new Error('Please select a valid generation method.');
  }

  // Validate URL format
  try {
    const url = new URL(inputData.link); // Corrected variable name

    const pattern = new RegExp(
      '^https?:\\/\\/' + // protocol
      '(([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+' + // domain name
      '[a-z]{2,}' + // TLD
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i' // fragment locator
    );

    if (!pattern.test(inputData.link)) {
      throw new Error('Invalid URL format.');
    }

    return true;
  } catch (e) {
    throw new Error('Please enter a valid base link.');
  }
};

export default validations;