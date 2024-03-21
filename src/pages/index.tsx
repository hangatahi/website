import React from 'react';

import { GetStaticProps } from 'next';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { AppConfig } from '../utils/AppConfig';
import { ProjectGenericProps, getProjectsByTag } from '../utils/Content';
import { ProjectBanner } from '../components/ProjectBanner';

type IHomeProps = {
  home: ProjectGenericProps[];
  featured: ProjectGenericProps[];
}

const Index = (props: IHomeProps) => (
  <Main
    meta={
      <Meta
        title="Hanga Tahi"
        description={AppConfig.description}
      />
    }
  >
    <ProjectBanner projects={props.home} />
  </Main>
);

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {

  return {
    props: {
      home: getProjectsByTag('home', ['name', 'image', 'href', 'slug']),
      featured: getProjectsByTag('featured', ['name', 'image', 'href', 'slug']),
    },
  };
};

export default Index;
