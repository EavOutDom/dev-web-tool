import { Button, Card, Divider, Slider } from "antd";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import { useRef, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { useCopy } from "../../lib/useCopy";

export const getServerSideProps = () => {
  return {
    props: {
      meta_title: 'Translate'
    }
  }
};

const Translate = () => {
  const [x, setX] = useState(1)
  const [y, setY] = useState(1)
  const [copy, setCopy] = useCopy();
  const ref = useRef();

  return (<section>
    <ContentLayout name='Translate' back="/css" >
      <ContentLayout.Paragraph>
        <p>
          {`The translate() CSS function repositions an element in the horizontal and/or vertical directions. Its result is a <transform-function> data type.`}
        </p>
      </ContentLayout.Paragraph>
      <ContentLayout.Options>
        <div>
          <p className="content_title">Option</p>
          <Card>
            <label htmlFor="x">Value X {x}px</label>
            <Slider id="x" value={x} onChange={setX} min={-100} />
            <Divider />
            <label htmlFor="y">Value Y {y}px</label>
            <Slider id="y" value={y} onChange={setY} min={-100} />
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
                transform: `translate(${x}px, ${y}px)`,
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
                transform: {`translate(${x}px, ${y}px)`};
              </code>
              <Button onClick={() => setCopy(ref)} icon={<FaCopy />} />
            </div>
          </Card>
        </div>
      </ContentLayout.Preview>
    </ContentLayout>
  </section>);
}

export default Translate;