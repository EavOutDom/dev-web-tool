import { useRef, useState } from "react";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import { useCopy } from "../../lib/useCopy";
import { Button, Card, Divider, Input } from "antd";
import { FaCopy } from "react-icons/fa";

export const getServerSideProps = async () => {
  return {
    props: {
      meta_title: 'Password Input'
    }
  }
}

const PasswordInput = () => {
  const [copy, setCopy] = useCopy('');
  const ref = useRef();
  const [name, setName] = useState('myPassword');
  const [placeholder, setPlaceholder] = useState('password');
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(10);


  return (<section>
    <ContentLayout name='Password Input' back="/html" >
      <ContentLayout.Paragraph>
        <p>
          {`<input/> elements of type password provide a way for the user to securely enter a password.`}
        </p>
        <p>
          {`The element is presented as a one-line plain text editor control 
          in which the text is obscured so that it cannot be read, usually by replacing each character with a symbol such as the asterisk ("*") or a dot ("•"). 
          This character will vary depending on the user agent and operation system.`}
        </p>
      </ContentLayout.Paragraph>
      <ContentLayout.Options>
        <div>
          <p className="content_title">Option</p>
          <Card>
            <label htmlFor="name">Name</label>
            <Input id="name" value={name} onChange={e => setName(e.target.value)} />
            <Divider dashed />
            <label htmlFor="placeholder">Placeholder</label>
            <Input id="placeholder" value={placeholder} onChange={e => setPlaceholder(e.target.value)} />
            <Divider dashed />
            <label htmlFor="min">minlength</label>
            <Input id="min" type="number" value={min} onChange={e => setMin(e.target.value)} />
            <Divider dashed />
            <label htmlFor="max">maxlength</label>
            <Input id="max" type="number" value={max} onChange={e => setMax(e.target.value)} />
          </Card>
        </div>
      </ContentLayout.Options>
      <ContentLayout.Preview>
        <div>
          <p className="content_title">Preview</p>
          <Card className="preview">
            <div>
              <input type='password' placeholder={placeholder} name={name} minLength={min} maxLength={max} />
            </div>
          </Card>
        </div>
        <div>
          <p className="content_title">Code</p>
          <Card>
            <div className="justify-between items-center">
              <code ref={ref}>
                {`<input type="password" name="${name}" minlength="${min}" maxlength="${max}""${placeholder ? ` placeholder="${placeholder}"` : ''}/>`}
              </code>
              <Button onClick={() => setCopy(ref)} icon={<FaCopy />} />
            </div>
          </Card>
        </div>
      </ContentLayout.Preview>
    </ContentLayout>
  </section>)
};

export default PasswordInput;