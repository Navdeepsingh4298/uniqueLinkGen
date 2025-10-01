import { React, useState } from "react";

// styles
import "./Output.css";

// local components
import CustomSnackbar from "./CustomSnackbar";

// MUI components
import {
  Stack,
  Box,
  Button,
  Tooltip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";

// Utils
import copyToClipboard from "../utils/copyToClipboard";
import downloadAsTxtFile from "../utils/downloadAsTxtFile";
import DowloadAsCSVFile from "../utils/downloadAsCSVFile";
import downloadAsQRCodeZipFile from "../utils/downloadAsQRCodeZipFile";

// mui icons
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DownloadIcon from '@mui/icons-material/Download';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Output = (props) => {

  const [msgOpen, setMsgOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState("");
  const [linksExpanded, setLinksExpanded] = useState(false);


  // Function to handle Snackbar close event
  // It checks if the reason for closing is 'clickaway' and does nothing in that case
  // Otherwise, it sets the Snackbar open state to false
  // This will close the Snackbar when the user clicks away or after the autoHideDuration
  // which is set to 5000 milliseconds (5 seconds)
  const handleMsgClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setMsgOpen(false);
  };


  // Function to handle copy to clipboard
  const handleCopy = (data) => {
    try {
      // if data is empty, do not proceed with copy
      if (!data || data.length === 0) {
        throw new Error("No data to copy. Please generate links and Ids first.");
      }
      props.setErrorData({ isError: false, ErrMsg: '' }); // Clear previous errors

      // Call the utility function to copy to clipboard
      copyToClipboard(data.join('\n'));

      // Show success message in Snackbar
      setMsgOpen(true);
      setSnackbarMsg("Copied to Clipboard!");
    } catch (error) {
      console.error("Error copying to clipboard:", error);
      props.setErrorData({
        isError: true,
        ErrMsg: error.message,
      });
    }
  }

  // Function to handle text file download
  const handleDownloadTXT = (data, fileName) => {
    try {
      // if data is empty, do not proceed with download
      if (!data || data.length === 0) {
        throw new Error("No data to download. Please generate links and Ids first.");
      }

      props.setErrorData({ isError: false, ErrMsg: '' }); // Clear previous errors

      // Call the utility function to download the text file
      downloadAsTxtFile(data, fileName);

      // Show success message in Snackbar
      setMsgOpen(true);
      setSnackbarMsg("Text file started downloading!");
    } catch (error) {
      console.error("Error downloading file:", error);
      props.setErrorData({
        isError: true,
        ErrMsg: error.message,
      });
    }
  }


  // Function to handle CSV file download
  const handleDownloadCSV = (data, fileName) => {
    try {
      // if data is empty, do not proceed with download
      if (!data || data.length === 0) {
        throw new Error("No data to download. Please generate links and Ids first.");
      }

      props.setErrorData({ isError: false, ErrMsg: '' }); // Clear previous errors

      DowloadAsCSVFile(data, fileName);

      // Show success message in Snackbar
      setMsgOpen(true);
      setSnackbarMsg("CSV file started downloading!");
    } catch (error) {
      console.error("Error downloading CSV file:", error);
      props.setErrorData({
        isError: true,
        ErrMsg: error.message,
      });
    }
  }


  // Function to handle QR code download as zip
  const handleDownloadQRCodes = async (data, fileName) => {
    try {
      // if data is empty, do not proceed with download
      if (!data || data.length === 0) {
        throw new Error("No data to download QRcodes. Please generate links first.");
      }

      props.setErrorData({ isError: false, ErrMsg: '' }); // Clear previous errors

      // Call the utility function to download the QR codes as zip file
      downloadAsQRCodeZipFile(data, fileName);

      // Show success message in Snackbar
      setMsgOpen(true);
      setSnackbarMsg("QR Codes file started downloading!");
    } catch (error) {
      console.error("Error downloading QR codes:", error);
      props.setErrorData({
        isError: true,
        ErrMsg: error.message,
      });
    }
  }

  return (
    <>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        className="main-output-container">
        <Box
          className="links-container"
          sx={{
            width: { xs: '100%', md: '30%' }
          }}
        >
          Unique Ids
          <textarea
            value={props.outputData.uids.join('\n')}
            className="output-field"
            disabled />
          <Box className="container1" sx={{ flex: 'display', alignItems: 'center', justifyContent: 'center', marginTop: '10px' }}>
            {/* <Tooltip title="Button to copy generated ids to clipboard" arrow placement="bottom"> */}
              <Button
                // size="small"
                variant="outlined"
                onClick={() => handleCopy(props.outputData.uids)}><ContentCopyIcon fontSize="small" /> Copy ids</Button>
            {/* </Tooltip> */}


            <Accordion expanded={linksExpanded} onChange={() => setLinksExpanded(!linksExpanded)} sx={{ backgroundColor: 'inherit' }}>
              <AccordionSummary>
                <Typography
                  color="primary"
                  sx={{
                    display: 'flex',
                    alignItems: 'center', // vertical center alignment
                    border: 1, // shorthand for border width
                    borderColor: 'primary.main', // primary color border
                    borderRadius: 1, // optional: rounded corners
                    padding: '4px 8px', // optional: spacing inside
                    gap: 0.5 // spacing between icon and text
                  }}
                >
                  <DownloadIcon fontSize="small" />
                  Download Ids
                  <ExpandMoreIcon />
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Stack spacing={1}>
                  {/* <Tooltip 
                  title="Button to download generated ids as text file" 
                  arrow 
                  placement="bottom" 
                  slotProps={{ transition: { timeout: 3000 }, }}> */}
                    <Button
                      // size="small"
                      variant="outlined"
                      color="secondary"
                      onClick={() => handleDownloadTXT(props.outputData.uids, "unique_ids")}><DownloadIcon fontSize="small" /> Text File</Button>
                  {/* </Tooltip> */}
                  {/* <Tooltip
                    title="Button to download generated links"
                    arrow
                    placement="bottom"
                    slotProps={{ transition: { timeout: 3000 }, }}> */}
                    <Button
                      size="small"
                      variant="outlined"
                      color="secondary"
                      onClick={() => handleDownloadCSV(props.outputData.uids, "unique_ids")}><DownloadIcon fontSize="small" />CSV file</Button>
                  {/* </Tooltip> */}
                </Stack>
              </AccordionDetails>
            </Accordion>

          </Box>
        </Box>
        <Box
          className="links-container"
          sx={{
            width: { xs: '100%', md: '70%' },
            marginTop: { xs: '20px', md: '0px' }
          }}
        >
          Unique Links
          <textarea
            className="output-field"
            value={props.outputData.links.join('\n')}
            disabled />
          <Box className="container1" sx={{ flex: 'display', alignItems: 'center', justifyContent: 'center', marginTop: '10px' }}>
            {/* <Tooltip title="Button to copy generated links to clipboard" arrow placement="bottom"> */}
              <Button
                // size="small"
                variant="outlined"
                onClick={() => handleCopy(props.outputData.links)}><ContentCopyIcon fontSize="small" /> Copy links</Button>
            {/* </Tooltip> */}



            <Accordion expanded={linksExpanded} onChange={() => setLinksExpanded(!linksExpanded)} sx={{ backgroundColor: 'inherit' }}>
              <AccordionSummary>
                <Typography
                  color="primary"
                  sx={{
                    display: 'flex',
                    alignItems: 'center', // vertical center alignment
                    border: 1, // shorthand for border width
                    borderColor: 'primary.main', // primary color border
                    borderRadius: 1, // optional: rounded corners
                    padding: '4px 8px', // optional: spacing inside
                    gap: 0.5 // spacing between icon and text
                  }}
                >
                  <DownloadIcon fontSize="small" />
                  Download Links
                  <ExpandMoreIcon />
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Stack spacing={1}>
                  {/* <Tooltip title="Button to download generated links text file" arrow placement="bottom"> */}
                    <Button
                      size="small"
                      variant="outlined"
                      color="secondary"
                      onClick={() => handleDownloadTXT(props.outputData.links, "unique_links")}><DownloadIcon fontSize="small" />text file</Button>
                  {/* </Tooltip> */}
                  {/* <Tooltip title="Button to download generated links" arrow placement="bottom"> */}
                    <Button
                      size="small"
                      variant="outlined"
                      color="secondary"
                      onClick={() => handleDownloadCSV(props.outputData.links, "unique_links")}><DownloadIcon fontSize="small" />CSV file</Button>
                  {/* </Tooltip> */}
                  {/* <Tooltip title="Button to download generated links in QRcode" arrow placement="bottom"> */}
                    <Button
                      size="small"
                      variant="outlined"
                      color="secondary"
                      onClick={() => handleDownloadQRCodes(props.outputData.links, "unique_links_qrcodes")}><DownloadIcon fontSize="small" /> QRCodes Zip file</Button>
                  {/* </Tooltip> */}
                </Stack>
              </AccordionDetails>
            </Accordion>

          </Box>
        </Box>

        <CustomSnackbar
          msgOpen={msgOpen}
          handleMsgClose={handleMsgClose}
          snackbarMsg={snackbarMsg}
        />

      </Stack>

    </>
  );
}

export default Output;