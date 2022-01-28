import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button,
  VStack,
  HStack,
} from '@chakra-ui/react';
import Section from '../components/section';
import { Paragraph, Reference } from '../components/paragraph';
import { ExternalLinkIcon, ChevronRightIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import { BioYear, BioSection, BioDesc } from '../components/bio';

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
          About Me
        </Heading>
        <Paragraph>
          I am currently a student at Macquarie University who is majoring in
          Information Technology and have a huge passion for building software
          to solve some real-life problems. I also enjoy spending time on
          joining coding competition with my friends like Hackathon or{' '}
          <Reference path="https://atcoder.jp/users/Poseidon42">
            Competitive Programming (Atcoder{' '}
            <ExternalLinkIcon></ExternalLinkIcon>)
          </Reference>{' '}
          during my free times from Uni.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/projects">
            <Button
              rightIcon={<ChevronRightIcon />}
              colorScheme={useColorModeValue('purple', 'orange')}
            >
              My Projects
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <VStack alignItems="start">
          <HStack w="100%" spacing={8}>
            <BioYear w="20%">2000</BioYear>
            <BioDesc>I was born in Da Nang city, Viet Nam.</BioDesc>
          </HStack>

          <HStack w="100%" spacing={8}>
            <BioYear w="20%">2019 - 2022</BioYear>
            <BioDesc>
              Go to Macquarie University for Bachelor of Information Technology
              (current)
            </BioDesc>
          </HStack>
        </VStack>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I love
        </Heading>
        <Paragraph>
          Playing video game (puzzle and rogue-like), listening to music
          (Lo-fi), reading book (specially sci-fi), doing programming challenge
          (like{' '}
          <Reference path="https://atcoder.jp/users/Poseidon42">
            Competitive Programming <ExternalLinkIcon></ExternalLinkIcon>
          </Reference>
          ) and learning about the computer
        </Paragraph>
      </Section>
    </Container>
  );
};

export default Page;
