import { Button, Card, Col, Input, Row } from "antd";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import { useRef, useState } from "react";
import ColorPicker from "../../components/colorPicker/ColorPicker";
import { useCopy } from "../../lib/useCopy";
import { FaCopy } from "react-icons/fa";

const TextColor = () => {
  const [color, setColor] = useState('#000FF0');
  const [copyText, setCopy] = useCopy();
  const textRef = useRef('');

  return (<section>
    <ContentLayout back={'/css'} name='Text Color CSS Generator' browser={{ chrome: 'yes', firefox: 'yes', safari: 'yes', edge: 'yes', opera: 'yes' }}>
      <ContentLayout.Options>
        <div>
          <p className="content_title">Options</p>
          <Card title='Color'>
            <div className="items-center justify-between" style={{ gap: 10 }}>
              <ColorPicker colorInput color={color} onChange={setColor} name={color} />
              <label>{color}</label>
            </div>
          </Card>
        </div>
      </ContentLayout.Options>
      <ContentLayout.Preview>
        <div>
          <p className="content_title">Preview</p>
          <Card>
            <div style={{ color: color }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequatur sed, repudiandae, libero itaque officia tenetur hic voluptate cumque enim porro deserunt eum et amet rerum? Iure iste sit vel!
            </div>
          </Card>
        </div>
        <div>
          <p className="content_title">Code</p>
          <Card>
            <div className="justify-between items-center">
              <code ref={textRef}>
                color: {color};
              </code>
              <Button onClick={() => setCopy(textRef)} icon={<FaCopy />}></Button>
            </div>
          </Card>
        </div>
      </ContentLayout.Preview>
    </ContentLayout>
  </section>);
}

export default TextColor;