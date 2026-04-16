import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, MaterialCommunityIcons, } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const DietaForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    weight: "",
    height: "",
    age: "",
    gender: "",
    objective: "",
    level: "",
  });

  const navigation = useNavigation();
  
  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://192.168.94.237:3333/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erro ao gerar a dieta");
      }

      const result = await response.json();
      navigation.navigate("Dieta", { dieta: result.data });
    } catch (error) {
      console.error("Erro:", error);
      Alert.alert("Erro", "Erro ao gerar a dieta. Tente novamente.");
    }
  };

  return (
    <LinearGradient 
          colors={["#9bbec7", "#a8ddb1"]}
          start={{ x: 1, y: 1 }}
          end={{ x: 0, y: 0 }}
          locations={[0, 0.7, 0.8]} 
          style={styles.formulario}>
      <View style={styles.boxForm}>
        <View style={styles.boxNI}>
          <View style={styles.boxInput}>
            <Text>Nome</Text>
            <View style={styles.inputContainer}>
              <FontAwesome name="user" size={20} style={styles.icon} />
              <TextInput
                style={[styles.input, styles.nome]}
                value={formData.name}
                onChangeText={(value) => handleChange("name", value)}
              />
            </View>
          </View>
        </View>

        <View style={styles.boxAP}>
          <View style={styles.IAP}>
            <Text>Idade</Text>
            <View style={styles.inputContainer}>
              <MaterialCommunityIcons name="calendar-clock" size={20} style={styles.icon} />
              <TextInput
                style={[styles.input, styles.PDA]}
                keyboardType="numeric"
                value={formData.age}
                onChangeText={(value) => handleChange("age", value)}
              />
            </View>
          </View>

          <View style={styles.IAP}>
            <Text>Altura</Text>
            <View style={styles.inputContainer}>
              <MaterialCommunityIcons name="human-male-height" size={20} style={styles.icon} />
              <TextInput
                style={[styles.input, styles.PDA]}
                keyboardType="numeric"
                value={formData.height}
                onChangeText={(value) => handleChange("height", value)}
              />
            </View>
          </View>

          <View style={styles.IAP}>
            <Text>Peso</Text>
            <View style={styles.inputContainer}>
              <MaterialCommunityIcons name="weight-kilogram" size={20} style={styles.icon} />
              <TextInput
                style={[styles.input, styles.PDA]}
                keyboardType="numeric"
                value={formData.weight}
                onChangeText={(value) => handleChange("weight", value)}
              />
            </View>
          </View>
        </View>

        <View style={styles.boxSelect}>
          <View style={styles.boxSelecti}>
            <Text>Sexo</Text>
            <RNPickerSelect
              onValueChange={(value) => handleChange("gender", value)}
              items={[
                { label: "Masculino", value: "Masculino" },
                { label: "Feminino", value: "Feminino" },
              ]}
              style={styles.Select}
              placeholder={{ label: "Selecione o sexo", value: "" }}
            />
          </View>

          <View style={styles.boxSelecti}>
            <Text>Nível</Text>
            <RNPickerSelect
              onValueChange={(value) => handleChange("level", value)}
              items={[
                { label: "Sedentário", value: "Sedentário" },
                { label: "Iniciante", value: "Iniciante" },
                { label: "Moderado", value: "Moderado" },
                { label: "Ativo", value: "Ativo" },
              ]}
              style={styles.Select}
              placeholder={{ label: "Selecione o nível", value: "" }}
            />
          </View>
        </View>

        <View style={styles.boxNI}>
          <View style={styles.boxInput}>
            <Text>Objetivo</Text>
            <View style={styles.inputContainer}>
              <FontAwesome name="bullseye" size={20} style={styles.icon} />
              <TextInput
                style={[styles.input, styles.objetivo]}
                value={formData.objective}
                onChangeText={(value) => handleChange("objective", value)}
              />
            </View>
          </View>
        </View>

        <View style={styles.boxBotao}>
          <Button style={styles.Botao} title="Gerar Dieta" onPress={handleSubmit} />
        </View>
      </View>
    </LinearGradient>
  );
};

import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  formulario: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  boxForm: {
    padding: 40,
    backgroundColor: "white",
    borderRadius: 8,
    shadowOpacity: 0.8,
    elevation: 12,
    width: width * 0.875, 
  },
  boxInput: {
    marginBottom: 15,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingBottom: 5,
  },
  input: {
    flex: 1,
    fontSize: 12, 
    marginLeft: 10,
    padding: 10,
  },
  PDA: {
    flex: 1,
    fontSize: 15,
    padding: 2,
    marginTop: 5,
  },
  boxAP: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    gap: 30,
  },
  IAP: {
    flex: 1,
  },
  boxSelect: {
    flexDirection: "Column",
    justifyContent: "center",
  },
  boxSelecti: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginBottom: 15,
  },
  Select: {
    fontSize: 15,
    color: "black",
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  nome: {
    flex: 1,
    fontSize: 15,
    padding: 3,
  },
  objetivo: {
    flex: 1,
    fontSize: 15,
    padding: 3,
    marginTop: 5,
  },
  boxBotao: {
    marginTop: 20,
  },
  Botao: {
    padding: 10,
  },
});

export default DietaForm;
