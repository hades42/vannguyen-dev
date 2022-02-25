import {
  ListIcon,
  ListItem,
  UnorderedList,
  useColorModeValue,
} from '@chakra-ui/react';
import { AiOutlineLink } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import styles from './TOCstyle.module.css';
import useIntersectionObserve from '../../hooks/useIntersect';

const TOC = routeID => {
  const [activeH, setActiveH] = useState();
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const content = document.getElementById('post-body');
    const headingElements = Array.from(content.querySelectorAll('h1,h2,h3,h4'));
    setHeadings(headingElements);
  }, [routeID]);

  const getLevel = heading => {
    if (heading) {
      return heading.nodeName.replace('H', '');
    }
  };

  useIntersectionObserve(setActiveH, routeID);

  console.log(activeH);
  return (
    <nav
      style={{
        top: '100px',
        position: '-webkit-sticky',
        position: 'sticky',
        maxHeight: 'calc(100vh - 40px)',
        overflow: 'auto',
        maxWidth: '25%',
      }}
      className={styles.TOC}
      aria-label="Table of contents"
    >
      <UnorderedList styleType="none" fontSize="sm">
        {headings.map(heading => (
          <ListItem
            marginLeft={
              getLevel(heading) === '2'
                ? '7'
                : getLevel(heading) === '3'
                ? '16'
                : '1'
            }
            marginBottom="3"
            key={heading.id}
            color={
              activeH === heading.id
                ? useColorModeValue('gray.900', '#B8BB26')
                : 'gray.500'
            }
            fontWeight={activeH === heading.id && 'bold'}
          >
            <ListIcon as={AiOutlineLink} />
            <a href={`#${heading.id}`}>{heading.innerText}</a>
          </ListItem>
        ))}
      </UnorderedList>
    </nav>
  );
};

export default TOC;
