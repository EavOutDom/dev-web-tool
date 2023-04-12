import { Spin } from "antd";
import Router from "next/router";
import { useContext, useEffect } from "react";
import { AppContext } from '../../context/AppContext';

const Loader = ({ children }) => {
  const { appState: { loading, dark }, appDispatch } = useContext(AppContext);
  useEffect(() => {
    Router.events.on('routeChangeStart', handleRouteStart);
    Router.events.on('routeChangeComplete', handleRouteEnd);
    Router.events.on('routeChangeError', handleRouteEnd);
    return () => {
      Router.events.off('routeChangeStart', handleRouteStart);
      Router.events.off('routeChangeComplete', handleRouteEnd);
      Router.events.off('routeChangeError', handleRouteEnd);
    }
  }, []);

  const handleRouteStart = () => {
    appDispatch({ type: 'SET_LOADING', payload: true });
    appDispatch({ type: 'SET_DARK', payload: true });
  };

  const handleRouteEnd = () => {
    appDispatch({ type: 'SET_LOADING', payload: false });
  };

  return (<section>
    <Spin size="large" spinning={loading}>
      {children}
    </Spin>
  </section>);
}

export default Loader;