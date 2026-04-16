import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const Cadastro = () => {
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const [confirmar, setConfirmar] = useState("");

  const navigation = useNavigation();

  const handleRegister = async () => {
    if (senha !== confirmar) {
      Alert.alert("Erro", "As senhas não coincidem");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      Alert.alert("Sucesso", "Usuário registrado com sucesso");
      setEmail(""); 
      setSenha(""); 
      setConfirmar(""); 
      navigation.navigate("Login"); 
    } catch (error) {
      Alert.alert("Erro", "Falha ao registrar usuário");
    }
  };

  return (
    <LinearGradient 
          colors={["#9bbec7", "#a8ddb1"]}
          start={{ x: 1, y: 1 }}
          end={{ x: 0, y: 0 }}
          locations={[0, 0.7, 0.8]} 
          style={styles.main}>
      <View style={styles.boxCadastro}>
        <View style={styles.boxtitu}>
          <Text style={styles.h}>Cadastro</Text>
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

        <View style={styles.box}>
          <Text style={styles.lba}>Confirmar Senha</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="key-outline" size={20} style={styles.icon} />
            <TextInput
              style={styles.input}
              secureTextEntry
              value={confirmar}
              onChangeText={setConfirmar}
              required
            />
          </View>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.link}>Já possui cadastro?</Text>
        </TouchableOpacity>

        <View style={styles.boxbtn}>
          <Button title="Confirmar" onPress={handleRegister} color="#4CAF50" />
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
  boxCadastro: {
    width: "90%",
    padding: 35,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 10,
    shadowRadius: 3.84,
    elevation: 12,
  },
  boxtitu: {
    marginBottom: 10,
    alignItems: "center",
  },
  h: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    marginTop: 10,
  },
  box: {
    marginBottom: 10,
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
    outline: "none",
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

export default Cadastro;
