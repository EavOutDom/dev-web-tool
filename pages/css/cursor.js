import { Button, Card, Select } from "antd";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import { useRef, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { useCopy } from "../../lib/useCopy";

export const getServerSideProps = () => {
  return {
    props: {
      meta_title: 'Cursor'
    }
  }
};

const Cursor = () => {
  const [value, setValue] = useState('pointer');
  const [copy, setCopy] = useCopy();
  const ref = useRef();
  return (<section>
    <ContentLayout name='Cursor' back='/css'>
      <ContentLayout.Paragraph>
        <p>
          {`The cursor CSS property sets the mouse cursor, if any, to show when the mouse pointer is over an element.`}
        </p>
        <p>
          {`The cursor setting should inform users of the mouse operations that can be performed at the current location, including: text selection, activating help or context menus, copying content, resizing tables, and so on. You can specify either the type of cursor using a keyword, or load a specific icon to use (with optional fallback images and mandatory keyword as a final fallback).`}
        </p>
      </ContentLayout.Paragraph>
      <ContentLayout.Options>
        <div>
          <p className="content_title">Option</p>
          <Card>
            <label htmlFor="value">Value</label>
            <Select style={{ width: '100%' }} id='value' value={value} onChange={setValue}
              options={[
                { value: 'default', label: 'default' },
                { value: 'pointer', label: 'pointer' },
                { value: 'context-menu', label: 'context-menu' },
                { value: 'help', label: 'help' },
                { value: 'progress', label: 'progress' },
                { value: 'wait', label: 'wait' },
                { value: 'cell', label: 'cell' },
                { value: 'crosshair', label: 'crosshair' },
                { value: 'text', label: 'text' },
                { value: 'vertical-text', label: 'vertical-text' },
                { value: 'alias', label: 'alias' },
                { value: 'copy', label: 'copy' },
                { value: 'move', label: 'move' },
                { value: 'no-drop', label: 'no-drop' },
                { value: 'not-allowed', label: 'not-allowed' },
                { value: 'grab', label: 'grab' },
                { value: 'grabbing', label: 'grabbing' },
                { value: 'all-scroll', label: 'all-scroll' },
                { value: 'col-resize', label: 'col-resize' },
                { value: 'row-resize', label: 'row-resize' },
                { value: 'n-resize', label: 'n-resize' },
                { value: 'e-resize', label: 'e-resize' },
                { value: 's-resize', label: 's-resize' },
                { value: 'w-resize', label: 'w-resize' },
                { value: 'ne-resize', label: 'ne-resize' },
                { value: 'nw-resize', label: 'nw-resize' },
                { value: 'se-resize', label: 'se-resize' },
                { value: 'sw-resize', label: 'sw-resize' },
                { value: 'ew-resize', label: 'ew-resize' },
                { value: 'ns-resize', label: 'ns-resize' },
                { value: 'nesw-resize', label: 'nesw-resize' },
                { value: 'nwse-resize', label: 'nwse-resize' },
                { value: 'zoom-in', label: 'zoom-in' },
                { value: 'zoom-out', label: 'zoom-out' }
              ]} />
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
                backgroundColor: '#a0a0a0',
                cursor: value
              }}
            >
              Move over this element to see the cursor style.
            </div>
          </Card>
        </div>
        <div>
          <p className="content_title">Code</p>
          <Card>
            <div className="justify-between items-center">
              <code ref={ref}>
                curser: {value};
              </code>
              <Button onClick={() => setCopy(ref)} icon={<FaCopy />} />
            </div>
          </Card>
        </div>
      </ContentLayout.Preview>
    </ContentLayout>
  </section>);
}

export default Cursor;