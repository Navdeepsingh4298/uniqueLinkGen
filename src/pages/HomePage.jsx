import React, { useState } from 'react';

// Components
import Header from '../components/Header';
import Output from '../components/Output';
import ErrorContainer from '../components/ErrorContainer';
import DrawerAppBar from '../components/DrawerAppBar';
import CustomSnackbar from "../components/CustomSnackbar";

// Utils
import generateMultipleIds from '../utils/genMultipleIds';
import generateLinks from '../utils/genLinks';

// ID generation methods
import generateRandom1012AlphaNumericId from '../utils/genRand1012AlphaNumId';
import generateCryptoRandomUuid from '../utils/genCryptoRandomUuid';
import generateUuidv4 from '../utils/genUuidv4';
import genHashSHA256Id from '../utils/genHashSHA256Id';
import genHashMd5Id from '../utils/genHashMd5Id';
import genTimestampId from '../utils/genTimeStampId';
import genCustomId from '../utils/genCustomId';
import genHashSHA512Id from "../utils/genHashSHA512Id"

// Validations
import validations from '../utils/validations';

// Main HomePage component
const HomePage = () => {

    const [inputData, setinputData] = useState({
        link: 'https://sample.link.com?uid=',
        numberOfLinks: 1,
        genMethod: '',
    });

    const [customDiyOptions, setCustomDiyOptions] = useState({
        lengthOfId: 5,
        prefix: '',
        suffix: '',
        useLetters: true,
        useNumbers: true,
    });

    const [outputData, setOutputData] = useState({
        uids: [],
        links: [],
    });

    const [errorData, setErrorData] = useState({
        isError: false,
        ErrMsg: '',

    });

    const [msgOpen, setMsgOpen] = useState(false);
    const [snackbarMsg, setSnackbarMsg] = useState("");


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

    const handleInputDataChange = (key, value) => {
        setinputData(prevState => ({
            ...prevState,
            [key]: value,
        }));
    }

    const handleCustomDiyOptionsChange = (key, value) => {
        setCustomDiyOptions(prevState => ({
            ...prevState,
            [key]: value,
        }));
    }


    const handleOutputDataChange = (key, value) => {
        setOutputData(prevState => ({
            ...prevState,
            [key]: value,
        }));
    }


    const handleGenerateBtn = async () => {

        try {
            // Step 0: Validate input data
            validations(inputData);

            // Step 1: Generate fresh UIDs with the selected method

            let generateMethod;
            switch (inputData.genMethod) {
                case 'random-1012-alphanum':
                    generateMethod = () => generateRandom1012AlphaNumericId();
                    break;
                case 'crypto-random':
                    generateMethod = () => generateCryptoRandomUuid();
                    break;
                case 'hash-md5':
                    generateMethod = () => genHashMd5Id();
                    break;
                // case 'hash-sha256':
                //     generateMethod = async () => await genHashSHA256Id();
                //     break;
                case 'hash-sha256':
                    generateMethod = () => genHashSHA256Id();
                    break;
                case 'hash-sha512':
                    generateMethod = () => genHashSHA512Id();
                    break;
                case 'timestamp':
                    generateMethod = () => genTimestampId();
                    break;
                case 'uuidv4':
                    generateMethod = () => generateUuidv4();
                    break;
                case 'custom-diy':
                    generateMethod = () => genCustomId(customDiyOptions);
                    break;
                default:
                    alert('Please select a valid generation method.');
                    return;
            }


            const newUids = await generateMultipleIds(inputData.numberOfLinks, generateMethod);

            // Step 2: Generate links using the new UIDs
            const newLinks = generateLinks(inputData.link, newUids);

            // Step 3: Update state with both at once
            setOutputData({
                uids: newUids,
                links: newLinks
            });

            setErrorData({
                isError: false,
                ErrMsg: '',
            });

            // Show snackbar message
            setMsgOpen(true);
            setSnackbarMsg("Generation started!");

        } catch (err) {
            console.error('Errors:', err.message);
            setErrorData({
                isError: true,
                ErrMsg: err.message,
            });
            // Optionally, you can reset the output data if there's an error
            setOutputData({
                uids: [],
                links: [],
            });
            return;
        }

    };


    const handleResetBtn = () => {
        handleInputDataChange('link', '');
        handleInputDataChange('numberOfLinks', 0);
        handleInputDataChange('genMethod', 'default');
        setErrorData({
            isError: false,
            ErrMsg: '',
        });
        handleOutputDataChange('uids', []);
        handleOutputDataChange('links', []);

        // Show snackbar message
        setMsgOpen(true);
        setSnackbarMsg("All fields have been reset.");
    }


    return (
        <>
            <DrawerAppBar />
            <Header
                inputData={inputData}
                handleInputDataChange={handleInputDataChange}
                handleCustomDiyOptionsChange={handleCustomDiyOptionsChange}
                customDiyOptions={customDiyOptions}
                handleResetBtn={handleResetBtn}
                handleGenerateBtn={handleGenerateBtn}
                errorData={errorData}
            />

            <ErrorContainer
                isError={errorData.isError}
                ErrMsg={errorData.ErrMsg}
            />

            <Output
                outputData={outputData}
                errorData={errorData}
                setErrorData={setErrorData}
            />

            <CustomSnackbar
                msgOpen={msgOpen}
                handleMsgClose={handleMsgClose}
                snackbarMsg={snackbarMsg}
            />

        </>
    );
}

export default HomePage;