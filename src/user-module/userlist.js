import React, { useState, useEffect, useLayoutEffect } from "react";
import BasicColumnsGrid from ".././table/Tabletest";
export default function UserList() {
  const [userRows, setUserRows] = useState([]);
  const [userColums, setUserColumns] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(res => {
        if (res) {
          const item = res[0];
          const clm = [];
          Object.keys(item => {
            clm.push({ field: item });
          });
          setUserColumns(clm);
          setUserRows(res);
          console.log(res, "res");
        }
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <BasicColumnsGrid rows={userRows} columns={userColums} />
    </>
  );
}
