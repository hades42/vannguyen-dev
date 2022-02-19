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
                  'var(--chakra-colors-blackAlpha-600',
                  'var(--chakra-colors-orange-200)'
                ),
              }}
            >
              <Icon as={ArrowBackIcon} /> Previous Post
            </div>
            <NextLink href={`/posts/${prev.id}`}>
              <LinkOverlay
                _hover={{
                  color: '#467df2',
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
                  'var(--chakra-colors-blackAlpha-600',
                  'var(--chakra-colors-orange-200)'
                ),
              }}
            >
              Next Post <Icon as={ArrowForwardIcon} />
            </div>
            <NextLink href={`/posts/${next.id}`}>
              <LinkOverlay
                _hover={{
                  color: '#467df2',
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
