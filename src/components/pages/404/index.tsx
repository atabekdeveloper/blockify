import React from 'react';
import { Link } from 'react-router-dom';

import notFound from 'src/assets/images/404.svg';

export const NotFound: React.FC = () => (
  <div className="flex flex-col items-center justify-center">
    <img src={notFound} alt="Not Found" className="max-w-[500px]" />
    <Link
      to="/"
      className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-70 mt-[-50px] border border-white"
    >
      Back Home
    </Link>
  </div>
);
