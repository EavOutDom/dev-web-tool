import { Segmented, Tabs } from "antd";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import { useState } from "react";

const KeyframeAnimation = () => {
  const [state, setState] = useState({
    tabs: 'attention',
    segmented_1: 'Blink',
    segmented_2: 'Variation 1'
  });

  const childTabs = (key) => {
    switch (key) {
      case 'attention':
        return <SegmentedTabs state={state} setState={setState} option1={['Blink', 'Bound', 'Jello']} option2={['Variation 1', 'Variation 2']} />
      case 'background':
        return <Segmented options={['Test 2']} />
      case 'basic':
        return <Segmented options={['Test 3']} />
      case 'entrance':
        return <Segmented options={['Test 4']} />
      case 'exit':
        return <Segmented options={['Test 5']} />
    }
  };

  return (<section>
    <ContentLayout name='Animations CSS Generator' back='/css' browser={{ chrome: 'yes', firefox: 'yes', safari: 'yes', edge: 'yes', opera: 'yes' }} />
    <>
      <Tabs
        defaultActiveKey="attention"
        onChange={(e) => setState(pre => ({ ...pre, tabs: e }))}
        size='large'
        items={[
          {
            label: `Attention`,
            key: 'attention',
            children: childTabs('attention')
          },
          {
            label: `Background`,
            key: 'background',
            children: childTabs('background')
          },
          {
            label: `Basic`,
            key: 'basic',
            children: childTabs('basic')
          },
          {
            label: `Entrance`,
            key: 'entrance',
            children: childTabs('entrance')
          },
          {
            label: `Exit`,
            key: 'exit',
            children: childTabs('exit')
          },
        ]}
      />
    </>
  </section>);
}

const SegmentedTabs = ({ state, setState, option1, option2 }) => {
  return <>
    <Segmented defaultValue={state.segmented_1} options={option1} onChange={e => setState(pre => ({ ...pre, segmented_1: e }))} />
    <br />
    <Segmented style={{ marginTop: 10 }} defaultValue={state.segmented_2} options={option2} onChange={e => setState(pre => ({ ...pre, segmented_2: e }))} />
  </>
};

export default KeyframeAnimation;