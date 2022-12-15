import { Col, Drawer, Layout, Menu, Row } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import styles from './Layout.module.css';
import { MenuOutlined } from '@ant-design/icons'

const LayoutContainer = ({ children }) => {
  const [isToggled, setToggled] = useState(false);
  const onToggle = () => setToggled(!isToggled);
  const onClose = () => {
    setToggled(false);
  };

  return (<Layout>

    {/* drawer for mobile  */}
    <Drawer
      title="Dev Web Tool"
      placement='left'
      onClose={onClose}
      open={isToggled}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>

    {/* sider for desktop*/}
    <Layout.Sider
      className="hideOnMobile"
      width={250}
    >
      <div align='middle' className={styles.siderHeader}>Dev Web Tool</div>

    </Layout.Sider>

    {/* layout  */}
    <Layout className="site-layout">

      {/* header  */}
      <Layout.Header
        className="site-layout-background"
        style={{ padding: '0px 24px', backgroundColor: '#fff' }}
      >
        <div align='right' className="hideOnMobile">
          Dark mode
        </div>
        <div className="hideOnDesktop">
          <div className="justify-between items-center">
            <MenuOutlined />
            <span className={styles.header_layout}>Dev Web Tool</span>
            <span>Dark mode</span>
          </div>
        </div>
      </Layout.Header>
      <Layout.Content
        style={{
          margin: '24px 16px 0',
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: 360,
            background: '#ffF',
          }}
        >
          {children}
        </div>
      </Layout.Content>
      <Layout.Footer
        style={{
          textAlign: 'center',
        }}
      >
        <p>Dev Web Tool ©2022 Created by <Link href={'https://github.com/EavOutDom'} target='_blank'>
          <strong style={{ color: '#0070f3' }}>Eav Outdom</strong>
        </Link>
        </p>
      </Layout.Footer>
    </Layout>
  </Layout>);
}

export default LayoutContainer;