import { Button, Card, Divider, Slider } from "antd";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import { useRef, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { useCopy } from "../../lib/useCopy";

export const getServerSideProps = () => {
  return {
    props: {
      meta_title: 'Skew'
    }
  }
};

const Skew = () => {
  const [x, setX] = useState(1)
  const [y, setY] = useState(1)
  const [copy, setCopy] = useCopy();
  const ref = useRef();

  return (<section>
    <ContentLayout name='Skew' back="/css" >
      <ContentLayout.Paragraph>
        <p>
          {`The skew() CSS function defines a transformation that skews an element on the 2D plane. Its result is a <transform-function> data type.`}
        </p>
      </ContentLayout.Paragraph>
      <ContentLayout.Options>
        <div>
          <p className="content_title">Option</p>
          <Card>
            <label htmlFor="x">Value X {x} deg</label>
            <Slider id="x" value={x} onChange={setX} min={-90} max={90} />
            <Divider />
            <label htmlFor="y">Value Y {y} deg</label>
            <Slider id="y" value={y} onChange={setY} min={-90} max={90} />
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
                transform: `skew(${x}deg, ${y}deg)`,
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
                transform: {`skew(${x}deg, ${y})deg`};
              </code>
              <Button onClick={() => setCopy(ref)} icon={<FaCopy />} />
            </div>
          </Card>
        </div>
      </ContentLayout.Preview>
    </ContentLayout>
  </section>);
}

export default Skew;