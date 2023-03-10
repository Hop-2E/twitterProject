import axios from "axios";

export const sendRequest = async (props) => {
  const { url, headers, body, token, method } = props;
  console.log(url, headers, body, token, method);
  try {
    const { data } = await axios({
      method,
      url: `http://localhost:8000/${url}`,
      headers: {
        ...headers,
        Authorization: token,
      },
      body,
    });

    return data;
  } catch (err) {
    console.log(err);
  }
};
