import { useEffect, useState } from "react";

function useFetch(url,cb) {
  const [data, setData] = useState(null);
  const [loading,setLoading] = useState(false)
  const [err,setErr] = useState(null)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
   setLoading(true)
   try{
    const result = await (await fetch(url)).json();

    if (cb) {
      setData(cb(result));
      setLoading(false)
    } else {
      setData(result);
      setLoading(false)
    }
   }catch(err){
    setLoading(false)
    setErr(err)
   }
  };

  return {data,loading,err};
}

export default useFetch;
