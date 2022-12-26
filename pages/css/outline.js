import { Button, Card, Divider, Select, Slider } from "antd";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import { useRef, useState } from "react";
import ColorPicker from "../../components/colorPicker/ColorPicker";
import { FaCopy } from "react-icons/fa";
import { useCopy } from "../../lib/useCopy";

const Outline = () => {
  const ref = useRef();
  const [copy, setCopy] = useCopy('');
  const [outline, setOutline] = useState({
    color: '#000000',
    style: 'solid',
    width: 10,
    offset: 0
  });
  return (<section>
    <ContentLayout back='css' name='Outline' browser={{ chrome: 'yes', edge: 'yes', firefox: 'yes', opera: 'yes', safari: 'partial support' }}>
      <ContentLayout.Paragraph>
        <p>
          {`The outline CSS shorthand property sets most of the outline properties in a single declaration.`}
        </p>
      </ContentLayout.Paragraph>
      <ContentLayout.Options>
        <div>
          <p className="content_title">Options</p>
          <Card>
            <label htmlFor="color">Color</label>
            <div id="color" className="justify-between items-center" >
              <ColorPicker colorInput width={120} color={outline.color} onChange={e => setOutline(p => ({ ...p, color: e }))} />
              <span>{outline.color}</span>
            </div>
            <Divider dashed />
            <label htmlFor="style">Style</label>
            <Select style={{ width: '100%' }} id='style' value={outline.style} onChange={e => setOutline(p => ({ ...p, style: e }))}>
              <Select.Option value='solid'>solid</Select.Option>
              <Select.Option value='dotted'>dotted</Select.Option>
              <Select.Option value='dashed'>dashed</Select.Option>
              <Select.Option value='double'>double</Select.Option>
              <Select.Option value='groove'>groove</Select.Option>
              <Select.Option value='ridge'>ridge</Select.Option>
            </Select>
            <Divider />
            <label htmlFor="width">Width {outline.width}px</label>
            <Slider id="width" min={1} max={30} value={outline.width} onChange={e => setOutline(p => ({ ...p, width: e }))} />
            <label htmlFor="offset">Offset {outline.offset}px</label>
            <Slider id="offset" value={outline.offset} onChange={e => setOutline(p => ({ ...p, offset: e }))} />
          </Card>
        </div>
      </ContentLayout.Options>
      <ContentLayout.Preview>
        <div>
          <p className="content_title">Preview</p>
          <Card>
            <div
              style={{
                height: 200,
                width: '100%',
                background: '#a0a0a0',
                outlineColor: outline.color,
                outlineOffset: outline.offset,
                outlineStyle: outline.style,
                outlineWidth: outline.width,
              }}
            />
          </Card>
        </div>
        <div>
          <p className="content_title">Code</p>
          <Card>
            <div className="justify-between items-center">
              <code ref={ref}>
                outline: {outline.width + 'px ' + outline.style + ' ' + outline.color}{'\n'}
                {outline.offset > 0 && 'outline-offset: ' + outline.offset + 'px'}
              </code>
              <Button onClick={() => setCopy(ref)} icon={<FaCopy />} />
            </div>
          </Card>
        </div>
      </ContentLayout.Preview>
    </ContentLayout>
  </section>);
}

export default Outline;