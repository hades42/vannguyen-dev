import { Heading, Text, Image, useColorModeValue } from '@chakra-ui/react';
import { Reference } from '../paragraph';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const MyH1 = props => <Heading marginY="18px" as="h1" size="lg" {...props} />;
const MyH2 = props => <Heading marginY="18px" as="h2" size="md" {...props} />;
const MyH3 = props => <Heading marginY="18px" as="h3" size="sm" {...props} />;
const MyH4 = props => <Heading marginY="18px" as="h4" size="xs" {...props} />;

const MyLink = props => {
  let content = props.children;
  let href = props.href;
  return (
    <Reference path={href}>
      {content} <ExternalLinkIcon></ExternalLinkIcon>
    </Reference>
  );
};

const MyStrong = props => {
  let color = useColorModeValue('purple', '#fabd2f');
  return (
    <Text as="span" display="inline" color={color} fontWeight="bold">
      {props.children}
    </Text>
  );
};

const MyImage = props => {
  const src = props.src;
  const alt = props.alt;
  const color = useColorModeValue('black.600', 'gray.400');
  return (
    <>
      <Image marginY="3" borderRadius="md" src={src} alt={alt} marginX="auto" />
      <Text
        as="span"
        marginBottom="2"
        display="block"
        align="center"
        color={color}
      >
        {alt}
      </Text>
    </>
  );
};

const MyList = props => {
  return <li style={{ margin: '10px 0 10px 30px' }}>{props.children}</li>;
};

const MyHr = props => {
  const color = useColorModeValue('black', '#4a4a49');
  return <hr style={{ borderColor: `${color}`, margin: '30px 0' }} />;
};

export { MyH1, MyH4, MyH3, MyH2, MyLink, MyStrong, MyImage, MyList, MyHr };
