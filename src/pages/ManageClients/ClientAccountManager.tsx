import { useCallback, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
// import { getAllAdmins } from "../../redux/slices/UserManagement/UserManagementService";
import { Button, Divider } from "antd";
import {
  getClientsAccountManager,
  updateClientsAccountManager,
} from "../../redux/slices/Clients/ClientsService";
import { toast } from "react-hot-toast";
// import { createGroupIfNotExists } from "../../redux/slices/chat/chatService";

type prop = {
  selectedClient: any;
  activeSpoc: any | null
};
const ClientAccountManager = ({ selectedClient, activeSpoc }: prop) => {
  const { allAdmins, loading } = useSelector(
    (state: any) => state?.userManagement
  );
  const { user } = useSelector((state: any) => state?.auth);
  const [accountManagers, setAccountManagers] = useState<number[]>([]);
  const [search, setSearch] = useState("")

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getAllAdmins({}));
  }, []);

  const getAccountManagers = useCallback(async () => {
    // const result: any = await dispatch(
    //   getClientsAccountManager(selectedClient?.id)
    // );

    // if (Array.isArray(result?.payload)) {
    //   const defaultValue: any = {};
    //   setAccountManagers(
    //     result?.payload?.map((data: any) => {
    //       defaultValue[data?.admin_id] = {
    //         id: data?.admin_id,
    //         first_name: data?.admin?.first_name,
    //         last_name: data?.admin?.last_name,
    //         email: data?.admin?.email
    //       };
    //       return data?.admin_id;
    //     })
    //   );
    //   setSelectedAdmins(defaultValue);
    // }
  }, [selectedClient?.id]);

  useEffect(() => {
    getAccountManagers();
  }, [getAccountManagers]);

  const [selectedAdmin, setSelectedAdmins] = useState<any>({});

  const onChange = (client: any) => {
    const clientsTemp = { ...selectedAdmin };
    if (clientsTemp?.[client?.id]) {
      delete clientsTemp?.[client?.id];
    } else {
      clientsTemp[client?.id] = client;
    }
    setSelectedAdmins(clientsTemp);
  };

  const handleRemoveClient = (id: number) => {
    const clientsTemp = { ...selectedAdmin };
    if (clientsTemp?.[id]) {
      delete clientsTemp?.[id];
      setSelectedAdmins(clientsTemp);
    }
  };

  const handleSubmit = async () => {
    const changes: number[] = Object.keys(selectedAdmin)?.map((id) =>
      Number(id)
    );

    // const res: any = await dispatch(
    //   updateClientsAccountManager({
    //     id: selectedClient?.id,
    //     data: {
    //       add_admin_ids: changes?.filter(
    //         (id: number) => !accountManagers?.includes(id)
    //       ),
    //       remove_admins_ids: accountManagers?.filter(
    //         (id) => !changes?.includes(id)
    //       ),
    //     },
    //   })
    // );

    // if (res?.payload?.success) {
    //   const body = {
    //     tag: `RC_CLIENT_${selectedClient?.id}`,
    //     name: selectedClient?.name,
    //     mambersId: [...changes?.map((id) => `RC_${id}`), `RC_${activeSpoc?.userId}`],
    //     logo: selectedClient?.logo_url,
    //     adminId: `RC_${changes?.[0]}`,
    //   };

      // const result: any = await dispatch(createGroupIfNotExists(body));

      // if (result?.payload?.success) {
      //   toast.success("Changes saved");
      // }
    // } else {
    //   toast.error("Failed to save changes.");
    // }
  };

  return (
    <>
      <div className="spoc-details mt-4">
        <div className="spoc-heading">
          <h3 className="m-0 p-0">Account Managers</h3>
        </div>
        <Divider className="mt-2 mb-3" />

        {
          activeSpoc ? <>
            <StyledComp>
              <div className="vendorCardsParent">
                <div className="container box1">
                  <div className="vendorCardDiv">
                    <div>
                      <div>Available Admins</div>
                      <Form.Control
                        placeholder="Search for admin..."
                        onChange={(e) => {
                          setSearch(e?.target?.value)
                        }}
                        value={search}
                      />
                    </div>

                    {allAdmins?.data?.adminUsers?.map((admin: any, i: number) => {
                      const regex = new RegExp(search, "i");
                      const isPresent = regex.test(`${admin.first_name} ${admin.last_name}`) ||
                        regex.test(admin.email)

                      if (!isPresent) {
                        return <></>
                      }

                      return (
                        <div className="vendorCard1" key={admin?.id}>
                          <input
                            type="checkbox"
                            onChange={() => onChange(admin)}
                            name=""
                            checked={selectedAdmin?.[admin?.id] ? true : false}
                            id={admin?.id ?? i}
                          />
                          <span>
                            {admin?.first_name || ""} {admin?.last_name || ""}
                          </span>
                          <span>{admin?.email}</span>
                        </div>
                      );
                    })}
                    {/* </div> */}
                  </div>
                </div>

                <div className="container">
                  <div className="vendorCardDiv">
                    <div>Selected Admins</div>
                    {Object.values(selectedAdmin)?.map((admin: any) => (
                      <div key={admin?.id} className="vendorCard2">
                        <div className="action-div d-flex justify-content-between align-items-center">
                          <div className="flex">
                            <span className="mr-1">
                              {admin?.first_name || ""} {admin?.last_name || ""}
                            </span>
                            <span>({admin?.email})</span>
                          </div>
                          <MdDelete
                            className="icon text-danger"
                            onClick={() => handleRemoveClient(admin?.id)}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </StyledComp>

            <div className="mt-2 d-flex justify-content-end align-items-center">
              <Button onClick={handleSubmit} className="modalDeleteBtn">
                Save
              </Button>
            </div>
          </> : <>
          <p className="border rounded-sm p-2">No active spoc to add account managers</p>
          </>
        }

      </div>
    </>
  );
};

export default ClientAccountManager;

const StyledComp = styled.div`
  .vendorCardsParent {
    display: flex;
    align-items: flex-start;
    // justify-content: center;
    gap: 20px;
    margin-top: 10px;
  }

  .vendorCardDiv {
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 200px;
  }

  .vendorCard1 {
    display: flex;
    gap: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    padding: 5px;
    border-radius: 5px;
  }

  .container {
    max-height: 350px;
    overflow-y: auto;
  }

  .vendorCard2 {
    font-size: 16px;
    border: 1px solid #ccc;
    padding: 5px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 10px;
  }
`;
