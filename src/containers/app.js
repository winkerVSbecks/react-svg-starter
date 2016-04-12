import React, { Component } from 'react';
import { connect } from 'react-redux';
import Canvas from '../components/canvas';
import { windowResize } from '../actions/canvas';

function mapStateToProps(state) {
  return {
    w: state.canvas.get('w'),
    h: state.canvas.get('h'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    windowResize: (dimensions) => dispatch(windowResize(dimensions)),
  };
}

class App extends Component {

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    setTimeout(() => this.handleResize(), 300);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    return <Canvas { ...this.props } />;
  }

  handleResize = () => {
    this.props.windowResize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

}

App.propTypes = {
  w: React.PropTypes.number,
  h: React.PropTypes.number,
  windowResize: React.PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
