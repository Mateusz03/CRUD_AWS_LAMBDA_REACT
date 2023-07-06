import axios from "axios";

const deleteApi = async (items) => {
  const url =
    process.env.REACT_APP_ENVIROMENT === "dev"
      ? "http://localhost:2137/delete"
      : `${process.env.REACT_APP_URL}delete`;
  try {
    const data = await axios.post(url, {
      items: items,
    });
    return { status: data.status };
  } catch (err) {
    return { error: err };
  }
};

export default deleteApi;
