import { Card, Divider, Select, Slider } from "antd";
import ContentLayout from "../../components/contentLayout/ContentLayout";
import { useState } from "react";

const BorderRadius = () => {
  const [state, setState] = useState({
    type: 0,
    radius: 0
  });
  return (<section>
    <ContentLayout back={'/css'} name='Border Radius' browser={{ chrome: 'yes', edge: 'yes', firefox: 'yes', opera: 'yes', safari: 'yes' }}>
      <ContentLayout.Options>
        <div>
          <p className="content_title">Options</p>
          <Card>
            <label htmlFor="type">Type</label>
            <Select style={{ width: '100%' }} id="type" value={state.type} onChange={e => setState(p => ({ ...p, type: e }))}>
              <Select.Option value={0}>Same on all sides</Select.Option>
              <Select.Option value={1}>Different on all sides</Select.Option>
            </Select>
            <Divider />
            <label htmlFor="radius">Border Radius {state.radius}</label>
            <Slider id="radius" value={state.radius} onChange={v => setState(pre => ({ ...pre, radius: v }))} />
          </Card>
        </div>
      </ContentLayout.Options>
      <ContentLayout.Preview>
        <div>
          <p className="content_title">Preview</p>
          <Card>
            <div style={{
              height: 200,
              width: '90%',
              borderRadius: state.radius,
              backgroundColor: '#a0a0a0'
            }} />
          </Card>
        </div>
      </ContentLayout.Preview>
    </ContentLayout>
  </section>);
}

export default BorderRadius;