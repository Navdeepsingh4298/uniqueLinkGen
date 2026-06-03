// Function to Download Combined IDs and Links as a CSV File
const downloadAsCSVCombinedFile = (ids, links, fileName) => {
  // Create CSV header
  const header = "ID,Link\n";
  
  // Combine ids and links into CSV rows
  const rows = ids.map((id, index) => {
    const link = links[index] || ''; // Handle case where links array is shorter
    // Escape quotes in values and wrap in quotes if needed
    const escapedId = `"${id.replace(/"/g, '""')}"`;
    const escapedLink = `"${link.replace(/"/g, '""')}"`;
    return `${escapedId},${escapedLink}`;
  }).join('\n');
  
  const csvContent = header + rows;
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

export default downloadAsCSVCombinedFile;
