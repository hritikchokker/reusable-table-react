import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";

export default function BasicColumnsGrid({ rows, columns }) {
  return (
    <div style={{ height: 250, width: "100%" }}>
      <DataGrid columns={columns} rows={rows} />
    </div>
  );
}
