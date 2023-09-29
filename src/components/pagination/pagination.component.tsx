import { IList } from "@/interfaces/list.interface";
import "./pagination.component.scss";
import React, { useEffect, useState } from "react";

export type PaginationProps = { data: IList; onPaginationChange: Function };

export function Pagination({ data, onPaginationChange }: PaginationProps) {
  const [pageList, setPageList] = useState<number[]>([]);

  useEffect(() => {
    if (data.info) {
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
      <li>
        <button
          type="button"
          className="navigate"
          disabled={!data?.info?.prev}
          onClick={() => onPaginationChange(1)}
        >
          &lt;&lt;
        </button>
      </li>
      <li>
        <button
          type="button"
          className="navigate"
          disabled={!data?.info?.prev}
          onClick={() => onPaginationChange(data.info.prev)}
        >
          &lt;
        </button>
      </li>
      {pageList?.map((page) => (
        <li key={page}>
          <button
            className={`navigate ${data.info.current === page && "-active"}`}
            type="button"
            onClick={() => onPaginationChange(page)}
          >
            {page}
          </button>
        </li>
      ))}
      <li>
        <button
          type="button"
          className="navigate"
          disabled={!data?.info?.next}
          onClick={() => onPaginationChange(data.info.next)}
        >
          &gt;
        </button>
      </li>
      <li>
        <button
          type="button"
          className="navigate"
          disabled={!data?.info?.next}
          onClick={() => onPaginationChange(data.info.pages)}
        >
          &gt;&gt;
        </button>
      </li>
    </ol>
  );
}
