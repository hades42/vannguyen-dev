import { Container } from '@chakra-ui/react';

const GeneralContainer = ({ children, isTOC }) => {
  const isWidder = isTOC || false;
  return (
    <Container
      minH="90vh"
      pt={14}
      maxWidth={isWidder ? 'container.xl' : 'container.md'}
    >
      {children}
    </Container>
  );
};

export { GeneralContainer };
