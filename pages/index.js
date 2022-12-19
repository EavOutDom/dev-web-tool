import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { Card, Col, Divider, Row } from 'antd'

export default function Home() {
  return (
    <div style={{ minHeight: 'calc(100vh - 288px)' }}>
      <Head>
        <title>Dev Web tool</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>The best free tools code generator for speed up development</h1>
      <p>The only code generator you need for your next project. </p>
      <Divider />
      <div className="site-card-wrapper">
        <Row gutter={[24, 24]}>
          <Col sm={24} md={12} lg={8}>
            <Card title="CSS Generator" bordered={false} extra={<Link href='/css'>Try it now</Link>}>
              Generate the commonly used and required CSS for your application. Preview the live results before copying to your project.
            </Card>
          </Col>
          <Col sm={24} md={12} lg={8}>
            <Card title="HTML Generator" bordered={false} extra={<Link href='/html'>Try it now</Link>}>
              Generate the most useful HTML elements for your application. Preview the live results before copying to your project.
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}
