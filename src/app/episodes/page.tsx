"use client";
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_EPISODE_LIST } from "@/queries";

import { DataTable } from "@/components/data-table";
import { Loading } from "@/components/loading";
import { IList } from "@/interfaces/list.interface";

export default function EpisodeListPage() {
    const { loading, error, data } = useQuery(GET_EPISODE_LIST, {
      variables: { page: 1, filter: {} },
    });
  
    const columnsData: Partial<IList> = {
      columns: [
        { key: "id", label: "ID" },
        { key: "name", label: "Name" },
        { key: "air_date", label: "Air Date" },
        { key: "episode", label: "Episode" },
      ],
    };
  
    return (
      <div>
        {loading && <Loading />}
        {!!data && <DataTable data={{ ...columnsData, ...data.episodes }} />}
      </div>
    );
  }
  