import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Carousel from "react-native-reanimated-carousel";

const { width: screenWidth } = Dimensions.get("window");
const diasSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
const data = new Date();
const diaSemana = diasSemana[data.getDay()];

const Main = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { id: "1", src: require("../imagens/Almoco.png") },
    { id: "2", src: require("../imagens/Cafe.png") },
    { id: "3", src: require("../imagens/Janta.png") },
    { id: "4", src: require("../imagens/Lanche.png") },
  ];

  const renderItem = ({ src }) => (
    <View style={styles.card}>
      <Image source={src} style={styles.image} />
    </View>
  );

  const renderIndicators = () => (
    <View style={styles.indicators}>
      {images.map((_, index) => (
        <View
          key={index}
          style={[styles.indicator, currentIndex === index ? styles.activeIndicator : null]}
        />
      ))}
    </View>
  );

  return (
    <ScrollView>
      <LinearGradient colors={["#9bbec7", "#a8ddb1"]} style={styles.containerMain}>
        <View style={styles.circulo}>
          <Text style={styles.diaTexto}>{diaSemana}</Text>
          <Text style={styles.horaTexto}>{new Date().toLocaleTimeString()}</Text>
        </View>
        <Text style={styles.titulo}>Gere seu plano</Text>
        <Text style={styles.descricao}>
          Faça uma dieta utilizando o Gemmini IA, crie seu plano de acordo com sua fisiologia e nível de atividade.
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate("Formulário")} style={styles.btnGerar}>
          <Text style={styles.btnTexto}>Gerar dieta</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Dieta")} style={styles.btnGerar}>
          <Text style={styles.btnTexto}>Consultar dieta</Text>
        </TouchableOpacity>
      </LinearGradient>

      <View style={styles.container}>
        <View style={styles.carousel}>
          <Carousel
            width={screenWidth}
            height={screenWidth}
            data={images}
            renderItem={({ item }) => renderItem(item)}
            autoPlay
            autoPlayInterval={2000}
            onSnapToItem={(index) => setCurrentIndex(index)}
          />
          {renderIndicators()}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    paddingHorizontal: 40,
    paddingVertical: 20,
    alignItems: "center",
  },
  circulo: {
    justifyContent: "center",
    alignItems: "center",
    width: 130,
    height: 130,
    borderWidth: 1.2,
    borderColor: "white",
    borderRadius: 100,
    marginBottom: 10,
  },
  diaTexto: {
    fontWeight: "bold",
    color: "white",
    paddingBottom: 5,
    fontSize: 20,
  },
  horaTexto: {
    fontWeight: "bold",
    color: "white",
    fontSize: 16,
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  descricao: {
    marginTop: 15,
    marginBottom: 20,
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
  btnGerar: {
    width: 225,
    backgroundColor: "#9dcc9d",
    paddingVertical: 16,
    marginVertical: 8,
    borderRadius: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 1,
    shadowOffset: { width: 2, height: 10 },
    elevation: 15,
  },
  btnTexto: {
    fontSize: 18,
    color: "white",
  },
  carousel: {
    height: 280,
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 15,
  },
  card: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 225,
  },
  indicators: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ddd",
    marginHorizontal: 4,
  },
  activeIndicator: {
    backgroundColor: "#4CAF50",
    width: 10,
    height: 10,
  },
});

export default Main;
