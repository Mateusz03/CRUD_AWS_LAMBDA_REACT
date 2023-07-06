import axios from "axios";

const createApi = async (newValue) => {
  const url =
    process.env.REACT_APP_ENVIROMENT === "dev"
      ? "http://localhost:2137/create"
      : `${process.env.REACT_APP_URL}create`;

  try {
    const data = await axios.post(url, newValue);
    if (data.status === 200) {
      return { ID: data.data.ID };
    } else {
      return { error: "error" };
    }
  } catch (err) {
    return { error: err };
  }
};

export default createApi;
