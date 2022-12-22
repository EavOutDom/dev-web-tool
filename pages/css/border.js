import { Button, Card, Divider, Select, Slider, Tooltip } from "antd";
import ContentLayout from "../../components/contentLayout/ContentLayout";
import { useRef, useState } from "react";
import ColorPicker from "../../components/colorPicker/ColorPicker";
import { FaCopy } from "react-icons/fa";
import { useCopy } from "../../lib/useCopy";

const Border = () => {
  const [copyText, setCopy] = useCopy();
  const borderRef = useRef('');
  const [state, setState] = useState({
    border_width: 1,
    border_style: "solid",
    border_color: '#000000',
    background_color: '#a0a0a0'
  });

  return (<section>
    <ContentLayout back='/css' name='Border' browser={{ chrome: 'yes', edge: 'yes', firefox: 'yes', opera: 'yes', safari: 'yes' }}>
      <ContentLayout.Options>
        <div>
          <p className="content_title">Options</p>
          <Card>
            <label htmlFor="width">Border width {state.border_width + 'px'}</label>
            <Slider id="width" value={state.border_width} min={1} max={50} onChange={v => setState(pre => ({ ...pre, border_width: v }))} />
            <Divider dashed />
            <label htmlFor="style">Border style</label>
            <Select style={{ width: '100%' }} id="style" value={state.border_style} onChange={v => setState(pre => ({ ...pre, border_style: v }))}>
              <Select.Option value='solid'>solid</Select.Option>
              <Select.Option value='dashed'>dashed</Select.Option>
              <Select.Option value='dotted'>dotted</Select.Option>
              <Select.Option value='double'>double</Select.Option>
              <Select.Option value='ridge'>ridge</Select.Option>
              <Select.Option value='inset'>inset</Select.Option>
              <Select.Option value='outset'>outset</Select.Option>
              <Select.Option value='none'>none</Select.Option>
              <Select.Option value='hidden'>hidden</Select.Option>
            </Select>
            <Divider dashed />
            <label htmlFor="color">Border color</label>
            <div id="color" className="items-center justify-between" style={{ gap: 10, width: '100%' }}>
              <ColorPicker colorInput width={120} color={state.border_color} onChange={e => setState(p => ({ ...p, border_color: e }))} />
              <span>{state.border_color}</span>
            </div>
            <Divider dashed />
            <label htmlFor="color">Background</label>
            <div id="color" className="items-center justify-between" style={{ gap: 10, width: '100%' }}>
              <ColorPicker colorInput width={120} color={state.background_color} onChange={e => setState(p => ({ ...p, background_color: e }))} />
              <span>{state.background_color}</span>
            </div>
          </Card>
        </div>
      </ContentLayout.Options>
      <ContentLayout.Options>
        <div>
          <p className="content_title">Preview</p>
          <Card>
            <div style={{
              height: 200,
              width: '100%',
              background: state.background_color,
              borderWidth: state.border_width,
              borderStyle: state.border_style,
              borderColor: state.border_color
            }} />
          </Card>
        </div>
        <div>
          <p className="content_title">Code</p>
          <Card>
            <div className="justify-between items-center">
              <code ref={borderRef}>
                border: {state.border_width + 'px ' + state.border_style + ' ' + state.border_color};
              </code>
              <Button onClick={() => setCopy(borderRef)} icon={<FaCopy />}></Button>
            </div>
          </Card>
        </div>
      </ContentLayout.Options>
    </ContentLayout>
  </section>);
}

export default Border;