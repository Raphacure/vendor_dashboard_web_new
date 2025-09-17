import React, {
  useState,
  useContext,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { Modal, Input, List, Avatar, Typography, Tabs } from "antd";
import { ChatContext } from "@/pages/Chat/context/ChatConext";
import { opponentDto } from "@/pages/Chat/type";
import { useDispatch, useSelector } from "react-redux";
import { getAllDoctorsPatient } from "@/redux/slices/PatientDoctor/PatientService";
import toast from "react-hot-toast";
import { getAllAdmins } from "@/redux/slices/doctorUsers/doctorUsersService";
import debounce from "lodash.debounce";
import { intiateChat } from "@/redux/slices/chat/chatService";
import { getAllClientEmpoyess } from "@/redux/slices/employees/EmployeeService";
import useClientLinkableId from "@/hooks/auth/useClientLinkableId";

interface PatientUser {
  first_name: string | null;
  last_name: string | null;
  image: string | null;
}

interface PatientDetails {
  id: number;
  user_id: string;
  user: PatientUser;
}

interface UserDetails {
  id: number;
  first_name: string | null;
  last_name: string | null;
  image: string | null;
}

interface StartChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type DataItem = {
  type: "patient" | "user";
  id: string | number;
  displayId: number;
  name: string;
  photo?: string | null;
  key: string;
};

const StartChatModal: React.FC<StartChatModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTabKey, setActiveTabKey] = useState("1");
  const { handleSendEvent, userChatId, handleOpenChat } =
    useContext(ChatContext);
  const { linkableId } = useClientLinkableId();
  const dispatch = useDispatch() as any;
  const [docEmployees, setDocEmployees] = useState<{
    associatedUsers?: UserDetails[];
  }>({});
  const [isLoadingTeam, setIsLoadingTeam] = useState(false);
  const { selectedClient } = useSelector((state: any) => state.doctor);

  const handleSelectUser = (user: DataItem) => {
    console.log("user : ", user);
    handleStartNewChat({
      id: user?.id,
      image: user?.photo,
      name: user?.name,
    });
    // const opponent: opponentDto = {
    //   chatId: String(user.id),
    //   name: user.name,
    //   photo: user.photo || "",
    //   chatType: "INDIVIDUAL_CHAT",
    //   unReadMessageCount: 0,
    // };
    // handleOpenChat({ opponent, type: "INDIVIDUAL_CHAT" });
    // onClose();
    // setSearchTerm("");
    // setActiveTabKey("1");
    // setPatients([]);
    // setDocEmployees({});
  };

  const handleStartNewChat = async (selectedUser: any) => {
    const result: any = await dispatch(
      intiateChat({
        body: selectedUser,
        userId: userChatId,
      })
    );

    if (!result?.payload?.status) {
      toast.error(result?.payload?.msg ?? "Failed to initiated chat!.");
      return;
    }
    const user = result?.payload?.data;
    const isChatInitiated = user?.isChatInitiated;

    if (!isChatInitiated) {
      await handleSendEvent({
        chatType: "INDIVIDUAL_CHAT",
        to: user?._id,
        event: {
          created_by: userChatId,
          type: "CHAT_INITIATED",
          created_for: user?._id,
        },
      });
    }

    onClose();
    await handleOpenChat({
      opponent: {
        chatId: user?._id,
        chatType: "INDIVIDUAL_CHAT",
        name: user?.name,
        photo: user?.image,
        unReadMessageCount: user?.unReadMessageCount,
      },
      type: "INDIVIDUAL_CHAT",
    });
  };

  const getAllUsersDetails = useCallback(
    async () => {
      setIsLoadingTeam(true);
      try {
        const filters = {
          searchText: searchTerm,
          page: 1,
          count: 10,
          department: "",
          clientId: linkableId,
          // hasEmployeeId: true,
        };
        const result = (await dispatch(getAllClientEmpoyess(filters))) as any;
        if (result?.error) {
          toast.error(result?.error?.message || "unknown error occured");
          return;
        } else {
          setDocEmployees(result?.payload?.data);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
        toast.error("Failed to fetch team members.");
        setDocEmployees({});
      } finally {
        setIsLoadingTeam(false);
      }
    },
    [dispatch,searchTerm, linkableId]
  );

  useEffect(() => {
    if (isOpen) {
      getAllUsersDetails();
    }
  }, [isOpen, linkableId, selectedClient, getAllUsersDetails]);

  useEffect(() => {
    if (activeTabKey === "2" && isOpen) {
      setIsLoadingTeam(true);
      getAllUsersDetails();
    }
  }, [
    searchTerm,
    activeTabKey,
    isOpen,
    selectedClient,
  ]);

  const supportAgents = [
    {
      id: "56416",
      first_name: "Amrin",
      last_name: " - Support",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/56416-1737435504737.jpg",
    },
    {
      id: "56420",
      first_name: "Chandni",
      last_name: " - Support",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/56426-1743676987609.png",
    },
    {
      id: "56435",
      first_name: "Vinitha",
      last_name: " - Support",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/undefined-1738669456716.jpg",
    },
  ];

  const actualDocEmployees = docEmployees?.associatedUsers || [];
  const filteredEmployeesData: DataItem[] = actualDocEmployees.map((u) => ({
    type: "user",
    id: u.id,
    displayId: u.id,
    name: `${u.first_name || ""} ${u.last_name || ""}`.trim() || "Unnamed User",
    photo: u.image,
    key: `user-${u.id}`,
  }));

  // Filter support agents based on search term
  const filteredSupportAgentsData: DataItem[] = supportAgents
    .filter((agent) =>
      `${agent.first_name || ""} ${agent.last_name || ""}`
        .trim()
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    )
    .map((agent) => ({
      type: "user",
      id: agent.id,
      displayId: parseInt(agent.id.split("-")[1]),
      name: `${agent.first_name || ""} ${agent.last_name || ""}`.trim(),
      photo: agent.image,
      key: `support-${agent.id}`,
    }));

  const renderList = (
    dataSource: DataItem[],
    isLoading: boolean,
    noDataMessage: string
  ) => (
    <div style={{ maxHeight: "350px", overflowY: "auto", paddingRight: "8px" }}>
      {isLoading ? (
        <div style={{ textAlign: "center", padding: "20px" }}>Loading...</div>
      ) : dataSource.length > 0 ? (
        <List
          itemLayout="horizontal"
          dataSource={dataSource}
          renderItem={(item) => (
            <List.Item
              onClick={() => handleSelectUser(item)}
              style={{ cursor: "pointer", paddingLeft: "8px" }}
            >
              <List.Item.Meta
                avatar={
                  <Avatar src={item.photo}>
                    {item.name?.[0]?.toUpperCase()}
                  </Avatar>
                }
                title={item.name}
              />
            </List.Item>
          )}
          split={false}
        />
      ) : (
        <Typography.Text
          type="secondary"
          style={{ display: "block", textAlign: "center", marginTop: "20px" }}
        >
          {searchTerm && activeTabKey === "2"
            ? `No team members found matching "${searchTerm}".`
            : searchTerm && activeTabKey === "1"
            ? `No patients found matching "${searchTerm}".`
            : searchTerm && activeTabKey === "3"
            ? `No support agents found matching "${searchTerm}".`
            : noDataMessage}
        </Typography.Text>
      )}
    </div>
  );

  return (
    <Modal
      title="Start a New Chat"
      visible={isOpen}
      onCancel={() => onClose()}
      footer={null}
      bodyStyle={{ padding: "0 16px 16px 16px" }}
      destroyOnClose
    >
      <Input.Search
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ margin: "16px 0" }}
        allowClear
      />
      <Tabs activeKey={activeTabKey} onChange={setActiveTabKey}>
        <Tabs.TabPane
          tab={`Employees (${filteredEmployeesData.length})`}
          key="1"
        >
          {renderList(filteredEmployeesData, false, "No patients available.")}
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={`Support (${filteredSupportAgentsData.length})`}
          key="3"
        >
          {renderList(
            filteredSupportAgentsData,
            false,
            "No support agents available."
          )}
        </Tabs.TabPane>
      </Tabs>
    </Modal>
  );
};

export default StartChatModal;
