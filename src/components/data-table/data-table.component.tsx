import "./data-table.component.scss";
import React, { useEffect, useState } from "react";

import { IList } from "@/interfaces/list.interface";

export type DataTableProps<T> = { data: IList };

export function DataTable({ data }: DataTableProps<any>) {
  const [tableData, setTableData] = useState<IList>();

  const handleClick = (item: any) => {
    alert(JSON.stringify(item));
  };

  useEffect(() => {
    if (data) {
      const updatedData = {
        ...data,
        info: {
          ...data.info,
          current: (data.info.prev ?? 0) + 1,
        },
      };

      setTableData(updatedData);
    }
  }, [data]);

  return (
    <>
      {!!tableData && (
        <table>
          <thead>
            <tr>
              {tableData?.columns?.map((col) => (
                <th key={col.key}>{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.results.map((item) => (
              <tr key={item.id} onClick={()=> handleClick(item)}>
                {tableData?.columns?.map((col) => (
                  <td key={col.key}>{item[col.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
