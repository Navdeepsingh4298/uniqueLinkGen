
// local components
import DrawerAppBar from '../components/DrawerAppBar.jsx';

// mui components
import { Container, Typography, Box } from '@mui/material';



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

const imageStyle = {
  width: '100%',
  maxWidth: '600px',
  marginBottom: '20px',
  border: '1px solid #aaa',
};


const DocsPage = () => {
  return (
    <Container>
      <DrawerAppBar />

      <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>

        <Box mb={4}>
          <Typography variant="h4" gutterBottom>
            Unique Ids and Link Generator – Documentation
          </Typography>
          <Typography variant="body1" paragraph>
            The <strong>Unique Link Generator</strong> is a utility tool designed to
            quickly generate unique IDs and append them to a base URL, producing
            ready-to-use unique links. It supports multiple ID generation methods
            and provides options to copy or download the results.
          </Typography>
        </Box>


        <div style={sectionStyle}>
          <h2>⚙️ Input Fields</h2>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Field</th>
                <th style={thStyle}>Description</th>
                <th style={thStyle}>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}><strong>Base URL</strong></td>
                <td style={tdStyle}>
                  Enter the base URL where the unique ID will be appended. The URL must
                  include a <code>uid</code> placeholder at the end.
                </td>
                <td style={tdStyle}><code>https://example.com/survey?uid=</code></td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>Number of Links</strong></td>
                <td style={tdStyle}>Specify how many unique links you want to generate.</td>
                <td style={tdStyle}><code>50</code></td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>Generation Method</strong></td>
                <td style={tdStyle}>
                  Choose the method for generating unique IDs:
                  <ul>
                    <li>Random AlphaNum (10-12 chars)</li>
                    <li>Random Crypto UUID</li>
                    <li>V4 UUID</li>
                    <li>Hash MD5 UUID</li>
                    <li>Hash SHA-256 UUID</li>
                    <li>Hash SHA-512 UUID</li>
                    <li>Custom AlphaNum DIY</li>
                  </ul>
                </td>
                <td style={tdStyle}>v4 UUID</td>
              </tr>
            </tbody>
          </table>
        </div>


        <div style={sectionStyle}>
          <h2>🧼 Utility Buttons</h2>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Button</th>
                <th style={thStyle}>Function</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={tdStyle}>Reset All Button</td><td style={tdStyle}>Clears all fields and resets the tool for fresh start.</td></tr>
              <tr><td style={tdStyle}>Generate Button</td><td style={tdStyle}>Starts the ID generation process and outputs both IDs and links.</td></tr>
              <tr><td style={tdStyle}>Copy IDs Button</td><td style={tdStyle}>Copies all generated IDs to your system clipboard.</td></tr>
              <tr><td style={tdStyle}>Download IDs Button</td><td style={tdStyle}>
                We have two options to download the generated IDs:
                <ul>
                  <li>Text File: Saves IDs as a <code>.txt</code> file.</li>
                  <li>CSV File: Saves IDs as a <code>.csv</code> file.</li>
                </ul>
              </td></tr>
              <tr><td style={tdStyle}>Copy Links Button</td><td style={tdStyle}>Copies all generated Links to your system clipboard.</td></tr>
              <tr><td style={tdStyle}>Download Links Button</td><td style={tdStyle}>
                We have three options to download the generated links:
                <ul>
                  <li>Text File: Saves Links as a <code>.txt</code> file.</li>
                  <li>CSV File: Saves Links as a <code>.csv</code> file.</li>
                  <li>QRCodes Zip File: Saves Links as a <code>.zip</code> file.</li>
                </ul>
              </td></tr>
            </tbody>
          </table>
        </div>


        <div style={sectionStyle}>
          <h2>📦 Output Sections</h2>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Section</th>
                <th style={thStyle}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={tdStyle}>Unique IDs Output Box</td><td style={tdStyle}>Displays the list of generated IDs.</td></tr>
              <tr><td style={tdStyle}>Unique Links Output Box</td><td style={tdStyle}>Displays the full links with IDs appended to the base URL.</td></tr>
            </tbody>
          </table>
        </div>


        <div style={sectionStyle}>
          <h2>📦 Output Export Methods</h2>
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
        </div>


        <div style={sectionStyle}>
          <h2>⚠️ Validation & Error Handling</h2>
          <p>
            It includes robust validation to ensure smooth and reliable usage. If any required fields are empty or have invalid data—such as a missing base URL or incorrect format. In such cases, an error message will be displayed when you try to generate. Actions like <strong>Copy or Download</strong> will throw error if there is no generated output available. This helps prevent accidental operations and ensures users only proceed when inputs are valid.
            <br /> <br />
            Before generating links:
            <ul>
              <li>Ensure all required fields are filled correctly</li>
              <li>The base URL must end with a valid UID placeholder.</li>
            </ul>
          </p>
        </div>

        <div style={sectionStyle}>
          <h2>✅ Example Workflow</h2>
          <ol>
            <li>Enter base URL: <code>https://example.com/survey?uid=</code></li>
            <li>Enter number of links: <code>10</code></li>
            <li>Select generation method: <code>UUID v4</code></li>
            <li>Click <strong>Generate</strong></li>
            <li>Copy or download the results as needed</li>
          </ol>
        </div>
      </div>
    </Container>
  );
};

export default DocsPage;