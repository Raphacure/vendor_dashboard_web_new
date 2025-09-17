import React, { useState, useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { checkSocialUserAPI } from "../../redux/slices/auth/authService";
import { useDispatch } from "react-redux";
import { FaGoogle } from "react-icons/fa6";
function GoogleActionButton(props: any) {
  const { closeModel, navigateUserSocial, isSignUp, showPageLoader, role } =
    props;
  const [user, setUser] = useState([] as any);
  const dispatch = useDispatch() as any;

  const login = useGoogleLogin({
    onSuccess: (codeResponse: any) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });
  useEffect(() => {
    if (user && user?.access_token) {
      closeModel();
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user?.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user?.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then(async (res) => {
          const profile = res.data;
          if (profile?.id) {
            const body = {
              email: profile?.email,
              external_Identifier: profile?.id,
              external_Display_Identifier: "google",
              oAuthToken: user?.access_token,
              // oAuthAccess_Token: "string",
              provider_SystemName: "Google",
              firstName: profile?.given_name,
              lastName: profile?.family_name,
              roleCode: role?.roleCode || "GU",
              profileImage: profile?.picture,
            };
            // closeModel();
            showPageLoader();
            const resp = (await dispatch(checkSocialUserAPI(body))) as any;
            navigateUserSocial(resp?.payload);
            closeModel();
          }
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  return (
    <>
        <div>
          <button className="bg-[rgba(254,241,241,1)] text-white p-3 !rounded-full flex justify-center font-bold" onClick={() => login()}>
            <FaGoogle color="rgba(199, 22, 16, 1)" />
          </button>
        </div>
    </>
  );
}
export default GoogleActionButton;
