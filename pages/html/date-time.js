import { Button, Card, Checkbox, Divider, Input, Select } from "antd";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import { useRef, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { useCopy } from "../../lib/useCopy";

export const getServerSideProps = () => {
  return {
    props: {
      meta_title: 'Date & Time Input'
    }
  }
};

const ButtonInput = () => {
  const [type, setType] = useState('button');
  const [name, setName] = useState('myButton');
  const [focus, setFocus] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [copy, setCopy] = useCopy('');
  const ref = useRef();

  return (<section>
    <ContentLayout back="/html" name='Date & Time Input'>
      <ContentLayout.Paragraph>
        <p>
          {`<input> elements of type="date" create input fields that let the user enter a date, either with a textbox that validates the input or a special date picker interface.`}
        </p>
        <p>
          {`The resulting value includes the year, month, and day, but not the time. The time and datetime-local input types support time and date+time input.`}
        </p>
      </ContentLayout.Paragraph>
      <ContentLayout.Options>
        <div>
          <p className="content_title">Option</p>
          <Card>
            <label htmlFor="type">Type</label>
            <Select style={{ width: '100%' }} id="type" value={type} onChange={setType}>
              <Select.Option value='button'>button</Select.Option>
              <Select.Option value='reset'>reset</Select.Option>
              <Select.Option value='submit'>submit</Select.Option>
            </Select>
            <Divider dashed />
            <label htmlFor="name">Name</label>
            <Input id="name" value={name} onChange={e => setName(e.target.value)} />
            <Divider dashed />
            <label htmlFor="focus" style={{ display: 'block' }}>autoFocus</label>
            <Checkbox id="focus" onChange={e => setFocus(e.target.checked)} />
            <Divider dashed />
            <label htmlFor="disabled" style={{ display: 'block' }}>Disabled</label>
            <Checkbox id="disabled" onChange={e => setDisabled(e.target.checked)} />
          </Card>
        </div>
      </ContentLayout.Options>
      <ContentLayout.Preview>
        <div>
          <p className="content_title">Preview</p>
          <Card>
            <div style={{ minHeight: 200 }}>
              <button
                disabled={disabled}
                autoFocus={focus}
                type={type}
                name={name}
              >Click me!</button>
            </div>
          </Card>
        </div>
        <div>
          <p className="content_title">Code</p>
          <Card>
            <div className="justify-between items-center">
              <pre>
                <code ref={ref}>
                  {`<button type="${type}" name="${name}"${focus ? " autoFocus" : ''}${disabled ? " disabled" : ''}>
  Click me!
</button>`}
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

export default ButtonInput;