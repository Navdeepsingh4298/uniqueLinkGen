// Function to Download List Output as a text File 
const downloadAsTxtFile = (outputValue, fileName) => {
  const txtContent = outputValue.join('\n');
  const blob = new Blob([txtContent], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');

  // Append date to filename
  const now = new Date();
  const dateStr = now.toISOString().slice(0, 10); // YYYY-MM-DD
  const fullFileName = `${fileName}_${dateStr}.txt`;

  link.href = url;
  link.download = fullFileName; // You can set your preferred file name here
  document.body.appendChild(link); // Required for Firefox
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url); // Clean up the URL object after use
};

export default downloadAsTxtFile;