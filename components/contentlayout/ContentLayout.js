import { Col, Divider, Row, Tooltip } from "antd";
import Link from "next/link";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { FaChrome, FaEdge, FaFirefox, FaOpera, FaSafari } from 'react-icons/fa';
import styles from './ContentLayout.module.css'

const ContentLayout = ({ children, name, back, browser = { safari: '', firefox: '', chrome: '', edge: '', opera: '' } }) => {
  if (children) {
    var [{ props: Options }, { props: Preview }] = children;
  }
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
    {children && <Row gutter={[48, 24]}>
      <Col xs={24} lg={10}>
        <div>
          {Options.children}
        </div>
      </Col>
      <Col xs={24} lg={14} >
        <div>
          {Preview.children}
        </div>
      </Col>
    </Row>}
  </main>
  );
}

const Options = (children) => (children);
ContentLayout.Options = Options;

const Preview = (children) => (children);
ContentLayout.Preview = Preview;

export default ContentLayout;