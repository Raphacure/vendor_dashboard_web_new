import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleActionButton from "./GoogleActionButton";

// const googleClientId =
//   "699254002820-04s6pu7ju7hpsfj00p2d4mprr2d82ddn.apps.googleusercontent.com";
const googleClientId =
  "573989854569-lodldcsvju4c1lsco1lp43hp1laq5qi6.apps.googleusercontent.com";

// const googleClientId =
//   "5064197760-huedfh96cnautjk5fkopvciu4qcf3n1e.apps.googleusercontent.com";

// const facebookApiId = "901275766694380";
// import FacebookLogin from 'react-facebook-login';

interface SocialLoginButtonsProps {
  closeModel?: any;
  navigateUserSocial?: any;
  isSignUp?: any;
  showPageLoader?: any;
  role?: any;
}
const SocialLoginButtons: React.FC<SocialLoginButtonsProps> = (props) => {
  const { closeModel, navigateUserSocial, isSignUp, showPageLoader, role } =
    props;

  return (
    <>
      <div className="d-flex">
        <div className="col-6 social-btn1">
          <div id="mySigninButton"></div>

          <GoogleOAuthProvider clientId={googleClientId}>
            <GoogleActionButton
              closeModel={closeModel}
              isSignUp={isSignUp}
              showPageLoader={showPageLoader}
              navigateUserSocial={navigateUserSocial}
              role={role}
            />
          </GoogleOAuthProvider>
        </div>
      </div>
    </>
  );
};

export default SocialLoginButtons;
