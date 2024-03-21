import React from 'react';
import { Pagination, IPaginationProps } from './Pagination';
import {ProjectCard} from './ProjectCard';
import { ProjectGenericProps } from '../utils/Content';

export type IProjectGalleryProps = {
  category?: string;
  projects: ProjectGenericProps[];
  pagination: IPaginationProps;
};
const ProjectGallery = (props: IProjectGalleryProps) => (
  <>
      {props.projects.map((project) => (
        <ProjectCard key={project.slug} project={project}></ProjectCard>        
      ))}
    <Pagination
      previous={props.pagination.previous}
      next={props.pagination.next}
    />
  </>
);

export { ProjectGallery };
