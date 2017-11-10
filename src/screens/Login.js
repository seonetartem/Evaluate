import React, { Component } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions/Login';

class Login extends Component {

  static propTypes = {
    login: PropTypes.func.isRequired,
  };

  state = {
    email: 't@t.com',
    password: 't',
  }

  changeText(name, value) {
    this.setState({ [name]: value });
  }

  login() {

    this.props.login({
      email: this.state.email,
      password: this.state.password,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.input, { marginBottom: 20 }]}>
          <TextInput
            style={{ width: '100%' }}
            placeholder={"Email"}
            onChangeText={text => this.changeText('email', text)}
            value={this.state.email}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            style={{ width: '100%' }}
            placeholder={"Password"}
            onChangeText={text => this.changeText('password', text)}
            value={this.state.password}
            secureTextEntry
          />
        </View>
        <Button
          title={'Login'}
          onPress={() => this.login()}
          disabled={!this.state.email || !this.state.password}
        />
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
  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 5,
  }
}

const mapDispatchToProps = {
  login,
};

export default connect(null, mapDispatchToProps)(Login);
