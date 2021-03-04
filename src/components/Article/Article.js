import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
const Article = props => {
  const { title, description, urlToImage, url } = props.article;
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={urlToImage} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button href={url} target="_blank" variant="dark">
          Read More <FontAwesomeIcon icon={faAngleRight} />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Article;
