import { Button } from 'antd';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const PageNotFound = () => {
  return (<div className={styles.content_container}>
    <span>
      <h1 style={{ fontSize: 100, marginBottom: 0 }}>404</h1>
      <p style={{ fontSize: 30, margin: 0 }}>Well shucks...</p>
      <p style={{ fontSize: 20 }}>This does not seem to exist.</p>
      <Link href='/' legacyBehavior>
        <Button>Go to the home page</Button>
      </Link>
    </span>
  </div>);
}

export default PageNotFound;