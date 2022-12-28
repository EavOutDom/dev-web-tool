import { Button, Card, Select } from "antd";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import { useRef, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { useCopy } from "../../lib/useCopy";

const OverflowWrap = () => {
  const [value, setValue] = useState('normal');
  const [copy, setCopy] = useCopy();
  const ref = useRef();
  return (<section>
    <ContentLayout name='Overflow' back="/css" >
      <ContentLayout.Paragraph>
        <p>
          {`The overflow-wrap CSS property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.`}
        </p>
      </ContentLayout.Paragraph>
      <ContentLayout.Options>
        <div>
          <p className="content_title">Option</p>
          <Card>
            <label htmlFor="value">Value</label>
            <Select id="value" style={{ width: '100%' }} value={value} onChange={setValue}>
              <Select.Option value='normal'>normal</Select.Option>
              <Select.Option value='anywhere'>anywhere</Select.Option>
              <Select.Option value='break-word'>break-word</Select.Option>
            </Select>
          </Card>
        </div>
      </ContentLayout.Options>
      <ContentLayout.Preview>
        <div>
          <p className="content_title">Preview</p>
          <Card>
            <section className="justify-center items-center">
              <div style={{
                background: '#a0a0a0',
                border: '3px solid #383838',
                padding: '0.75em',
                width: 'min-content',
                maxWidth: '11em',
                height: '200'
              }}>
                Most words are short &amp; do not need to break. But <strong style={{ overflowWrap: value }}>Antidisestablishmentarianism</strong> is long. The width is set to min-content, with a max-width of 11em.
              </div>
            </section>
          </Card>
        </div>
        <div>
          <p className="content_title">Code</p>
          <Card>
            <div className="justify-between items-center">
              <code ref={ref}>
                overflow-wrap: {value};
              </code>
              <Button onClick={() => setCopy(ref)} icon={<FaCopy />} />
            </div>
          </Card>
        </div>
      </ContentLayout.Preview>
    </ContentLayout>
  </section>);
}

export default OverflowWrap;