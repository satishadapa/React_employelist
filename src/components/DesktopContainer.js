import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import {Container, Menu, Dropdown} from 'semantic-ui-react'


class DesktopContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { children, user } = this.props

    return (
      <div>
        <Menu className="top">
          <Container>
            <Menu.Item>Employerslist</Menu.Item>
          </Container>
        </Menu>
        {children}
      </div>
    )
  }
}

DesktopContainer.propTypes = {
  user: PropTypes.object,
  children: PropTypes.node,
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, null)(withRouter(DesktopContainer));