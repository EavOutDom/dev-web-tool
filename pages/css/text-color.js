import { Button, Card, Col } from "antd";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import { useRef, useState } from "react";
import ColorPicker from "../../components/colorPicker/ColorPicker";
import { useCopy } from "../../lib/useCopy";
import { FaCopy } from "react-icons/fa";

export const getServerSideProps = async () => {
  return {
    props: {
      meta_title: 'Text Color'
    }
  }
};

const TextColor = () => {
  const [color, setColor] = useState('#000FF0');
  const [copyText, setCopy] = useCopy();
  const textRef = useRef('');

  return (<section>
    <ContentLayout back={'/css'} name='Text Color'>
      <ContentLayout.Paragraph>
        <p>
          {`The color CSS property sets the foreground color value of an element's text and text decorations, and sets the currentcolor value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.`}
        </p>
      </ContentLayout.Paragraph>
      <ContentLayout.Options>
        <div>
          <p className="content_title">Options</p>
          <Card>
            <label htmlFor="">Color</label>
            <div className="items-center justify-between">
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
            <div style={{ color: color, minHeight: 200 }}>
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