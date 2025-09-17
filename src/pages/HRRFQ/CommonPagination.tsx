import React from "react";
import { Pagination } from "antd";

type props = {
  onChangeHnadler: any;
  defaultPage: number;
  defaultTotal: any;
  pageSize: number;
};
const CommonPagination = ({
  onChangeHnadler,
  defaultPage,
  defaultTotal,
  pageSize,
}: props) => {
  return (
    <div>
      <Pagination
        onChange={onChangeHnadler}
        defaultCurrent={defaultPage}
        current={defaultPage}
        total={defaultTotal}
        pageSize={pageSize}
        pageSizeOptions={["5", "10", "20", "50", "100"]}
        showSizeChanger={true}
      />
    </div>
  );
};

export default CommonPagination;
