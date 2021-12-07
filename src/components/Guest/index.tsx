import type { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';

interface GuestProps {
  children: ReactNode;
}

export const Guest: FC<GuestProps> = (props) => {
  const { children } = props;

  return <>{children}</>;
};

Guest.propTypes = {
  children: PropTypes.node
};
