import { Button, Card, Slider } from "antd";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import { useRef, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { useCopy } from "../../lib/useCopy";

export const getServerSideProps = () => {
  return {
    props: {
      meta_title: 'Saturate'
    }
  }
};

const Saturate = () => {
  const [amount, setAmount] = useState(150);
  const [copy, setCopy] = useCopy();
  const ref = useRef();
  return (<section>
    <ContentLayout name='Saturate' back="/css" >
      <ContentLayout.Paragraph>
        <p>
          {`The saturate() CSS function super-saturates or desaturates the input image. Its result is a <filter-function>.`}
        </p>
      </ContentLayout.Paragraph>
      <ContentLayout.Options>
        <div>
          <p className="content_title">Option</p>
          <Card>
            <label htmlFor="saturate">Saturate {amount}%</label>
            <Slider value={amount} onChange={setAmount} id='saturate' max={300} />
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
                filter: `saturate(${amount}%)`
              }}
            />
          </Card>
        </div>
        <div>
          <p className="content_title">Code</p>
          <Card>
            <div className="justify-between items-center">
              <code ref={ref}>
                filter: saturate({amount}%);
              </code>
              <Button onClick={() => setCopy(ref)} icon={<FaCopy />} />
            </div>
          </Card>
        </div>
      </ContentLayout.Preview>
    </ContentLayout>
  </section>);
}

export default Saturate;