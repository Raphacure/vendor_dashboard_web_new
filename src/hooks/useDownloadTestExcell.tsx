import { SERVER_IP } from '@/lib/config';
import { getToken } from '@/lib/helpers';
import React, { useCallback, useState } from 'react';
import { CSVLink } from 'react-csv';


type prop = {
    searchText: string, status:string, categoryFilter: any[], testType: "diagnostic" | "ctmri"
}
const useDownloadTestExcell = ({ categoryFilter, searchText, status , testType} : prop) => {
  const [excellDownloading, setExcellDownloading] = useState(false);
  const [csvData, setCsvData] = useState<any[]>([]);
  const [csvFilename, setCsvFilename] = useState('tests-details.csv');
  const csvLinkRef = React.useRef<any>(null);

    const handleDownloadTemplate = useCallback(async () => {
        if(excellDownloading) return 

        const filters: any = {
          testType: testType
        };
        setExcellDownloading(true);
    
        if (searchText) {
          filters.searchText = searchText;
        }
        if (status && status != "all") {
          filters.active_status = status;
        }
    
        if (categoryFilter.length > 0) {
          filters.categoryIds = categoryFilter;
        }
        fetch(`${SERVER_IP}/api/v1/test/download`, {
              method: "POST",
              body: JSON.stringify({ filters: filters }),
              headers: {
                "Accept": "text/csv",
                "Content-Type": "application/json",
                authorization: "Bearer " + getToken(),
              },
            })
              .then((response) => response.blob())
              .then((res) => {
                console.log(res);
                
                // Convert CSV to JSON and log it
                const reader = new FileReader();
                reader.onload = function() {
                  const csvContent = reader.result as string;
                  // Parse CSV to JSON with sanitized HTML
                  const jsonData = csvToJson(csvContent);
                  console.log("CSV converted to JSON:", jsonData);
                  
                  // Set the sanitized data for react-csv
                  setCsvData(jsonData);
                  
                  // Trigger the download using CSVLink ref
                  setTimeout(() => {
                    if (csvLinkRef.current) {
                      csvLinkRef.current.link.click();
                    }
                    setExcellDownloading(false);
                  }, 100);
                };
                reader.readAsText(res);
              }).catch((err) => {
                console.log(err);
                setExcellDownloading(false);
              });
      }, [searchText, status, categoryFilter, testType]);
      
  // Helper function to sanitize HTML content
  const sanitizeHtml = (html: string): string => {
    console.log("sanitizeHtml : ", html);
    
    if (!html) return '';
    
    // Create a temporary DOM element
    const tempElement = document.createElement('div');
    
    // Set its HTML content
    tempElement.innerHTML = html;
    
    // Return the text content
    return tempElement.textContent || tempElement.innerText || '';
  };
  
  // Helper function to convert CSV to JSON
  const csvToJson = (csv: string) => {
    const lines = csv.split('\n');
    const result = [];
    const headers = lines[0].split(',').map(header => {
      // Keep the original header with quotes for matching
      return header.trim();
    });

    for (let i = 1; i < lines.length; i++) {
      if (!lines[i]) continue;
      
      // Parse CSV line accounting for commas within quoted values
      let currentLine = [];
      let insideQuote = false;
      let currentValue = '';
      
      for (let j = 0; j < lines[i].length; j++) {
        const char = lines[i][j];
        
        if (char === '"' && (j === 0 || lines[i][j-1] !== '\\')) {
          insideQuote = !insideQuote;
          currentValue += char;
        } else if (char === ',' && !insideQuote) {
          currentLine.push(currentValue);
          currentValue = '';
        } else {
          currentValue += char;
        }
      }
      
      // Don't forget the last value
      if (currentValue) {
        currentLine.push(currentValue);
      }
      
      const obj: Record<string, string | boolean | number> = {};
      
      for (let j = 0; j < headers.length; j++) {
        if (!headers[j]) continue;
        
        // Clean header name (remove quotes for object keys)
        const cleanHeader = headers[j].replace(/^"(.+)"$/, '$1');
        
        let value = currentLine[j]?.trim() || '';
        
        // Remove extra quotes from values
        value = value.replace(/^"(.+)"$/, '$1');
        
        // Special handling for description and preparation fields
        // Check for both quoted and unquoted versions of the field names
        if (headers[j] === '"description"' || headers[j] === 'description' || 
            headers[j] === '"preperation"' || headers[j] === 'preperation') {
          value = sanitizeHtml(value);
        }
        
        // Parse boolean values
        if (value === 'true' || value === 'false') {
          obj[cleanHeader] = value === 'true';
        }
        
        // Parse numeric values
        else if (!isNaN(Number(value)) && value !== '') {
          obj[cleanHeader] = Number(value);
        }
        
        else {
          obj[cleanHeader] = value;
        }
      }
      
      result.push(obj);
    }
    return result;
  };
      
  return {
    handleDownloadTemplate,
    excellDownloading,
    CSVDownloadLink: (
      <CSVLink
        data={csvData}
        filename={csvFilename}
        className="hidden"
        ref={csvLinkRef}
        target="_blank"
      />
    )
  }
}

export default useDownloadTestExcell