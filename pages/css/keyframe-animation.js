import ContentLayout from "../../components/contentlayout/ContentLayout";

const KeyframeAnimation = () => {
  const browser = {
    chrome: 'yes',
    firefox: 'yes',
    safari: 'yes',
    edge: 'yes',
    opera: 'yes',
  };
  return (<section>
    <ContentLayout name='Animations CSS Generator' back='/css' browser={browser} />
  </section>);
}

export default KeyframeAnimation;