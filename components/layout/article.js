import { GridItemStyle } from '../grid-item';

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
};

const Layout = ({ children }) => (
  <>
    {children}
    <GridItemStyle></GridItemStyle>
  </>
);

export default Layout;
