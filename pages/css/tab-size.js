import { Button, Card, Slider } from "antd";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import { useRef, useState } from "react";
import { useCopy } from "../../lib/useCopy";
import { FaCopy } from "react-icons/fa";

const TabSize = () => {
  const [tab, setTab] = useState(3);
  const [copy, setCopy] = useCopy('');
  const ref = useRef();

  return (<section>
    <ContentLayout name='Tab Size' back="/css">
      <ContentLayout.Paragraph>
        <p>
          {`The tab-size CSS property is used to customize the width of tab characters (U+0009).`}
        </p>
        <p>
          {`The tab-size property is only useful when the whitespace processing rules do not apply, namely inside a <pre> tag and when the white-space property of an element is set to pre-wrap. Also, make sure your text editor does not automatically convert tabs to spaces. If it does, use "&#09;" for tabs.`}
        </p>
      </ContentLayout.Paragraph>
      <ContentLayout.Options>
        <div>
          <p className="content_title">Options</p>
          <Card>
            <label htmlFor="tab">Value {tab}</label>
            <Slider id="tab" value={tab} onChange={setTab} max={10} />
          </Card>
        </div>
      </ContentLayout.Options>
      <ContentLayout.Preview>
        <div>
          <p className="content_title">Preview</p>
          <Card>
            <pre style={{ minHeight: 200, tabSize: tab, MozTabSize: tab, OTabSize: tab }}>
              Lorem ipsum dolor sit.
            </pre>
          </Card>
        </div>
        <div>
          <p className="content_title">Code</p>
          <Card>
            <div className="justify-between items-center">
              <code ref={ref}>
                tab-size: {tab};
              </code>
              <Button onClick={() => setCopy(ref)} icon={<FaCopy />} />
            </div>
          </Card>
        </div>
      </ContentLayout.Preview>
    </ContentLayout>
  </section>);
}

export default TabSize;