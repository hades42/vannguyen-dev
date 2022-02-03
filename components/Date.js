import { Text, useColorModeValue } from '@chakra-ui/react';
import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return (
    <Text color={useColorModeValue('black.800', 'gray.500')} fontSize={14}>
      <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
    </Text>
  );
}
