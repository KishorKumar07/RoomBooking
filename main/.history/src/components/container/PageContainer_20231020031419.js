import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Logo from 'src/layouts/full/shared/logo/Logo';
const PageContainer = ({ title, description, children }) => (
  <div>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
    {children}
  </div>
);

PageContainer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
};

export default PageContainer;
