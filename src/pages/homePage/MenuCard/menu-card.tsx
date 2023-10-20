import React from "react";
import { Card, Space } from "antd";

const MenuCard: React.FC<any> = ({ item }) => (
  <Space direction="vertical" size={16}>
    <Card title={item.name} extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </Space>
);
export default MenuCard;