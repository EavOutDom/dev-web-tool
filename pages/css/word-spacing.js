import { Button, Card, Slider } from "antd";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import { useRef, useState } from "react";
import { useCopy } from "../../lib/useCopy";
import { FaCopy } from "react-icons/fa";

export const getServerSideProps = () => {
  return {
    props: {
      meta_title: 'Word Spacing'
    }
  }
};

const WordSpacing = () => {
  const [space, setSpace] = useState(3);
  const [copy, setCopy] = useCopy('');
  const ref = useRef();

  return (<section>
    <ContentLayout name='Word Spacing' back="/css">
      <ContentLayout.Paragraph>
        <p>
          {`The word-spacing CSS property sets the length of space between words and between tags.`}
        </p>
      </ContentLayout.Paragraph>
      <ContentLayout.Options>
        <div>
          <p className="content_title">Options</p>
          <Card>
            <label htmlFor="space">Value {space}px</label>
            <Slider id="space" value={space} onChange={setSpace} />
          </Card>
        </div>
      </ContentLayout.Options>
      <ContentLayout.Preview>
        <div>
          <p className="content_title">Preview</p>
          <Card>
            <div
              style={{ wordSpacing: space, minHeight: 200 }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi soluta doloremque facere facilis! Cum, earum odit. Qui ea deleniti, quod cumque quas voluptate dolor aut commodi soluta, enim dolore dolorum?
            </div>
          </Card>
        </div>
        <div>
          <p className="content_title">Code</p>
          <Card>
            <div className="justify-between items-center">
              <code ref={ref}>
                word-spacing: {space}px;
              </code>
              <Button onClick={() => setCopy(ref)} icon={<FaCopy />} />
            </div>
          </Card>
        </div>
      </ContentLayout.Preview>
    </ContentLayout>
  </section>);
}

export default WordSpacing;