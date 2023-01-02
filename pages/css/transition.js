import { Button, Card, Divider, Select, Slider } from "antd";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import { useEffect, useRef, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { useCopy } from "../../lib/useCopy";
import ColorPicker from "../../components/colorPicker/ColorPicker";
import timingFunction from "../../data/timingFunction";

const Translate = () => {
  const [state, setState] = useState({
    type: 'opacity',
    duration: 0.3,
    delay: 0,
    timeFun: 'ease',
  });
  const [start, setStart] = useState(100);
  const [end, setEnd] = useState(60);
  const [startEnd, setStartEnd] = useState(null);
  const [hover, setHover] = useState(false);
  const [copy, setCopy] = useCopy();
  const ref = useRef();
  const hoverRef = useRef();



  useEffect(() => {
    if (state.type === 'opacity') {
      setStartEnd(<Opacity start={start} setStart={setStart} end={end} setEnd={setEnd} />);
    } else if (state.type === 'background') {
      setStartEnd(<Background start={start} setStart={setStart} />)
    } else if (state.type === 'outline') {
      setStartEnd(<Outline {...state} setState={setState} />)
    } else if (state.type === 'height') {
      setStartEnd(<Height {...state} setState={setState} />)
    } else if (state.type === 'width') {
      setStartEnd(<Width {...state} setState={setState} />)
    }
  }, [state.type]);

  const handleMouseEnter = () => {
    hoverRef.current.style[state.type] = end / 100;
  }

  const handleMouseLeave = () => {
    hoverRef.current.style[state.type] = start / 100;
  }

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
              <Select.Option value='background'>background-color</Select.Option>
              <Select.Option value='outline'>outline</Select.Option>
              <Select.Option value='height'>height</Select.Option>
              <Select.Option value='width'>width</Select.Option>
            </Select>
            <Divider dashed />
            {startEnd !== null && startEnd}
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
                minHeight: 200,
              }}
            >
              <div
                ref={hoverRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                  width: 200,
                  height: 200,
                  background: '#a0a0a0',
                  textAlign: 'center',
                  transition: `${state.type} ${state.duration}s ${state.timeFun} ${state.delay}s`
                }}>
                hover here to preview
              </div>
            </div>
          </Card>
        </div>
        <div>
          <p className="content_title">Code</p>
          <Card>
            <div className="justify-between items-center">
              <code ref={ref}>
              </code>
              <Button onClick={() => setCopy(ref)} icon={<FaCopy />} />
            </div>
          </Card>
        </div>
      </ContentLayout.Preview>
    </ContentLayout>
  </section>);
}


const Opacity = ({ start, end, setStart, setEnd }) => {
  return (<>
    <label htmlFor="start">Start Opacity {start}%</label>
    <Slider id='start' value={start} onChange={e => setStart(e)} />
    <Divider dashed />
    <label htmlFor="end">End Opacity {end}%</label>
    <Slider id='end' value={end} onChange={setEnd} />
  </>)
};

const Background = ({ start, setStart }) => {
  useEffect(() => {
    setStart('#ffff');
  }, []);
  console.log('child', start);
  return (<>
    <h1>Back</h1>
  </>)
};

const Outline = () => {
  return (<>
    <h1>Outline</h1>
  </>)
};

const Height = () => {
  return (<>
    <h1>Height</h1>
  </>)
};

const Width = () => {
  return (<>
    <h1>Width</h1>
  </>)
};

export default Translate;