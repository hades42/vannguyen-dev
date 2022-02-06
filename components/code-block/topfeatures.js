import {
  Box,
  Button,
  Flex,
  Spacer,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';

const TopFeature = ({ language, file, code }) => {
  const [currLabel, setCurrLabel] = useState('Copy');
  const colorBtn = useColorModeValue('blackAlpha.700', 'gray.300');

  const copyToClibBoard = copyText => {
    let data = [
      new ClipboardItem({
        'text/plain': new Blob([copyText], { type: 'text/plain' }),
      }),
    ];
    navigator.clipboard.write(data).then(
      function () {
        setCurrLabel('Copied');
        setTimeout(() => {
          setCurrLabel('Copy');
        }, 1000);
      },
      function () {
        setCurrLabel(
          'There are errors, can you report on my Github? Link in the footer'
        );
      }
    );
  };

  return (
    <Box
      borderTop="1px solid white"
      borderLeft="1px solid white"
      borderRight="1px solid white"
      borderTopLeftRadius="10px"
      borderTopRightRadius="10px"
      bg="#1c1c1c"
      paddingTop="2"
      paddingLeft="2"
      paddingRight="2"
      marginTop="1.5rem"
    >
      <Flex alignItems="center">
        <Box borderRadius="md" padding="1" bg="whiteAlpha.900">
          <Text
            as="span"
            fontSize={12}
            textTransform="uppercase"
            fontWeight="bold"
            color="blackAlpha.900"
          >
            {language}
          </Text>
        </Box>
        {file && (
          <Text marginLeft="4" color="gray.300">
            {file}
          </Text>
        )}
        <Spacer />
        <Button
          color={colorBtn}
          size="sm"
          fontSize="13"
          onClick={() => copyToClibBoard(code)}
        >
          {currLabel}
        </Button>
      </Flex>
    </Box>
  );
};

export default TopFeature;
