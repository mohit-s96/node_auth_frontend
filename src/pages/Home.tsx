import React, { ReactElement } from "react";
import { useUsersQuery } from "../generated/graphql";

function Home(): ReactElement {
  const { data, loading } = useUsersQuery({ fetchPolicy: "network-only" });
  if (loading || !data) {
    return <div className="flexy">Loading...</div>;
  } else {
    return (
      <div className="flexy">
        <h3 className="flexy">Users</h3>
        <ul>
          {data.getDB.map((x: any) => (
            <li key={Math.floor(Math.random() * 100000)}>
              <p>
                <b>E-Mail: </b> {x.email}
              </p>
              <p>
                <b>Age: </b> {x.age}
              </p>
              <p>
                <b>ID: </b> {x.id}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Home;
