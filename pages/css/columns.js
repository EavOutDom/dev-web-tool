import { Button, Card, Col, Row, Slider } from "antd";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import { useRef, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { useCopy } from "../../lib/useCopy";

export const getServerSideProps = () => {
  return {
    props: {
      meta_title: 'Columns'
    }
  }
};

const Columns = () => {
  const [number, setNumber] = useState(1);
  const [copy, setCopy] = useCopy();
  const ref = useRef();
  return (<section>
    <ContentLayout name='Columns' back="/css" >
      <ContentLayout.Paragraph>
        <p>
          {`The column-count CSS property breaks an element's content into the specified number of columns.`}
        </p>
      </ContentLayout.Paragraph>
      <ContentLayout.Options>
        <div>
          <p className="content_title">Option</p>
          <Card>
            <label htmlFor="number">Number of columns {number}</label>
            <Slider value={number} onChange={setNumber} id='number' min={1} max={4} />
          </Card>
        </div>
      </ContentLayout.Options>
      <ContentLayout.Preview>
        <div>
          <p className="content_title">Preview</p>
          <Card>
            <div
              style={{
                columnCount: number
              }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem nobis a reiciendis, illo asperiores soluta quisquam neque vero, aliquid quos impedit assumenda alias ut earum? Eaque consectetur sint repellat dolorem.
            </div>
          </Card>
        </div>
        <div>
          <p className="content_title">Code</p>
          <Card>
            <div className="justify-between items-center">
              <code ref={ref}>
                column-count: {number};
              </code>
              <Button onClick={() => setCopy(ref)} icon={<FaCopy />} />
            </div>
          </Card>
        </div>
      </ContentLayout.Preview>
    </ContentLayout>
    <div align='middle'>
      <h1>CSS column-count example</h1>
      <Row gutter={[24, 24]}>
        <Col xs={24} md={12}>
          <Card title='HTML'>
            <div align='left'>
              <pre>
                <code>
                  {`<p class='columns'>
  This is a bunch of text split into three columns using the CSS "column-count" property. The text is equally distributed over the columns.
</p>`}
                </code>
              </pre>
            </div>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title='CSS'>
            <pre>
              <code>
                <div align='left'>
                  {`.columns {
  column-count: 3;
}`}
                </div>
              </code>
            </pre>
          </Card>
        </Col>
        <div align='middle'>
          <Col xs={24} md={12}>
            <Card title='result'>
              <p style={{ columnCount: 3 }}>This is a bunch of text split into three columns using the CSS `column-count` property. The text is equally distributed over the columns.</p>
            </Card>
          </Col>
        </div>
      </Row>
    </div>
  </section >);
}

export default Columns;