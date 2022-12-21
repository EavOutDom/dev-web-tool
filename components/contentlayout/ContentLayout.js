import { Col, Divider, Row, Tooltip } from "antd";
import Link from "next/link";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { FaChrome, FaEdge, FaFirefox, FaOpera, FaSafari } from 'react-icons/fa';
import styles from './ContentLayout.module.css'

const ContentLayout = ({ children, name, back, browser = { safari: '', firefox: '', chrome: '', edge: '', opera: '' } }) => {
  const [{ props: Options }, { props: Preview }] = children;
  return (<main>
    <Link href={back}>
      <BsFillArrowLeftSquareFill size={35} />
    </Link>
    <h1>{name}</h1>
    {browser && <div className={styles.browser}>
      <Tooltip placement="bottom" title={'chrome: ' + browser.chrome}>
        <FaChrome />
      </Tooltip>
      <Tooltip placement="bottom" title={'edge: ' + browser.edge}>
        <FaEdge />
      </Tooltip>
      <Tooltip placement="bottom" title={'firefox: ' + browser.firefox}>
        <FaFirefox />
      </Tooltip>
      <Tooltip placement="bottom" title={'opera: ' + browser.opera}>
        <FaOpera />
      </Tooltip>
      <Tooltip placement="bottom" title={'safari: ' + browser.safari}>
        <FaSafari />
      </Tooltip>
    </div>}
    <Divider />
    <Row gutter={[24, 24]}>
      <Col xs={24} md={12}>{Options.children}</Col>
      <Col xs={24} md={12}>{Preview.children}</Col>
    </Row>
  </main>
  );
}

const Options = (children) => (children);
ContentLayout.Options = Options;

const Preview = (children) => (children);
ContentLayout.Preview = Preview;

export default ContentLayout;