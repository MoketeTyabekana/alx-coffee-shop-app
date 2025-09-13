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
  backgroundColor: "#fff",
  borderRadius: 8,


  shadowColor: "#000",
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.2,
  shadowRadius: 2,
  marginBottom:10,
  width:"100%",
  elevation: 4,
},
 image:{
    width:100,
    height:100,
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
 price:{
    fontSize:18,
    marginTop:4,
    color:"#C67C4E",
    fontWeight:600
 },
 rating:{
    flexDirection:"row",
    gap:10,
    alignItems:"center"
 },
 ratingText:{
    fontSize:14,
color:"#8b8b8bff"
 },
 contentContainer: {
  flex: 1,
  justifyContent: "center",
},

buttonContainer: {
  justifyContent: "center",
  alignItems: "flex-end",
 
},
})