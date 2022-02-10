import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
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
      <FaSignOutAlt size={30} color={'#fff'} style={{ marginRight: 20 }} />
    </TouchableOpacity>
  );
};

export default Signout;

const styles = StyleSheet.create({});
