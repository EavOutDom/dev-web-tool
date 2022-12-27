import { Button, Card, Select } from "antd";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import { useRef, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { useCopy } from "../../lib/useCopy";

const Display = () => {
  const [display, setDisplay] = useState('block');
  const [copy, setCopy] = useCopy();
  const ref = useRef();
  return (<section>
    <ContentLayout name='Display' back="/css" >
      <ContentLayout.Paragraph>
        <p>
          {`The display CSS property sets whether an element is treated as a block or inline element and the layout used for its children, such as flow layout, grid or flex.`}
        </p>
        <p>
          {`Formally, the display property sets an element's inner and outer display types. The outer type sets an element's participation in flow layout; the inner type sets the layout of children. Some values of display are fully defined in their own individual specifications; for example the detail of what happens when display: flex is declared is defined in the CSS Flexible Box Model specification.`}
        </p>
      </ContentLayout.Paragraph>
      <ContentLayout.Options>
        <div>
          <p className="content_title">Options</p>
          <Card>
            <label htmlFor="display">Display</label>
            <Select style={{ width: '100%' }} id='display' value={display} onChange={setDisplay}>
              <Select.Option value='block'>block</Select.Option>
              <Select.Option value='inline-block'>inline-block</Select.Option>
              <Select.Option value='inline'>inline</Select.Option>
              <Select.Option value='contents'>contents</Select.Option>
              <Select.Option value='table'>table</Select.Option>
              <Select.Option value='none'>none</Select.Option>
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
                height: 200,
                background: '#a0a0a0',
                display: display,
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis natus eveniet veritatis aperiam veniam nobis culpa commodi vero nostrum, voluptas temporibus quod aspernatur rerum animi alias, ad incidunt odit tempora.
            </div>
          </Card>
        </div>
        <div>
          <p className="content_title">Code</p>
          <Card>
            <div className="justify-between items-center">
              <code ref={ref}>
                display: {display};
              </code>
              <Button onClick={() => setCopy(ref)} icon={<FaCopy />} />
            </div>
          </Card>
        </div>
      </ContentLayout.Preview>
    </ContentLayout>
  </section>);
}

export default Display;