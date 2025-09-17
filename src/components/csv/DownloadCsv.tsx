import { CSVLink } from "react-csv";

const DownloadCsv = (props: any) => {
  const { csvData, type } = props;
  return (
    <div>
      <CSVLink
        data={csvData}
        filename={type ? type : "bulk_upload.csv"}
        target="_blank"
      >
        {props.children}
      </CSVLink>
    </div>
  );
};

export default DownloadCsv;
