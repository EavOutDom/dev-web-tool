import { Card } from "antd";
import ContentLayout from "../../components/contentlayout/ContentLayout";

const BackgroundGradient = () => {
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
          <Card>

          </Card>
        </div>
      </ContentLayout.Options>
      <ContentLayout.Preview>
        <div>
          <p className="content_title">Preview</p>
          <Card></Card>
        </div>
        <div>
          <p className="content_title">Code</p>
          <Card></Card>
        </div>
      </ContentLayout.Preview>
    </ContentLayout>
  </section>);
}

export default BackgroundGradient;