import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Section from '../components/section';
import { ProjectGridItem } from '../components/grid-item';
import shopThumbNail from '../public/images/shopology-front.png';
import mdSocial from '../public/images/MDEditor.png';
import Layout from '../components/layout/article';
import { siteMetadata } from '../components/SEO/siteMetadata';
import { PageSeo } from '../components/SEO/SEO';
import { GeneralContainer } from '../components/GeneralContainer';

const Projects = () => {
  const { title } = siteMetadata;
  return (
    <>
      <GeneralContainer>
        <PageSeo
          title={`${title} - Projects Page`}
          description="A small showcase of all projects by Van Nguyen Nguyen. This is where I show all of my interesting projects"
        />
        <Layout>
          <Container>
            <Heading as="h3" fontSize={20} mb={4} mt={6}>
              Projects
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
              <Section>
                <ProjectGridItem
                  id="shopology"
                  title="Shopology"
                  thumbnail={shopThumbNail}
                >
                  An E-commerce Web application built with MERN stack
                </ProjectGridItem>
              </Section>
              <Section>
                <ProjectGridItem
                  id="markdown-social"
                  title="MDSocial"
                  thumbnail={mdSocial}
                >
                  A web application for people to share their post in markdown
                  format with a online text editor
                </ProjectGridItem>
              </Section>
            </SimpleGrid>
          </Container>
        </Layout>
      </GeneralContainer>
    </>
  );
};

export default Projects;
