import { Button, Card, Checkbox, Divider, Input } from "antd";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import { useRef, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { useCopy } from "../../lib/useCopy";

export const getServerSideProps = async () => {
  return {
    props: {
      meta_title: 'File Input'
    }
  }
};

const FileInput = () => {
  const [name, setName] = useState('myFile');
  const [multiple, setMultiple] = useState(false);
  const [accept, setAccept] = useState('image/png, image/jpeg');
  const [copy, setCopy] = useCopy('');
  const ref = useRef();

  return (<section>
    <ContentLayout name='File Input' back='/html'>
      <ContentLayout.Paragraph>
        <p>
          {`<input> elements with type="file" let the user choose one or more files from their device storage. Once chosen, the files can be uploaded to a server using form submission, or manipulated using JavaScript code and the File API.`}
        </p>
      </ContentLayout.Paragraph>
      <ContentLayout.Options>
        <div>
          <p className="content_title">Options</p>
          <Card>
            <label htmlFor="name">Name</label>
            <Input id="name" value={name} onChange={e => setName(e.target.value)} />
            <Divider dashed />
            <label htmlFor="multiple" style={{ display: 'block' }}>Multiple</label>
            <Checkbox id="multiple" onChange={e => setMultiple(e.target.checked)} />
            <Divider dashed />
            <label htmlFor="accept">Accept file</label>
            <Input id="accept" value={accept} onChange={e => setAccept(e.target.value)} />
            <p><i>A string containing one or more unique file type specifiers, separated by commas. These could be file extensions (including the dot, like .jpg, .png, .pdf), or MIME type strings with no extensions, audio/* (any audio file), video/* (any video file), image/* (any image file). If left empty, all file types are accepted.</i></p>
          </Card>
        </div>
      </ContentLayout.Options>
      <ContentLayout.Preview>
        <div>
          <p className="content_title">Preview</p>
          <Card className="preview">
            <div>
              <input type='file' name={name} multiple={multiple} accept={accept} />
            </div>
          </Card>
        </div>
        <div>
          <p className="content_title">Code</p>
          <Card>
            <div className="justify-between items-center">
              <code ref={ref}>
                {`<input type="file" name="${name}" accept="${accept}"${multiple ? " multiple" : ""}/>`}
              </code>
              <Button onClick={() => setCopy(ref)} icon={<FaCopy />} />
            </div>
          </Card>
        </div>
      </ContentLayout.Preview>
    </ContentLayout>
  </section>);
}

export default FileInput;