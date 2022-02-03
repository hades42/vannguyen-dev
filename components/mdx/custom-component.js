import { Heading, Text, Image, useColorModeValue } from '@chakra-ui/react';
import { Reference } from '../paragraph';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const MyH1 = props => <Heading as="h1" size="lg" {...props} />;
const MyH2 = props => <Heading as="h2" size="md" {...props} />;
const MyH3 = props => <Heading as="h3" size="sm" {...props} />;
const MyH4 = props => <Heading as="h4" size="xs" {...props} />;

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
  return (
    <>
      <Image marginY="3" borderRadius="md" src={src} alt={alt} />
      <Text as="span" display="block" align="center" color="gray.400">
        {alt}
      </Text>
    </>
  );
};

const MyList = props => {
  return <li style={{ marginLeft: '30px' }}>{props.children}</li>;
};

const MyHr = props => {
  const color = useColorModeValue('black', '#4a4a49');
  return <hr style={{ borderColor: `${color}`, margin: '50px 0' }} />;
};

export { MyH1, MyH4, MyH3, MyH2, MyLink, MyStrong, MyImage, MyList, MyHr };
