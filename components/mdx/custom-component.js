import { Heading, Text, Image, useColorModeValue } from '@chakra-ui/react';
import { Reference } from '../paragraph';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import NextImage from 'next/image';
import { Global } from '@emotion/react';

const MyH1 = props => {
  const newId = props.children.split(' ').join('-');
  return (
    <Heading
      color={useColorModeValue('blackAlpha.800', '#B8BB26')}
      id={newId}
      marginY="18px"
      as="h1"
      size="lg"
    >
      {props.children}
    </Heading>
  );
};
const MyH2 = props => {
  const newId = props.children.split(' ').join('-');
  return (
    <Heading
      color={useColorModeValue('blackAlpha.800', '#B8BB26')}
      id={newId}
      marginY="18px"
      as="h2"
      size="md"
    >
      {props.children}
    </Heading>
  );
};
const MyH3 = props => {
  const newId = props.children.split(' ').join('-');
  return (
    <Heading
      color={useColorModeValue('blackAlpha.800', '#B8BB26')}
      id={newId}
      marginY="18px"
      as="h3"
      size="sm"
      {...props}
    />
  );
};
const MyH4 = props => {
  const newId = props.children.split(' ').join('-');
  return <Heading id={newId} marginY="18px" as="h4" size="xs" {...props} />;
};

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
  let color = useColorModeValue('globalBlue', '#fabd2f');
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

const TestImage = props => {
  const src = props.src;
  const alt = props.alt;
  const color = useColorModeValue('black.600', 'gray.400');
  const width = props.width || 300;
  const height = props.height || 300;
  return (
    <div style={{ display: 'block', margin: '30px 0' }}>
      <NextImage
        className="customImage"
        width={width}
        height={height}
        src={src}
        alt={alt}
        layout="responsive"
        priority
      />
      <Global
        styles={`
        .customImage{
            border-radius: 10px;
        }
        `}
      ></Global>
      <Text
        as="span"
        marginTop="2"
        display="block"
        align="center"
        color={color}
      >
        {alt}
      </Text>
    </div>
  );
};

const MyList = props => {
  return <li style={{ margin: '10px 0 10px 30px' }}>{props.children}</li>;
};

const MyHr = props => {
  const color = useColorModeValue('black', '#4a4a49');
  return <hr style={{ borderColor: `${color}`, margin: '30px 0' }} />;
};

export {
  TestImage,
  MyH1,
  MyH4,
  MyH3,
  MyH2,
  MyLink,
  MyStrong,
  MyImage,
  MyList,
  MyHr,
};
