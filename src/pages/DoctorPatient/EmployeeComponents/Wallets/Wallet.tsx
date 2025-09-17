import useClientLinkableId from "@/hooks/auth/useClientLinkableId";
import { checkIsMobile, formatStatus } from "@/lib/common";
import {
  getUserWalletDetailsAPI,
  updateUserWalletDetailsAPI,
} from "@/redux/slices/Clients/ClientsService";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { WalletStyled } from "./Wallet.styled";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const Wallet = ({ id }: any) => {
  const dispatch = useDispatch() as any;

  const [walletDetails, setWalletDetails] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState<number>(0);
  const { linkableId: clientUserId } = useClientLinkableId();

  const fetchuserWalletDetailsApi = async (id: number) => {
    if (!id) return;

    try {
      setIsLoading(true);
      const requestBody = {
        clientUsers: {
          id: id,
        },
      };
      const response: any = await dispatch(
        getUserWalletDetailsAPI(requestBody)
      );

      console.log(response, "response");

      if (response?.payload?.success) {
        setWalletDetails(response.payload?.data?.wallets);
      }
    } catch (error) {
      console.error("Error fetching wallet details:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (clientUserId) {
      fetchuserWalletDetailsApi(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientUserId]);

  return (
    <WalletStyled>
      <div className="p-0 sm:p-4">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Wallet Name</th>
                <th>Amount</th>
                <th>Wallet Type</th>
                {walletDetails.some(
                  (wallet: any) => wallet.type === "limits"
                ) && <th>Limits</th>}
                <th>Wallet Used</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={7} className="text-center py-8">
                    <Spin
                      indicator={<LoadingOutlined className="text-4xl" spin />}
                    />
                  </td>
                </tr>
              ) : walletDetails && walletDetails.length > 0 ? (
                walletDetails.map((wallet: any, index: number) => (
                  <tr key={index}>
                    <td>{wallet.name}</td>
                    <td>
                      {wallet?.total_amount
                        ? `₹${wallet?.total_amount}`
                        : wallet?.discount_percentage === 100
                        ? "Unlimited"
                        : `${wallet?.discount_percentage || "0"}%`}
                    </td>
                    <td>{formatStatus(wallet.type)}</td>
                    {walletDetails.some(
                      (wallet: any) => wallet.type === "limits"
                    ) && (
                      <td>{wallet.type === "limits" ? wallet.limits : "-"}</td>
                    )}
                    <td>
                      {!wallet?.amount
                        ? `${wallet.total_limits - wallet.limits} of ${
                            wallet.total_limits
                          } uses utilized`
                        : `₹${
                            wallet?.total_amount - wallet?.amount
                          } spent of ₹${wallet?.total_amount}`}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="text-center py-4 text-gray-500">
                    No wallet details found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </WalletStyled>
  );
};

export default Wallet;
