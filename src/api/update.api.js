import axios from "axios";

const updateApi = async (item) => {
  const url =
    process.env.REACT_APP_ENVIROMENT === "dev"
      ? "http://localhost:2137/update"
      : `${process.env.REACT_APP_URL}update`;

  try {
    const data = await axios.post(url, {
      ID: item?.ID,
      value: item?.value,
    });
    return { status: data.status };
  } catch (err) {
    return { error: err };
  }
};

export default updateApi;
