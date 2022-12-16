import { Spin } from "antd";
import Router, { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../store/AppContext";

const Loader = ({ children }) => {
  const { appState: { loading } } = useContext(AppContext);
  // const [loading, setLoading] = useState(false);
  console.log(loading)
  const route = useRouter();

  // useEffect(() => {
  //   Router.events.on('routeChangeStart', handleRouteStart);
  //   Router.events.on('routeChangeComplete', handleRouteEnd);
  //   Router.events.on('routeChangeError', handleRouteEnd);
  //   return () => {
  //     Router.events.off('routeChangeStart', handleRouteStart);
  //     Router.events.off('routeChangeComplete', handleRouteEnd);
  //     Router.events.off('routeChangeError', handleRouteEnd);
  //   }
  // }, []);

  // const handleRouteStart = () => {
  //   setLoading(true);
  // };

  // const handleRouteEnd = () => {
  //   setLoading(false);
  // };

  return (<section>
    <Spin size="large" spinning={loading}>
      {children}
    </Spin>
  </section>);
}

export default Loader;