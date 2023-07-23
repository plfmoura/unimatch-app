import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 30,
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#111',
      color: "#fff"
    },
    logo_container:{
      marginTop: 20
    },
    content: {
        width: '80%',
        alignItems: 'center',
        gap: 30
    },
    input_container:{
        flexDirection: 'row',
        gap: 10,
    },
    text_input: {
        fontSize: 24,
        color: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        padding: 5,
        textAlign: 'center'
    },
    about_text: {
      fontSize: 14,
      color: '#ffffff50',
      width: '80%',
      textAlign: 'justify'
    },
    footer_text: {
      color: '#0085FF',
      fontWeight: 'bold',
      fontSize: 16,
      padding: 20
    }
  })