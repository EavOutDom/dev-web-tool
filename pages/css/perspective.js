import { Button, Card, Divider, Slider } from "antd";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import { useRef, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { useCopy } from "../../lib/useCopy";

const Perspective = () => {
  const [length, setLength] = useState(200);
  const [rotateX, setRotateX] = useState(20);
  const [rotateY, setRotateY] = useState(20);
  const [copy, setCopy] = useCopy();
  const parentRef = useRef();
  const childRef = useRef();

  return (<section>
    <ContentLayout name='Perspective' back="/css" >
      <ContentLayout.Paragraph>
        <p>
          {`The perspective CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective.`}
        </p>
      </ContentLayout.Paragraph>
      <ContentLayout.Options>
        <div>
          <p className="content_title">Option</p>
          <Card>
            <label htmlFor="length">Length {length}px</label>
            <Slider value={length} onChange={setLength} id='length' max={500} />
            <Divider dashed />
            <label htmlFor="x">Rotate X {rotateX} deg</label>
            <Slider value={rotateX} onChange={setRotateX} id='x' max={360} />
            <Divider dashed />
            <label htmlFor="y">Rotate y {rotateY} deg</label>
            <Slider value={rotateY} onChange={setRotateY} id='y' max={360} />
          </Card>
        </div>
      </ContentLayout.Options>
      <ContentLayout.Preview>
        <div>
          <p className="content_title">Preview</p>
          <Card>
            <div align='middle'>
              <div
                style={{
                  height: 200,
                  width: 500,
                  background: '#a0a0a0',
                  textAlign: 'center',
                  padding: 16,
                  perspective: length
                }}>
                <div style={{
                  transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                  transformStyle: 'preserve-3d'
                }}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo omnis quas aliquam doloribus ab. Voluptate temporibus quidem molestias officiis. Natus inventore aperiam ducimus expedita dolore cupiditate vero non perferendis sit.
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div>
          <p className="content_title">Code</p>
          <p>Copy this to the parent element.</p>
          <Card>
            <div className="justify-between items-center">
              <code ref={parentRef}>
                perspective: {length}px;
              </code>
              <Button onClick={() => setCopy(parentRef)} icon={<FaCopy />} />
            </div>
          </Card>
          <p>Copy this to the child element.</p>
          <Card>
            <div className="justify-between items-center">
              <pre>
                <code ref={childRef}>
                  {`transform: rotateX(${rotateX}deg) rotateY(${rotateY}deg);
transform-style: preserve-3d;`}
                </code>
              </pre>
              <Button onClick={() => setCopy(childRef)} icon={<FaCopy />} />
            </div>
          </Card>
        </div>
      </ContentLayout.Preview>
    </ContentLayout>
  </section>);
}

export default Perspective;