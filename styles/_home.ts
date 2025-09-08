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
    gap: 10,
  },
  coffeeBtn: {
  paddingVertical: 20,
  paddingHorizontal: 16,
  borderRadius: 8,
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 40
},

  coffeeBtnText: {
  fontSize: 14,
  fontWeight: "600",
},

    card: {
    backgroundColor: "#fff",
    borderRadius: 18,
    
    width: 160,
    marginRight: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
  },
  imageContainer: {
    position: "relative",
    alignItems: "center",
    marginBottom: 10,
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 12,
    resizeMode: "cover",
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 6,
    right: 6,
    
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
    elevation: 2,
  },
  ratingText: {
    marginLeft: 3,
    fontSize: 12,
    fontWeight: "600",
    color: "#fff",
  },
  name: {
    fontSize: 17,
    fontWeight: "700",
    color: "#222",
    marginBottom: 2,
    paddingHorizontal: 10,
  },
  type: {
    fontSize: 13,
    color: "#888",
    marginBottom: 8,
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
  },
  addBtn: {
    backgroundColor: "#C67C4E",
    borderRadius: 8,
    padding: 10,
    elevation: 2,
  },
  descriptor: {
    fontSize: 13,
    color: "#888",
    marginBottom: 8,
    paddingHorizontal: 10,
  },
});
