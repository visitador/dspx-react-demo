import React, { useState, useEffect } from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Street } from "../api/api";
import api from "../api";

const IndexPage: React.FC<PageProps> = () => {
  const [streets, setStreets] = useState<Street[]>([]);
  useEffect(() => {
    api.fetchStreets().then((res) => {console.log(res); setStreets(res)});
  }, []);
  return (
    <main>
      <h1>Streets</h1>
      <div>
        {streets.map((street) => (
          <div key={street.id}>
            <div>{street.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
