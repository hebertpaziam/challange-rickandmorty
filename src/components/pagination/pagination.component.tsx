import { IList } from "@/interfaces/list.interface";
import "./pagination.component.scss";
import React, { useEffect, useState } from "react";

export type PaginationProps = {
  data: IList;
  loading: boolean;
  showOnlyNav: boolean;
  onPaginationChange: Function;
};

export function Pagination({
  data,
  loading,
  showOnlyNav,
  onPaginationChange,
}: PaginationProps) {
  const [pageList, setPageList] = useState<number[]>(Array.from({ length: 7 }));

  useEffect(() => {
    if (data?.info?.pages) {
      const totalPages = Array.from(
        { length: data.info.pages },
        (_, i) => i + 1
      );

      const current = data.info.current;
      const offset = 3;
      const total = data.info.pages;

      let min = current > offset ? current - offset - 1 : 0;
      let max = current <= total - offset ? current + offset : total;

      if (min === 0 && max <= total) {
        max += 7 - max;
      }

      if (max === total && min > offset) {
        min = max - 7;
      }

      setPageList(totalPages.slice(min, max));
    }
  }, [data]);

  return (
    <ol className="pagination">
      {!showOnlyNav && (
        <li>
          <button
            type="button"
            className="navigate"
            disabled={!data?.info?.prev || loading}
            onClick={() => onPaginationChange(1)}
          >
            &lt;&lt;
          </button>
        </li>
      )}

      <li>
        <button
          type="button"
          className="navigate"
          disabled={!data?.info?.prev || loading}
          onClick={() => onPaginationChange(data.info.prev)}
        >
          &lt;
        </button>
      </li>

      {!showOnlyNav &&
        pageList?.map((page) => (
          <li key={page}>
            <button
              className={
                "navigate" + (data.info.current === page ? " -active" : "")
              }
              type="button"
              disabled={loading}
              onClick={() => onPaginationChange(page)}
            >
              {page || "-"}
            </button>
          </li>
        ))}

      <li>
        <button
          type="button"
          className="navigate"
          disabled={!data?.info?.next || loading}
          onClick={() => onPaginationChange(data.info.next)}
        >
          &gt;
        </button>
      </li>

      {!showOnlyNav && (
        <li>
          <button
            type="button"
            className="navigate"
            disabled={!data?.info?.next || loading}
            onClick={() => onPaginationChange(data.info.pages)}
          >
            &gt;&gt;
          </button>
        </li>
      )}
    </ol>
  );
}
