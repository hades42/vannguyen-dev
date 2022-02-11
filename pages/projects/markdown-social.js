import { Container, Badge, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, ProjectImage, Meta } from '../../components/project';
import Layout from '../../components/layout/article';
import { Paragraph, Reference } from '../../components/paragraph';
import { siteMetadata } from '../../components/SEO/siteMetadata';
import { PageSeo } from '../../components/SEO/SEO';

const Project = () => {
  const { title } = siteMetadata;
  return (
    <>
      <PageSeo
        title={`${title} - Markdown Social`}
        description={`A web application for people to share their post in markdown format with a online text editor `}
      />
      <Layout title="Shopology">
        <Container my={8}>
          <Title>
            Markdown Social<Badge>2021</Badge>
          </Title>
          <Paragraph>
            A web application for people to share their post in markdown format
            with a online text editor
          </Paragraph>
          <List ml={4} my={4}>
            <ListItem>
              <Meta>Website</Meta>
              <Reference path="https://poemsocialapp42.herokuapp.com/">
                https://poemsocialapp42.herokuapp.com/
                <ExternalLinkIcon></ExternalLinkIcon>
              </Reference>{' '}
              (The website could be taken a while to be loaded since the project
              is on a free Heroku machine)
            </ListItem>
            <ListItem>
              <Meta>Github</Meta>
              <Reference path="https://github.com/hades42/MDsocial">
                https://github.com/hades42/MDsocial
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
                NodeJS, ReactJS, MongoDB, ExpressJS, Heroku, CodeMirror
              </span>
            </ListItem>
          </List>
          <ProjectImage
            alt="Markdown Social front page"
            src="/images/markdown-home.png"
          ></ProjectImage>
          <ProjectImage
            alt="Markdown Social editor page"
            src="/images/MDEditor.png"
          ></ProjectImage>
        </Container>
      </Layout>
    </>
  );
};

export default Project;
