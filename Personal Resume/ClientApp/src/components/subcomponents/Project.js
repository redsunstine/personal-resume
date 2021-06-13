import React from 'react';
import {
    Col, Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';
import './Project.css';

function Project(props) {

    function getProjectLink(project) {
        function handleClick() {
            window.SiteUtils.Options.Zoo.toggle();
        }

        if (project.hasWebLink) {
            return <a className="project-links" href={project.webUrl} target="_blank">
                <i className="fas fa-external-link-alt fa-lg"></i>
            </a>
        }
        if (project.hasDownloadLink) {
            return <a className="project-links" target="_blank">
                <i className=" fas fa-download fa-lg"></i>
            </a>
        }
        if (project.hasButtonScript) {
            return (
                <input value="Click Me" type="button" onClick={handleClick}>
                </input>
            );
        }

    }

    function getGithubLink(project) {
        if (project.hasGithubLink) {
            return <a className="project-links" href={"https://github.com/" + project.githubUrl} title="view source code" alt="view source code" target="_blank">
                <i className="fab fa-github fa-lg"></i>
            </a>
        }
    }

    const project = props.project;
    return (
        <Col md={4}>
            <Card className="project-card">
                <CardImg top width="100%" className="project-image" src={require('../../images/projects/' + project.image)} alt="Card image cap" />
                <CardBody>
                    <CardTitle>{project.title}</CardTitle>
                    <CardText>{project.description}</CardText>
                    {getGithubLink(project)}
                    {getProjectLink(project)}
                </CardBody>
            </Card>
        </Col>
    );
}

export default Project;