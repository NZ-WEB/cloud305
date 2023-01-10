import { FunctionComponent } from 'react';

import MainLayout from './MainLayout';

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent,
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <MainLayout>
        <Component {...props} />
      </MainLayout>
    );
  };
};
