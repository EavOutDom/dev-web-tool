import { Button, Card, Divider, Input, Select, Slider } from "antd";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import { useRef, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { useCopy } from "../../lib/useCopy";

const BorderImage = () => {
  const borderRef = useRef('');
  const [copyText, setCopy] = useCopy();
  const [state, setState] = useState({
    imgUrl: 'https://mdn.github.io/css-examples/tools/border-image-generator/border-image-1.png',
    outset: 0,
    repeat: 'stretch',
    slice: 30,
    width: 15
  });

  return (<section>
    <ContentLayout name='Border-Image' back='/css' browser={{ chrome: 'yes', edge: 'yes', firefox: 'yes', opera: 'yes', safari: 'yes' }}>
      <ContentLayout.Options>
        <div>
          <p className="content_title">Options</p>
          <Card>
            <label htmlFor="imgUrl">Image URL</label>
            <Input id="imgUrl" value={state.imgUrl} onChange={v => setState(p => ({ ...p, imgUrl: v.target.value }))} />
            <Divider dashed />
            <label htmlFor="outset">Outset {state.outset + 'px'}</label>
            <Slider id="outset" value={state.outset} min={0} max={50} onChange={v => setState(pre => ({ ...pre, outset: v }))} />
            <Divider dashed />
            <label htmlFor="repeat">Repeat</label>
            <Select style={{ width: '100%' }} id="repeat" value={state.repeat} onChange={e => setState(p => ({ ...p, repeat: e }))}>
              <Select.Option value="stretch">stretch</Select.Option>
              <Select.Option value="repeat">repeat</Select.Option>
              <Select.Option value="round">round</Select.Option>
              <Select.Option value="space">space</Select.Option>
            </Select>
            <Divider dashed />
            <label htmlFor="slice">Slice {state.slice}</label>
            <Slider id="slice" value={state.slice} min={0} max={100} onChange={v => setState(pre => ({ ...pre, slice: v }))} />
            <Divider dashed />
            <label htmlFor="width">Width {state.width + 'px'}</label>
            <Slider id="width" value={state.width} min={0} max={50} onChange={v => setState(pre => ({ ...pre, width: v }))} />
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
                borderWidth: state.width,
                borderStyle: 'solid',
                borderImageSource: `url(${state.imgUrl})`,
                borderImageSlice: state.slice,
                borderImageOutset: `${state.outset}px`,
                borderImageRepeat: state.repeat,
                borderImageWidth: `${state.width}px`
              }} />
          </Card>
        </div>
        <div>
          <p className="content_title">Code</p>
          <Card>
            <div className="justify-between">
              <code ref={borderRef}>
                border: {state.width + 'px solid'};{'\n'}
                border-image: url(`${state.imgUrl}`) {state.slice} / {state.width}px / {state.outset}px {state.repeat};
              </code>
              <Button onClick={() => setCopy(borderRef)} icon={<FaCopy />}></Button>
            </div>
          </Card>
        </div>
      </ContentLayout.Preview>
    </ContentLayout>
  </section>);
}

export default BorderImage;