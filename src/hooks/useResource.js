import { useEffect, useState } from "react";

const useResource = (resourcePath) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(resourcePath);
      const json = await response.json();
      setResource(json);
    })();
  }, [resourcePath]);

  return resource;
};

export default useResource;
