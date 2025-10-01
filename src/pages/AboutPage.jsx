// MUI components
import { Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Divider } from '@mui/material';

// components
import DrawerAppBar from '../components/DrawerAppBar';

// styles
const sectionStyle = {
    marginBottom: '40px',
};

const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
};

const thStyle = {
    padding: '12px',
    border: '1px solid #ccc',
    textAlign: 'left',
};

const tdStyle = {
    padding: '12px',
    border: '1px solid #ccc',
    textAlign: 'left',
};



const AboutPage = () => {
    return (
        <Container>
            <DrawerAppBar />

            <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>

                <Box>
                    <Typography variant="h4" gutterBottom>
                        Unique Ids and Link Generator
                    </Typography>

                    <Typography variant="body1">
                        <strong>Unique Link Generator</strong> is a high-performance utility designed to create unique IDs and corresponding links at lightning speed. Whether you're managing large-scale client outreach or setting up CATI (Computer-Assisted Telephone Interviewing) systems, this tool delivers unmatched efficiency and reliability.
                    </Typography>

                    <Divider sx={{ my: 3 }} />

                    <Typography variant="h5" gutterBottom>
                        Key Applications
                    </Typography>
                    <Typography variant="body1" ml={2}>
                        <ul>
                            <li>
                                <strong>Client List Distribution:</strong> Generate personalized links for each recipient, ensuring secure and trackable access.
                            </li>
                            <li>
                                <strong>CATI Setups:</strong> Seamlessly create unique interview links for large-scale survey deployments.
                            </li>
                        </ul>
                    </Typography>

                    <Divider sx={{ my: 3 }} />

                    <Typography variant="h5" gutterBottom>
                        Generation Methods
                    </Typography>
                    <table style={tableStyle}>
                        <thead>
                            <tr>
                                <th style={thStyle}>Method</th>
                                <th style={thStyle}>Description</th>
                                <th style={thStyle}>Use Case Highlights</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={tdStyle}>Random AlphaNum (10–12 Chars)</td>
                                <td style={tdStyle}>Generates short, random alphanumeric IDs (10–12 chars). Fast, lightweight, and collision-safe for small scopes.</td>
                                <td style={tdStyle}>Perfect for internal tools, quick prototypes, or temporary identifiers</td>
                            </tr>

                            <tr>
                                <td style={tdStyle}>Random crypto UUID</td>
                                <td style={tdStyle}>Uses cryptographic randomness for high-entropy, unpredictable identifiers.</td>
                                <td style={tdStyle}>Best for secure tokens, sensitive data, or tamper-proof links</td>
                            </tr>

                            <tr>
                                <td style={tdStyle}>UUID v4</td>
                                <td style={tdStyle}>Standard version 4 UUID—random, globally unique, and widely supported across platforms.</td>
                                <td style={tdStyle}>Ideal for APIs, databases, and external system integrations</td>
                            </tr>

                            <tr>
                                <td style={tdStyle}>Hash MD5 UUID</td>
                                <td style={tdStyle}>Generates deterministic UUIDs using MD5 hashing—compact and consistent from input.</td>
                                <td style={tdStyle}>Useful for legacy systems or input-based UUID generation</td>
                            </tr>

                            <tr>
                                <td style={tdStyle}>Hash SHA-256 UUID</td>
                                <td style={tdStyle}>Creates secure, input-derived UUIDs using SHA-256 hashing for stronger collision resistance.</td>
                                <td style={tdStyle}>Great for audit trails, secure integrations, and tamper-evident IDs</td>
                            </tr>

                            <tr>
                                <td style={tdStyle}>Hash SHA-512 UUID</td>
                                <td style={tdStyle}>Generates ultra-secure UUIDs using SHA-512—maximum entropy and minimal collision risk.</td>
                                <td style={tdStyle}>Best for cryptographic applications and high-security environments</td>
                            </tr>

                            <tr>
                                <td style={tdStyle}>Custom DIY UUID</td>
                                <td style={tdStyle}>Fully customizable UUIDs—define length, character sets, prefixes, suffixes, and format rules.</td>
                                <td style={tdStyle}>Perfect for branded IDs, business rule-driven formats, or creative UUID needs</td>
                            </tr>
                        </tbody>
                    </table>

                    <Divider sx={{ my: 3 }} />

                    <Typography variant="h5" gutterBottom>
                        Output Export Methods
                    </Typography>
                    <table style={tableStyle}>
                        <thead>
                            <tr>
                                <th style={thStyle}>Method</th>
                                <th style={thStyle}>Description</th>
                                <th style={thStyle}>Best Use Cases</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={tdStyle}>Text File</td>
                                <td style={tdStyle}>Exports IDs or links as a plain .txt file.</td>
                                <td style={tdStyle}>Quick setups, internal tools, lightweight sharing</td>
                            </tr>

                            <tr>
                                <td style={tdStyle}>CSV File</td>
                                <td style={tdStyle}>Exports IDs or links in structured .csv format.</td>
                                <td style={tdStyle}>Secure data handling, spreadsheet workflows</td>
                            </tr>

                            <tr>
                                <td style={tdStyle}>QR Codes Zip File</td>
                                <td style={tdStyle}>Generates QR codes for each link and bundles them into a downloadable .zip file.</td>
                                <td style={tdStyle}>Email-friendly, mobile scanning, offline access</td>
                            </tr>
                        </tbody>
                    </table>

                    <Divider sx={{ my: 3 }} />

                    <Typography variant="h5" gutterBottom>
                        Performance Highlights
                    </Typography>
                    <Typography variant="body1" ml={2}>

                        <ul>
                            <li>
                                Generates over <strong>100,000 unique links per second</strong>
                            </li>
                            <li>
                                No external dependencies; runs directly browser
                            </li>
                            <li>
                                Designed for simplicity, scalability, and ease of use
                            </li>
                        </ul>
                    </Typography>

                    <Divider sx={{ my: 3 }} />

                    <Typography variant="h5" gutterBottom>
                        Creator
                    </Typography>
                    <Typography variant="body1" paragraph>
                        This tool was solely created by <strong>Navdeep Singh</strong>, a frontend developer with fullstack capabilities. Known for building robust utilities and streamlining workflows, Navdeep brings precision, speed, and care to every project. This generator reflects his commitment to empowering teams with tools that just work.
                    </Typography>
                </Box>
            </div>
        </Container>
    );
};

export default AboutPage;