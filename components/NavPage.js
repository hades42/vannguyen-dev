import {
  LinkBox,
  LinkOverlay,
  Spacer,
  Flex,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

const NavPage = ({ prev, next }) => {
  return (
    <div style={{ marginTop: '30px' }}>
      <Flex flexDir={['column', 'column', 'row', 'row']}>
        {prev && (
          <LinkBox
            marginTop="10px"
            textAlign="left"
            fontSize="16px"
            cursor="pointer"
            maxW={['100%', '100%', '300px']}
            width="100%"
            borderRadius="8px"
            paddingX="16px"
            paddingY="8px"
            border={`1.5px solid ${useColorModeValue(
              'var(--chakra-colors-gray-600)',
              '#B8BB26'
            )}`}
          >
            <div
              style={{
                color: useColorModeValue(
                  'var(--chakra-colors-blackAlpha-900',
                  'var(--chakra-colors-whileAlpha-200)'
                ),
                marginBottom: '5px',
              }}
            >
              <Icon as={ArrowBackIcon} /> Previous Post
            </div>
            <NextLink href={`/posts/${prev.id}`}>
              <LinkOverlay
                color={useColorModeValue('blackAlpha.700', 'orange.200')}
                _hover={{
                  color: useColorModeValue('black', 'white'),
                }}
              >
                {prev.title}
              </LinkOverlay>
            </NextLink>
          </LinkBox>
        )}
        <Spacer />
        {next && (
          <LinkBox
            marginTop="10px"
            textAlign="right"
            fontSize="16px"
            cursor="pointer"
            maxW={['100%', '100%', '300px']}
            width="100%"
            borderRadius="8px"
            paddingX="16px"
            paddingY="8px"
            border={`1.5px solid ${useColorModeValue(
              'var(--chakra-colors-gray-600)',
              '#B8BB26'
            )}`}
          >
            <div
              style={{
                color: useColorModeValue(
                  'var(--chakra-colors-blackAlpha-900',
                  'var(--chakra-colors-whileAlpha-200)'
                ),
                marginBottom: '5px',
              }}
            >
              Next Post <Icon as={ArrowForwardIcon} />
            </div>
            <NextLink href={`/posts/${next.id}`}>
              <LinkOverlay
                color={useColorModeValue('blackAlpha.700', 'orange.200')}
                _hover={{
                  color: useColorModeValue('black', 'white'),
                }}
              >
                {next.title}
              </LinkOverlay>
            </NextLink>
          </LinkBox>
        )}
      </Flex>
    </div>
  );
};
export default NavPage;
