import * as React from 'react';
import { ProjectGenericProps } from '../utils/Content';

type ProjectCard = {
  project: ProjectGenericProps;
};

const ProjectCard = (props: ProjectCard) =>  (
    <div className="my-5 group relative">
      <div className="flex overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <div className="w-1/3  m-5" >
          <img
            src={props.project.image}
            alt={props.project.name}
            className="h-64 object-cover object-center"
          />
        </div>
        <div className="w-2/3 m-5">
          <h3 className="text-xl text-center text-gray-700">
            <a href={props.project.href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {props.project.name}
            </a>
          </h3>
          <p className="text-sm p-5">{props.project.description}</p>
        </div>
      </div>
    </div>
)

export { ProjectCard };
