import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Section from '../components/section';
import { ProjectGridItem } from '../components/grid-item';
import shopThumbNail from '../public/images/shopology-front.png';
import mdSocial from '../public/images/MDEditor.png';

const Projects = () => {
  return (
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
            A web application for people to share their post in markdown format
            will many features supported text editor
          </ProjectGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  );
};

export default Projects;
