import { Spinner, Center } from '@chakra-ui/react';

const Loading = () => {
  return (
    <Center h="200px">
      <Spinner size="xl" />
    </Center>
  );
};

export default Loading;
