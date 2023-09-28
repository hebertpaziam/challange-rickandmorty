"use client";
import { useQuery } from "@apollo/client";
import { GET_LOCATION_LIST } from "@/queries";

import { DataTable } from "@/components/data-table";
import { Loading } from "@/components/loading";
import { IList } from "@/interfaces/list.interface";

export default function LocationListPage() {
  const { loading, error, data } = useQuery(GET_LOCATION_LIST, {
    variables: { page: 1, filter: {} },
  });

  const columnsData: Partial<IList> = {
    columns: [
      { key: "id", label: "ID" },
      { key: "name", label: "Name" },
      { key: "type", label: "Type" },
      { key: "dimension", label: "Dimension" },
    ],
  };

  return (
    <div>
      {loading && <Loading />}
      {!!data && <DataTable data={{ ...columnsData, ...data.locations }} />}
    </div>
  );
}
