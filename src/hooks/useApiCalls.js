import { useState, useEffect } from "react";
import axios from "axios";

const useApiCalls = ({
  method,
  url,
  bodyData,
  headers,
  sendReq,
  setSendReq,
}) => {
  const [data, setData] = useState();
  const [status, setStatus] = useState();

  const handleReq = async () => {
    if (method.toUpperCase === "GET") {
      const res = await axios.get(url, headers && { headers });
    }
    if (method.toUpperCase === "POST") {
      const res = await axios.post(
        url,
        bodyData && bodyData,
        headers && { headers }
      );
    }
    if (method.toUpperCase === "PUT") {
      const res = await axios.put(
        url,
        bodyData && bodyData,
        headers && { headers }
      );
    }
    if (method.toUpperCase === "PATCH") {
      const res = await axios.patch(
        url,
        bodyData && bodyData,
        headers && { headers }
      );
    }
    if (method.toUpperCase === "DELETE") {
      const res = await axios.delete(url, headers && { headers });
    }

    if (res?.data) {
      setData(res.data);
    }
    if (res?.status) {
      setStatus(res.status);
    }
  };

  useEffect(() => {
    if (sendReq) {
      handleReq();
      setSendReq(false);
    }
  }, [sendReq]);

  return { data, status };
};

export default useApiCalls;
