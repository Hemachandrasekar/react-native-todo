import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements';
import { auth, signOut } from '../firebase';
import { useNavigation } from '@react-navigation/native';

const Signout = () => {
  const navigation = useNavigation();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigation.navigate('Login');
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <TouchableOpacity onPress={handleSignout}>
      <Icon name="log-out" type="feather" color={'white'} />
    </TouchableOpacity>
  );
};

export default Signout;

const styles = StyleSheet.create({});
