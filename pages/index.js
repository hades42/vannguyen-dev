import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, I'm just a geek who love making software
      </Box>

      <Box display={{ md: 'flex' }}></Box>
      <Box flexGrow={1}>
        <Heading as="h2" variant="page-title">
          Van Nguyen Nguyen
        </Heading>
        <p>Software Engineering (Developer / Designer)</p>
      </Box>
    </Container>
  )
}

export default Page
