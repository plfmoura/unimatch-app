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
    text_container: {
      gap: 20,
      width: 400,
      alignItems: 'center'
    },
    title: {
      textAlign: 'center',
      color: "#fff",
      width: "100%",
      fontSize: 28,
      fontWeight: 'bold'
    },
    title_span: {
      color: "#FF453C"
    },
    subtitle: {
      textAlign: 'center',
      fontSize: 20,
      width: "60%",
      color: "#fff"
    },
    auth_container: {
      gap: 15
    },
    footer_text: {
      color: '#0085FF',
      fontWeight: 'bold',
      fontSize: 16,
      padding: 20
    }
  })