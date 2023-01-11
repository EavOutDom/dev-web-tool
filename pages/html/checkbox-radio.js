import { Button, Card, Checkbox, Divider, Input, Select } from "antd";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import { useRef, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { useCopy } from "../../lib/useCopy";

export const getServerSideProps = () => {
  return {
    props: {
      meta_title: 'Checkbox & Radio Button'
    }
  }
};

const CheckboxRadio = () => {
  const [type, setType] = useState('checkbox');
  const [name, setName] = useState('myCheckbox');
  const [isChecked, setIsChecked] = useState(false);
  const [copy, setCopy] = useCopy('');
  const ref = useRef();

  return (<section>
    <ContentLayout back="/html" name='Checkbox & Radio Button'>
      <ContentLayout.Paragraph>
        <p>
          {`<input> elements of type checkbox are rendered by default as boxes that are checked (ticked) when activated, like you might see in an official government paper form. The exact appearance depends upon the operating system configuration under which the browser is running. Generally this is a square but it may have rounded corners. A checkbox allows you to select single values for submission in a form (or not).`}
        </p>
        <p>
          {`<input> elements of type radio are generally used in radio groups—collections of radio buttons describing a set of related options.`}
        </p>
      </ContentLayout.Paragraph>
      <ContentLayout.Options>
        <div>
          <p className="content_title">Option</p>
          <Card>
            <label htmlFor="type">Type</label>
            <Select style={{ width: '100%' }} id="type" value={type} onChange={setType}>
              <Select.Option value='checkbox'>checkbox</Select.Option>
              <Select.Option value='radio'>radio</Select.Option>
            </Select>
            <Divider dashed />
            <label htmlFor="name">Name</label>
            <Input id="name" value={name} onChange={e => setName(e.target.value)} />
            <Divider dashed />
            <label htmlFor="check" style={{ display: 'block' }}>Check</label>
            <Checkbox id="check" onChange={e => setIsChecked(e.target.checked)} />
          </Card>
        </div>
      </ContentLayout.Options>
      <ContentLayout.Preview>
        <div>
          <p className="content_title">Preview</p>
          <Card>
            <div style={{ minHeight: 200 }}>
              <label htmlFor="input">
                <input type={type} name={name} id='input' checked={isChecked} /> Click me!
              </label>
            </div>
          </Card>
        </div>
        <div>
          <p className="content_title">Code</p>
          <Card>
            <div className="justify-between items-center">
              <pre>
                <code ref={ref}>
                  {`<label>
  <input type="${type}" name="${name}"${isChecked ? ' checked' : ''}/> Click me!
</label>`}
                </code>
              </pre>
              <Button onClick={() => setCopy(ref)} icon={<FaCopy />} />
            </div>
          </Card>
        </div>
      </ContentLayout.Preview>
    </ContentLayout>
  </section>);
}

export default CheckboxRadio;