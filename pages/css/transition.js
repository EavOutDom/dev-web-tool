import { Button, Card, Divider, Select, Slider } from "antd";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import { useContext, useEffect, useRef, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { useCopy } from "../../lib/useCopy";
import ColorPicker from "../../components/colorPicker/ColorPicker";
import timingFunction from "../../data/timingFunction";
import { AppContext } from "../../context/AppContext";

export const getServerSideProps = () => {
  return {
    props: {
      meta_title: 'Transition'
    }
  }
};

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

  const defaultProperties = {
    opacity: 1,
    background: '#a0a0a0',
    height: 50,
    height: '200px',
    width: '200px',
  }
  useEffect(() => {
    for (const prop in defaultProperties) {
      if (state.type === prop) {
        if (state.type === 'height' || state.type === 'width') {
          hoverRef.current.style[prop] = start_tr + 'px';
        }
        hoverRef.current.style[prop] = start_tr;
      } else {
        hoverRef.current.style[prop] = defaultProperties[prop];
      }
    }
  }, [start_tr]);

  useEffect(() => {
    if (state.type === 'opacity') {
      setStartEnd(<Opacity />);
    } else if (state.type === 'background') {
      setStartEnd(<Background />)
    } else if (state.type === 'height') {
      setStartEnd(<Height />)
    } else if (state.type === 'width') {
      setStartEnd(<Width />)
    }
  }, [state.type]);

  const onEnter = () => {
    if (state.type === 'height' || state.type === 'width') {
      hoverRef.current.style[state.type] = end_tr + 'px';
    }
    hoverRef.current.style[state.type] = end_tr;
  };

  const onLeave = () => {
    if (state.type === 'height' || state.type === 'width') {
      hoverRef.current.style[state.type] = start_tr + 'px';
    }
    hoverRef.current.style[state.type] = start_tr;

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
  ${state.type}: ${start_tr + ((state.type === 'height' || state.type === 'width') && 'px')};
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
  ${state.type}: ${end_tr + ((state.type === 'height' || state.type === 'width') && 'px')};
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
    appDispatch({ type: 'START_TRANSITION', payload: 1 });
    appDispatch({ type: 'END_TRANSITION', payload: 0.6 });
  }, [])

  return (<>
    <label htmlFor="start">Start Opacity {start_tr}</label>
    <Slider id='start' value={start_tr} step={0.01} max={1} onChange={e => appDispatch({ type: 'START_TRANSITION', payload: e })} />
    <Divider dashed />
    <label htmlFor="end">End Opacity {end_tr}</label>
    <Slider id='end' value={end_tr} step={0.01} max={1} onChange={e => appDispatch({ type: 'END_TRANSITION', payload: e })} />
  </>)
};

const Background = () => {
  const { appState: { start_tr, end_tr }, appDispatch } = useContext(AppContext);
  useEffect(() => {
    appDispatch({ type: 'START_TRANSITION', payload: '#833ab4' });
    appDispatch({ type: 'END_TRANSITION', payload: '#fd1d1d' });
  }, []);

  const handleChangeStartColor = (value) => {
    appDispatch({ type: 'START_TRANSITION', payload: value });
  };

  const handleChangeEndColor = (e) => {
    appDispatch({ type: 'END_TRANSITION', payload: e });
  };

  return (<>
    <label htmlFor="start">Start Color</label>
    <div className="items-center justify-between" style={{ gap: 10 }}>
      {typeof start_tr === 'string' && <ColorPicker colorInput color={start_tr} onChange={handleChangeStartColor} />}
      <label>{start_tr}</label>
    </div>
    <Divider dashed />
    <label htmlFor="end">End Color</label>
    <div className="items-center justify-between" style={{ gap: 10 }}>
      {typeof end_tr === 'string' && <ColorPicker colorInput color={end_tr} onChange={handleChangeEndColor} />}
      <label>{end_tr}</label>
    </div>
  </>)
};

const Height = () => {
  const { appState: { start_tr, end_tr }, appDispatch } = useContext(AppContext);
  useEffect(() => {
    appDispatch({ type: 'START_TRANSITION', payload: '100' });
    appDispatch({ type: 'END_TRANSITION', payload: '200' });
  }, []);

  const handleChangeStartColor = (value) => {
    appDispatch({ type: 'START_TRANSITION', payload: value });
  };

  const handleChangeEndColor = (e) => {
    appDispatch({ type: 'END_TRANSITION', payload: e });
  };

  return (<>
    <label htmlFor="start">Start Height {start_tr}px</label>
    <Slider id="start" max={400} value={start_tr} onChange={handleChangeStartColor} />
    <Divider dashed />
    <label htmlFor="start">End Height {end_tr}px</label>
    <Slider id="start" max={400} value={end_tr} onChange={handleChangeEndColor} />
  </>)
};

const Width = () => {
  const { appState: { start_tr, end_tr }, appDispatch } = useContext(AppContext);
  useEffect(() => {
    appDispatch({ type: 'START_TRANSITION', payload: '200' });
    appDispatch({ type: 'END_TRANSITION', payload: '300' });
  }, []);

  const handleChangeStartColor = (value) => {
    appDispatch({ type: 'START_TRANSITION', payload: value });
  };

  const handleChangeEndColor = (e) => {
    appDispatch({ type: 'END_TRANSITION', payload: e });
  };

  return (<>
    <label htmlFor="start">Start Width {start_tr}px</label>
    <Slider id="start" max={400} value={start_tr} onChange={handleChangeStartColor} />
    <Divider dashed />
    <label htmlFor="start">End Wight {end_tr}px</label>
    <Slider id="start" max={400} value={end_tr} onChange={handleChangeEndColor} />
  </>)
};

export default Translate;