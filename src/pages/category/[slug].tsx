import React from 'react';
import { GetStaticPaths , GetStaticProps} from 'next';

import { Content } from '../../components/Content';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { ProjectGenericProps, getAllCategories, getProjectsByCategory } from '../../utils/Content';
import { ProjectSection } from '../../components/ProjectSection';
import { ParsedUrlQuery } from 'querystring';

interface IParams extends ParsedUrlQuery {
  slug: string
}

type IProjectUrl = {
  slug: string;
};

export type ICategoryProps = {
  category: string;
  projects: ProjectGenericProps[];
};

const DisplayCategory = (props: ICategoryProps) => (
  <Main
    meta={
      <Meta
        title={props.category}
        description="Projects {props.category}"
      />
    }
  >
    <h1>
      {props.category.toLocaleUpperCase()}
    </h1>
    <Content>
      <ProjectSection  projects={props.projects}/>
    </Content>
  </Main>
);

export const getStaticPaths: GetStaticPaths<IProjectUrl> = async () => {
  const categories = getAllCategories();

  return {
    paths: categories.map((category) => ({
      params: {
        slug: category.toLocaleLowerCase(),
      },
    })),
    fallback: false,
  };
};
 
export const getStaticProps: GetStaticProps = async (context: any) => {
  const { slug } = context.params as IParams // no longer causes error
 const projects = getProjectsByCategory(slug, [
    'name',
    'description',
    'category',
    'price',
    'image',
    'href',
    'content',
    'slug',
  ]);

  return {
    props: {
      category: slug,
      projects,
    },
  };
};


export default DisplayCategory;
