import React, { ReactElement } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Routes from "./Routes";
import { setAccessToken } from "./tokenGen";

function App(): ReactElement {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:4000/rfrt", {
      method: "POST",
      credentials: "include",
    }).then(async (res) => {
      const data = await res.json();
      if (data) {
        setAccessToken(data.accessToken);
        setLoading(false);
      }
    });
  }, []);
  if (loading) {
    return <div className="flexy">Loading</div>;
  }
  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;
