import CustomTable from "@/components/custom/Table/CustomTable/CustomTable";

const AllRFQTable:React.FC<{ columns:any, rfqList:any, isLoading:boolean, page:number, pageSize:number, total:number, onPageChange:(page:number, pageSize:number) => void }> = (props) => {
  const { columns, rfqList, isLoading, page, pageSize, total, onPageChange } =
    props;

  return (
    <CustomTable
      columns={columns}
      bodyCellClassName="h-[50px] p-2 text-center"
      rowKey="id"
      data={Array.isArray(rfqList) && rfqList ? rfqList : []}
      isLoading={isLoading}
      page={page}
      pageSize={pageSize}
      total={total}
      onPageChange={onPageChange}
      showingName="RFQ"
      pagination={true}
    />
  );
};

export default AllRFQTable;
