import { useEffect, useState } from "react";

const useDataSource = (getResourceFunc = () => {}) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getResourceFunc();
      setResource(response);
    })();
  }, [getResourceFunc]);

  return resource;
};

export default useDataSource;
