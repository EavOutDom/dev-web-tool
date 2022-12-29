import { Button, Card, Select, Slider } from "antd";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import { useRef, useState } from "react";
import { useCopy } from "../../lib/useCopy";
import { FaCopy } from "react-icons/fa";

const TextAlign = () => {
  const [value, setValue] = useState('start');
  const [copy, setCopy] = useCopy('');
  const ref = useRef();

  return (<section>
    <ContentLayout name='Text Align' back="/css">
      <ContentLayout.Paragraph>
        <p>
          {`The text-align CSS property sets the horizontal alignment of the inline-level content inside a block element or table-cell box. This means it works like vertical-align but in the horizontal direction.`}
        </p>
      </ContentLayout.Paragraph>
      <ContentLayout.Options>
        <div>
          <p className="content_title">Options</p>
          <Card>
            <label htmlFor="ta">Value {value}</label>
            <Select style={{ width: '100%' }} id='ta' value={value} onChange={setValue}>
              <Select.Option value='start'>start</Select.Option>
              <Select.Option value='center'>center</Select.Option>
              <Select.Option value='end'>end</Select.Option>
              <Select.Option value='left'>left</Select.Option>
              <Select.Option value='right'>right</Select.Option>
              <Select.Option value='justify'>justify</Select.Option>
            </Select>
          </Card>
        </div>
      </ContentLayout.Options>
      <ContentLayout.Preview>
        <div>
          <p className="content_title">Preview</p>
          <Card>
            <div
              style={{
                minHeight: 200,
                textAlign: value,
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cupiditate deserunt laudantium nihil, fuga vero quo illo, itaque animi iure voluptatibus, voluptates quam non eum quidem consequatur vitae eos rerum.
            </div>
          </Card>
        </div>
        <div>
          <p className="content_title">Code</p>
          <Card>
            <div className="justify-between items-center">
              <code ref={ref}>
                text-align: {value};
              </code>
              <Button onClick={() => setCopy(ref)} icon={<FaCopy />} />
            </div>
          </Card>
        </div>
      </ContentLayout.Preview>
    </ContentLayout>
  </section>);
}

export default TextAlign;