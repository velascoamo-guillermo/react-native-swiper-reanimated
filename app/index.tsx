import React, { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { Swiper } from "../src";

const DemoScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const demoPages = [
    {
      id: 1,
      title: "Primera Página",
      color: "#FF6B6B",
      description: "Desliza para navegar",
    },
    {
      id: 2,
      title: "Segunda Página",
      color: "#4ECDC4",
      description: "Gestos suaves con Reanimated",
    },
    {
      id: 3,
      title: "Tercera Página",
      color: "#45B7D1",
      description: "Configuración personalizable",
    },
    {
      id: 4,
      title: "Cuarta Página",
      color: "#96CEB4",
      description: "Última página del demo",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>React Native Swiper Reanimated</Text>
        <Text style={styles.headerSubtitle}>
          Página {currentIndex + 1} de {demoPages.length}
        </Text>
      </View>

      <Swiper
        onIndexChange={setCurrentIndex}
        initialIndex={0}
        springConfig={{ damping: 20, stiffness: 200 }}
      >
        {demoPages.map((page) => (
          <View
            key={page.id}
            style={[styles.page, { backgroundColor: page.color }]}
          >
            <View style={styles.pageContent}>
              <Text style={styles.pageTitle}>{page.title}</Text>
              <Text style={styles.pageDescription}>{page.description}</Text>
              <View style={styles.pageNumber}>
                <Text style={styles.pageNumberText}>{page.id}</Text>
              </View>
            </View>
          </View>
        ))}
      </Swiper>

      <View style={styles.footer}>
        <View style={styles.pagination}>
          {demoPages.map((_, index) => (
            <View
              key={index}
              style={[
                styles.paginationDot,
                {
                  backgroundColor:
                    index === currentIndex ? "#FFF" : "rgba(255,255,255,0.3)",
                  transform: [{ scale: index === currentIndex ? 1.2 : 1 }],
                },
              ]}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  header: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "rgba(255,255,255,0.7)",
  },
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pageContent: {
    alignItems: "center",
    padding: 40,
  },
  pageTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 20,
    textAlign: "center",
    textShadowColor: "rgba(0,0,0,0.3)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  pageDescription: {
    fontSize: 18,
    color: "rgba(255,255,255,0.9)",
    textAlign: "center",
    marginBottom: 40,
    lineHeight: 24,
  },
  pageNumber: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "rgba(255,255,255,0.2)",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.3)",
  },
  pageNumberText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#FFF",
  },
  footer: {
    padding: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  paginationDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 6,
  },
});

export default DemoScreen;
