import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  coffeeImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  coffeeDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  coffeeName: {
    fontSize: 24,
    fontWeight: "600",
  },
  coffeeDescriptor: {
    fontSize: 12,
    color: "gray",
  },
  icons: {
    flexDirection: "row",
    gap: 8,
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 8,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#909090b5",
    paddingBottom: 10,
  },
  ratingText: {
    fontWeight: "500",
    fontSize: 16,
  },
  ratingCount: {
    fontSize: 16,
    color: "gray",
  },
  sectionTitle: {
    fontWeight: "500",
    fontSize: 18,
    color: "black",
    marginVertical: 10,
  },
  sizeRow: {
    flexDirection: "row",
    gap: 10,
  },
  sizeBox: {
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    flex: 1,
  },
  priceText: {
    fontSize: 24,
    fontWeight: "600",
    color: "#C67C4E",
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    width:"100%",
  },
prices:{
  flexDirection: "column",
  justifyContent:"space-between",
  alignItems:"flex-start"
},
selectedSizeBox: {
  borderColor: "#C67C4E",
  backgroundColor:"#ffe0cdff",
  borderWidth: 2,
  borderRadius: 8,
  color:"#C67C4E"
},
sizeText: {
  fontSize: 16,
  textAlign: "center",
  color: "#C67C4E",
  fontWeight:600,
},

coffeeDescription:{
  flexDirection:"column"
}

});
