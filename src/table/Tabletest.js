import * as React from "react";
import { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useDemoData } from "@material-ui/x-grid-data-generator";

export default function BasicColumnsGrid({ rows, columns }) {
  const [page, setPage] = useState(1);
  const { data } = useDemoData({
    dataSet: "User List",
    rowLength: rows.length,
    maxColumns: columns.length
  });
  return (
    <div style={{ height: "100vh" }}>
      <DataGrid
        page={page}
        onPageChange={params => {
          setPage(params.page);
        }}
        autoPageSize
        pageSize={10}
        pagination
        {...data}
        columns={columns}
        rows={rows}
      />
    </div>
  );
}
