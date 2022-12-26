import { Button, Card, Slider } from "antd";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import { useRef, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { useCopy } from "../../lib/useCopy";

const Opacity = () => {
  const [opacity, setOpacity] = useState(50);
  const [copy, setCopy] = useCopy('');
  const ref = useRef();
  return (<section>
    <ContentLayout back='/css' name='Opacity' browser={{ chrome: 'yes', edge: 'yes', firefox: 'yes', opera: 'yes', safari: 'yes' }}>
      <ContentLayout.Paragraph>
        <p>
          {`The opacity CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.`}
        </p>
      </ContentLayout.Paragraph>
      <ContentLayout.Options>
        <div>
          <p className="content_title">Options</p>
          <Card>
            <label htmlFor="opacity">Value {opacity}%</label>
            <Slider id="opacity" value={opacity} range onChange={v => setOpacity(v)} />
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
                width: '100%',
                background: '#a0a0a0',
                opacity: opacity / 100
              }}
            />
          </Card>
        </div>
        <div>
          <p className="content_title">Code</p>
          <Card>
            <div className="justify-between items-center">
              <code ref={ref}>opacity: {opacity / 100};</code>
              <Button icon={<FaCopy />} onClick={_ => setCopy(ref)} />
            </div>
          </Card>
        </div>
      </ContentLayout.Preview>
    </ContentLayout>
  </section>);
}

export default Opacity;