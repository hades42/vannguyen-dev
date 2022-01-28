import { Container, Box, Heading, Image } from '@chakra-ui/react';

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hi, I'm just a geek who love making software
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Van Nguyen Nguyen
          </Heading>
          <p>Software Engineering (Developer / Designer)</p>
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
    </Container>
  );
};

export default Page;
