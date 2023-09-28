"use client";
import { useQuery } from "@apollo/client";
import { GET_CHARACTER_LIST } from "@/queries";

import { DataTable } from "@/components/data-table";
import { Loading } from "@/components/loading";
import { IList } from "@/interfaces/list.interface";

export default function CharacterListPage() {
  const { loading, error, data } = useQuery(GET_CHARACTER_LIST, {
    variables: { page: 1, filter: {} },
  });

  const columnsData: Partial<IList> = {
    columns: [
      { key: "id", label: "ID" },
      { key: "name", label: "Name" },
      { key: "species", label: "Species" },
      { key: "gender", label: "Gender" },
      { key: "status", label: "Status" },
    ],
  };

  return (
    <div>
      {loading && <Loading />}
      {!!data && <DataTable data={{ ...columnsData, ...data.characters }} />}
    </div>
  );
}
