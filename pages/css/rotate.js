import { Button, Card, Divider, Select, Slider } from "antd";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import { useRef, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { useCopy } from "../../lib/useCopy";

const Rotate = () => {
  const [type, setType] = useState(2);
  const [angle, setAngle] = useState(0);
  const [x, setX] = useState(1);
  const [y, setY] = useState(1);
  const [z, setZ] = useState(1);
  const [copy, setCopy] = useCopy();
  const ref = useRef();

  const transformRotate = () => {
    if (type === 2) {
      return `rotate(${angle}deg)`
    }
    else if (type === 3) {
      return `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
    }
  }

  return (<section>
    <ContentLayout name='Rotate' back="/css" >
      <ContentLayout.Paragraph>
        <p>
          {`The rotate() CSS function defines a transformation that rotates an element around a fixed point on the 2D and 3D plane, without deforming it. Its result is a <transform-function> data type.`}
        </p>
      </ContentLayout.Paragraph>
      <ContentLayout.Options>
        <div>
          <p className="content_title">Option</p>
          <Card>
            <label htmlFor="type">Type</label>
            <Select id="type" style={{ width: '100%' }} value={type} onChange={setType}>
              <Select.Option value={2}>2D</Select.Option>
              <Select.Option value={3}>3D</Select.Option>
            </Select>
            <Divider dashed />
            {type === 2 ? <>
              <label htmlFor="angle">Angle {angle}deg</label>
              <Slider id="angle" max={360} value={angle} onChange={setAngle} />
            </> : type === 3 && <>
              <label htmlFor="x">Angle X {x}deg</label>
              <Slider id="x" max={360} value={x} onChange={setX} />
              <Divider dashed />
              <label htmlFor="y">Angle Y {y}deg</label>
              <Slider id="y" max={360} value={y} onChange={setY} />
              <Divider dashed />
              <label htmlFor="z">Angle Z {z}deg</label>
              <Slider id="z" max={360} value={z} onChange={setZ} />
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
                transform: transformRotate()
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

              </code>
              <Button onClick={() => setCopy(ref)} icon={<FaCopy />} />
            </div>
          </Card>
        </div>
      </ContentLayout.Preview>
    </ContentLayout>
  </section>);
}

export default Rotate;