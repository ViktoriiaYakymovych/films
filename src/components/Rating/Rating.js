import { Rate } from "antd";

const Rating = ({ value }) => {
  return <Rate allowHalf disabled count={10} value={value}/>;
};

export default Rating;
