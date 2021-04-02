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
          Object.keys(item).forEach(el => {
            console.log(el, "elel");
            if (el === "name") {
              clm.push({
                field: el,
                headerName: "Name",
                width: 160,
                sortComparator: (v1, v2, cellParams1, cellParams2) => {
                  // console.log(cellParams1, cellParams2, "hritik");
                  return cellParams1.data.name.localeCompare(
                    cellParams2.data.name
                  );
                }
              });
            } else {
              clm.push({ field: el });
            }
          });
          // {
          //   field: 'fullName',
          //   headerName: 'Full name',
          //   width: 160,
          //   valueGetter: getFullName,
          //   sortComparator: (v1, v2, cellParams1, cellParams2) =>
          //     getFullName(cellParams1).localeCompare(getFullName(cellParams2)),
          // },
          res = res.map(val => {
            val.address = `${val.address.city} ${val.address.street}`;
            val.company = `${val.company.name}`;
            return val;
          });
          setUserColumns(clm);
          setUserRows(res);
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
