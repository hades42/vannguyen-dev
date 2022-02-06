import Highlight, { defaultProps } from 'prism-react-renderer';
import parsePart from '../../lib/parseRange';
import { Pre, Line, LineNo, LineContent } from './line';
import TopFeature from './topfeatures';

const shouldHighlight = raw => {
  const parsedRange = parsePart(raw);
  if (parsedRange) {
    return index => parsedRange.includes(index);
  } else {
    return () => false;
  }
};

const CustomCode = props => {
  const className = props.children.props.className || '';
  const code = props.children.props.children.trim();
  const language = className.replace(/language-/, '');
  const file = props.children.props.file;

  const rawRange = props.children.props.highlights || '';
  const highlights = shouldHighlight(rawRange);

  return (
    <Highlight
      {...defaultProps}
      theme={undefined}
      code={code}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <>
          <TopFeature
            language={language}
            file={file}
            code={props.children.props.children}
          />
          <Pre className={className} style={style}>
            {tokens.map((line, i) => (
              <Line key={i} {...getLineProps({ line, key: i })}>
                <LineNo
                  style={{
                    borderRight: highlights(i + 1) ? '3px solid #ffce47' : '',
                    color: highlights(i + 1) && '#ffce47',
                  }}
                >
                  {i + 1}
                </LineNo>
                <LineContent
                  style={{
                    background: highlights(i + 1) ? '#2e2e2e' : 'transparent',
                    paddingLeft: '10px',
                  }}
                >
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </LineContent>
              </Line>
            ))}
          </Pre>
        </>
      )}
    </Highlight>
  );
};

export default CustomCode;
