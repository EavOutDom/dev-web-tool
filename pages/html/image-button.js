import { useRef, useState } from "react";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import { Button, Card, Checkbox, Divider, Input } from "antd";
import { FaCopy } from "react-icons/fa";
import { useCopy } from "../../lib/useCopy";

export const getServerSideProps = async () => {
  return {
    props: {
      meta_title: 'Image Button'
    }
  }
};

const ImageButton = () => {
  const [copy, setCopy] = useCopy('');
  const ref = useRef();
  const [imgUrl, setImgUrl] = useState('https://raw.githubusercontent.com/mdn/learning-area/master/html/forms/image-type-example/login.png');
  const [name, setName] = useState('myButton');
  const [alt, setAlt] = useState('image');
  const [height, setHeight] = useState(35);
  const [width, setWidth] = useState(100);
  const [focus, setFocus] = useState(false);

  return (<section>
    <ContentLayout name={'Image Button'} back="/html">
      <ContentLayout.Paragraph>
        <p>
          {`<input> elements of type image are used to create graphical submit button, i.e. submit buttons that take the form of an image rather than text.`}
        </p>
      </ContentLayout.Paragraph>
      <ContentLayout.Options>
        <div>
          <p className="content_title">Option</p>
          <Card>
            <label htmlFor="url">Image URL</label>
            <Input id="url" value={imgUrl} onChange={e => setImgUrl(e.target.value)} />
            <Divider dashed />
            <label htmlFor="name">Name</label>
            <Input id="name" value={name} onChange={e => setName(e.target.value)} />
            <Divider dashed />
            <label htmlFor="alt">Alt</label>
            <Input id="alt" value={alt} onChange={e => setAlt(e.target.value)} />
            <Divider dashed />
            <label htmlFor="focus" style={{ display: 'block' }}>AutoFocus</label>
            <Checkbox id="focus" onChange={e => setFocus(e.target.checked)} />
            <Divider dashed />
            <label htmlFor="height">Height</label>
            <Input id="height" type="number" value={height} onChange={e => setHeight(e.target.value)} />
            <Divider dashed />
            <label htmlFor="width">Width</label>
            <Input id="width" type="number" value={width} onChange={e => setWidth(e.target.value)} />
          </Card>
        </div>
      </ContentLayout.Options>
      <ContentLayout.Preview>
        <div>
          <p className="content_title">Preview</p>
          <Card className="preview">
            <div>
              <input type='image' src={imgUrl} autoFocus={focus} alt={alt} name={name} height={height} width={width} />
            </div>
          </Card>
        </div>
        <div>
          <p className="content_title">Code</p>
          <Card>
            <div className="justify-between items-center">
              <code ref={ref}>
                {`<input type="image" src="${imgUrl}" alt="${alt}" name="${name}"${focus ? " autoFocus" : ""}${height > 0 ? ` height="${height}"` : ''}${width > 0 ? ` width="${width}"` : ""}/>`}
              </code>
              <Button onClick={() => setCopy(ref)} icon={<FaCopy />} />
            </div>
          </Card>
        </div>
      </ContentLayout.Preview>
    </ContentLayout>
  </section>);
}

export default ImageButton;