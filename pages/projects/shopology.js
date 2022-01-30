import { Container, Badge, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, ProjectImage, Meta } from '../../components/project';
import Layout from '../../components/layout/article';
import { Paragraph, Reference } from '../../components/paragraph';

const Project = () => {
  return (
    <Layout title="Shopology">
      <Container my={8}>
        <Title>
          Shopology <Badge>2021</Badge>
        </Title>
        <Paragraph>
          E-commerce platform built with MERN stack (MongoDB, ExpressJS,
          ReactJS, Nodejs)
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Reference path="https://comp3120-shopology.herokuapp.com">
              https://comp3120-shopology.herokuapp.com
              <ExternalLinkIcon></ExternalLinkIcon>
            </Reference>{' '}
            (The website could be taken a while to be loaded since the project
            is on a free Heroku machine)
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <Reference path="https://github.com/hades42/Shopology">
              https://github.com/hades42/Shopology
              <ExternalLinkIcon></ExternalLinkIcon>
            </Reference>{' '}
            (Check out a detailed description about the project)
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Website</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              NodeJS, ReactJS, MongoDB, ExpressJS, Algolia Search, Heroku
            </span>
          </ListItem>
        </List>
        <ProjectImage
          alt="shopology front page"
          src="/images/shopology-front.png"
        ></ProjectImage>
        <ProjectImage
          alt="shopology shop page"
          src="/images/shopology-shop.png"
        ></ProjectImage>
      </Container>
    </Layout>
  );
};

export default Project;
