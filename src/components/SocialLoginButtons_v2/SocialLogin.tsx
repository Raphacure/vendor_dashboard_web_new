import React from "react";
import SocialLogin from "react-social-login";

class SocialButton extends React.Component {
  render() {
    // @ts-expect-error TS2322: Type '{}' is not assignable to type 'IntrinsicAttributes & SocialLoginProps'.
    const { children, triggerLogin, className, ...props } = this.props;
    return (
      <button
        onClick={triggerLogin}
        {...props}
        className={`common-btn sprite ${className}`}
      >
        <span className="btn--text">{children}g</span>
      </button>
    );
  }
}

export default SocialLogin(SocialButton);
