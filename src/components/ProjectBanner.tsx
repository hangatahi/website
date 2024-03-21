import React from 'react';
import { ProjectGenericProps } from '../utils/Content';

export type IProjectGalleryProps = {
  projects: ProjectGenericProps[];
};
const ProjectBanner = (props: IProjectGalleryProps) => (
  <>  
    <div className="flex justify-center w-full py-2 gap-2">
    {props.projects.map((project, index) => (
        <a key={project.slug} href={ '#' + project.slug} className="btn btn-xs">
          {index+1}
        </a>
    ))}
    </div>
    <div className="carousel w-full">
    {props.projects.map((project) => (
      <div id={project.slug} key={project.slug} className="carousel-item w-full h-96 ">
          <a href={project.href} >
              <img src={project.image}  />
          </a> 
      </div> 
    ))}
    </div>
  </>
);

export { ProjectBanner };
