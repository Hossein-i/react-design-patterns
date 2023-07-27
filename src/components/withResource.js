import axios from "axios";
import { useEffect, useState } from "react";

const withResource = (Component, resourcePath, resourceName) => {
  return (props) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(resourcePath);
        setData(response.data);
      })();
    }, []);

    return <Component {...props} {...{ [resourceName]: data }} />;
  };
};

export default withResource;
