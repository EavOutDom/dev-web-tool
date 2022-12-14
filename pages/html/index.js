import Head from "next/head";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import { Col, Row } from "antd";
import Link from "next/link";
import { AiFillRightSquare } from "react-icons/ai";
import data from "../../data/data";
import styles from './html.module.css';

export const getServerSideProps = () => {
  return {
    props: {
      meta_title: 'HTMl'
    }
  }
};

const HTMLPage = () => {
  return (<>
    <Head>
      <title>CSS | Dev Web Tool</title>
    </Head>
    <ContentLayout back='/' name='HTML Generator' browser={null} />
    {data[1].children.map(item1 => (
      <div key={item1.key}>
        <h2 className={styles.parent_txt}>{item1.label}</h2>
        <Row gutter={[24, 24]}>
          {item1.children.map(item2 => (<Col xs={24} md={12} lg={8} key={item2.key}>
            <Link href={data[1].key + '/' + item2.key} legacyBehavior>
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

export default HTMLPage;