/** @jsx jsx */
import { jsx } from '@emotion/react';

export default props => (
  <div
    {...props}
    css={{
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
    }}
  />
);
