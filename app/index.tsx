import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <ImageBackground
            source={require("../assets/images/background.png")}
            style={styles.background}
          >
            {/* Your content goes here */}
          </ImageBackground>

          <LinearGradient
            colors={["#000", "#00000073"]}
            start={{ x: 0.5, y: 1 }}
            end={{ x: 0.5, y: 0 }}
            style={styles.gradient}
          />

          <View
            style={{
              position: "absolute",
              bottom: 80,
              left: 20,
              right: 20,
              gap: 20,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 42, textAlign: "center" }}>
              Fall in Love with Coffee in Blissful Delight!
            </Text>

            <Text
              style={{ color: "#757575ff", fontSize: 19, textAlign: "center" }}
            >
              Welcome to our cozy coffee corner, where every cup is a delightful
              for you.
            </Text>

            <Link href="/(home)" asChild>
              <TouchableOpacity>
                <Text
                  style={{
                    color: "white",
                    alignItems: "center",
                    padding: 20,
                    backgroundColor: "#C67C4E",
                    borderRadius: 16,
                    textAlign: "center",
                    fontSize: 22,
                    fontWeight: "600",
                  }}
                >
                  Get Started
                </Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  background: {
    flex: 1,
    width: "100%",
    height: "60%",
    marginTop: 0,
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "100%",
  },
});
