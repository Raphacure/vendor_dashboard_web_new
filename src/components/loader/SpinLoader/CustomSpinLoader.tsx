import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import type { SpinProps } from "antd";

const CustomSpinLoader = (props: SpinProps) => {
  return (
    <Spin {...props} indicator={<LoadingOutlined spin />}>
      {props.children}
    </Spin>
  );
};

export default CustomSpinLoader;
