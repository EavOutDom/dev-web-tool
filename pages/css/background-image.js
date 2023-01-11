import { Button, Card, Divider, Input, Select } from "antd";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import ColorPicker from "../../components/colorPicker/ColorPicker";
import { useRef, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { useCopy } from "../../lib/useCopy";

export const getServerSideProps = async () => {
  return {
    props: {
      meta_title: 'Background Image'
    }
  }
};

const BackgroundImage = () => {
  const [state, setState] = useState({
    background_color: '#000000',
    imgUrl: 'https://codetheweb.blog/assets/img/posts/css-advanced-background-images/cover.jpg',
    position: 'center',
    size: 'cover',
    repeat: 'no-repeat',
  });
  const ref = useRef();
  const [copy, setCopy] = useCopy();
  return (<section>
    <ContentLayout back='/css' name='Background Image'>
      <ContentLayout.Paragraph>
        <p>
        </p>
      </ContentLayout.Paragraph>
      <ContentLayout.Options>
        <div>
          <p className="content_title">Options</p>
          <Card>
            <label htmlFor="color">Background Color</label>
            <div id="color" className="items-center justify-between">
              <ColorPicker colorInput width={120} color={state.background_color} onChange={e => setState(p => ({ ...p, background_color: e }))} />
              <span>{state.background_color}</span>
            </div>
            <Divider dashed />
            <label htmlFor="imgUrl">Image URL</label>
            <Input id="imgUrl" value={state.imgUrl} onChange={v => setState(p => ({ ...p, imgUrl: v.target.value }))} />
            <Divider />
            <label htmlFor="position">Position</label>
            <Select style={{ width: '100%' }} id='position' value={state.position} onChange={e => setState(p => ({ ...p, position: e }))}>
              <Select.Option value='center'>center</Select.Option>
              <Select.Option value='center top'>center top</Select.Option>
              <Select.Option value='center bottom'>center bottom</Select.Option>
              <Select.Option value='left center'>left center</Select.Option>
              <Select.Option value='left top'>left top</Select.Option>
              <Select.Option value='left bottom'>left bottom</Select.Option>
              <Select.Option value='right center'>right center</Select.Option>
              <Select.Option value='right top'>right top</Select.Option>
              <Select.Option value='right bottom'>right bottom</Select.Option>
            </Select>
            <Divider />
            <label htmlFor="size">Size</label>
            <Select style={{ width: '100%' }} id='size' value={state.size} onChange={e => setState(p => ({ ...p, size: e }))}>
              <Select.Option value='cover'>cover</Select.Option>
              <Select.Option value='contain'>contain</Select.Option>
              <Select.Option value='auto'>auto</Select.Option>
            </Select>
            <Divider />
            <label htmlFor="repeat">Repeat</label>
            <Select style={{ width: '100%' }} id='repeat' value={state.repeat} onChange={e => setState(p => ({ ...p, repeat: e }))}>
              <Select.Option value='no-repeat'>no-repeat</Select.Option>
              <Select.Option value='repeat'>repeat</Select.Option>
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
                width: '100%',
                backgroundColor: `${state.background_color}`,
                backgroundImage: `url(${state.imgUrl})`,
                backgroundPosition: state.position,
                backgroundSize: state.size,
                backgroundRepeat: state.repeat,
              }}
            />
          </Card>
        </div>
        <div>
          <p className="content_title">Code</p>
          <Card>
            <div className="justify-between">
              <code ref={ref}>background: {state.background_color} url(${state.imgUrl}) {state.position} / {state.size} {state.repeat};</code>
              <Button onClick={() => setCopy(ref)} icon={<FaCopy />} />
            </div>
          </Card>
        </div>
      </ContentLayout.Preview>
    </ContentLayout>
  </section>);
};

export default BackgroundImage;