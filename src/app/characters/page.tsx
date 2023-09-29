"use client";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CHARACTER_LIST } from "@/queries";

import { DataTable } from "@/components/data-table";
import { IList } from "@/interfaces/list.interface";

export default function CharacterListPage() {
  const [tableData, setTableData] = useState<IList>({
    info: {
      current: 1,
      filter: {},
    },
    entity: "characters",
    columns: [
      { key: "id", label: "ID", searchable: false },
      { key: "name", label: "Name", searchable: true },
      { key: "species", label: "Species", searchable: true },
      { key: "gender", label: "Gender", searchable: true },
      { key: "status", label: "Status", searchable: true },
    ],
  } as IList);

  const { loading, error, data, refetch } = useQuery(GET_CHARACTER_LIST, {
    variables: {
      page: tableData?.info?.current || 1,
      filter: tableData?.info?.filter || {},
    },
  });

  const handleTableDataChange = (updates: IList) => {
    setTableData(updates);
    refetch({
      page: updates?.info?.current || 1,
      filter: updates?.info?.filter || {},
    });
  };

  useEffect(() => {
    if (data?.characters?.results !== tableData.results) {
      const updatedData = {
        info: {
          ...data.characters?.info,
          filter: tableData.info.filter,
          current:
            tableData.info?.current || (data.characters.info?.prev ?? 0) + 1,
        },
        columns: tableData.columns,
        entity: tableData.entity,
        results: data.characters?.results,
      };

      setTableData(updatedData);
    }
  }, [data, tableData, refetch]);

  return (
    <div>
      <h1 className="title">Characters</h1>
      
      <DataTable
        data={tableData}
        loading={loading}
        onTableDataChange={handleTableDataChange}
      />
    </div>
  );
}
