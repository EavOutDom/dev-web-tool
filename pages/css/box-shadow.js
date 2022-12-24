import { Button, Card, Collapse, Divider, Select, Slider } from "antd";
import ContentLayout from "../../components/contentLayout/ContentLayout";
import { useState } from "react";
import { AiFillDelete } from 'react-icons/ai';
import ColorPicker from "../../components/colorPicker/ColorPicker";

const BoxShadow = () => {
  const [lists, setLists] = useState([
    {
      id: 1,
      inset: 0,
      color: '#000000',
      hOffset: 5,
      vOffset: 5,
      blur: 10,
      spread: 1
    }
  ]);

  function boxShadow() {
    const newArr = [...lists];
    const arr = [];
    newArr.forEach(object => {
      arr.push(object.hOffset + 'px ' + object.vOffset + 'px ' + object.blur + 'px ' + object.spread + 'px ' + object.color + (object.inset === 1 ? ' inset' : ''));
    });
    return arr.join(', ');
  };

  return (<section>
    <ContentLayout back='/css' name='Box Shadow' browser={{ chrome: 'yes', edge: 'yes', firefox: 'yes', opera: 'yes', safari: 'yes' }}>
      <ContentLayout.Paragraph>
        <p>
          {`The box-shadow CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.`}
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
                background: '#a0a0a0',
                boxShadow: boxShadow()
              }}
            />
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
      {lists.map((list, index) => <Collapse.Panel key={list.id} header={`Box Shadow #${index + 1}`} extra={lists.length > 1 ? getExtra(list.id) : ''}>
        <label htmlFor="inset">Inset</label>
        <Select style={{ width: '100%' }} id='inset' value={list.inset} onChange={value => handleChange(value, list.id, 'inset')}>
          <Select.Option value={0}>No</Select.Option>
          <Select.Option value={1}>Yes</Select.Option>
        </Select>
        <Divider dashed />
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
        <Divider dashed />
        <label htmlFor="spread">Spread {list.spread + 'px'}</label>
        <Slider id="spread" value={list.spread} onChange={v => handleChange(v, list.id, 'spread')} />
      </Collapse.Panel>)}
    </Collapse>
    <Divider dashed />
    <Button type="primary" block onClick={handleAddShadow}>Add Shadow</Button>
  </div>)
};

export default BoxShadow;