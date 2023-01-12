import { useRef, useState } from "react";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import { Button, Card, Checkbox, Divider, Input } from "antd";
import { FaCopy } from "react-icons/fa";
import { useCopy } from "../../lib/useCopy";

export const getServerSideProps = async () => {
  return {
    props: {
      meta_title: 'Number Input'
    }
  }
};

const NumberInput = () => {
  const [copy, setCopy] = useCopy('');
  const ref = useRef();
  const [name, setName] = useState('myNumber');
  const [placeholder, setPlaceholder] = useState(null);
  const [step, setStep] = useState(20);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(200);
  const [value, setValue] = useState(5);

  return (<section>
    <ContentLayout name={'Number Input'} back="/html">
      <ContentLayout.Paragraph>
        <p>
          {`<input> elements of type number are used to let the user enter a number. They include build-in validation to reject non-numerical entries.`}
        </p>
      </ContentLayout.Paragraph>
      <ContentLayout.Options>
        <div>
          <p className="content_title">Option</p>
          <Card>
            <label htmlFor="name">Name</label>
            <Input id="name" value={name} onChange={e => setName(e.target.value)} />
            <Divider dashed />
            <label htmlFor="placeholder">Placeholder</label>
            <Input id="placeholder" value={placeholder} onChange={e => setPlaceholder(e.target.value)} />
            <Divider dashed />
            <label htmlFor="step">Step</label>
            <Input id="step" value={step} type="number" onChange={e => setStep(e.target.value)} />
            <Divider dashed />
            <label htmlFor="value">Value</label>
            <Input id="value" type="number" value={value} onChange={e => setValue(e.target.value)} />
            <Divider dashed />
            <label htmlFor="min">Min</label>
            <Input id="min" type="number" value={min} onChange={e => setMin(e.target.value)} />
            <Divider dashed />
            <label htmlFor="max">Max</label>
            <Input id="max" type="number" value={max} onChange={e => setMax(e.target.value)} />
          </Card>
        </div>
      </ContentLayout.Options>
      <ContentLayout.Preview>
        <div>
          <p className="content_title">Preview</p>
          <Card className="preview">
            <div>
              <input style={{ width: 300 }} type='number' name={name} min={min} max={max} step={step} value={value} placeholder={placeholder} onChange={e => setValue(e.target.value)} />
            </div>
          </Card>
        </div>
        <div>
          <p className="content_title">Code</p>
          <Card>
            <div className="justify-between items-center">
              <code ref={ref}>
                {`<input type="number" name="${name}" min="${min}" max="${max}" step="${step}" value="${value}"${placeholder ? ` placeholder="${placeholder}"` : ''}/>`}
              </code>
              <Button onClick={() => setCopy(ref)} icon={<FaCopy />} />
            </div>
          </Card>
        </div>
      </ContentLayout.Preview>
    </ContentLayout>
  </section>);
}

export default NumberInput;