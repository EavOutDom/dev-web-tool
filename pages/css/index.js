import { Button } from "antd";
import Head from "next/head";
import Link from "next/link";
import { BsFillArrowLeftSquareFill } from 'react-icons/bs'

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
    </section>
  </>);
}

export default CssPage;