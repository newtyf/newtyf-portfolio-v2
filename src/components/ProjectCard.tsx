import type { Category, project } from "src/types";

interface Props {
  project: project;
  category: Category;
  right?: boolean;
  subtitle?: string;
}

export const ProjectCard = ({
  project,
  right = false,
  subtitle = "Featured Project",
  category
}: Props) => {
  return (
    <div
      data-category={category}
      className={
        `projects-content reveal${right ? " right" : ""}`
      }
    >
      <div className='projects-content__text'>
        <p className='projects-content__subtitle'>{subtitle}</p>
        <h3>
          <a href={project.liveSite} className='line' target='_blank'>
            {project.title}
          </a>
        </h3>
        <div className='description'>
          <p>{project.description}</p>
        </div>
        <ul className='tags'>
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <ul className='link-icons'>
          {project.github && (
            <li>
              <a
                href={project.github}
                className='icon'
                title='github'
                target='_blank'
              >
                <i className={`bi bi-github`} />
                <span className='linkText--hide'>github</span>
              </a>
            </li>
          )}
          {project.liveSite && (
            <li>
              <a
                href={project.liveSite}
                className='icon'
                title='link to page'
                target='_blank'
              >
                <i className='bi bi-box-arrow-up-right' />
                <span className='linkText--hide'>{project.title}</span>
              </a>
            </li>
          )}
        </ul>
      </div>
      <div className='projects-content__image'>
        <a href={project.liveSite} title='project link' target='_blank'>
          <img
            width={700}
            height={300}
            src={project.image}
            alt='project-photo'
          />
        </a>
      </div>
    </div>
  );
};
