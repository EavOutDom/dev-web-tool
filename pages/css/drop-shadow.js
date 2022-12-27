import { Button, Card, Divider, Slider } from "antd";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import { useRef, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { useCopy } from "../../lib/useCopy";
import ColorPicker from "../../components/colorPicker/ColorPicker";

const DropShadow = () => {
  const [state, setState] = useState({
    color: '#000000',
    hOffset: 5,
    vOffset: 5,
    blur: 10
  });
  const [copy, setCopy] = useCopy();
  const ref = useRef();
  return (<section>
    <ContentLayout name='Drop Shadow' back="/css" >
      <ContentLayout.Paragraph>
        <p>
          {`The drop-shadow() CSS function applies a drop shadow effect to the input image. Its result is a <filter-function>.`}
        </p>
      </ContentLayout.Paragraph>
      <ContentLayout.Options>
        <div>
          <p className="content_title">Options</p>
          <Card>
            <label htmlFor="color">Color</label>
            <div id="color" className="items-center justify-between">
              <ColorPicker colorInput width={120} color={state.color} onChange={e => setState(p => ({ ...p, color: e }))} />
              <span>{state.color}</span>
            </div>
            <Divider dashed />
            <label htmlFor="hOff">Horizontal Offset {state.hOffset}px</label>
            <Slider value={state.hOffset} onChange={e => setState(p => ({ ...p, hOffset: e }))} id='hOff' min={-100} />
            <Divider dashed />
            <label htmlFor="vOff">Vertical Offset {state.vOffset}px</label>
            <Slider value={state.vOffset} onChange={e => setState(p => ({ ...p, vOffset: e }))} id='vOff' min={-100} />
            <Divider dashed />
            <label htmlFor="blur">Blur {state.blur}px</label>
            <Slider value={state.blur} onChange={e => setState(p => ({ ...p, blur: e }))} id='blur' />
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
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundImage: 'url(https://interactive-examples.mdn.mozilla.net/media/examples/firefox-logo.svg)',
                filter: `drop-shadow(${state.hOffset}px ${state.vOffset}px ${state.blur}px ${state.color})`
              }}
            />
          </Card>
        </div>
        <div>
          <p className="content_title">Code</p>
          <Card>
            <div className="justify-between items-center">
              <code ref={ref}>
                filter: drop-shadow({state.hOffset}px {state.vOffset}px {state.blur}px {state.color});
              </code>
              <Button onClick={() => setCopy(ref)} icon={<FaCopy />} />
            </div>
          </Card>
        </div>
      </ContentLayout.Preview>
    </ContentLayout>
  </section>);
}

export default DropShadow;