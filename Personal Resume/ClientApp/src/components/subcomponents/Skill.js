import React, { Component } from 'react';
import {
    Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './School.css';

function Skill(props) {

    const skill = props.skill;
    const listLength = skill.skillsList.length;
    return (
        <div className="skills">
            <Row>
                <Col md={3}>
                    <label>{skill.category}:</label>
                </Col>
                <Col md={9}>
                    <CardText>
                        {skill.skillsList.map((s, index) =>
                            listLength === index + 1 ? s : s + ', '
                        )}
                    </CardText>
                </Col>
            </Row>
        </div>
    );
}

export default Skill;