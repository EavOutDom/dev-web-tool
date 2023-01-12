import { Button, Card, Checkbox, Divider, Input, Select } from "antd";
import ContentLayout from "../../components/contentlayout/ContentLayout";
import { useRef, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { useCopy } from "../../lib/useCopy";
import moment, { months } from "moment/moment";

export const getServerSideProps = () => {
  return {
    props: {
      meta_title: 'Date & Time Input'
    }
  }
};

const DateTime = () => {
  let date = new Date();
  let currentDate = date.toJSON().slice(0, 10);
  let currentTime = ('0' + date.getHours()).slice(-2) + ':' + date.getMinutes();
  let startDate = new Date(date.getFullYear(), 0, 1);
  let days = Math.floor((date - startDate) / (24 * 60 * 60 * 1000));
  let currentWeek = date.getFullYear() + "-W" + ('0' + Math.ceil(days / 7)).slice(-2);
  let currentMonth = date.getFullYear() + '-' + ('0' + moment(moment(), 'YYYY/MM/DD').format('M')).slice(-2);
  let currentDateLocal = moment().toISOString().slice(0, -8);

  const [state, setState] = useState({
    type: 'time',
    default: currentTime,
    name: 'myDate'
  })
  const [copy, setCopy] = useCopy('');
  const ref = useRef();

  const handleChangeType = (e) => {
    setState(p => ({ ...p, type: e }));
    switch (e) {
      case 'time':
        setState(p => ({ ...p, default: currentTime }));
        break;
      case 'date':
        setState(p => ({ ...p, default: currentDate }));
        break;
      case 'datetime-local':
        setState(p => ({ ...p, default: currentDateLocal }));
        break;
      case 'week':
        setState(p => ({ ...p, default: currentWeek }));
        break;
      case 'month':
        setState(p => ({ ...p, default: currentMonth }));
        break;
    }

  };

  return (<section>
    <ContentLayout back="/html" name='Date & Time Input'>
      <ContentLayout.Paragraph>
        <p>
          {``}
        </p>
      </ContentLayout.Paragraph>
      <ContentLayout.Options>
        <div>
          <p className="content_title">Option</p>
          <Card>
            <label htmlFor="type">Type</label>
            <Select style={{ width: '100%' }} id="type" value={state.type} onChange={handleChangeType}>
              <Select.Option value='time'>time</Select.Option>
              <Select.Option value='date'>date</Select.Option>
              <Select.Option value='datetime-local'>datetime-local</Select.Option>
              <Select.Option value='week'>week</Select.Option>
              <Select.Option value='month'>month</Select.Option>
            </Select>
            <Divider dashed />
            <label htmlFor="name">Name</label>
            <Input id="value" value={state.name} onChange={e => setState(p => ({ ...p, name: e.target.value }))} />
            <Divider dashed />
            <label htmlFor="default">Default Value</label>
            <Input id="default" value={state.default} readOnly />
          </Card>
        </div>
      </ContentLayout.Options>
      <ContentLayout.Preview>
        <div>
          <p className="content_title">Preview</p>
          <Card>
            <div style={{ minHeight: 200 }}>
              <input type={state.type} name={state.name} value={state.default} onChange={e => setState(p => ({ ...p, default: e.target.value }))} />
            </div>
          </Card>
        </div>
        <div>
          <p className="content_title">Code</p>
          <Card>
            <div className="justify-between items-center">
              <code ref={ref}>
                {`<input type="${state.type}" name="${state.name}" value="${state.default}"/>`}
              </code>
              <Button onClick={() => setCopy(ref)} icon={<FaCopy />} />
            </div>
          </Card>
        </div>
      </ContentLayout.Preview>
    </ContentLayout>
  </section>);
}

export default DateTime;