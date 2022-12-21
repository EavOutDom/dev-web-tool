import { Card, Col, Input, Row } from "antd";
import ContentLayout from "../../components/contentlayout/ContentLayout";

const TextColor = () => {
  return (<section>
    <ContentLayout back={'/css'} name='Text Color CSS Generator' browser={{ chrome: 'yes', firefox: 'yes', safari: 'yes', edge: 'yes', opera: 'yes' }}>
      <ContentLayout.Options>
        <div>
          <p className="content_title">Options</p>
          <Card title='Color'>
            
          </Card>
        </div>
      </ContentLayout.Options>
      <ContentLayout.Preview>
        <div>
          <p className="content_title">Preview</p>
        </div>
      </ContentLayout.Preview>
    </ContentLayout>
  </section>);
}

export default TextColor;