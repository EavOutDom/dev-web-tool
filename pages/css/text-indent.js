import { Button, Card, Slider } from "antd";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import { useRef, useState } from "react";
import { useCopy } from "../../lib/useCopy";
import { FaCopy } from "react-icons/fa";

export const getServerSideProps = () => {
  return {
    props: {
      meta_title: 'Text Indent'
    }
  }
};

const TextIndent = () => {
  const [indent, setIndent] = useState(10);
  const [copy, setCopy] = useCopy('');
  const ref = useRef();

  return (<section>
    <ContentLayout name='Indent' back="/css">
      <ContentLayout.Paragraph>
        <p>
          {`The text-indent CSS property sets the length of empty space (indentation) that is put before lines of text in a block.`}
        </p>
      </ContentLayout.Paragraph>
      <ContentLayout.Options>
        <div>
          <p className="content_title">Options</p>
          <Card>
            <label htmlFor="indent">Length {indent}</label>
            <Slider id="indent" value={indent} onChange={setIndent} />
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
                textIndent: indent
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur est ipsam maiores cumque qui assumenda laudantium totam facere quisquam voluptatum provident eos modi obcaecati vel impedit eius iure, distinctio magnam?
            </div>
          </Card>
        </div>
        <div>
          <p className="content_title">Code</p>
          <Card>
            <div className="justify-between items-center">
              <code ref={ref}>
                text-indent: {indent}px;
              </code>
              <Button onClick={() => setCopy(ref)} icon={<FaCopy />} />
            </div>
          </Card>
        </div>
      </ContentLayout.Preview>
    </ContentLayout>
  </section>);
}

export default TextIndent;