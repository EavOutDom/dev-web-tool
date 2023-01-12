import { useRef, useState } from "react";
import { useCopy } from "../../lib/useCopy";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import { Card, Checkbox, Divider, Input } from "antd";

const EmailInput = () => {
  const [name, setName] = useState('myEmail');
  const [placeholder, setPlaceholder] = useState('example@gmail.com');
  const [size, setSize] = useState(30);
  const [checked, setChecked] = useState({
    multiple: false,
    required: false,
    readonly: false
  });
  const [copy, setCopy] = useCopy('');
  const ref = useRef();

  return (<section>
    <ContentLayout back="/html" name="Email Input">
      <ContentLayout.Paragraph>
        <p>
          {`<input> elements of type email are used to let the user enter and edit an email address, or, if the multiple attribute is specified, a list of email addresses.`}
        </p>
      </ContentLayout.Paragraph>
      <ContentLayout.Options>
        <div>
          <p className="content_title">Options</p>
          <Card>
            <label htmlFor="name">Name</label>
            <Input id="name" value={name} onChange={e => setName(e.target.value)} />
            <Divider dashed />
            <label htmlFor="placeholder">Placeholder</label>
            <Input id="placeholder" value={placeholder} onChange={e => setPlaceholder(e.target.value)} />
            <Divider dashed />
            <label htmlFor="size">Size</label>
            <Input id="size" value={size} onChange={e => setSize(e.target.value)} type="number" />
            <Divider dashed />
            <label htmlFor="multiple" style={{ display: 'block' }}>Multiple</label>
            <Checkbox id="multiple" onChange={e => setChecked(p => ({ ...p, multiple: e.target.checked }))} />
            <p>
              <i>
                A Boolean attribute which, if present, indicates that the user can enter a list of multiple email addresses, separated by commas and, optionally, whitespace characters.
              </i>
            </p>
            <Divider dashed />
            <label htmlFor="readonly" style={{ display: 'block' }}>Readonly</label>
            <Checkbox id="readonly" onChange={e => setChecked(p => ({ ...p, readonly: e.target.checked }))} />
            <Divider dashed />
            <label htmlFor="required" style={{ display: 'block' }}>Required</label>
            <Checkbox id="required" onChange={e => setChecked(p => ({ ...p, required: e.target.checked }))} />
          </Card>
        </div>
      </ContentLayout.Options>
      <ContentLayout.Preview>
        <div>
          <p className="content_title">Preview</p>
          <Card className="preview">
            <div>
              <input type='email' name={name} size={size} placeholder={placeholder} multiple={checked.multiple} required={checked.required} readOnly={checked.readonly} />
            </div>
          </Card>
        </div>
        <div>
          <p className="content_title">Code</p>
          <Card>
            <div className="justify-between items-center">
              <pre>
                <code ref={ref}>
                  {`<input type="email" name="${name}"${placeholder ? ` placeholder="${placeholder}"` : ""}${size ? ` size="${size}"` : ""}${checked.required ? ' required' : ''}${checked.readonly ? ' readonly' : ''}${checked.multiple ? ' multiple' : ''}/>`}
                </code>
              </pre>
            </div>
          </Card>
        </div>
      </ContentLayout.Preview>
    </ContentLayout>
  </section>);
}

export default EmailInput;