import { StyleSheet } from "react-native";


export const styles = StyleSheet.create ({
    flexOne: {
  flex: 1,
},
grid:{
    flex:1,
    padding:20
},
 container: {
   flex: 1,
   backgroundColor: "#fff",
 },
 card: {
  flexDirection: "row",
  alignItems:"center",
  gap: 10,
  padding: 5,
  backgroundColor: "#fff", // required for shadow to be visible
  borderRadius: 8,

  // iOS shadow
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  marginBottom:10,
  // Android shadow
  elevation: 4,
},
 image:{
    width:70,
    height:70,
    borderRadius:5,
 },
 name:{
    fontSize:18,
    color:"#C67C4E",
 },
 descriptor:{
  fontSize:12,
  color:"#8b8b8bff"
 },
})