import React, { ReactElement } from "react";
import { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useLoginMutation } from "../generated/graphql";
import { setAccessToken } from "../tokenGen";

function Login({ history }: RouteComponentProps): ReactElement {
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [login] = useLoginMutation();
  return (
    <div className="flex">
      <form className="flexy">
        <div className="flexy">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flexy">
          <input
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <div className="flexy">
          <input
            type="submit"
            value="Login"
            onClick={async (e) => {
              e.preventDefault();
              console.log(email, pass);
              const data = await login({
                variables: { email, password: pass },
              });
              if (data.data?.login.error) {
                console.log("Something went wrong");
              } else {
                localStorage.setItem(
                  "jwt",
                  data.data?.login.accessToken as string
                );
                setAccessToken(data.data?.login.accessToken as string);
                history.push("/");
              }
              setEmail("");
              setPass("");
            }}
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
