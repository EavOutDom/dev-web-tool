import { Button, Card, Divider, Select } from "antd";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import { useRef, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { useCopy } from "../../lib/useCopy";

const ListStyle = () => {
  const [type, setType] = useState('square');
  const [position, setPosition] = useState('inside');
  const [copy, setCopy] = useCopy('');
  const ref = useRef('');
  return (<section>
    <ContentLayout name='List Style' back="/css" >
      <ContentLayout.Paragraph>
        <p>
          {`The list-style CSS shorthand property allows you to set all the list style properties at once.`}
        </p>
      </ContentLayout.Paragraph>
      <ContentLayout.Options>
        <div>
          <p className="content_title">Options</p>
          <Card>
            <label htmlFor="type">Type</label>
            <Select style={{ width: '100%' }} id='type' value={type} onChange={setType}>
              <Select.Option value='none'>none</Select.Option>
              <Select.Option value='square'>square</Select.Option>
              <Select.Option value='disc'>disc</Select.Option>
              <Select.Option value='circle'>circle</Select.Option>
              <Select.Option value='decimal-leading-zero'>decimal-leading-zero</Select.Option>
              <Select.Option value='decimal'>decimal</Select.Option>
              <Select.Option value='lower-roman'>lower-roman</Select.Option>
              <Select.Option value='upper-roman'>upper-roman</Select.Option>
              <Select.Option value='lower-greek'>lower-greek</Select.Option>
              <Select.Option value='lower-latin'>lower-latin</Select.Option>
              <Select.Option value='upper-latin'>upper-latin</Select.Option>
              <Select.Option value='armenian'>armenian</Select.Option>
              <Select.Option value='georgian'>georgian</Select.Option>
              <Select.Option value='lower-alpha'>lower-alpha</Select.Option>
              <Select.Option value='upper-alpha'>upper-alpha</Select.Option>
            </Select>
            <Divider />
            <label htmlFor="position">Position</label>
            <Select style={{ width: '100%' }} id='position' value={position} onChange={setPosition}>
              <Select.Option value='inside'>inside</Select.Option>
              <Select.Option value='outside'>outside</Select.Option>
            </Select>
          </Card>
        </div>
      </ContentLayout.Options>
      <ContentLayout.Preview>
        <div>
          <p className="content_title">Preview</p>
          <Card>
            <ul
              style={{
                listStyleType: type,
                listStylePosition: position
              }}
            >
              <li>list 1</li>
              <li>list 2</li>
              <li>list 3</li>
              <li>list 4</li>
            </ul>
          </Card>
        </div>
        <div>
          <p className="content_title">Code</p>
          <Card>
            <div className="justify-between items-center">
              <code ref={ref}>
                list-style: {type} {position};
              </code>
              <Button onClick={() => setCopy(ref)} icon={<FaCopy />} />
            </div>
          </Card>
        </div>
      </ContentLayout.Preview>
    </ContentLayout>
  </section>);
}

export default ListStyle;