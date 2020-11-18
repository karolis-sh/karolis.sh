import React from 'react';

import { SplitLayout } from '~/layout';

export default function NotFound() {
  return (
    <SplitLayout
      first={
        <div className="flex flex-col justify-center h-full pt-10 sm:pt-0 md:mx-8 lg:mx-12">
          <h1 className="text-center text-5xl">404</h1>
        </div>
      }
      second={
        <div className="text-center flex flex-col justify-center h-full pb-10 sm:pb-0 md:mx-8 lg:mx-12">
          PAGE NOT FOUND
        </div>
      }
    />
  );
}
