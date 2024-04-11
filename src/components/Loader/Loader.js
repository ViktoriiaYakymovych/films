import { ThreeDots } from "react-loader-spinner";

const Loader = ({ loading }) => {
  return (
    <ThreeDots
      visible={loading}
      height="80"
      width="80"
      color="#001529"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default Loader;
