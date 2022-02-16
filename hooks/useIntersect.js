import { useEffect, useRef } from 'react';

const useIntersectionObserve = setActiveH => {
  const headingElementsRef = useRef({});
  useEffect(() => {
    const callback = headings => {
      headingElementsRef.current = headings.reduce((map, headingElement) => {
        map[headingElement.target.id] = headingElement;
        return map;
      }, headingElementsRef.current);

      const currHeadings = [];
      Object.keys(headingElementsRef.current).forEach(key => {
        const headingElement = headingElementsRef.current[key];
        if (headingElement.isIntersecting) currHeadings.push(headingElement);
      });

      if (currHeadings.length === 1) {
        setActiveH(currHeadings[0].target.id);
      } else if (currHeadings.length > 1) {
        setActiveH(currHeadings[currHeadings.length - 1].target.id);
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: '0px 0px -40% 0px',
      threshold: 1,
    });

    const content = document.getElementById('post-body');
    const headingElements = Array.from(content.querySelectorAll('h1,h2,h3,h4'));
    headingElements.forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [setActiveH]);
};

export default useIntersectionObserve;
