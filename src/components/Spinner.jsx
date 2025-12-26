import ClipLoader from 'react-spinners/ClipLoader';

const override = {
  display: "block",
  margin: "100px auto",
};

const Spinner = ({ loading }) => {
  return (
    <ClipLoader size={150} color={"#123abc"} loading={loading} cssOverride={override} />
  )
}

export default Spinner