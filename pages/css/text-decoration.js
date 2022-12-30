import { Button, Card, Divider, Select, Slider } from "antd";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import { useRef, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { useCopy } from "../../lib/useCopy";
import ColorPicker from "../../components/colorPicker/ColorPicker";

const TextDecoration = () => {
  const [state, setState] = useState({
    line: 'underline',
    style: 'solid',
    color: '#000000'
  });
  const [copy, setCopy] = useCopy();
  const ref = useRef();

  return (<section>
    <ContentLayout name='Text Decoration' back="/css" >
      <ContentLayout.Paragraph>
        <p>
          {`The text-decoration shorthand CSS property sets the appearance of decorative lines on text. It is a shorthand for text-decoration-line, text-decoration-color, text-decoration-style, and the newer text-decoration-thickness property.`}
        </p>
      </ContentLayout.Paragraph>
      <ContentLayout.Options>
        <div>
          <p className="content_title">Option</p>
          <Card>
            <label htmlFor="line">Line</label>
            <Select id="line" style={{ width: '100%' }} value={state.line} onChange={e => setState(p => ({ ...p, line: e }))}>
              <Select.Option value='none'>none</Select.Option>
              <Select.Option value='underline'>underline</Select.Option>
              <Select.Option value='overline'>overline</Select.Option>
              <Select.Option value='line-through'>line-through</Select.Option>
            </Select>
            <Divider dashed />
            <label htmlFor="style">Style</label>
            <Select id="style" style={{ width: '100%' }} value={state.style} onChange={e => setState(p => ({ ...p, style: e }))}>
              <Select.Option value='solid'>solid</Select.Option>
              <Select.Option value='double'>double</Select.Option>
              <Select.Option value='dotted'>dotted</Select.Option>
              <Select.Option value='dashed'>dashed</Select.Option>
              <Select.Option value='wavy'>wavy</Select.Option>
            </Select>
            <Divider dashed />
            <label htmlFor="color">Color</label>
            <div id="color" className="items-center justify-between">
              <ColorPicker colorInput width={120} color={state.color} onChange={e => setState(p => ({ ...p, color: e }))} />
              <span>{state.color}</span>
            </div>
          </Card>
        </div>
      </ContentLayout.Options>
      <ContentLayout.Preview>
        <div>
          <p className="content_title">Preview</p>
          <Card>
            <div>
              Lorem ipsum,
              <strong style={{ textDecorationLine: state.line, textDecorationStyle: state.style, textDecorationColor: state.color }}>dolor sit amet consectetur adipisicing elit.</strong>
              Doloremque ratione, optio aliquam maiores accusantium, nulla iste quia laboriosam perferendis, voluptatibus ex. Itaque quisquam numquam voluptatum dicta ut voluptatibus laborum in.
            </div>
          </Card>
        </div>
        <div>
          <p className="content_title">Code</p>
          <Card>
            <div className="justify-between items-center">
              <code ref={ref}>
                textDecoration: {`${state.line} ${state.style} ${state.color}`}
              </code>
              <Button onClick={() => setCopy(ref)} icon={<FaCopy />} />
            </div>
          </Card>
        </div>
      </ContentLayout.Preview>
    </ContentLayout>
  </section>);
}

export default TextDecoration;