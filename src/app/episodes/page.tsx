"use client";
import { useQuery } from "@apollo/client";
import { GET_EPISODE_LIST } from "@/queries";

import { DataTable } from "@/components/data-table";
import { Loading } from "@/components/loading";
import { IList } from "@/interfaces/list.interface";
import { useEffect, useState } from "react";

export default function EpisodeListPage() {
  const [tableData, setTableData] = useState<IList>({
    info: {
      current: 1,
      filter: {},
    },
    entity: "episodes",
    columns: [
      { key: "id", label: "ID", searchable: false },
      { key: "name", label: "Name", searchable: true },
      { key: "air_date", label: "Air Date", searchable: true },
      { key: "episode", label: "Episode", searchable: true },
    ],
  } as IList);

  const { loading, error, data, refetch } = useQuery(GET_EPISODE_LIST, {
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
      data?.episodes.results?.length &&
      data.episodes.results !== tableData.results
    ) {
      const updatedData = {
        info: {
          ...data.episodes?.info,
          filter: tableData.info.filter,
          current:
            tableData.info?.current || (data.episodes.info?.prev ?? 0) + 1,
        },
        columns: tableData.columns,
        entity: tableData.entity,
        results: data.episodes?.results,
      };

      setTableData(updatedData);
    }
  }, [data, tableData, refetch]);


  return (
    <div>
      {loading && <Loading />}
      {!!data && (
        <DataTable data={tableData} onTableDataChange={handleTableDataChange} />
      )}
    </div>
  );
}
