import React, { FC, useCallback, useState } from "react";
import { Tooltip } from "antd";

interface Props {
  text: string;
  children: React.ReactElement;
}

const CopyButton: FC<Props> = ({ text, children }) => {
  const [noticing, setNoticing] = useState(false);

  const copy = useCallback(() => {
    navigator.clipboard.writeText(text).then(() => {
      setNoticing(true);
      setTimeout(() => setNoticing(false), 2500); // Reset after 2500ms
    });
  }, [text]);

  return (
    <Tooltip visible={noticing} title="Copied!">
      <span onClick={copy}>{children}</span>
    </Tooltip>
  );
};

export default CopyButton;
