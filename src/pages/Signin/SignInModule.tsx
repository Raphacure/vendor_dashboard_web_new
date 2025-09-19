import React, { useState } from "react";
import { SignInModuleStyled } from "./SignInModule.styled";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { loginUser } from "@/redux/slices/auth/authService";
import toast from "react-hot-toast";
import PrimaryButton from "@/components/custom/button/PrimaryButton";
// import SocialLoginButtons from "@/components/SocialLoginButtons_v2/SocialLoginButtons";

const SignInModulev2 = () => {
  const dispatch = useDispatch() as any;
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    password: "",
    email: "",
  });

  const navigate = useNavigate();

  const checkFieldValidity = (
    name: string,
    value: string,
    changeErrorState: boolean = false
  ) => {
    let error = "";
    switch (name) {
      case "email": {
        if (!value) {
          error = "Email is required.";
        } else if (!/^[\w.+-]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
          error = "Please enter a valid Email.";
        } else {
          error = "";
        }
        break;
      }
      case "password": {
        if (!value) {
          error = "Password is required";
        } else if (value.length < 8) {
          error = "Password must be at least 8 characters long.";
        } else {
          error = "";
        }
        break;
      }
    }
    if (changeErrorState) {
      setErrors((pre) => ({
        ...pre,
        [name]: error,
      }));
    }
    return error;
  };

  const handleloginCredentialsChange = (name: string, value: string) => {
    setLoginCredentials((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
    checkFieldValidity(name, value, true);
  };

  const handleSubmitValidation = () => {
    const errors = {
      email: "",
      password: "",
    };
    for (const key in loginCredentials) {
      if (key === "email" || key === "password") {
        const error = checkFieldValidity(
          key,
          loginCredentials[key as keyof typeof loginCredentials]
        );
        if (error) {
          errors[key as keyof typeof errors] = error;
        }
      }
    }
    setErrors(errors);
    return (
      Object.values(errors).filter((error) => {
        if (error) {
          console.log("error");
          toast.error(error);
        }
        return error !== "";
      }).length === 0
    );
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValid = handleSubmitValidation();

    if (!isValid) {
      return;
    }

    const body = {
      email: loginCredentials.email,
      password: loginCredentials.password,
      role: "vendor",
    };
    try {
      setIsLoading(true);
      const result = await dispatch(loginUser(body));
      if (result?.error) {
        toast.error(result?.error?.message || "unknown error occured");
      } else {
        toast.success("login successfull");
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error("unknown error occured");
    } finally {
      setIsLoading(false);
    }
  };

  const isButtonDisabled =
    loginCredentials.email.trim() === "" ||
    loginCredentials.password.trim() === "";

  return (
    <SignInModuleStyled>
      <div className="flex justify-center h-full w-full">
        <div className="background-container-new h-full p-1 flex justify-center items-center">
          <div className="bg-white lg:h-[540px] !p-8 rounded-xl shadow-lg grid grid-cols-1 min-[950px]:grid-cols-2 gap-[40px]">
            <div className="relative">
              <img
                className="opacity-0 min-[950px]:!hidden max-[950px]:w-[calc(100%+130px)] min-[950px]:translate-y-[-50%] min-[950px]:top-[50%] min-[950px]:!h-[calc(100%+130px)]"
                src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1751004257818.png"
                alt="hr-photo"
              />
              <img
                className="absolute max-[950px]:left-[50%] max-[950px]:translate-x-[-50%] max-[950px]:!w-[calc(100%+0px)] min-[950px]:translate-y-[-50%] min-[950px]:top-[50%] min-[950px]:!h-[calc(100%+130px)]"
                src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1751004257818.png"
                alt="hr-photo"
              />
            </div>
            <div className="max-w-[485px] bg-[url('https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1751008367988.png')] bg-cover bg-center bg-no-repeat">
              <h1 className="!text-[28px] !font-bold !text-[#252B61] mb-4">
                Invest in Wellness. Unlock Potential
              </h1>

              <p className="text-black mb-8 text-sm">
                A smart platform designed for corporate HR teams to manage
                employee health, wellness programs, and clinic services
              </p>
              <>
                <div className="mb-6">
                  <Form.Group className="w-full">
                    <Form.Label
                      htmlFor="email"
                      className={`flex-1  ${"text-indigo-900 font-medium mb-1 "}`}
                    >
                      Email
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      className="w-full py-3 px-4 border rounded-md"
                      value={loginCredentials.email}
                      onChange={(e) => {
                        handleloginCredentialsChange("email", e.target.value);
                      }}
                      id="email"
                      name="email"
                      autoComplete="email"
                      required
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </Form.Group>
                </div>
              </>
              <>
                <div className="mb-6">
                  <Form.Group className="w-full">
                    <Form.Label
                      htmlFor="password"
                      className={`flex-1  ${"text-indigo-900 font-medium mb-1 "}`}
                    >
                      Password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      className="w-full py-3 px-4 border rounded-md"
                      value={loginCredentials.password}
                      onChange={(e) => {
                        handleloginCredentialsChange(
                          "password",
                          e.target.value
                        );
                      }}
                      id="password"
                      name="password"
                      autoComplete="current-password"
                      required
                    />
                    {errors.password && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.password}
                      </p>
                    )}
                  </Form.Group>
                </div>
              </>
              <div className="mt-4">
                <PrimaryButton
                  isLoading={isLoading}
                  onClick={(e: any) => handleSubmit(e)}
                  className={`w-full py-2 bg-indigo-900 text-white !rounded-3xl font-medium ${
                    isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={isButtonDisabled}
                >
                  Login
                </PrimaryButton>
              </div>

              <div className="mt-4">
                <p className="text-center text-sm text-gray-500 mb-4">
                  By continuing you agree to our
                  <br />{" "}
                  <a
                    href="https://raphacure.com/terms"
                    target="_blank"
                    className="text-black font-medium !no-underline"
                  >
                    Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://raphacure.com/privacy-policy"
                    target="_blank"
                    className="text-black font-medium !no-underline"
                  >
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SignInModuleStyled>
  );
};

export default SignInModulev2;
