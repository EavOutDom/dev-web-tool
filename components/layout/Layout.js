import { Layout, Menu } from "antd";
import Link from "next/link";

const LayoutContainer = ({ children }) => {
  return (<Layout>
    <Layout.Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['4']}

      />
    </Layout.Sider>
    <Layout>
      <Layout.Header
        style={{
          padding: 0,
          background: '#fff'
        }}
      />
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