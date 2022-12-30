import { Button, Card, Checkbox, Divider, Select, Slider } from "antd";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import { useRef, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { useCopy } from "../../lib/useCopy";

const Scale = () => {
  const [scale, setScale] = useState(1);
  const [x, setX] = useState(1)
  const [y, setY] = useState(1)
  const [copy, setCopy] = useCopy();
  const [isSame, setIsSame] = useState(true);
  const ref = useRef();

  const scaleProp = () => {
    if (isSame)
      return `scale(${scale})`;
    else
      return `scale(${x}, ${y})`;
  };

  return (<section>
    <ContentLayout name='Scale' back="/css" >
      <ContentLayout.Paragraph>
        <p>
          {`The scale() CSS function defines a transformation that resizes an element on the 2D plane. Because the amount of scaling is defined by a vector, it can resize the horizontal and vertical dimensions at different scales. Its result is a <transform-function> data type.`}
        </p>
      </ContentLayout.Paragraph>
      <ContentLayout.Options>
        <div>
          <p className="content_title">Option</p>
          <Card>
            <label htmlFor="type" style={{ display: 'block' }}>Type</label>
            <Checkbox checked={isSame} onChange={e => setIsSame(e.target.checked)}>use the same value for X and Y</Checkbox>
            <Divider dashed />
            {isSame ? <>
              <label htmlFor="xy">Value {scale}</label>
              <Slider id="xy" value={scale} onChange={setScale} max={3} step={0.1} />
            </> : <>
              <label htmlFor="x">Value X {x}</label>
              <Slider id="x" value={x} onChange={setX} max={3} step={0.1} />
              <Divider />
              <label htmlFor="y">Value Y {y}</label>
              <Slider id="y" value={y} onChange={setY} max={3} step={0.1} />
            </>}
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
                height: 200,
              }}
            >
              <div style={{
                height: 200,
                width: 200,
                background: '#a0a0a0',
                textAlign: 'center',
                transform: scaleProp()
              }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos natus sed vel error distinctio nemo explicabo perferendis, voluptates ipsa consequatur deleniti debitis. Itaque vitae expedita consequuntur recusandae delectus, voluptatum id.
              </div>
            </div>
          </Card>
        </div>
        <div>
          <p className="content_title">Code</p>
          <Card>
            <div className="justify-between items-center">
              <code ref={ref}>
                transform: {scaleProp()};
              </code>
              <Button onClick={() => setCopy(ref)} icon={<FaCopy />} />
            </div>
          </Card>
        </div>
      </ContentLayout.Preview>
    </ContentLayout>
  </section>);
}

export default Scale;