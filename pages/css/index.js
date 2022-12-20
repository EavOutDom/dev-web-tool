import { Button, Col, Divider, Row } from "antd";
import Head from "next/head";
import Link from "next/link";
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import data from "../../data/data";
import styles from "./css.module.css";
import { AiFillRightSquare } from 'react-icons/ai';

const CssPage = () => {
  return (<>
    <Head>
      <title>CSS | Dev Web Tool</title>
    </Head>
    <section>
      <Link href='/'>
        <BsFillArrowLeftSquareFill size={35} />
      </Link>
      <h1>CSS Generator</h1>
      <Divider />
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
    </section>
  </>);
}

export default CssPage;