import { Button, Card, Select, Slider } from "antd";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import { useRef, useState } from "react";
import { useCopy } from "../../lib/useCopy";
import { FaCopy } from "react-icons/fa";

export const getServerSideProps = () => {
  return {
    props: {
    meta_title: 'White Space'
    }
  }
};

const WhiteSpace = () => {
  const [value, setValue] = useState('normal');
  const [copy, setCopy] = useCopy('');
  const ref = useRef();

  return (<section>
    <ContentLayout name='White Space' back="/css">
      <ContentLayout.Paragraph>
        <p>
          {`The white-space CSS property sets how white space inside an element is handled.`}
        </p>
      </ContentLayout.Paragraph>
      <ContentLayout.Options>
        <div>
          <p className="content_title">Options</p>
          <Card>
            <label htmlFor="space">Value</label>
            <Select style={{ width: '100%' }} id='space' value={value} onChange={setValue}>
              <Select.Option value='normal'>normal</Select.Option>
              <Select.Option value='nowrap'>nowrap</Select.Option>
              <Select.Option value='pre'>pre</Select.Option>
              <Select.Option value='pre-wrap'>pre-wrap</Select.Option>
              <Select.Option value='pre-line'>pre-line</Select.Option>
              <Select.Option value='break-spaces'>break-spaces</Select.Option>
            </Select>
          </Card>
        </div>
      </ContentLayout.Options>
      <ContentLayout.Preview>
        <div>
          <p className="content_title">Preview</p>
          <Card>
            <div
              align='middle'
              style={{
                minHeight: 200,
              }}
            >
              {/* <div style={{ width: 190, height: 190, background: '#a0a0a0' }}> */}
              <div style={{ width: 200, whiteSpace: value }}>
                <p style={{ border: '1px solid #000', textAlign: 'left', padding: 14 }}>
                  {`But ere she from the church-door stepped
                  She smiled and told us why:
                  'It was a wicked woman's curse,'
                  Quoth she, 'and what care I?'

                  She smiled, and smiled, and passed it off
                  Ere from the door she stept—`}
                </p>
              </div>
              <div>
                <p style={{ textAlign: 'left' }}>
                  <strong>
                    Default text
                  </strong>
                </p>
                <pre>
                  <p>
                    {`But ere she from the church-door stepped
                  She smiled and told us why:
                  'It was a wicked woman's curse,'
                  Quoth she, 'and what care I?'

                  She smiled, and smiled, and passed it off
                  Ere from the door she stept—`}
                  </p>
                </pre>
              </div>
            </div>
          </Card>
        </div>
        <div>
          <p className="content_title">Code</p>
          <Card>
            <div className="justify-between items-center">
              <code ref={ref}>
                white-space: {value};
              </code>
              <Button onClick={() => setCopy(ref)} icon={<FaCopy />} />
            </div>
          </Card>
        </div>
      </ContentLayout.Preview>
    </ContentLayout>
  </section>);
}

export default WhiteSpace;