import axios from "axios";

const readApi = async (item) => {
  const url = `${process.env.REACT_APP_URL}read`;
  try {
    const data = await axios.post(url, {
      ID: item?.ID,
      value: item?.value,
      type: item.type,
    });
    return { status: data.status, data: data.data };
  } catch (err) {
    return { error: err };
  }
};

export default readApi;
