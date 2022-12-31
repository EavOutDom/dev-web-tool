import { Button, Card, Divider, Select, Slider } from "antd";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import { useEffect, useRef, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { useCopy } from "../../lib/useCopy";
import ColorPicker from "../../components/colorPicker/ColorPicker";
import timingFunction from "../../data/timingFunction";

const Translate = () => {
  const [x, setX] = useState(1)
  const [y, setY] = useState(1)
  const [state, setState] = useState({
    type: 'opacity',
    duration: 0.3,
    delay: 0,
    timeFun: 'ease',
  });
  const [copy, setCopy] = useCopy();
  const ref = useRef();

  useEffect(() => {
    switch (state.type) {
      case 'opacity':
        setState(p => ({ ...p, start: '100', end: '60' }));
      case 'background-color':
        setState(p => ({ ...p, start: '#ff3434', end: '#ffe1d5' }));
      default:
        setState(p => ({ ...p, start: '100', end: '60' }));
    }
  }, [state.type]);

  const findValue = (arr, data) => arr.find(i => i.value === data).data;

  return (<section>
    <ContentLayout name='Transition' back="/css" >
      <ContentLayout.Paragraph>
        <p>
          {`The transition CSS property is a shorthand property for transition-property, transition-duration, transition-timing-function, and transition-delay.`}
        </p>
      </ContentLayout.Paragraph>
      <ContentLayout.Options>
        <div>
          <p className="content_title">Option</p>
          <Card>
            <label htmlFor="type">Type</label>
            <Select id="type" style={{ width: '100%' }} value={state.type} onChange={e => setState(p => ({ ...p, type: e }))}>
              <Select.Option value='opacity'>opacity</Select.Option>
              <Select.Option value='background-color'>background-color</Select.Option>
              <Select.Option value='outline'>outline</Select.Option>
              <Select.Option value='height'>height</Select.Option>
              <Select.Option value='width'>width</Select.Option>
            </Select>
            <Divider dashed />
            <StartToEnd state={state} setState={setState} />
            <Divider dashed />
            <label htmlFor="duration">Duration ({state.duration}s)</label>
            <Slider id="duration" step={0.1} max={5} value={state.duration} onChange={e => setState(p => ({ ...p, duration: e }))} />
            <Divider dashed />
            <label htmlFor="function">Timing Function</label>
            <Select
              id="function"
              style={{ width: '100%' }}
              value={state.timeFun}
              onChange={e => setState(p => ({ ...p, timeFun: e }))}
              options={timingFunction}
            />
            <Divider dashed />
            <label htmlFor="delay">Delay ({state.delay}s)</label>
            <Slider id="delay" step={0.1} max={5} value={state.delay} onChange={e => setState(p => ({ ...p, delay: e }))} />
          </Card>
        </div>
      </ContentLayout.Options>
      <ContentLayout.Preview>
        <div>
          <p className="content_title">Preview</p>
          <Card>
            <div
              align='middle'
              style={{
                height: 200,
              }}
            >
              <div style={{
                height: 200,
                width: 200,
                background: '#a0a0a0',
                textAlign: 'center',
                transform: `translate(${x}px, ${y}px)`,
              }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos natus sed vel error distinctio nemo explicabo perferendis, voluptates ipsa consequatur deleniti debitis. Itaque vitae expedita consequuntur recusandae delectus, voluptatum id.
              </div>
            </div>
          </Card>
        </div>
        <div>
          <p className="content_title">Code</p>
          <Card>
            <div className="justify-between items-center">
              <code ref={ref}>
                transform: {`translate(${x}px, ${y})px`};
              </code>
              <Button onClick={() => setCopy(ref)} icon={<FaCopy />} />
            </div>
          </Card>
        </div>
      </ContentLayout.Preview>
    </ContentLayout>
  </section>);
}

const StartToEnd = ({ state, setState }) => {
  if (state.type === 'opacity') {
    return <div>
      <label htmlFor="start">Start</label>
      <Slider id="start" value={state.start} tooltip={{ open: state.start, placement: 'right' }} onChange={e => setState(p => ({ ...p, start: e }))} />
      <Divider dashed />
      <label htmlFor="end">End</label>
      <Slider id="end" value={state.end} tooltip={{ open: state.end, placement: 'right' }} onChange={e => setState(p => ({ ...p, end: e }))} />
    </div>
  }
  else if (state.type === 'background-color') {
    return <>
      <label htmlFor="start">Start</label>
      <div id="start" className="items-center justify-between">
        <ColorPicker colorInput width={120} color={state.start} onChange={e => setState(p => ({ ...p, start: e }))} />
        <span>{state.start}</span>
      </div>
    </>
  }
}

export default Translate;