import { Button, Card, Slider } from "antd";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import { useRef, useState } from "react";
import { useCopy } from "../../lib/useCopy";
import { FaCopy } from "react-icons/fa";

const LineHeight = () => {
  const [value, setValue] = useState(2);
  const [copy, setCopy] = useCopy('');
  const ref = useRef();
  return (<section>
    <ContentLayout name='Line Height' back="/css" >
      <ContentLayout.Paragraph>
        <p>
          {`The line-height CSS property sets the height of a line box. It's commonly used to set the distance between lines of text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height.`}
        </p>
      </ContentLayout.Paragraph>
      <ContentLayout.Options>
        <div>
          <p className="content_title">Options</p>
          <Card>
            <label htmlFor="value">Value {value}</label>
            <Slider id="value" max={10} step={0.1} value={value} onChange={setValue} />
          </Card>
        </div>
      </ContentLayout.Options>
      <ContentLayout.Preview>
        <div>
          <p className="content_title">Preview</p>
          <Card>
            <div
              style={{
                minHeight: 200,
                lineHeight: value
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur amet ipsa laborum, debitis perferendis animi omnis minima vel asperiores eveniet maxime natus repudiandae tempora eum quam, libero optio molestiae mollitia.
            </div>
          </Card>
        </div>
        <div>
          <p className='content_title'>Code</p>
          <Card>
            <div className="justify-between items-center">
              <code ref={ref}>
                line-height: {value};
              </code>
              <Button onClick={() => setCopy(ref)} icon={<FaCopy />} />
            </div>
          </Card>
        </div>
      </ContentLayout.Preview>
    </ContentLayout>
  </section>);
}

export default LineHeight;