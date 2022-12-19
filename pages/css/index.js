import { Button } from "antd";
import Link from "next/link";
import { BsFillArrowLeftSquareFill } from 'react-icons/bs'

const CssPage = () => {
  return (<section>
    <Link href='/'>
      <BsFillArrowLeftSquareFill size={35} />
    </Link>
    <h1>CSS Generator</h1>
    
  </section>);
}

export default CssPage;