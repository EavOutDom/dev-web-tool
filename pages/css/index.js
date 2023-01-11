import { Button, Col, Divider, Row } from "antd";
import Head from "next/head";
import Link from "next/link";
import data from "../../data/data";
import styles from "./css.module.css";
import { AiFillRightSquare } from 'react-icons/ai';
import ContentLayout from "../../components/contentlayout/ContentLayout";

const CssPage = () => {
  return (<>
    <ContentLayout back='/' name='CSS Generator' browser={null} />
    {data[0].children.map(item1 => (
      <div key={item1.key}>
        <h2 className={styles.parent_txt}>{item1.label}</h2>
        <Row gutter={[24, 24]}>
          {item1.children.map(item2 => (<Col xs={24} md={12} lg={8} key={item2.key}>
            <Link href={data[0].key + '/' + item2.key} legacyBehavior>
              <div className={`${styles.box} justify-between items-center`}>
                <span>{item2.label}</span>
                <AiFillRightSquare size={30} />
              </div>
            </Link>
          </Col>))}
        </Row>
      </div>
    ))}
  </>);
}

export const getServerSideProps = async () => {
  return {
    props: {
      meta_title: 'CSS'
    }
  }
}

export default CssPage;