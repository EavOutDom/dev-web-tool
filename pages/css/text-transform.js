import { Button, Card, Select, Slider } from "antd";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import { useRef, useState } from "react";
import { useCopy } from "../../lib/useCopy";
import { FaCopy } from "react-icons/fa";

export const getServerSideProps = () => {
  return {
    props: {
      meta_title: 'Text Transform'
    }
  }
};

const TextTransform = () => {
  const [value, setValue] = useState('capitalize');
  const [copy, setCopy] = useCopy('');
  const ref = useRef();

  return (<section>
    <ContentLayout name='Text Transform' back="/css">
      <ContentLayout.Paragraph>
        <p>
          {`The text-transform CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.`}
        </p>
      </ContentLayout.Paragraph>
      <ContentLayout.Options>
        <div>
          <p className="content_title">Options</p>
          <Card>
            <label htmlFor="tt">Value</label>
            <Select style={{ width: '100%' }} id='tt' value={value} onChange={setValue}>
              <Select.Option value='capitalize'>capitalize</Select.Option>
              <Select.Option value='none'>none</Select.Option>
              <Select.Option value='lowercase'>lowercase</Select.Option>
              <Select.Option value='uppercase'>uppercase</Select.Option>
              <Select.Option value='full-width'>full-width</Select.Option>
              <Select.Option value='full-size-kana'>full-size-kana</Select.Option>
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
                textTransform: value
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
                text-transforms: {value};
              </code>
              <Button onClick={() => setCopy(ref)} icon={<FaCopy />} />
            </div>
          </Card>
        </div>
      </ContentLayout.Preview>
    </ContentLayout>
  </section>);
}

export default TextTransform;