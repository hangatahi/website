import React  from 'react';
import { GetStaticPaths } from 'next';

import { Content } from '../../components/Content';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { getAllProjects, getProjectBySlug } from '../../utils/Content';
import { markdownToHtml } from '../../utils/Markdown';
import { ParsedUrlQuery } from 'querystring';
import { AppConfig } from '../../utils/AppConfig';

export interface IProjectProps  {
  name: string;
  slug: string;  
  category: string;
  description: string;
  image: string;
  tags: string[];
  href: string;  
  content: string;
};

interface IParams extends ParsedUrlQuery {
  slug: string
}
type IProjectUrl = {
  slug: string;
};


const DisplayProject = (props: IProjectProps) => {
  return (
    <Main
      meta={
        <Meta
          title={props.name}
          description={props.description || props.name }
          category={props.category}
        />
      }
    >
    <Content>
      <div className="bg-white">
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <li className="text-sm">
                <img src={props.image} className="h-32 object-cover object-center"/>
              </li>
            </ol>
          </nav>
          {/* Project info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{props.name}</h1>
              <a href={'/category/' + props.category.toLocaleLowerCase(AppConfig.locale)} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {props.category}
              </a>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Descripcion</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">{props.description}</p>
                </div>
              </div>
              { props.content && (
                <div className="mt-10">
                  <h2 className="text-sm font-medium text-gray-900">Detalles</h2>

                  <div className="mt-4 space-y-6">
                    <div className="text-sm text-gray-600"
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{ __html: props.content }}
                        />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Content>
    </Main>
  );
}

export const getStaticPaths: GetStaticPaths<IProjectUrl> = async () => {
  const projects = getAllProjects(['slug']);

  return {
    paths: projects.map((project) => ({
      params: {
        slug: project.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const { slug } = context.params as IParams // no longer causes error

  const project = getProjectBySlug(slug, [
    'name',
    'description',
    'category',
    'price',
    'image',
    'content',
    'tags',
    'sizes',
    'colors',
    'slug',
  ]);
  const content = await markdownToHtml(project.content || '');

  return {
    props: {
      slug: project.slug,
      name: project.name,
      description: project.description,
      category: project.category,
      price: project.price,
      image: project.image,
      colors: project.colors || [],
      sizes: project.sizes || [],
      tags: project.tags || [],
      content,
    },
  };
};

export default DisplayProject;
