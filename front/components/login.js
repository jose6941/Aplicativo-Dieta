import React, { useState } from "react";
import {View,Text,TextInput,Button,Alert,StyleSheet,TouchableOpacity,} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { auth } from "./firebaseConfig"; 
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigation = useNavigation();

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert("Erro", "Por favor, preencha todos os campos");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;
      Alert.alert("Sucesso", `Bem-vindo, ${user.email}`);
      setEmail("");
      setSenha("");
      navigation.replace("Home"); 
    } catch (error) {
      Alert.alert("Erro", "Email ou senha inválidos");
    }
  };

  return (
    <LinearGradient 
      colors={["#9bbec7", "#a8ddb1"]}
      start={{ x: 1, y: 1 }}
      end={{ x: 0, y: 0 }}
      locations={[0, 0.7, 0.8]} 
      style={styles.main}>
      <View style={styles.boxLogin}>
        <View style={styles.boxtitu}>
          <Text style={styles.h}>Login</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.lba}>Email</Text>
          <View style={styles.inputContainer}>
            <MaterialIcons name="email" size={20} style={styles.icon} />
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              required
            />
          </View>
        </View>

        <View style={styles.box}>
          <Text style={styles.lba}>Senha</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="key" size={20} style={styles.icon} />
            <TextInput
              style={styles.input}
              secureTextEntry
              value={senha}
              onChangeText={setSenha}
              required
            />
          </View>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
          <Text style={styles.link}>Cadastrar-se</Text>
        </TouchableOpacity>

        <View style={styles.boxbtn}>
          <Button title="Entrar" onPress={handleLogin} color="#4CAF50" />
        </View>
      </View>
      </LinearGradient>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  boxLogin: {
    width: "90%",
    padding: 35,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 100 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  boxtitu: {
    marginBottom: 20,
    alignItems: "center",
  },
  h: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 10,
  },
  box: {
    marginBottom: 15,
  },
  lba: {
    fontSize: 13,
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    fontSize: 15,
    padding: 5,
  },
  icon: {
    marginRight: 10,
    color: "#888",
  },
  link: {
    color: "#007BFF",
    textAlign: "center",
    marginTop: 10,
    textDecorationLine: "underline",
  },
  boxbtn: {
    marginTop: 30,
  },
});

export default Login;
