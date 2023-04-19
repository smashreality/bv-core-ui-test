import { useEffect, useRef, useState } from 'react';
import { CircularProgress } from '@mui/material';

function parentHeight(elem) {
  return elem.parentElement.clientHeight;
}

const Loader = () => {
  const ref = useRef();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(parentHeight(ref.current));
    }
  }, [ref]);

  return (
    <div
      // TODO: Fix this error
      //@ts-ignore
      ref={ref}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'content',
        textAlign: 'center',
        height: height === 0 ? '100%' : height,
        width: '100%',
      }}
    >
      <CircularProgress color="primary" size={50} />
    </div>
  );
};

export default Loader;
