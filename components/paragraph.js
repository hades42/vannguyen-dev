import styled from '@emotion/styled';
import { useColorModeValue } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';

const Paragraph = styled.p`
  text-algin: justify;
  text-indent: 1em;
`;

const Reference = ({ children, path, notDefault }) => {
  return (
    <Link
      href={path}
      isExternal
      fontWeight="bold"
      color={
        notDefault
          ? 'orange.200'
          : useColorModeValue('globalBlue', 'orange.200')
      }
    >
      {children}
    </Link>
  );
};

export { Paragraph, Reference };
