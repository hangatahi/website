import React, { ReactNode } from 'react';
import Link from 'next/link';
import { Navbar } from '../components/Navbar';
import { AppConfig } from '../utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const categories = AppConfig.categories;
const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700 px-3 md:px-0">
    {props.meta}

    <div className="max-w-screen-md mx-auto">
      <div className="border-b border-gray-300">
        <div className="pt-16 pb-8">
          <div className="font-semibold text-2xl text-gray-900">
            {AppConfig.title}
          </div>
          <div className="text-xs">{AppConfig.description}</div>
        </div>
        <div>
          <Navbar>
            {/* {categories.map(category=>(
              <li key={category} className="mr-6">
                <Link href={'/sections/' + category.toLowerCase()}>{category}</Link>
              </li>
            ))} */}
            <li className="mr-6">
              <Link prefetch={false} href="/about" >
                About
              </Link>
            </li>
            <li className="mr-6">
              <Link prefetch={false} href="/services" >
                Services
              </Link>
            </li>
            <li className="mr-6">
              <Link prefetch={false} href="/projects" >
                Work
              </Link>
            </li>
            <li className="mr-6">
              <Link prefetch={false} href="/contact/" >
                Contact
              </Link>
            </li>
          </Navbar>
        </div>
      </div>

      <div className="text-xl py-5">{props.children}</div>

      <div className="border-t border-gray-300 text-center py-8 text-sm"></div>
    </div>
  </div>
);

export { Main };
