import React, { useCallback, useEffect, useRef, useState } from 'react';

import { Typography } from '@Components/shared/Typography';

import { ActiveIndicator, Container, List } from './styles';

const links = [
  {
    label: 'Collections',
    path: '/',
  },
  {
    label: 'Men',
    path: '/',
  },
  {
    label: 'Women',
    path: '/',
  },
  {
    label: 'About',
    path: '/',
  },
  {
    label: 'Contact',
    path: '/',
  },
];

const Desktop: React.FC = () => {
  const navRef = useRef<HTMLElement>(null);

  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const [indicatorLeftOffset, setIndicatorLeftOffset] = useState(0);
  const [listItems, setListItems] = useState<NodeListOf<HTMLLIElement>>();

  const handleListItemHover = useCallback((item: HTMLLIElement) => {
    return () => {
      const { width, left } = item.getBoundingClientRect();

      setIndicatorWidth(width);
      if (navRef?.current)
        setIndicatorLeftOffset(
          Math.abs(navRef.current.getBoundingClientRect().left - left),
        );
    };
  }, []);

  const handleListMouseLeave = useCallback(() => {
    setIndicatorWidth(0);
  }, []);

  useEffect(() => {
    listItems?.forEach(i => {
      i.addEventListener('mouseover', handleListItemHover(i));
    });

    return () => {
      listItems?.forEach(i => {
        i.removeEventListener('mouseover', handleListItemHover(i));
      });
    };
  }, [listItems, handleListItemHover]);

  useEffect(() => {
    const nav = navRef.current;

    setListItems(nav?.querySelectorAll('li'));

    nav?.addEventListener('mouseleave', handleListMouseLeave);

    return () => {
      nav?.removeEventListener('mouseleave', handleListMouseLeave);
    };
  }, [handleListMouseLeave, navRef]);

  return (
    <Container ref={navRef}>
      <List>
        {links.map(link => (
          <li key={link.label}>
            <a href={link.path}>
              <Typography
                color="darkGrayishBlue"
                letterSpacing="tight"
                css={{
                  '&:hover': {
                    color: '$darkBlue',
                  },
                }}
              >
                {link.label}
              </Typography>
            </a>
          </li>
        ))}
      </List>

      <ActiveIndicator
        css={{
          width: indicatorWidth,
          left: indicatorLeftOffset,
        }}
      />
    </Container>
  );
};

export default Desktop;
