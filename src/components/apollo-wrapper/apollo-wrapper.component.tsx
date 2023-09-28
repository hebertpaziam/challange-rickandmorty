"use client";
import React, { PropsWithChildren } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
  name: process.env.npm_package_name,
  version: process.env.npm_package_version,
});

export type ApolloWrapperProps = PropsWithChildren & {}

export function ApolloWrapper({ children }: ApolloWrapperProps) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
