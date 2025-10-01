// Function to Download List Output as a CSV File 
const DownloadAsCSVFile = (outputValue, fileName) => {
  const csvContent = outputValue.join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');

  // Append date to filename
  const now = new Date();
  const dateStr = now.toISOString().slice(0, 10); // YYYY-MM-DD
  const fullFileName = `${fileName}_${dateStr}.csv`;

  link.setAttribute('href', url);
  link.setAttribute('download', fullFileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url); // Clean up the URL object after use
};

export default DownloadAsCSVFile;