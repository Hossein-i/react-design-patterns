import axios from "axios";
import { useEffect, useState } from "react";

const capitaluze = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const withEditableResource = (Component, resourcePath, resourceName) => {
  return (props) => {
    const [originalData, setOriginalData] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await fetch(resourcePath);
        const json = await response.json();
        setOriginalData(json);
        setData(json);
      })();
    }, []);

    const handleChange = (changes) => {
      setData({ ...data, ...changes });
    };

    const handleSave = async () => {
      const response = await axios.post(resourcePath, { [resourceName]: data });
      setOriginalData(response.data);
      setData(response.data);
    };

    const handleRest = () => {
      setData(originalData);
    };

    const resourceProps = {
      [resourceName]: data,
      [`onChange${capitaluze(resourceName)}`]: handleChange,
      [`onSave${capitaluze(resourceName)}`]: handleSave,
      [`onRest${capitaluze(resourceName)}`]: handleRest,
    };

    return <Component {...props} {...resourceProps} />;
  };
};

export default withEditableResource;
