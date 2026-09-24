// Import the xlsx library to read Excel files
import * as XLSX from 'xlsx';

// Step 1: Read the Excel file
// Provide the file path to the Excel file
const filePath = './data_excel.xlsx';

// Use XLSX.readFile() to read the Excel file
const workbook = XLSX.readFile(filePath);

// Step 2: Get the name of the first sheet in the workbook
// A workbook can have multiple sheets, we access the first one here
const sheetName = workbook.SheetNames[0];

// Step 3: Get the actual sheet object
// This sheet contains all the data from the first sheet
const sheet = workbook.Sheets[sheetName];

// Step 4: Convert the sheet data to JSON format
// This makes it easier to work with the data
const data = XLSX.utils.sheet_to_json(sheet);

// Step 5: Print the sheet name
console.log(`Sheet Name: ${sheetName}`);

// Step 6: Print all the data from the Excel file
console.log('\n=== Excel Data ===');
console.log(data);

// Step 7: Print each row of data
console.log('\n=== Row by Row Data ===');
data.forEach((row: any, index: any) => {
  // index is the row number (0-based)
  console.log(`Row ${index + 1}:`, row);
});

// Step 8: Access specific cell/column data
console.log('\n=== Accessing Specific Columns ===');
// For example, if your Excel has a "Name" column, you can access it like this:
data.forEach((row: any) => {
  // Replace "Name" with your actual column header from Excel
  console.log(`Data from first column:`, Object.values(row)[0]);
});
