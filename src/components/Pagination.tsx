import React from 'react';

import Link from 'next/link';

import { convertUrlToLinkHref } from '../utils/Pagination';

export type IPaginationProps = {
  previous?: string;
  next?: string;
};

const Pagination = (props: IPaginationProps) => (
  <div className="text-sm flex justify-between">
    {props.previous && (
      <button className="join-item btn">
      <Link href={convertUrlToLinkHref(props.previous)} as={props.previous}>
          <a>←</a>
        </Link>
      </button>        
    )}

    {props.next && (
      <button className="join-item btn">
        <Link href={convertUrlToLinkHref(props.next)} as={props.next}>
          <a>→</a>
        </Link>
      </button>        
    )}
  </div>
);

export { Pagination };
