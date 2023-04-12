import { useRef, useState } from "react";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import { useCopy } from "../../lib/useCopy";
import { Button, Card, Checkbox, Divider, Input } from "antd";
import { FaCopy } from "react-icons/fa";

export const getServerSideProps = async () => {
  return {
    props: {
      meta_title: 'Search Input'
    }
  }
}

const SearchInput = () => {
  const [copy, setCopy] = useCopy('');
  const ref = useRef();
  const [name, setName] = useState('mySearch');
  const [placeholder, setPlaceholder] = useState('search');
  const [spellcheck, setSpellcheck] = useState(true);


  return (<section>
    <ContentLayout name='Search Input' back="/html" >
      <ContentLayout.Paragraph>
        <p>
          {`<input> elements of type search are text fields designed for the user to enter search queries into. These are functionally identical to text inputs, but may be styled differently by the user agent.`}
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
            <label htmlFor="spellCheck" style={{ display: 'block' }}>Spellcheck</label>
            <Checkbox id="spellcheck" onChange={(e) => setSpellcheck(e.target.checked)} value={spellcheck} />
          </Card>
        </div>
      </ContentLayout.Options>
      <ContentLayout.Preview>
        <div>
          <p className="content_title">Preview</p>
          <Card className="preview">
            <div>
              <input type='search' placeholder={placeholder} name={name} spellCheck={spellcheck} />
            </div>
          </Card>
        </div>
        <div>
          <p className="content_title">Code</p>
          <Card>
            <div className="justify-between items-center">
              <code ref={ref}>
                {`<input type="password" name="${name}"${placeholder ? ` placeholder="${placeholder}"` : ''} ${spellcheck ? 'spellcheck' : ''}/>`}
              </code>
              <Button onClick={() => setCopy(ref)} icon={<FaCopy />} />
            </div>
          </Card>
        </div>
      </ContentLayout.Preview>
    </ContentLayout>
  </section>)
};

export default SearchInput;