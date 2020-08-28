import React from 'react';
import Helmet from 'react-helmet';
import Header from './header';
import usesiteMetadata from '../hooks/use-sitemetadata';
import "../scss/styles.scss";

const Layout = ({ children }) => {
  const { title, description } = usesiteMetadata();

  return (
  <>
    <Helmet>
      <html lang='en' />
      <title>{title}</title>
      <meta name='description' content={description} />
    </Helmet>
      <box-l>
        <center-l>
          <stack-l>
          <Header />
          <main>
            {children}
          </main>
        </stack-l>
      </center-l>
    </box-l>
  </>
);}

export default Layout;
