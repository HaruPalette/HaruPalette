import { useEffect } from "react";

function Login() {
  useEffect(() => {
    const Authorization = new URLSearchParams(window.location.search).get("Authorization");
    console.log(Authorization);
  }, []);
  return <div>로딩중 ...</div>;
}

export default Login;
