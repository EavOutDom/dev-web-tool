import { Button, Card, Divider, Select, Slider } from "antd";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import { useContext, useEffect, useRef, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { useCopy } from "../../lib/useCopy";
import ColorPicker from "../../components/colorPicker/ColorPicker";
import timingFunction from "../../data/timingFunction";
import { AppContext } from "../../store/AppContext";

const Translate = () => {
  const { appState: { start_tr, end_tr }, appDispatch } = useContext(AppContext);

  const [state, setState] = useState({
    type: 'opacity',
    duration: 0.3,
    delay: 0,
    timeFun: 'ease',
  });
  const [startEnd, setStartEnd] = useState(null);
  const [copy, setCopy] = useCopy();
  const ref = useRef();
  const pseudoRef = useRef();
  const hoverRef = useRef();
  const _hoverRef = useRef();

  useEffect(() => {
    if (state.type === 'opacity') {
      hoverRef.current.style.opacity = start_tr / 100;
    }
  }, [start_tr]);

  useEffect(() => {
    if (state.type === 'opacity') {
      setStartEnd(<Opacity />);
    } else if (state.type === 'background') {
      setStartEnd(<Background />)
    } else if (state.type === 'outline') {
      setStartEnd(<Outline />)
    } else if (state.type === 'height') {
      setStartEnd(<Height />)
    } else if (state.type === 'width') {
      setStartEnd(<Width />)
    }
  }, [state.type]);

  const onEnter = () => {
    if (state.type === 'opacity') {
      hoverRef.current.style[state.type] = end_tr / 100;
    }
  };

  const onLeave = () => {
    if (state.type === 'opacity') {
      hoverRef.current.style[state.type] = start_tr / 100;
    }
  };

  useEffect(() => {
    const hover = hoverRef.current;
    if (hover) {
      _hoverRef.current = hover;
      hover.addEventListener("mouseenter", onEnter);
      hover.addEventListener("mouseleave", onLeave);
    }
    return () => {
      if (_hoverRef.current) {
        _hoverRef.current.removeEventListener("mouseenter", onEnter);
        _hoverRef.current.removeEventListener("mouseleave", onLeave);
      }
    };
  }, [start_tr, end_tr]);

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
            {start_tr === null ? <Opacity /> : startEnd}
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
          <p>Copy this to the main element</p>
          <Card>
            <div className="justify-between">
              <pre style={{ whiteSpace: 'pre-wrap' }}>
                <code ref={ref}>
                  {`.element {
  ${state.type}: ${start_tr / 100};
  transition: ${state.type} ${state.duration}s ${state.timeFun} ${state.delay}s;                   
}`}
                </code>
              </pre>
              <Button onClick={() => setCopy(ref)} icon={<FaCopy />} />
            </div>
          </Card>
          <p>Copy this to the transitioned element or pseudo-element</p>
          <Card>
            <div className="justify-between">
              <pre style={{ whiteSpace: 'pre-wrap' }}>
                <code ref={pseudoRef}>
                  {`.element:hover {
  ${state.type}: ${end_tr / 100};
}`}
                </code>
              </pre>
              <Button onClick={() => setCopy(pseudoRef)} icon={<FaCopy />} />
            </div>
          </Card>
        </div>
      </ContentLayout.Preview>
    </ContentLayout>
  </section>);
}


const Opacity = () => {
  const { appState: { start_tr, end_tr }, appDispatch } = useContext(AppContext);
  useEffect(() => {
    appDispatch({ type: 'START_TRANSITION', payload: 100 });
    appDispatch({ type: 'END_TRANSITION', payload: 60 });
  }, [])

  return (<>
    <label htmlFor="start">Start Opacity {start_tr}%</label>
    <Slider id='start' value={start_tr} onChange={e => appDispatch({ type: 'START_TRANSITION', payload: e })} />
    <Divider dashed />
    <label htmlFor="end">End Opacity {end_tr}%</label>
    <Slider id='end' value={end_tr} onChange={e => appDispatch({ type: 'END_TRANSITION', payload: e })} />
  </>)
};

const Background = () => {
  const { appState: { start_tr, end_tr }, appDispatch } = useContext(AppContext);
  useEffect(() => {
    appDispatch({ type: 'START_TRANSITION', payload: '#ddd' });
    appDispatch({ type: 'END_TRANSITION', payload: '#000' });
  }, [])
  return (<>
    <h1>{start_tr} {end_tr}</h1>
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