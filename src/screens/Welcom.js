import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Welcom extends Component {

  static propTypes = {
    email: PropTypes.string.isRequired,
  }

  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>
        <Text>Welcome {this.props.email}</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}
const mapStateToProps = state => ({
  email: state.Login.email,
});
export default connect(mapStateToProps)(Welcom);