import "./data-table.component.scss";
import Link from "next/link";

import { IList } from "@/interfaces/list.interface";
import { Pagination } from "@/components/pagination";
import { Spinner } from "@/components/spinner";
import { useRouter } from "next/navigation";

export type DataTableProps = {
  data: IList;
  loading: boolean;
  onTableDataChange: Function;
};

export function DataTable({
  data,
  loading,
  onTableDataChange,
}: DataTableProps) {
  const { push } = useRouter();

  let debouncingTimeout: NodeJS.Timeout;
  const updateFilter = (colKey: string, term: string) => {
    clearTimeout(debouncingTimeout);
    debouncingTimeout = setTimeout(() => {
      const filter = data?.info?.filter || {};

      if (term) {
        filter[colKey] = term;
      } else {
        delete filter[colKey];
      }

      onTableDataChange({
        ...data,
        info: { ...data.info, current: 1, filter },
      });
    }, 1000);
  };

  const updatePagination = (current: number) => {
    onTableDataChange({ ...data, info: { ...data.info, current } });
  };

  const handleRowClick = (item: any) => {
    push(`/${data.entity}/${item?.id}`);
  };

  return (
    <div className="data-table">
      <Pagination
        data={data}
        loading={loading}
        onPaginationChange={updatePagination}
      />
      <table>
        <thead>
          <tr>
            {data?.columns?.map((col) => (
              <th key={col.key}>
                <span>{col.label}</span>
                <input
                  className="field"
                  type="text"
                  disabled={!col.searchable || loading}
                  name={col.key}
                  onChange={(e) => updateFilter(col.key, e.target.value)}
                  id={`${col.key}-input`}
                />
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <tr className={`${!!loading ? "-disabled" : ""}`}>
              <td colSpan={data?.columns?.length}>
                <Spinner />
              </td>
            </tr>
          ) : (
            <>
              {data?.results?.length ? (
                data.results.map((item) => (
                  <tr key={item.id} className="-clickable" onClick={() => handleRowClick(item)}>
                    {data?.columns?.map((col) => (
                      <td key={col.key}>{item[col.key]}</td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr className="-disabled">
                  <td colSpan={data?.columns?.length}>Data Not Found</td>
                </tr>
              )}
            </>
          )}
        </tbody>
      </table>
      <Pagination
        data={data}
        loading={loading}
        onPaginationChange={updatePagination}
      />
    </div>
  );
}
