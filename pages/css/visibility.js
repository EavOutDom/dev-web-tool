import { Button, Card, Select } from "antd";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import { useRef, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { useCopy } from "../../lib/useCopy";

export const getServerSideProps = () => {
  return {
    props: {
      meta_title: 'Visibility'
    }
  }
};

const Visibility = () => {
  const [value, setValue] = useState('visible');
  const ref = useRef('');
  const [copy, setCopy] = useCopy('');
  return (<section>
    <ContentLayout name='Visibility' back="/css" >
      <ContentLayout.Paragraph>
        <p>
          {`The visibility CSS property shows or hides an element without changing the layout of a document. The property can also hide rows or columns in a <table>.`}
        </p>
      </ContentLayout.Paragraph>
      <ContentLayout.Options>
        <div>
          <p className="content_title">Options</p>
          <Card>
            <label htmlFor="v">Visibility</label>
            <Select style={{ width: '100%' }} id='v' value={value} onChange={setValue}>
              <Select.Option value='visible'>visible</Select.Option>
              <Select.Option value='hidden'>hidden</Select.Option>
            </Select>
          </Card>
        </div>
      </ContentLayout.Options>
      <ContentLayout.Preview>
        <div>
          <p className="content_title">Preview</p>
          <Card>
            <div
              style={{
                height: 200,
                background: '#a0a0a0',
                visibility: value
              }}
            >
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, dolores labore. Commodi ex, possimus impedit officiis beatae ad velit eveniet consequuntur quia mollitia? At, corrupti maxime eius alias delectus labore.</p>
            </div>
          </Card>
        </div>
        <div>
          <p className="content_title">Code</p>
          <Card>
            <div className="justify-between items-center">
              <code ref={ref}>
                visibility: {value};
              </code>
              <Button onClick={() => setCopy(ref)} icon={<FaCopy />} />
            </div>
          </Card>
        </div>
      </ContentLayout.Preview>
    </ContentLayout>
  </section>);
}

export default Visibility;