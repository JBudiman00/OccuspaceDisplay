import React, { useState, useEffect} from 'react';

const test = () => {
  const token = "U3qDEKtL7WiUfWXDfbCBZzQdYYg2fzzZRwbplLxP";
  const [result, setResult] = useState();
  useEffect(()=>{
    fetch('https://api.occuspace.io/v1/locations', {
      method: "POST",
      headers: {"Authorization": `Bearer ${token}`}
    }).then(res => res.json()).then(json => setResult(json));
  },[]);

  return (
    <>
      {JSON.stringify(result)}
    </>
  );
};

export default function doThis () {
    test();
}