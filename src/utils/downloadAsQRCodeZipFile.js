// function to download multiple links as a zip file containing QR codes
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import QRCode from 'qrcode';

const downloadAsQRCodeZipFile = async (dataArray, fileNamePrefix) => {
    if (!Array.isArray(dataArray) || dataArray.length === 0) {
        throw new Error('Data array is empty or not an array.');
    }

    const zip = new JSZip();
    const qrCodeFolder = zip.folder('qrcodes');

    for (let i = 0; i < dataArray.length; i++) {
        const data = dataArray[i];
        try {
            const qrCodeDataUrl = await QRCode.toDataURL(data, { errorCorrectionLevel: 'H' });
            const base64Data = qrCodeDataUrl.split(',')[1]; // Remove the data URL prefix
            qrCodeFolder.file(`qrcode_${i + 1}.png`, base64Data, { base64: true });
        } catch (err) {
            console.error(`Failed to generate QR code for data: ${data}`, err);
            throw new Error(`Failed to generate QR code for data: ${data}`);
        }
    }

    // Append date to filename
    const now = new Date();
    const dateStr = now.toISOString().slice(0, 10); // YYYY-MM-DD
    const fullFileName = `${fileNamePrefix}_qrcodes_${dateStr}.zip`;

    try {
        const zipBlob = await zip.generateAsync({ type: 'blob' });
        saveAs(zipBlob, fullFileName);
    } catch (err) {
        console.error('Failed to generate or save zip file.', err);
        throw new Error('Failed to generate or save zip file.');
    }
};

export default downloadAsQRCodeZipFile;