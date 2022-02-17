import {
  Container,
  Box,
  Heading,
  useColorModeValue,
  Button,
  ListItem,
  List,
  Link,
  Icon,
  Tooltip,
  Stack,
  LinkOverlay,
  LinkBox,
} from '@chakra-ui/react';
import Section from '../components/section';
import { Paragraph, Reference } from '../components/paragraph';
import { ExternalLinkIcon, ChevronRightIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import Layout from '../components/layout/article';
import { IoLogoGithub, IoLogoLinkedin, IoLogoGoogle } from 'react-icons/io5';
import { FaDev } from 'react-icons/fa';
import { useState } from 'react';
import { PageSeo } from '../components/SEO/SEO';
import { siteMetadata } from '../components/SEO/siteMetadata';
import NextImage from 'next/image';
import { GeneralContainer } from '../components/GeneralContainer';
import { getSortedPostsData } from '../lib/post';
import Date from '../components/Date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData().slice(0, 3);
  return {
    props: {
      allPostsData,
    },
  };
}

const Page = ({ allPostsData }) => {
  const { occupation, title, author, description } = siteMetadata;

  const [currLable, setCurrLable] = useState('Copy Email?');
  const [activeCopy, setActiveCopy] = useState(false);

  const copyToClipboard = e => {
    const copyText = e.target.value;
    var data = [
      new ClipboardItem({
        'text/plain': new Blob([copyText], { type: 'text/plain' }),
      }),
    ];
    navigator.clipboard.write(data).then(
      function () {
        setCurrLable('Just Copied');
        setActiveCopy(true);
      },
      function () {
        setCurrLable('Something is wrong, please issue on my github');
      }
    );
  };

  const resetLable = () => {
    setActiveCopy(false);
    setCurrLable('Copy Email?');
  };

  return (
    <>
      <GeneralContainer>
        <PageSeo title={`${title} - ${occupation}`} description={description} />
        <Layout>
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
                  {author}
                </Heading>
                <p>{occupation}</p>
              </Box>
              <Box
                flexShrink={0}
                align="center"
                mt={{ base: 4, md: 0 }}
                ml={{ md: 6 }}
              >
                <Box
                  borderColor="whiteAlpha.800"
                  borderWidth={2}
                  borderStyle="solid"
                  borderRadius="md"
                  width="150px"
                  height="220px"
                  position="relative"
                >
                  <NextImage
                    src="/images/avatar.jpg"
                    alt="Profile Picture"
                    layout="fill"
                    priority
                  />
                </Box>
              </Box>
            </Box>

            <Section delay={0.1}>
              <Heading as="h3" variant="section-title">
                About Me
              </Heading>
              <Paragraph>
                I am currently a student at Macquarie University who is majoring
                in Information Technology and have a huge passion for building
                software to solve some real-life problems. I also enjoy spending
                time on joining coding competition with my friends like
                Hackathon or{' '}
                <Reference path="https://atcoder.jp/users/Poseidon42">
                  Competitive Programming (Atcoder{' '}
                  <ExternalLinkIcon></ExternalLinkIcon>)
                </Reference>{' '}
                during my free times from Uni.
              </Paragraph>
              <Stack
                align="center"
                justify="center"
                direction={['column', 'row']}
              >
                <Box>
                  <NextLink href="/posts" passHref>
                    <Button
                      margin={['20px 0 0 0', '20px 10px 5px 0']}
                      rightIcon={<ChevronRightIcon />}
                      colorScheme={useColorModeValue('blackAlpha', 'orange')}
                    >
                      My Posts
                    </Button>
                  </NextLink>
                </Box>

                <Box>
                  <NextLink href="/projects" passHref>
                    <Button
                      margin={['10px 0 0 0', '20px 0 5px 10px']}
                      rightIcon={<ChevronRightIcon />}
                      colorScheme={useColorModeValue('blackAlpha', 'orange')}
                    >
                      My Projects
                    </Button>
                  </NextLink>
                </Box>
              </Stack>
            </Section>

            <Section delay={0.2}>
              <Heading as="h3" variant="section-title">
                My Latest Posts
              </Heading>
              {allPostsData.map(post => (
                <LinkBox
                  _hover={{
                    background: useColorModeValue(
                      'rgba(228, 229, 237, 0.7)',
                      'rgb(48, 53, 82)'
                    ),
                    borderRadius: '8px',
                  }}
                  paddingY="3"
                  paddingX="2"
                  my="3"
                >
                  <Heading as="h3" fontSize="17px">
                    <NextLink href={`/posts/${post.id}`} passHref>
                      <LinkOverlay># {post.title}</LinkOverlay>
                    </NextLink>
                  </Heading>
                  <Date dateString={post.date} />
                </LinkBox>
              ))}
            </Section>

            <Section delay={0.3}>
              <Heading as="h3" variant="section-title">
                I love
              </Heading>
              <Paragraph>
                Playing video game (puzzle and rogue-like), listening to music
                (Lo-fi), reading book (specially sci-fi), manga/anime, doing
                programming challenge (like{' '}
                <Reference path="https://github.com/hades42/CompetitiveProgramming">
                  Competitive Programming <ExternalLinkIcon></ExternalLinkIcon>
                </Reference>
                ) and learning about the computer
              </Paragraph>
            </Section>

            <Section delay={0.3}>
              <Heading as="h3" variant="section-title">
                I'm on the Internet
              </Heading>
              <List>
                <ListItem>
                  <Link href="https://github.com/hades42" target="_blank">
                    <Button
                      variant="ghost"
                      color={useColorModeValue('globalBlue', 'orange.200')}
                      leftIcon={<Icon as={IoLogoGithub} />}
                    >
                      @hades42
                    </Button>
                  </Link>
                </ListItem>

                <ListItem>
                  <Link href="https://dev.to/hades42" target="_blank">
                    <Button
                      variant="ghost"
                      color={useColorModeValue('globalBlue', 'orange.200')}
                      leftIcon={<Icon as={FaDev} />}
                    >
                      @Van Nguyen
                    </Button>
                  </Link>
                </ListItem>

                <ListItem>
                  <Link
                    href="https://www.linkedin.com/in/van-nguyen-nguyen-031205178/"
                    target="_blank"
                  >
                    <Button
                      variant="ghost"
                      color={useColorModeValue('globalBlue', 'orange.200')}
                      leftIcon={<Icon as={IoLogoLinkedin} />}
                    >
                      @LinkedIn (Van Nguyen Nguyen)
                    </Button>
                  </Link>
                </ListItem>

                <ListItem onMouseEnter={resetLable}>
                  <Tooltip
                    label={currLable}
                    bg={!activeCopy ? 'grassTeal' : 'green.500'}
                    placement="right-end"
                    closeOnClick={false}
                  >
                    <Button
                      variant="ghost"
                      color={useColorModeValue('globalBlue', 'orange.200')}
                      leftIcon={<Icon as={IoLogoGoogle} />}
                      onClick={copyToClipboard}
                      value="nguyenvannguyen.oc@gmail.com"
                    >
                      nguyenvannguyen.oc@gmail.com
                    </Button>
                  </Tooltip>
                </ListItem>
              </List>
            </Section>
          </Container>
        </Layout>
      </GeneralContainer>
    </>
  );
};

export default Page;
