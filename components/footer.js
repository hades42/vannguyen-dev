import { Box, Text, Icon, useColorModeValue, Link } from '@chakra-ui/react';
import { Reference } from './paragraph';
import { IoLogoGithub } from 'react-icons/io5';

const Footer = () => {
  return (
    <Box
      bg="gray.800"
      padding="4"
      marginTop="20"
      align="center"
      opacity={0.8}
      fontSize="sm"
    >
      <Text color="white">
        &copy; {new Date().getFullYear()} Van Nguyen Nguyen. All Rights
        Reserved.
      </Text>
      <Text color="white">
        Feel free to contribute to the website on{' '}
        <Reference path="https://github.com/hades42/vannguyen-dev">
          <Icon as={IoLogoGithub} /> Github
        </Reference>{' '}
        if you see something go wrong
      </Text>
      <Text color="white">
        Contanct me:{' '}
        <Link fontWeight="bold" href="mailto:nguyenvannguyen.oc@gmail.com">
          nguyenvannguyen.oc@gmail.com
        </Link>
      </Text>
    </Box>
  );
};

export default Footer;
