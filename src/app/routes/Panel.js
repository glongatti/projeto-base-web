import React from 'react';
import { Redirect } from '@reach/router';
import { connect } from 'react-redux';
import { I18n } from 'react-redux-i18n';

import { Helmet } from 'react-helmet';

import * as AuthSelectors from '../redux/reducers/auth';

class Panel extends React.PureComponent {
  render() {
    const { title, container, isAuthenticated } = this.props;

    return (
      <div>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        {isAuthenticated ? (
          <Redirect to={I18n.t('routes.login.url')} />
        ) : container}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: AuthSelectors.isAuthenticated(state),
});

export default connect(
  mapStateToProps,
)(
  Panel,
);
