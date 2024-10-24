import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Link, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 80,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image source={require("../assets/images/logoDelivery.png")}></Image>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View>
          <Text style={styles.customText}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter  email"
            autoCapitalize="none"
            autoCorrect={false}
            numberOfLines={1}
            maxLength={32}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View>
          <Text style={styles.customText}>Password</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 10,
            }}
          >
            <TextInput
              style={styles.input}
              placeholder="Enter  password"
              autoCapitalize="none"
              maxLength={32}
              autoCorrect={false}
              textContentType="password"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />

            <TouchableOpacity
              style={styles.toggleButton}
              onPress={toggleShowPassword}
            >
              <Ionicons
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>
        <Link
          href="/forgotpassword"
          style={{
            textAlign: "right",
            marginTop: 10,
            marginBottom: 10,
            fontSize: 15,
          }}
        >
          Forgot password
        </Link>
        <TouchableOpacity
          style={styles.touch}
          onPress={() => router.replace("/home")}
        >
          <Text style={styles.textTouch}>Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 15,
  },
  customText: {
    fontSize: 20,
    color: "black",
  },
  input: {
    width: "100%",
    backgroundColor: "#F6F7FB",
    height: 58,
    marginBottom: 10,
    fontSize: 16,
    borderRadius: 10,
    padding: 12,
  },
  toggleButton: {
    position: "absolute",
    right: 10,
    top: 26,
  },
  touch: {
    backgroundColor: "#ff7891",
    alignItems: "center",
    borderRadius: 30,
    padding: 12,
    marginTop: 10,
  },
  textTouch: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
