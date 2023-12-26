import { useParams } from "react-router-dom";
const EditCardPage = () => {
  let { id } = useParams(); //get id from url
  return <h1>Edit card page {id}</h1>;
};
export default EditCardPage;
