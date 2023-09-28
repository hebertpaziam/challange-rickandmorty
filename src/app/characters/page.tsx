"use client";
import { GET_CHARACTER_LIST } from "@/queries";
import { useQuery } from "@apollo/client";
import React from "react";

export default function CharacterListPage() {
  const { loading, error, data } = useQuery(GET_CHARACTER_LIST, {
    variables: { page: 1, filter: {} },
  });


  return <div>{loading && <h1>Loading...</h1>}</div>;
}
