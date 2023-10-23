import React, { useContext, useState } from "react";
import ContextData from "../../context/data.jsx";
import { Button, Menu } from "antd";
import { ItemType, MenuItemType } from "antd/es/menu/hooks/useItems.js";
import { redirect, useNavigate } from "react-router-dom";
import { getRouterPath } from "../../router/route-service.tsx";
import { LeftOutlined } from "@ant-design/icons";
import "./side-menu.scss";
const SideMenu: React.FC<any> = ({ isOPen }) => {
  let data: ItemType<MenuItemType>[] = useContext(ContextData)["menuData"];
  let cur = setCurrentKey(data)
  const navigate = useNavigate();
  const [current, setCurrent] = useState(cur);

  return (
    <div>
      <div className="side-menu">
        <div>
          <Button
            type="primary"
            block
            icon={<LeftOutlined />}
            onClick={(e) => {
              navigate("/");
            }}
          >
            {!isOPen ? "返回" : ""}
          </Button>
        </div>
      </div>

      <Menu
        theme="light"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        selectedKeys={[current]}
        items={data}
        onClick={(item) => {
          setCurrent(item['key']);
          navigate(getRouterPath("SideLayout") + getRouterPath(item.key));
        }}
      />
    </div>
  );
};
export default SideMenu;
const setCurrentKey = (data)=>{
  const url = window.location.pathname;
  for (const key in data) {
    if (url === '/side-layout'+ getRouterPath(data[key].key)) {
      return data[key].key
    }
  }
}
