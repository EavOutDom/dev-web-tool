import { Breadcrumb, Col, Drawer, Layout, Menu, Row } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import styles from './Layout.module.css';
import { MenuOutlined } from '@ant-design/icons'
import { useRouter } from "next/router";
import PageNotFound from "../../pages/404";
import data from "../../data/data";

const LayoutContainer = ({ children, pageNotFound = false }) => {
  const router = useRouter();
  const [isToggled, setToggled] = useState(false);
  const onClose = () => {
    setToggled(false);
  };

  const path = router.asPath.split("/").filter(v => v.length > 0);;
  const crumbList = path.map((subpath, idx) => {
    const href = "/" + path.slice(0, idx + 1).join("/");
    const title = subpath;
    return { href, title };
  });

  return (<Layout style={{ minHeight: '100vh' }}>

    {/* drawer for mobile  */}
    <Drawer
      title="Dev Web Tool"
      placement='left'
      onClose={onClose}
      open={isToggled}
      width='65%'
      bodyStyle={{ padding: 0 }}
    >
      <MenuLayout setToggled={setToggled} />
    </Drawer>

    {/* sider for desktop*/}
    <Layout.Sider
      className="hideOnMobile"
      theme="light"
      width={250}
    >
      <Link href='/' legacyBehavior>
        <div align='middle' className={styles.siderHeader}>Dev Web Tool</div>
      </Link>
      <MenuLayout setToggled={setToggled} />
    </Layout.Sider>

    {/* layout  */}
    <Layout className="site-layout">

      {/* header  */}
      <Layout.Header

        style={{ padding: '0px 24px', backgroundColor: '#fff' }}
      >
        {/* Desktop  */}
        <div className='justify-between items-center'>
          <Breadcrumb
            style={{
              backgroundColor: 'transparent !important'
            }}
            className='hideOnMobile'
          >
            <Breadcrumb.Item>
              <Link href='/' legacyBehavior>
                home
              </Link>
            </Breadcrumb.Item>
            {!pageNotFound && crumbList.map((item, idx) => (
              <Breadcrumb.Item key={idx}>
                <Link href={item.href}>{item.title}</Link>
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
          <div align='right' className="hideOnMobile">
            Dark mode
          </div>
        </div>
        <div className="hideOnDesktop">
          <div className="justify-between items-center">
            <span onClick={() => setToggled(true)} style={{ cursor: 'pointer' }}><MenuOutlined /></span>
            <Link href='/' legacyBehavior>
              <span className={styles.header_layout}>Dev Web Tool</span>
            </Link>
            <span>Dark mode</span>
          </div>
        </div>
      </Layout.Header>

      {/* mobile */}
      <Breadcrumb
        style={{
          margin: '16px 24px -8px',
        }}
        className='hideOnDesktop'
      >
        <Breadcrumb.Item>
          <Link href='/' legacyBehavior>
            home
          </Link>
        </Breadcrumb.Item>
        {crumbList.map((item, idx) => (
          <Breadcrumb.Item key={idx}>
            <Link href={item.href}>{item.title}</Link>
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
      <Layout.Content
        style={{
          margin: '24px 16px',
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: 360,
            background: '#fff',
          }}
        >
          {pageNotFound ? <PageNotFound /> : children}
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

const MenuLayout = (props) => {
  const router = useRouter();
  const { tool } = router.query;
  const asPathWithoutQuery = router.asPath.split('/')[1];
  const [openKeys, setOpenKeys] = useState([asPathWithoutQuery]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (['css', 'html'].indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  function getItem(label, key, children, type) {
    return {
      key,
      children,
      label,
      type,
    };
  };

  const onClick = (e) => {
    props.setToggled(false);
    router.push(`/${e.keyPath[1]}/${e.keyPath[0]}`);
  };

  return <Menu
    onClick={onClick}
    style={{
      width: '100%',
    }}
    className='scroll_height'
    selectedKeys={[tool]}
    openKeys={openKeys}
    onOpenChange={onOpenChange}
    mode="inline"
    items={data}
  />
};
export default LayoutContainer;
