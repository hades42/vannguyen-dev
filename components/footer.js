import { Box, Text, Icon } from '@chakra-ui/react';
import { Reference } from './paragraph';
import { IoLogoGithub } from 'react-icons/io5';

const Footer = () => {
  return (
    <Box align="center" opacity={0.8} fontSize="sm">
      <Text>
        &copy; {new Date().getFullYear()} Van Nguyen Nguyen. All Rights
        Reserved.
      </Text>
      <Text>
        Feel free to contribute to my{' '}
        <Reference path="https://github.com/hades42/vannguyen-dev">
          <Icon as={IoLogoGithub} /> Github
        </Reference>{' '}
        if you see something go wrong on the website
      </Text>
    </Box>
  );
};

export default Footer;
