import { Col, Divider, Row, Tooltip } from "antd";
import Link from "next/link";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { FaChrome, FaEdge, FaFirefox, FaOpera, FaSafari } from 'react-icons/fa';
import styles from './ContentLayout.module.css'

const ContentLayout = ({ name, back, browser }) => {
  return (<>
    <section>
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
    </section>
    <Divider />
  </>);
}

export default ContentLayout;