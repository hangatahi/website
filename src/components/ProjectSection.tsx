import React from 'react';
import {ProjectCard} from './ProjectCard';
import { ProjectGenericProps } from '../utils/Content';

export type IProjectGalleryProps = {
  projects: ProjectGenericProps[];
};
const ProjectSection = (props: IProjectGalleryProps) => (
  <>
      {props.projects.map((project) => (
        <ProjectCard key={project.slug} project={project}></ProjectCard>        
      ))}
  </>
);

export { ProjectSection };
