import React from "react";
import { Link } from "react-router-dom";
import { Menu, Button} from "antd";


const Navigation = () => {
  return (
    <>
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ lineHeight: "64px", backgroundColor: "#fff", display:"flex", justifyContent:"space-between" }}
      >
          <Menu.Item key="1" style={{ color: "#fff" }}>
          <Link to="/"> <img src="https://img.icons8.com/ios/50/000000/electric-bike.png" alt="ebike icon"/></Link>
        </Menu.Item>
        
        <Menu.Item key="2">
          <Link to="/our-bikes">OUR EBIKES</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/gallery">ROUTES</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/about">ABOUT</Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/contact">
            <Button>
            BOOK eBIKE
            </Button>
            </Link>
        </Menu.Item>
        
      </Menu>
    </>
  );
};

export default Navigation;

