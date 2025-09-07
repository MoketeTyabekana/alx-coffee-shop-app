import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    color: "#fff",
  },

  header:{
    width: "100%",
    height: "30%",
     backgroundColor: "#111",
     padding: 20,
     gap: 10,
     fontSize: 18,
     fontWeight: "500",
  },
  headerText:{
    color: "#555555ff",
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
    width: "100%",
  },

  searchContent:{
     flexDirection: "row",
     alignItems: "center",
     width: "100%",
     gap: 10,
  },
  banner:{
    position: "absolute",
    top: "20%",
    width: "90%",
    height: 165,
    backgroundColor: "#C67C4E",
    alignSelf: "center",
    borderRadius: 16,
    overflow: "hidden",
    zIndex: 2,
  },

  bannerImage:{
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    borderRadius: 16,
    overflow: "hidden",
    width: "100%",
    height: "100%",
    position: "relative",
  },
  bannerText:{
    color: "#fff",
    fontSize: 16,
    margin: 20,
    position: "absolute",
    padding: 8,
    top: 0,
    backgroundColor: "#d8d8d8b6",
    borderRadius: 8,
    fontWeight: "500",
  },
  coffeeList:{ 
    flex:1,
    backgroundColor:"#f7f6f6ff",
    height:"70%",
    paddingHorizontal:20,
    paddingTop: 100,
  },
  
});
