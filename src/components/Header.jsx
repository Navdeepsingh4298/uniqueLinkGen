import "./Header.css";

// MUI components
import { Box, Stack, Button, Tooltip, Divider } from '@mui/material';

// mui icons
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const Header = (props) => {
    return (
        <>
            <Box sx={{ mb: 2 }}>
                <div className="container1">
                    {/* <Tooltip title="Input field to enter base link" arrow placement="top-start"> */}
                    <label className="link-input">Base Link <br />
                        <input
                            type="text"
                            placeholder="Enter test link"
                            value={props.inputData.link}
                            onChange={(e) => props.handleInputDataChange('link', e.target.value)}
                            style={{ width: '100%' }} />
                    </label>
                    {/* </Tooltip> */}
                    {/* <Tooltip title="Input field to enter number of links required to generate" arrow placement="top"> */}
                    <label>Number of links <br />
                        <input
                            type="number"
                            min="1"
                            value={props.inputData.numberOfLinks}
                            onChange={(e) => props.handleInputDataChange('numberOfLinks', e.target.value)}
                        />
                    </label>
                    {/* </Tooltip> */}
                    {/* <Tooltip title="Dropdown to select generation method" arrow placement="top"> */}
                    <label>Generation Method <br />
                        <select
                            value={props.inputData.genMethod}
                            onChange={(e) => props.handleInputDataChange('genMethod', e.target.value)}
                        >
                            <option value="default">Please select one</option>
                            <option value="random-1012-alphanum">Random AlphaNum (10-12 chars)</option>
                            <option value="crypto-random">Random crypto UUID</option>
                            <option value="uuidv4">V4 UUID</option>
                            <option value="hash-md5">Hash (MD5) UUID</option>
                            <option value="hash-sha256">Hash (SHA-256) UUID</option>
                            <option value="hash-sha512">Hash (SHA-512) UUID</option>
                            {/* <option value="timestamp">TimeStamp UUID</option> */}
                            <option value="custom-diy">Custom AlphaNum DIY</option>
                        </select>
                    </label>
                    {/* </Tooltip> */}
                    {/* <Tooltip title="Button to generate unique ids with corresponding links" arrow placement="top-start"> */}
                    <Button variant="contained" onClick={props.handleGenerateBtn} disableElevation>Generate</Button>
                    {/* </Tooltip> */}
                    {/* <Tooltip title="Button to reset all fields" arrow placement="top-start"> */}
                    <Button variant="outlined" onClick={props.handleResetBtn}>Reset <RestartAltIcon /></Button>
                    {/* </Tooltip> */}
                </div>


                {props.inputData.genMethod === 'custom-diy' &&

                    <Box className="container1" sx={{ mt: 2 }}>
                        <label>
                            Length of ID<br />
                            <input
                                type="number"
                                min="5"
                                max="20"
                                value={props.customDiyOptions.lengthOfId}
                                onChange={(e) => props.handleCustomDiyOptionsChange('lengthOfId', e.target.value)}
                                disabled={props.inputData.genMethod !== 'custom-diy'}
                            />

                        </label>

                        <Stack>
                            Character Set<br />
                            <label>
                                <input
                                    type="checkbox"
                                    checked={props.customDiyOptions.useNumbers}
                                    onChange={(e) => props.handleCustomDiyOptionsChange('useNumbers', e.target.checked)}
                                    disabled={props.inputData.genMethod !== 'custom-diy'}
                                /> Use Numbers (0-9)
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={props.customDiyOptions.useLetters}
                                    onChange={(e) => props.handleCustomDiyOptionsChange('useLetters', e.target.checked)}
                                    disabled={props.inputData.genMethod !== 'custom-diy'}
                                /> Use Letters (a-z)
                            </label>
                        </Stack>
                        <label>
                            Prefix <em>(optional)</em><br />
                            <input
                                type="text"
                                value={props.customDiyOptions.prefix}
                                onChange={(e) => props.handleCustomDiyOptionsChange('prefix', e.target.value)}
                                disabled={props.inputData.genMethod !== 'custom-diy'}
                            />
                        </label>
                        <label>
                            Suffix <em>(optional)</em><br />
                            <input
                                type="text"
                                value={props.customDiyOptions.suffix}
                                onChange={(e) => props.handleCustomDiyOptionsChange('suffix', e.target.value)}
                                disabled={props.inputData.genMethod !== 'custom-diy'}
                            />
                        </label>
                    </Box>

                }


                <Divider sx={{ my: 3 }} />

            </Box>
        </>
    );
}
export default Header;   