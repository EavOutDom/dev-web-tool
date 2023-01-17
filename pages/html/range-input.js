import { Button, Card, Divider, Input } from "antd";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import { useRef, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { useCopy } from "../../lib/useCopy";

export const getServerSideProps = async () => {
  return {
    props: {
      meta_title: 'Range Input'
    }
  }
};

const RangeInput = () => {
  const ref = useRef();
  const [copy, setCopy] = useCopy('');
  const [name, setName] = useState('mySlider');
  const [step, setStep] = useState(1);
  const [value, setValue] = useState(1);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);

  return (<section>
    <ContentLayout>
      <ContentLayout.Paragraph>
        <p>
          {`<input> element of type range let the user specify a numeric value which must be no less than a given value, and no more than another given value. The precise value, however, is not considered 
          important.This is typically represented using a slider or dial control rather than a text entry box like the number input type.`}
        </p>
        <p>
          {`Because this kind of widget is imprecise, it should only be used if the control's exact value isn't important.`}
        </p>
      </ContentLayout.Paragraph>
      <ContentLayout.Options>
        <div>
          <p className="content_title">Options</p>
          <Card>
            <label htmlFor="name">Name</label>
            <Input id="name" value={name} onChange={e => setName(e.target.value)} />
            <Divider dashed />
            <label htmlFor="value">Value</label>
            <Input id="value" type="number" value={value} onChange={e => setValue(e.target.value)} />
            <Divider dashed />
            <label htmlFor="step">Step</label>
            <Input id="step" type="number" value={step} onChange={e => setStep(e.target.value)} />
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
          <Card>
            <input type="range" name={name} value={value} step={step} min={min} max={max} onChange={e => setValue(e.target.value)} />
          </Card>
        </div>
        <div>
          <p className="content_title">Code</p>
          <Card>
            <div className="justify-between items-center">
              <code ref={ref}>
                {`<input type="range" name="${name}" step="${step}" value="${value}" min="${min}" max="${max}"/>`}
              </code>
              <Button onClick={() => setCopy(ref)} icon={<FaCopy />} />
            </div>
          </Card>
        </div>
      </ContentLayout.Preview>
    </ContentLayout>
  </section>);
}

export default RangeInput;