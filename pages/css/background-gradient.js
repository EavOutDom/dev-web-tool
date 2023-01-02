import React, { useLayoutEffect, useRef } from 'react';
import { Button, Card } from "antd";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import ColorPicker from 'react-best-gradient-color-picker';
import { useState } from "react";
import { FaCopy } from 'react-icons/fa';
import { useCopy } from '../../lib/useCopy';

const BackgroundGradient = () => {
  const [color, setColor] = useState('linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)');
  const [copy, setCopy] = useCopy();
  const [width, setWidth] = useState(0);
  const ref = useRef();
  const widthRef = useRef(null);

  useLayoutEffect(() => {
    function updateSize() {
      setWidth(widthRef.current.offsetWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (<section>
    <ContentLayout back='/css' name='Background Gradient'>
      <ContentLayout.Paragraph>
        <p>
          {`CSS gradients let you display smooth transitions between two or more specified colors.`}
        </p>
      </ContentLayout.Paragraph>
      <ContentLayout.Options>
        <div>
          <p className="content_title">Options</p>
          <Card ref={widthRef} bodyStyle={{ padding: '24px 1px' }}>
            <div align='middle'>
              <ColorPicker value={color} onChange={setColor} width={width > 300 ? 300 : width - 30} hideControls={width > 265 ? false : true} />
            </div>
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
                background: color
              }}
            />
          </Card>
        </div>
        <div>
          <p className="content_title">Code</p>
          <Card>
            <div className="justify-between items-center">
              <code ref={ref}>
                background: {color};
              </code>
              <Button onClick={() => setCopy(ref)} icon={<FaCopy />} />
            </div>
          </Card>
        </div>
      </ContentLayout.Preview>
    </ContentLayout>
  </section>);
}

export default BackgroundGradient;