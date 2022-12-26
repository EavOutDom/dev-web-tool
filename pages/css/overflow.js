import { useRef, useState } from "react";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import { Button, Card, Divider, Select } from "antd";
import { FaCopy } from "react-icons/fa";
import { useCopy } from "../../lib/useCopy";

const Overflow = () => {
  const [type, setType] = useState('overflow');
  const [overflow, setOverflow] = useState('auto');
  const [copy, setCopy] = useCopy('');
  const ref = useRef();

  const code = () => {
    switch (type) {
      case 'overflow-x':
        return `overflow-x: ${overflow};`
      case 'overflow-y':
        return `overflow-y: ${overflow};`
      default:
        return `overflow: ${overflow};`
    }
  }

  console.log(code());

  return (<section>
    <ContentLayout back='/css' name='Overflow'>
      <ContentLayout.Paragraph>
        <p>
          {`The overflow CSS shorthand property sets the desired behavior for an element's overflow — i.e. when an element's content is too big to fit in its block formatting context — in both directions.`}
        </p>
      </ContentLayout.Paragraph>
      <ContentLayout.Options>
        <div>
          <p className="content_title">Options</p>
          <Card>
            <label htmlFor="type">Type</label>
            <Select style={{ width: '100%' }} id='type' value={type} onChange={e => setType(e)}>
              <Select.Option value='overflow'>overflow</Select.Option>
              <Select.Option value='overflow-x'>overflow-x</Select.Option>
              <Select.Option value='overflow-y'>overflow-y</Select.Option>
            </Select>
            <Divider />
            <label htmlFor="overflow">Value</label>
            <Select style={{ width: '100%' }} id='overflow' value={overflow} onChange={e => setOverflow(e)}>
              <Select.Option value='auto'>auto</Select.Option>
              <Select.Option value='hidden'>hidden</Select.Option>
              <Select.Option value='scroll'>scroll</Select.Option>
              <Select.Option value='visible'>visible</Select.Option>
            </Select>
          </Card>
        </div>
      </ContentLayout.Options>
      <ContentLayout.Preview>
        <div>
          <p className="content_title">Preview</p>
          <Card className="justify-center">
            <div
              style={{
                height: 200,
                widows: 200,
                maxHeight: 200,
                maxWidth: 200,
                padding: 4,
                background: '#a0a0a0',
                overflow: overflow
              }}>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum harum eum eos officiis, accusantium cumque veniam temporibus excepturi omnis accusamus totam placeat mollitia voluptates dolorum hic voluptatem, expedita at? A!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates exercitationem nisi nihil quod ducimus impedit? Nihil dicta ea quidem sit praesentium omnis, sapiente quasi accusantium corporis velit distinctio dolor vel.
              </p>
            </div>
          </Card>
        </div>
        <div>
          <p className="content_title">Code</p>
          <Card>
            <div className="justify-between items-center">
              <code ref={ref}>
                {code()}
              </code>
              <Button onClick={() => setCopy(ref)} icon={<FaCopy />} />
            </div>
          </Card>
        </div>
      </ContentLayout.Preview>
    </ContentLayout>
  </section >);
}

export default Overflow;