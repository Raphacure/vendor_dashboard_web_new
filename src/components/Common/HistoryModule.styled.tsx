import styled from "styled-components";

export const HistoryModuleStyled = styled.div`
  padding: 1.5rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  h2 {
    margin-bottom: 1.5rem;
    color: #344767;
    font-size: 1.5rem;
  }

  .loading,
  .no-history {
    padding: 2rem;
    text-align: center;
    color: #64748b;
    font-style: italic;
  }

  .history-timeline {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .history-item {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    overflow: hidden;
  }

  .history-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    background-color: #f1f5f9;
    border-bottom: 1px solid #e2e8f0;
  }

  .timestamp {
    display: flex;
    align-items: center;
    color: #475569;
    font-weight: 500;

    i {
      margin-right: 0.5rem;
    }
  }

  .history-meta {
    font-size: 0.875rem;
    color: #64748b;
  }

  .changes-container {
    padding: 1rem 1.5rem 1.5rem;
  }

  .changes-count {
    color: #64748b;
    margin-bottom: 0.75rem;
    font-size: 0.875rem;
  }

  .changes-table {
    width: 100%;
    border-collapse: collapse;

    th {
      text-align: left;
      padding: 0.75rem;
      border-bottom: 2px solid #e2e8f0;
      color: #475569;
      font-weight: 600;
      font-size: 0.875rem;
    }

    td {
      padding: 0.75rem;
      border-bottom: 1px solid #e2e8f0;
      vertical-align: top;
    }

    tr.even {
      background-color: #f8fafc;
    }

    tr:last-child td {
      border-bottom: none;
    }

    .field-name {
      font-weight: 500;
      color: #334155;
      white-space: nowrap;
      min-width: 120px;
    }

    .old-value {
      color: #94a3b8;
      position: relative;
      text-decoration: line-through;
      text-decoration-color: rgba(239, 68, 68, 0.4);
      text-decoration-thickness: 1px;
      max-width: 300px;
      word-break: break-word;
    }

    .new-value {
      color: #0f766e;
      font-weight: 500;
      max-width: 300px;
      word-break: break-word;
    }
  }

  @media (max-width: 768px) {
    .history-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }

    .changes-table {
      font-size: 0.875rem;

      th {
        padding: 0.5rem;
      }

      td {
        padding: 0.5rem;
      }
    }
  }
`;
