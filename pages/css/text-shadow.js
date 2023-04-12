import { Button, Card, Col, Collapse, Divider, Row, Select, Slider } from "antd";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import { useRef, useState } from "react";
import { AiFillDelete } from 'react-icons/ai';
import ColorPicker from "../../components/colorPicker/ColorPicker";
import { FaCopy } from "react-icons/fa";
import { useCopy } from "../../lib/useCopy";

export const getServerSideProps = () => {
  return {
    props: {
      meta_title: 'Text Shadow'
    }
  }
};

const TextShadow = () => {
  const shadowRef = useRef('');
  const [copyText, setCopy] = useCopy();
  const [lists, setLists] = useState([
    {
      id: 1,
      color: '#000000',
      hOffset: 5,
      vOffset: 5,
      blur: 10,
    }
  ]);

  function textShadow() {
    const newArr = [...lists];
    const arr = [];
    newArr.forEach(object => {
      arr.push(object.hOffset + 'px ' + object.vOffset + 'px ' + object.blur + 'px ' + object.color);
    });
    return arr.join(', ');
  };

  return (<section>
    <ContentLayout back='/css' name='Text Shadow'>
      <ContentLayout.Paragraph>
        <p>
          {`The text-shadow CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and any of its decorations. Each shadow is described by some combination of X and Y offsets from the element, blur radius, and color.`}
        </p>
      </ContentLayout.Paragraph>
      <ContentLayout.Options>
        <div>
          <p className="content_title">Options</p>
          <Card>
            <ListOptionsShadow lists={lists} setLists={setLists} />
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
                width: '100%',
                textShadow: textShadow()
              }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </Card>
        </div>
        <div>
          <p className="content_title">Code</p>
          <Card>
            <div className="justify-between items-center">
              <code ref={shadowRef}>
                text-shadow: {textShadow()};
              </code>
              <Button onClick={() => setCopy(shadowRef)} icon={<FaCopy />} />
            </div>
          </Card>
        </div>
      </ContentLayout.Preview>
    </ContentLayout>
  </section>);
};

const ListOptionsShadow = ({ lists, setLists }) => {

  const handleChange = (value, id, obj) => {
    const tmp = [...lists].map(item => {
      if (item.id === id) item[obj] = value;
      return item;
    });
    setLists(tmp);
  };

  const handleAddShadow = () => {
    const newObj = {
      id: Date.now(),
      inset: 0,
      color: '#000000',
      hOffset: 5,
      vOffset: 5,
      blur: 10,
      spread: 1
    };
    const newArr = [...lists, newObj];
    setLists(newArr);
  };

  const getExtra = (id) => (
    <Button type="text" icon={<AiFillDelete size={18}
      onClick={e => {
        e.stopPropagation();
        const tmp = [...lists].filter(item => item.id !== id);
        setLists(tmp);
      }}
    />}></Button>

  );

  return (<div>
    <Collapse ghost defaultActiveKey={[lists[0].id]}>
      {lists.map((list, index) => <Collapse.Panel key={list.id} header={`Text Shadow #${index + 1}`} extra={lists.length > 1 ? getExtra(list.id) : ''}>
        <div id="color" className="items-center justify-between" style={{ gap: 10, width: '100%' }}>
          <ColorPicker colorInput width={120} color={list.color} onChange={value => handleChange(value, list.id, 'color')} />
          <span>{list.color}</span>
        </div>
        <Divider dashed />
        <label htmlFor="hOffset">Horizontal Offset {list.hOffset + 'px'}</label>
        <Slider id="hOffset" value={list.hOffset} min={-100} max={100} onChange={v => handleChange(v, list.id, 'hOffset')} />
        <Divider dashed />
        <label htmlFor="vOffset">Vertical Offset {list.vOffset + 'px'}</label>
        <Slider id="vOffset" value={list.vOffset} min={-100} max={100} onChange={v => handleChange(v, list.id, 'vOffset')} />
        <Divider dashed />
        <label htmlFor="blur">Blur {list.blur + 'px'}</label>
        <Slider id="blur" value={list.blur} onChange={v => handleChange(v, list.id, 'blur')} />
      </Collapse.Panel>)}
    </Collapse>
    <Divider dashed />
    <Button type="primary" block onClick={handleAddShadow}>Add Shadow</Button>
  </div>)
};

export default TextShadow;