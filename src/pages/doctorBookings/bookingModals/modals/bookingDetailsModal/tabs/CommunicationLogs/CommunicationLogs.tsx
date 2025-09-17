import { FaCircleCheck } from "react-icons/fa6";
import { Tabs, Timeline, Card, Typography, Tag, Empty } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import CustomTab from "@/components/custom/Tab/CustomTab";

const { Text, Paragraph } = Typography;

const CommunicationLogs = ({ additionalInfo = {} }: any) => {
  const { communicationLogs } = additionalInfo || {};

  const getTagColor = (type: string) => {
    switch (type?.toLowerCase()) {
      case "sms":
        return "blue";
      case "whatsapp":
        return "green";
      case "email":
        return "purple";
      default:
        return "default";
    }
  };

  const LogsSectionInfo = (props: any) => {
    let filterData;
    if (props?.type === "user" || props?.type === "doctor") {
      filterData = communicationLogs.filter(
        (item: any) => item?.role === props?.type
      );
    } else {
      filterData = communicationLogs.filter(
        (item: any) => item?.role !== "user" && item?.role !== "doctor"
      );
    }

    if (!filterData || filterData.length === 0) {
      return (
        <div className="flex justify-center items-center h-48">
          <Empty description={`No logs available for ${props?.type}`} />
        </div>
      );
    }

    return (
      <div className="mt-3">
        <Timeline
          items={filterData.map((log: any, index: number) => ({
            dot: <FaCircleCheck size={15} color="#45A834" />,
            children: (
              <Card
                key={index}
                className="mb-4 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <Paragraph className="font-semibold text-base">
                      <Text strong>{log.template_id}</Text>
                    </Paragraph>
                    <Paragraph type="secondary">
                      Sent to: <Text strong>{log.to}</Text>
                    </Paragraph>
                  </div>
                  <Tag color={getTagColor(log.type)}>
                    {log.type?.toUpperCase()}
                  </Tag>
                </div>
                <div className="mt-2">
                  <Paragraph className="text-sm text-gray-500 flex items-center">
                    <ClockCircleOutlined className="mr-2" />
                    {new Date(log.created_at).toLocaleString()}
                  </Paragraph>
                  <Paragraph className="text-sm text-gray-500">
                    Role: <Text code>{log?.role}</Text>
                  </Paragraph>
                </div>
              </Card>
            ),
          }))}
        />
      </div>
    );
  };

  return (
    <div>
      {communicationLogs?.length > 0 ? (
        <div>
          <CustomTab
            tabs={[
              {
                label: "Patient",
                value: "1",
                children: <LogsSectionInfo type="user" />,
              },
              // {
              //   label: "Doctor",
              //   value: "2",
              //   children: <LogsSectionInfo type="doctor" />,
              // },
              // {
              //   label: "Vendor/Others",
              //   value: "3",
              //   children: <LogsSectionInfo type="others" />,
              // },
            ]}
          />
        </div>
      ) : (
        <div className="flex justify-center items-center h-64">
          <Empty description="No Communication Logs Available" />
        </div>
      )}
    </div>
  );
};

export default CommunicationLogs;
