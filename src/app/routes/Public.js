import React from 'react';
import { Helmet } from 'react-helmet';

class Public extends React.PureComponent {
  render() {
    const { title, container } = this.props;

    return (
      <div>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        {container}
      </div>
    );
  }
}

export default Public;
