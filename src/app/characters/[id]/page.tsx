"use client";
import { redirect, useParams, useRouter } from "next/navigation";
import { useQuery } from "@apollo/client";
import { GET_CHARACTER_BY_ID } from "@/queries";

import { Card } from "@/components/card";
import { Pagination } from "@/components/pagination";
import { IList } from "@/interfaces/list.interface";

export default function CharacterDetailsPage() {
  const { push } = useRouter();
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_CHARACTER_BY_ID, {
    variables: { id },
  });
  const paginationData = {
    info: {
      next: parseInt(id as string, 10) + 1,
      prev: parseInt(id as string, 10) - 1 || undefined,
    },
  } as IList;

  const onPaginationChange = (id: string) => {
    push(`/characters/${id}`);
  };

  return (
    <div className="details-page">
      <h1 className="title">{data?.character?.name}</h1>
      <Card character={data?.character} loading={loading} />
      <Pagination
        data={paginationData}
        loading={loading}
        showOnlyNav={true}
        onPaginationChange={onPaginationChange}
      />
    </div>
  );
}
