import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    flexOne: {
    flex: 1,
  },
    container: {
      flex: 1,
      backgroundColor: "#fff",
      color: "#fff",
        padding: 20,
    },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
   marginBottom: 20,
  },
  headerTitle:{
    fontSize: 18,
    fontWeight: "500",
    color: "#555555ff",
  },
  coffeeImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
coffeeDetails:{
  flexDirection: "row",
  justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
},
icons:{
    flexDirection:"row",
    gap:10,
}
,
  icon:{
    width: 24,
    height:24,
    padding:20,
    borderRadius:5,
    backgroundColor: "#e7e7e76d"
  }
});

export { styles };

