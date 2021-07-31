import React, { ReactElement, useState } from "react";
import { useRegisterMutation } from "../generated/graphql";
import { RouteComponentProps } from "react-router-dom";

function Register({ history }: RouteComponentProps): ReactElement {
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [register] = useRegisterMutation();
  return (
    <div className="flex">
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
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="flexy">
            <input
              type="submit"
              value="Register"
              onClick={async (e) => {
                e.preventDefault();
                console.log(email, pass, age);

                const res = await register({
                  variables: {
                    age: Number(age),
                    email: email,
                    password: pass,
                  },
                });
                if (res.data?.register) history.push("/");
                console.log(res);
                setEmail("");
                setPass("");
                setAge("" as any);
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
