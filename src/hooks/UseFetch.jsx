import { useSession } from "@clerk/clerk-react";
import { useState } from "react";

const UseFetch = (cb, options = {}) => {
  const { session } = useSession();

  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fn = async (...args) => {
      setLoading(true);
      setError(null);

      try {
        const token = await session.getToken();
        const response = await cb(token, options, ...args);
        setData(response);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };


  return { fn, data, loading, error };
};

export default UseFetch;
