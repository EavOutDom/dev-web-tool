import { useRef, useState } from "react";
import { useCopy } from "../../lib/useCopy";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import { Button, Card, Input } from "antd";
import { FaCopy } from "react-icons/fa";

export const getServerSideProps = () => {
  return {
    props: {
      meta_title: 'Color Input'
    }
  }
};

const ColorInput = () => {
  const [name, setName] = useState('myColor');
  const [color, setColor] = useState('#000000');
  const [copy, setCopy] = useCopy('');
  const ref = useRef();

  return (<section>
    <ContentLayout back="html" name="Color Input">
      <ContentLayout.Paragraph>
        <p>
          {`<input> elements of type color provide a user interface element that lets a user specify a color, either by using a visual color picker interface or by entering the color into a text field in #rrggbb hexadecimal format.`}
        </p>
        <p>
          {`Only simple colors (without alpha channel) are allowed though CSS colors has more formats, e.g. color names, functional notations and a hexadecimal format with an alpha channel.`}
        </p>
        <p>
          {`The element's presentation may vary substantially from one browser and/or platform to another—it might be a simple textual input that automatically validates to ensure that the color information is entered in the proper format, or a platform-standard color picker, or some kind of custom color picker window.`}
        </p>
      </ContentLayout.Paragraph>
      <ContentLayout.Options>
        <div>
          <p className="content_title">
            Option
          </p>
          <Card>
            <label htmlFor="name">Name</label>
            <Input value={name} id="name" onChange={e => setName(e.target.value)} />
          </Card>
        </div>
      </ContentLayout.Options>
      <ContentLayout.Preview>
        <div>
          <p className="content_title">Preview</p>
          <Card>
            <div style={{ minHeight: 200 }}>
              <input type='color' value={color} onChange={e => setColor(e.target.value)} />
            </div>
          </Card>
        </div>
        <div>
          <p className="content_title">Code</p>
          <Card>
            <div className="justify-between items-center">
              <code ref={ref}>
                {`<input type="input" name="${name}" value="${color}"/>`}
              </code>
              <Button onClick={() => setCopy(ref)} icon={<FaCopy />}></Button>
            </div>
          </Card>
        </div>
      </ContentLayout.Preview>
    </ContentLayout>
  </section>);
}

export default ColorInput;