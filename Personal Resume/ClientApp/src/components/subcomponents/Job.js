import React from 'react';
import {
    Row, Col, Card, CardImg, CardText, CardBody,
    CardSubtitle
} from 'reactstrap';
import './Job.css';

function getCompLink(link) {
    if (link != "") {
        return <a className="job-links" href={link} title="goto site" alt="view site" target="_blank">
            <i className="fas fa-external-link-alt fa-sm"></i>
        </a>
    }
}
//props are properties that come from a parent component, in this case Jobs. props will not change, so we can use them directly in our render function
function Job(props) {

    const job = props.job;

    return (
        <div className="job">
            <Card className="job-card">
                <CardBody>
                    <Row>
                        <Col md={7} sm={12}>
                            <CardImg className="company-logo center-mobile smaller-width" top width="100%" src={require('../../images/jobs/' + job.logo)} />
                            {getCompLink(job.link)}
                        </Col>
                        <Col md={5} sm={12}>
                            <div className="center-job-info">
                                <CardSubtitle className="job-title">{job.jobTitle}</CardSubtitle>
                                <CardText>{job.startDate} – {job.endDate}</CardText>
                                <CardText className="job-location">{job.location}</CardText>
                            </div>
                        </Col>
                    </Row>
                    <div>
                        <p className="text-center">Business: {job.vision}</p>
                        </div>
                    <h5 className="text-center">Job Duties</h5>
                    <ol>
                        {job.jobDuties.map(duty =>
                            <li key={duty}>{duty}</li>
                        )}
                    </ol>
                    <h5 className="text-center">Accomplishments</h5>
                    <ol>
                        {job.accomplishments.map((comps,index) =>
                            <li key={comps}>{comps + " "}{getCompLink(job.accomplishmentLinks[index])}</li>
                                
                        )}
                    </ol>
                </CardBody>
            </Card>
        </div>
    );
}

export default Job;