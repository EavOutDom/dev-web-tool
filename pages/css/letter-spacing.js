import { Card, Slider } from "antd";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import { useRef, useState } from "react";
import { useCopy } from "../../lib/useCopy";

const LetterSpacing = () => {
  const [length, setLength] = useState(5);
  const [copy, setCopy] = useCopy('');
  const ref = useRef();
  return (<section>
    <ContentLayout name='Letter Spacing' back="/css" >
      <ContentLayout.Paragraph>
        <p>
          {`The letter-spacing CSS property sets the horizontal spacing behavior between text characters. This value is added to the natural spacing between characters while rendering the text. Positive values of letter-spacing causes characters to spread farther apart, while negative values of letter-spacing bring characters closer together.`}
        </p>
      </ContentLayout.Paragraph>
      <ContentLayout.Options>
        <div>
          <p className="content_title">Options</p>
          <Card>
            <label htmlFor="length">Length {length}px</label>
            <Slider id="length" max={30} value={length} onChange={setLength} />
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
                letterSpacing: length
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur amet ipsa laborum, debitis perferendis animi omnis minima vel asperiores eveniet maxime natus repudiandae tempora eum quam, libero optio molestiae mollitia.
            </div>
          </Card>
        </div>
        <div>
          <p className='content_title'>Code</p>
          <Card>
            <pre>
              <code>
                letter-spacing: {length}px;
              </code>
            </pre>
          </Card>
        </div>
      </ContentLayout.Preview>
    </ContentLayout>
  </section>);
}

export default LetterSpacing;