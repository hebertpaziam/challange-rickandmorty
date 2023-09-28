"use client";
import { useQuery } from "@apollo/client";
import { GET_LOCATION_LIST } from "@/queries";

import { DataTable } from "@/components/data-table";
import { Loading } from "@/components/loading";
import { IList } from "@/interfaces/list.interface";
import { useEffect, useState } from "react";

export default function LocationListPage() {
  const [tableData, setTableData] = useState<IList>({
    info: {
      current: 1,
      filter: {},
    },
    entity: "locations",
    columns: [
      { key: "id", label: "ID", searchable: false },
      { key: "name", label: "Name", searchable: true },
      { key: "type", label: "Type", searchable: true },
      { key: "dimension", label: "Dimension", searchable: true },
    ],
  } as IList);

  const { loading, error, data, refetch } = useQuery(GET_LOCATION_LIST, {
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
    if (
      data?.locations.results?.length &&
      data.locations.results !== tableData.results
    ) {
      const updatedData = {
        info: {
          ...data.locations?.info,
          filter: tableData.info.filter,
          current:
            tableData.info?.current || (data.locations.info?.prev ?? 0) + 1,
        },
        columns: tableData.columns,
        entity: tableData.entity,
        results: data.locations?.results,
      };

      setTableData(updatedData);
    }
  }, [data, tableData, refetch]);

  return (
    <div>
      <h1>Locations</h1>
      {loading && <Loading />}
      {!!data && (
        <DataTable data={tableData} onTableDataChange={handleTableDataChange} />
      )}
    </div>
  );
}
