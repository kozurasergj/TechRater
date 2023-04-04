import { LayoutProps } from "./Layout.props";
import styles from "./Layout.module.css";
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { Footer } from './Footer/Footer';
import { Component, FunctionComponent } from 'react';

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <Sidebar />
        <section>
          {children}
        </section>
      </main>
      <Footer />
    </>
  );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
