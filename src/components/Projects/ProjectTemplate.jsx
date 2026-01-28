import "./ProjectTemplate.css";

const ProjectTemplate = ({
    title,
    subtitle,
    image,
    overview,
    frontendTech = [],
    backendTech = [],
    tools = [],
    role,
    type,
    status,
    highlights = [],
    githubLink,
    liveLink,
}) => {
    return (
        <div className="project-page">
            <div className="project-container">

                {/* Header */}
                <header className="project-header">
                    <h1 className="project-title">{title}</h1>
                    <p className="project-subtitle">{subtitle}</p>
                </header>

                {/* Screenshot */}
                <section className="project-screenshot-section">
                    <img
                        src={image}
                        alt={`${title} Screenshot`}
                        className="project-main-screenshot"
                    />
                </section>

                {/* Overview */}
                <section className="project-section">
                    <h2 className="project-section-title">Project Overview</h2>
                    <p className="project-text">{overview}</p>
                </section>

                {/* Technologies */}
                <section className="project-section">
                    <h2 className="project-section-title">Technologies Used</h2>

                    <div className="project-tech-grid">
                        {frontendTech.length > 0 && (
                            <div className="project-tech-category">
                                <h3>Frontend</h3>
                                <ul>
                                    {frontendTech.map((tech, i) => (
                                        <li key={i}>{tech}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {backendTech.length > 0 && (
                            <div className="project-tech-category">
                                <h3>Backend</h3>
                                <ul>
                                    {backendTech.map((tech, i) => (
                                        <li key={i}>{tech}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {tools.length > 0 && (
                            <div className="project-tech-category">
                                <h3>Tools & Libraries</h3>
                                <ul>
                                    {tools.map((tool, i) => (
                                        <li key={i}>{tool}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </section>

                {/* Details */}
                <section className="project-section">
                    <h2 className="project-section-title">Project Details</h2>
                    <table className="project-details-table">
                        <tbody>
                            <tr>
                                <td>Role</td>
                                <td>{role}</td>
                            </tr>
                            <tr>
                                <td>Type</td>
                                <td>{type}</td>
                            </tr>
                            <tr>
                                <td>Status</td>
                                <td>{status}</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                {/* Highlights */}
                {highlights.length > 0 && (
                    <section className="project-section">
                        <h2 className="project-section-title">Implementation Highlights</h2>
                        <ul>
                            {highlights.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Footer */}
                <footer className="project-footer">
                    {githubLink && (
                        <p>
                            GitHub:{" "}
                            <a href={githubLink} target="_blank" rel="noreferrer">
                                {githubLink}
                            </a>
                        </p>
                    )}
                    {liveLink && (
                        <p>
                            Live Demo:{" "}
                            <a href={liveLink} target="_blank" rel="noreferrer">
                                {liveLink}
                            </a>
                        </p>
                    )}
                </footer>

            </div>
        </div>
    );
};

export default ProjectTemplate;
