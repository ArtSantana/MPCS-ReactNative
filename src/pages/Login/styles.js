import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1c1c1e',
  },

  title: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    alignSelf: 'center',    
  },

  header: {
    marginTop: 16
  },

  textSignIn: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 24
  },

  form: {
    paddingVertical: 16,
    backgroundColor: '#2c2c2e',
    width: '90%',
    height: '45%',
    height: 360,
    borderRadius: 10,
  },

  textInputView: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    marginHorizontal: 16,
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center'
  },

  textInputUser: {
    color: 'white', 
    marginLeft: 8,
    width: '100%'
  },

  textInputPassword: {
    color: 'white', 
    marginLeft: 8,
    width: '80%'
  },

  footer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    marginBottom: 16,
    alignSelf: 'center'
  },

  forgotPassword: {
    color: '#64d2ff',
    alignSelf: 'flex-end',
    marginRight: 16,
    marginTop: 8,
  }
})