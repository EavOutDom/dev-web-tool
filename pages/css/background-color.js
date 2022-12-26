import { Button, Card } from "antd";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import ColorPicker from "../../components/colorPicker/ColorPicker";
import { useRef, useState } from "react";
import { useCopy } from "../../lib/useCopy";
import { FaCopy } from "react-icons/fa";

const BackgroundColor = () => {
  const [bc, setBc] = useState('#000000');
  const [copy, setCopy] = useCopy();
  const ref = useRef();
  return (<section>
    <ContentLayout back='/' name='Background Color'>
      <ContentLayout.Paragraph>
        <p>
          {`The background-color CSS property sets the background color of an element.`}
        </p>
      </ContentLayout.Paragraph>
      <ContentLayout.Options>
        <div>
          <p className="content_title">Options</p>
          <Card>
            <label htmlFor="color">Background</label>
            <div id="color" className="items-center justify-between" style={{ gap: 10, width: '100%' }}>
              <ColorPicker colorInput width={120} color={bc} onChange={e => setBc(e)} />
              <span>{bc}</span>
            </div>
          </Card>
        </div>
      </ContentLayout.Options>
      <ContentLayout.Preview>
        <div>
          <p className="content_title">Preview</p>
          <Card>
            <div
              style={{
                height: 200, width: '100%', backgroundColor: bc
              }}
            />
          </Card>
        </div>
        <div>
          <p className="content_title">Code</p>
          <Card>
            <div className="justify-between items-center">
              <code ref={ref}>
                background-color: {bc};
              </code>
              <Button onClick={() => setCopy(ref)} icon={<FaCopy />} />
            </div>
          </Card>
        </div>
      </ContentLayout.Preview>
    </ContentLayout>
  </section>);
}

export default BackgroundColor;