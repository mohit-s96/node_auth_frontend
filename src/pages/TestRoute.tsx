import React, { ReactElement } from "react";
import { useAuthQuery } from "../generated/graphql";

function TestRoute(): ReactElement {
  const { data, loading, error } = useAuthQuery();
  if (loading) return <div className="flexy">Loading...</div>;
  if (error) return <div className="flexy">Error</div>;
  return <div>{data?.authRoute}</div>;
}

export default TestRoute;
