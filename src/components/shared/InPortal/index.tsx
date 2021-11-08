import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

type IInPortalProps = {
  id: string;
};

export const InPortal: React.FC<IInPortalProps> = ({ id, children }) => {
  const [hasMounted, setHasMounted] = React.useState(false);

  const element = useRef<HTMLElement>(document.querySelector(`#${id}`));

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted || !element.current) {
    return null;
  }

  return ReactDOM.createPortal(children, element.current);
};
