import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const DietaGerada = ({ route }) => {
  const [dieta, setDieta] = useState(null);
  const [filtro, setFiltro] = useState("");
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      const carregarDieta = async () => {
        try {
          const dietaJson = await AsyncStorage.getItem("dietaSalva");
          if (dietaJson) {
            setDieta(JSON.parse(dietaJson));
          }
        } catch (error) {
          alert("Erro ao carregar dieta salva", error);
        }
      };
      carregarDieta();
    }, [])
  );

  useEffect(() => {
    if (route.params?.dieta) {
      salvarDieta(route.params.dieta);
    }
  }, [route.params?.dieta]);

  const salvarDieta = async (novaDieta) => {
    try {
      await AsyncStorage.setItem("dietaSalva", JSON.stringify(novaDieta));
      setDieta(novaDieta);
    } catch (error) {
      alert("Erro ao salvar dieta", error);
    }
  };

  if (!dieta) {
    return (
      <View style={styles.noDietaContainer}>
        <Text style={styles.noDietaText}>Nenhuma dieta encontrada. Por favor, gere uma nova dieta.</Text>
      </View>
    );
  }

  const filtrarRefeicoes = () => {
    if (!filtro) return dieta.refeicoes;
    return dieta.refeicoes.filter((refeicao) => refeicao.nome.toLowerCase() === filtro.toLowerCase());
  };

  const refeicoesFiltradas = filtrarRefeicoes();

  return (
    
      
        <ScrollView>    
          <LinearGradient
              colors={["#9bbec7", "#a8ddb1"]}
              start={{ x: 1, y: 1 }}
              end={{ x: 0, y: 0 }}
              locations={[0, 0.7, 0.8]}
              style={styles.infoNutri}
            >
            <View style={styles.circulo}>
              <Text style={styles.infoText}>
                <FontAwesome name="fire" size={20} color='white'/> {dieta.totais.calorias}Kcal
              </Text>
              <Text style={styles.label}>Calorias</Text>
            </View>
            <View style={styles.macro}>
              <View style={styles.macros}>
                <Text style={styles.infoText}>
                  <FontAwesome5 name="drumstick-bite" size={20} color='white'/> {dieta.totais.proteinas}g
                </Text>
                <Text style={styles.label}>Proteínas</Text>
              </View>
              
              <View style={styles.macros}>
                <Text style={styles.infoText}>
                  <FontAwesome5 name="bread-slice" size={20} color='white'/> {dieta.totais.carboidratos}g
                </Text>
              <Text style={styles.label}>Carboidratos</Text>
              </View>
              
              <View style={styles.macros}>
                <Text style={styles.infoText}>
                    <FontAwesome name="tint" size={20} color='white'/> {dieta.totais.gorduras}g
                  </Text>
                <Text style={styles.label}>Gorduras</Text>
              </View>
            
            </View>
            <View style={styles.waterBox}>
              <Text style={styles.infoText}>
                <MaterialCommunityIcons name="cup-water" size={20} color='white'/> {dieta.agua.quantidade}
              </Text>
              <Text style={styles.label}>Consumo de Água</Text>
            </View>

            <View style={styles.buttons}>
              <TouchableOpacity style={styles.btn} onPress={() => setFiltro("")}>
                <Icon name="fastfood" size={24}  color='white'/>
                <Text style={styles.lbl}>Todas</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={() => setFiltro("Cafe da manha")}>
                <Icon name="free-breakfast" size={24}  color='white'/>
                <Text style={styles.lbl}>Café</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={() => setFiltro("Lanche da manha")}>
                <Icon name="lunch-dining" size={24}  color='white'/>
                <Text style={styles.lbl}>L/Manhã</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={() => setFiltro("Almoco")}>
                <Icon name="dinner-dining" size={24}  color='white'/>
                <Text style={styles.lbl}>Almoço</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={() => setFiltro("Lanche da tarde")}>
                <Icon name="local-cafe" size={24}  color='white'/>
                <Text style={styles.lbl}>L/Tarde</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={() => setFiltro("Jantar")}>
                <Icon name="nightlife" size={24}  color='white'/>
                <Text style={styles.lbl}>Jantar</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>

          <View style={styles.refeicoes}>
            {refeicoesFiltradas.map((refeicao, index) => (
              <View style={styles.refeicao} key={index}>
                <Text style={styles.refeicaoHeader}>
                  {refeicao.nome} - {refeicao.horario} <FontAwesome name="clock-o" size={16} />
                </Text>
                <View style={styles.macro}>
                  <View style={styles.macros}>
                    <Text style={styles.infoTextMacro}>
                      <FontAwesome name="fire" size={16}  /> {refeicao.calorias}Kcal            
                    </Text>
                    <Text style={styles.labelMacro}>Calorias</Text>
                  </View>
                </View>

                <View style={styles.macro}>
                  <View style={styles.macros}>
                    <Text style={styles.infoTextMacro}>
                      <FontAwesome5 name="bread-slice" size={16}  /> {refeicao.carboidratos}g
                    </Text>
                    <Text style={styles.labelMacro}>Carboidratos</Text>
                  </View>
                    <View style={styles.macros}>
                      <Text style={styles.infoTextMacro}>
                        <FontAwesome5 name="drumstick-bite" size={16}  /> {refeicao.proteinas}g
                      </Text>
                      <Text style={styles.labelMacro}>Proteinas</Text>
                    </View>

                    <View style={styles.macros}>
                      <Text style={styles.infoTextMacro}>
                        <FontAwesome name="tint" size={16}  /> {refeicao.gorduras}g
                      </Text>
                      <Text style={styles.labelMacro}>Gorduras</Text>
                    </View>                         
                </View>
                
                <View style={styles.alimentos}>
                  <Text style={styles.refeicaoHeadeRef}>Alimentos</Text>
                  {refeicao.alimentos.map((alimento, i) => (
                    <Text style={styles.alimento} key={i}>
                      {alimento}
                    </Text>
                  ))}
                </View>
              </View>
            ))}
          </View>

          <View style={styles.outra}>
            <Text style={styles.refeicaoHeader}>Deseja criar outra dieta ?</Text>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("Formulário")}>
              <Text style={{color: 'white',fontSize: 20, fontWeight: "bold"}}>Gerar Nova Dieta</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noDietaContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noDietaText: {
    fontSize: 18,
    color: "#555",
  },
  infoNutri: {
    backgroundColor: "#FFF",
    paddingHorizontal: 5,
    paddingTop: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 1,
    shadowOffset: { width: 2, height: 10 },
    elevation: 50,
  },
  circulo: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    paddingTop: 10,
    marginBottom: 10,
    width: 140,
    height: 125,
    borderWidth: 1.5,
    borderColor: 'white',
    borderRadius: '50%',
  },
  macros: {
    display: "flex",
    flexDirection: "column",
  },
  macro: {
    marginTop: 10,
    marginBottom: 6,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  waterBox: {
    display: "flex",
    flex: "column",
    marginTop: 15,
    marginBottom: 2,
    alignItems: "center",
  },
  infoText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 3,
    color: 'white',
    paddingBottom: 6,
    borderBottomWidth: 3,
    borderColor: 'white',
  },
  infoTextMacro: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 5,
    marginBottom: 3,
    borderBottomWidth: 3,
    color: '#8a8a8a',
    borderColor: "#8a8a8a",
  },
  label: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
  labelMacro: {
    fontSize: 15,
    textAlign: "center",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 5,
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 5 }, 
    shadowOpacity: 1, 
    shadowRadius: 0.1, 
    elevation: 4,
    borderRadius: 1,
  },
  botao: {
    width: 225,
    backgroundColor: "#9dcc9d",
    paddingVertical: 16,
    marginBottom: 20,
    marginVertical: 8,
    borderRadius: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 1,
    shadowOffset: { width: 2, height: 10 },
    elevation: 15,
  },
  lbl: {
    fontSize: 12,
    textAlign: "center",
    color: 'white',
  },
  btn: {
    alignItems: 'center',
    borderRadius: 20,
  },
  refeicoes: {
    paddingHorizontal: 8,
  },
  refeicao: {
    marginHorizontal: 2,
    marginTop: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    paddingBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    borderRadius: 8,
  },
  outra: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingBottom: 5,
    marginVertical: 5,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 20,
    alignItems: 'center',
  },
  refeicaoHeader: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  refeicaoHeadeRef: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 15,
  },
  macroRef: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  alimentos: {
    marginHorizontal: 2,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
    paddingBottom: 20,
    borderColor: "#ccc",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 10,
  },
  alimento: {
    fontSize: 15,
    marginLeft: 26,
    marginBottom: 2,
  },
});

export default DietaGerada;
