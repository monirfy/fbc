import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Article from '../Article/Article';

const News = props => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const url = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=91b87b00c18f4f52b603ecd278c2e660';
    fetch(url)
      .then(res => res.json())
      .then(data => setArticles(data.articles));
  }, []);

  return (
    <Container className="py-5">
      <Row>
        <Col lg={{ span: 6, offset: 3 }}>{articles.length && articles.map((article, index) => <Article key={index} article={article}></Article>)}</Col>
      </Row>
    </Container>
  );
};

export default News;
