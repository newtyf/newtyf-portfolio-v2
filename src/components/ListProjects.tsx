import { useEffect, useState } from "react";
import { ProjectCard } from "./ProjectCard";

import { Category, type project } from "src/types";
import { ShowContentScroll } from "src/helpers/ShowContentScroll";

interface Props {
  projects: project[];
}

const filters = [
  {
    name: "All",
    filter: Category.ALL,
  },
  {
    name: "Freelance",
    filter: Category.FREELANCE,
  },
  {
    name: "Full stack",
    filter: Category.FULLSTACK,
  },
  {
    name: "Backend",
    filter: Category.BACKEND,
  },
];

const NotFoundProjects = () => {
  return (
    <div className='not-found-projects reveal'>
      Not found projects 😿
    </div>
  );
};

export const ListProjects = ({ projects }: Props) => {
  const [currentCategory, setCurrentCategory] = useState<Category>(Category.ALL);
  const [currentProjects, setCurrentProjects] = useState<project[]>(projects);

  const handleFilter = (category: Category) => {
    if (category === Category.ALL) {
      setCurrentProjects(projects);
    } else {
      setCurrentProjects(projects.filter((item) => item.category === category));
    }
    setCurrentCategory(category);
  };

  useEffect(() => {
    const container = document.getElementById("list-projects");
    ShowContentScroll(container!).reveal()
  }, [currentCategory]);

  return (
    <>
      <div className='filter-projects reveal active'>
        <ul>
          {filters.map(({ filter, name }) => (
            <li key={name} className='filter'>
              <button type="button" className={`${currentCategory === filter && "active"}`} onClick={() => handleFilter(filter)}>{name}</button>
            </li>
          ))}
        </ul>
      </div>
      <ul id='list-projects'>
        {currentProjects.length === 0 ? (
          <NotFoundProjects />
        ) : (
          currentProjects.map((project, index) => (
            <ProjectCard
              category={project.category}
              key={project.title}
              project={project}
              right={index % 2 === 0}
            />
          ))
        )}
        {/* {!existDisplayCards ? <ErrorMessage /> : null} */}
      </ul>
    </>
  );
};
