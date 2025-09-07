import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    color: "#fff",
  },

  header:{
    width: "100%",
    height: "35%",
     backgroundColor: "#111",
     padding: 20,
     gap: 10,
     fontSize: 18,
     fontWeight: "500",
  },
  headerText:{
    color: "#fff",
    fontSize: 18,   
    fontWeight: "500",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#11111",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#555555ff",
    paddingLeft: 10,
   
    color: "#555555ff",
     width: "85%",
  },
  search:{
    color:"#555555ff",
    fontSize:16,
    height:"100%",
    padding: 16,
   
  },

  searchContent:{
     flexDirection: "row",
     alignItems: "center",
     width: "100%",
     gap: 10,
  }
});
