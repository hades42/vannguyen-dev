import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import Section from '../components/section';
import { Paragraph, Reference } from '../components/paragraph';

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        mt={4}
        align="center"
      >
        Hi, I'm just a geek who love making software
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Van Nguyen Nguyen
          </Heading>
          <p>Software Engineer (Developer / Designer)</p>
        </Box>
        <Box
          flexShrink={0}
          align="center"
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            objectFit="cover"
            src="/images/profile.png"
            alt="Profile Image"
          ></Image>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Projects
        </Heading>
        <Paragraph>
          I am currently a student at Macquarie University who is majoring in
          Information Technology and have a huge passion for building software
          to solve some real-life problems. I also enjoy spending time on
          joining coding competition with my friends like Hackathon or{' '}
          <Reference path="https://atcoder.jp/users/Poseidon42">
            Competitive Programming
          </Reference>{' '}
          during my free times from Uni.
        </Paragraph>
      </Section>
    </Container>
  );
};

export default Page;
