import { Button, Card, Divider, Select, Slider } from "antd";
import ContentLayout from "../../components/contentLayout/ContentLayout";
import { useRef, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { useCopy } from "../../lib/useCopy";

const BorderRadius = () => {
  const [copyText, setCopy] = useCopy();
  const ref = useRef('');
  const [state, setState] = useState({
    type: 0,
    radius: 10,
    tl: 10,
    tr: 10,
    bl: 10,
    br: 10
  });

  let styleBorder = {};
  if (state.type === 0) {
    styleBorder = {
      height: 200,
      width: '90%',
      borderRadius: state.radius,
      backgroundColor: '#a0a0a0'
    };
  } else {
    styleBorder = {
      height: 200,
      width: '90%',
      backgroundColor: '#a0a0a0',
      borderTopLeftRadius: state.tl,
      borderTopRightRadius: state.tr,
      borderBottomLeftRadius: state.bl,
      borderBottomRightRadius: state.br
    }
  }

  return (<section>
    <ContentLayout back={'/css'} name='Border Radius' browser={{ chrome: 'yes', edge: 'yes', firefox: 'yes', opera: 'yes', safari: 'yes' }}>
      <ContentLayout.Paragraph>
        <p>
          {`The border-radius CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.`}
        </p>
      </ContentLayout.Paragraph>
      <ContentLayout.Options>
        <div>
          <p className="content_title">Options</p>
          <Card>
            <label htmlFor="type">Type</label>
            <Select style={{ width: '100%' }} id="type" value={state.type} onChange={e => setState(p => ({ ...p, type: e }))}>
              <Select.Option value={0}>Same on all sides</Select.Option>
              <Select.Option value={1}>Different on all sides</Select.Option>
            </Select>
            {state.type === 0 ? <>
              <Divider dashed />
              <label htmlFor="radius">Border Radius {state.radius}px</label>
              <Slider id="radius" value={state.radius} onChange={v => setState(pre => ({ ...pre, radius: v }))} />
            </> : <>
              <Divider dashed />
              <label htmlFor="tl">Top-Left {state.tl}px</label>
              <Slider id="tl" value={state.tl} onChange={v => setState(pre => ({ ...pre, tl: v }))} />
              <Divider dashed />
              <label htmlFor="tr">Top-Right {state.tr}px</label>
              <Slider id="tr" value={state.tr} onChange={v => setState(pre => ({ ...pre, tr: v }))} />
              <Divider dashed />
              <label htmlFor="bl">Bottom-Left {state.bl}px</label>
              <Slider id="bl" value={state.bl} onChange={v => setState(pre => ({ ...pre, bl: v }))} />
              <Divider dashed />
              <label htmlFor="br">Bottom-Right {state.br}px</label>
              <Slider id="br" value={state.br} onChange={v => setState(pre => ({ ...pre, br: v }))} />
            </>}
          </Card>
        </div>
      </ContentLayout.Options>
      <ContentLayout.Preview>
        <div>
          <p className="content_title">Preview</p>
          <Card>
            <div style={styleBorder} />
          </Card>
        </div>
        <div>
          <p className="content_title">Code</p>
          <Card>
            <div className="justify-between items-center">
              <code ref={ref}>
                border-radius: {state.type === 0 ? state.radius + 'px' : state.tl + 'px ' + state.tr + 'px ' + state.br + 'px ' + state.bl + 'px'};
              </code>
              <Button onClick={() => setCopy(ref)} icon={<FaCopy />}></Button>
            </div>
          </Card>
        </div>
      </ContentLayout.Preview>
    </ContentLayout>
  </section>);
};

export default BorderRadius;