import { Container, Box } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, I'm just a geek who love making software
      </Box>

      <Box display={{ md: 'flex' }}></Box>
    </Container>
  )
}

export default Page
