import styled from "styled-components";

export const InvoiceModalStyled = styled.div`
  padding: 10px;
  font-family: Outfit, sans-serif;
  background: #f9fafc;
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  .downloadBtn, .printBtn {
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 18px;
    padding: 10px;
    color: #fff;
    margin-left: auto;
    background: #2c3262;
  }
  
  .printBtn {
    background: #495057;
  }

  iframe {
    display: block !important;
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 10px;
  }

  .invoice-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: 20px;
    margin-bottom: 20px;
  }

  .logo-container {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }

  .logo {
    width: 180px;
    object-fit: contain;
  }

  .company-info {
    text-align: right;
    font-size: 14px;
    color: #555;
    line-height: 1.5;
  }

  .invoice-content {
    width: 100%;
    padding: 20px;
    background-color: #fff;
    border-radius: 25px;
    border: 1px solid #e0e0e0;
    margin-bottom: 20px;
  }

  .invoice-content h5 {
    color: #2c3e50;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 25px;
  }

  .invoice-details {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .invoice-details-left,
  .invoice-details-right {
    display: flex;
    flex-direction: column;
  }

  .invoice-label {
    color: #6c757d;
    font-size: 14px;
    margin-bottom: 5px;
  }

  .invoice-value {
    color: #2c3e50;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 15px;
  }

  .invoice-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }

  .invoice-table th {
    background-color: #f8f9fa;
    padding: 12px 15px;
    text-align: left;
    font-weight: 600;
    color: #495057;
    border-bottom: 1px solid #dee2e6;
  }

  .invoice-table td {
    padding: 12px 15px;
    border-bottom: 1px solid #dee2e6;
  }

  .invoice-table .amount-column {
    text-align: right;
  }

  .invoice-summary {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .summary-row {
    display: flex;
    justify-content: space-between;
    width: 300px;
    margin-bottom: 10px;
  }

  .summary-row.total {
    font-weight: 600;
    font-size: 18px;
    border-top: 1px solid #dee2e6;
    padding-top: 10px;
    margin-top: 5px;
  }

  .invoice-footer {
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin-top: 30px;
    padding-top: 20px;
    gap: 30px;
  }

  .declaration-section,
  .bank-details-section {
    flex: 1;
    padding: 15px;
  }

  .invoice-footer h6 {
    color: #2c3e50;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .invoice-footer p {
    color: #6c757d;
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 5px;
  }
  
  @media print {
    background: white;
    padding: 0;
    
    .downloadBtn, .printBtn {
      display: none;
    }
    
    .invoice-content {
      border: none;
      padding: 0;
      margin: 0;
    }
    
    .invoice-table th {
      background-color: white !important;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    
    @page {
      size: auto;
      margin: 10mm;
    }
  }
`;

export const HidePrintHeadersStyle = styled.div`
  @media print {
    @page {
      margin: 0;
      size: auto;
      padding: 1.5rem;
    }
    
    html, body {
      height: 100%;
      margin: 0 !important;
      overflow: hidden;
    }
    
    /* Hide browser's default headers and footers */
    html {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    
    /* Hide URL, date, and page number */
    body:before, body:after {
      content: none !important;
    }
  }
`;
