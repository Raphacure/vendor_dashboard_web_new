import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Packages from "./Packages";
import { IndexsStyled } from "../ManageTest/Index.styled";
import CategoriesSection from "@/components/CategoriesSection/CategoriesSection";

const ManagePackages = () => {
  const onChange = (key: string) => {
    console.log("Tab changed to:", key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Packages",
      children: <Packages />,
    },
    {
      key: "2",
      label: "Categories",
      children: (
        <IndexsStyled>
          <CategoriesSection section_name="packages" />,
        </IndexsStyled>
      ),
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
};

export default ManagePackages;
