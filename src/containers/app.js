import React, { Component } from 'react';
import { connect } from 'react-redux';
import Canvas from '../components/canvas';
import { windowResize } from '../actions/canvas';

const clrs = ['#FFE200', '#34A766', '#0072BB', '#DB3B43', '#FE7541'];

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
    const { w, h } = this.props;
    return (
      <Canvas { ...this.props }>
        {
          clrs.map((clr, idx) => {
            return (
              <rect key={ idx }
                x={ 0.1625 * w + (0.15 * w * idx) } y={ 0.25 * h }
                width={ 0.075 * w }
                height={ 0.5 * h }
                fill={ clr } />
            );
          })
        }
      </Canvas>
    );
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
