import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Swiper from "./src/components/Swiper";

const { width, height } = Dimensions.get("window");

interface ImageData {
  id: string;
  url: string;
  title: string;
  description: string;
}

const images: ImageData[] = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: "Paisaje de Montaña",
    description:
      "Vista panorámica de montañas majestuosas con picos nevados.\nUn escape perfecto a la naturaleza.",
  },
  {
    id: "2",
    url: "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
    title: "Atardecer en la Playa",
    description:
      "Colores dorados reflejándose en aguas cristalinas.\nMomento de tranquilidad absoluta.",
  },
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Costa Tropical",
    description:
      "Aguas turquesas y arena blanca bajo el sol.\nParaíso tropical en su máxima expresión.",
  },
  {
    id: "4",
    url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    title: "Bosque Encantado",
    description:
      "Senderos místicos entre árboles centenarios.\nLa magia de la naturaleza salvaje.",
  },
  {
    id: "5",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?fit=max&w=800",
    title: "Lago de Montaña",
    description:
      "Reflejo perfecto de picos alpinos en aguas serenas.\nSerenidad en estado puro.",
  },
  {
    id: "6",
    url: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?fit=max&w=800",
    title: "Desierto Dorado",
    description:
      "Dunas infinitas bajo un cielo despejado.\nLa belleza minimalista del desierto.",
  },
  {
    id: "7",
    url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?fit=max&w=800",
    title: "Campos de Lavanda",
    description:
      "Hileras violetas que se extienden hasta el horizonte.\nFragancia y color en perfecta armonía.",
  },
];

export default function App() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  // Función que crea el renderItem con acceso al activeIndex
  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          width,
          height,
          backgroundColor: index % 2 === 0 ? "#f0f0f0" : "#ffffff",
          justifyContent: "center",
          alignItems: "center",
          gap: 24,
        }}
      >
        <Image
          source={{ uri: item.url }}
          style={StyleSheet.absoluteFillObject}
          blurRadius={30}
        />
        <Image
          source={{ uri: item.url }}
          style={{
            width: width / 1.8,
            height: height / 2.2,
            borderRadius: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 8,
          }}
        />
        <View style={{ padding: 16, gap: 16 }}>
          <Text
            style={{
              color: "#fff",
              fontSize: 24,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {item.title}
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
              fontWeight: "bold",
              textAlign: "center",
              opacity: 0.85,
            }}
          >
            {item.description}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Swiper
        data={images}
        renderItem={renderItem}
        onActiveIndexChange={setActiveIndex}
        showPagination={false}
      />
      <Text
        style={{
          fontSize: 48,
          fontWeight: "bold",
          textAlign: "center",
          opacity: 0.85,
          position: "absolute",
          bottom: 60,
          width: "100%",
          color: "#fff",
        }}
      >{`${activeIndex + 1}/${images.length}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
