# React Native Swiper Reanimated

Un componente swiper suave y personalizable para React Native construido con Reanimated 3 y Gesture Handler.

## Características

- 🚀 **Performance**: Construido con Reanimated 3 para animaciones nativas de 60fps
- 👆 **Gestos**: Implementa gestos de pan usando React Native Gesture Handler
- ⚙️ **Personalizable**: Configuración flexible para velocidad, threshold y animaciones
- 📱 **Responsive**: Se adapta automáticamente al ancho de pantalla
- 🎯 **TypeScript**: Completamente tipado para mejor experiencia de desarrollo

## Instalación

```bash
npm install react-native-swiper-reanimated
# o
yarn add react-native-swiper-reanimated
```

### Dependencias requeridas

Este componente requiere las siguientes dependencias peer:

```bash
npm install react-native-reanimated react-native-gesture-handler
```

Asegúrate de seguir las guías de instalación para:

- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/)
- [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/docs/fundamentals/getting-started/)

## Uso

```tsx
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Swiper } from "react-native-swiper-reanimated";

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Swiper
        onIndexChange={setCurrentIndex}
        initialIndex={0}
        springConfig={{ damping: 20, stiffness: 200 }}
      >
        <View style={[styles.page, { backgroundColor: "#FF6B6B" }]}>
          <Text style={styles.pageText}>Página 1</Text>
        </View>
        <View style={[styles.page, { backgroundColor: "#4ECDC4" }]}>
          <Text style={styles.pageText}>Página 2</Text>
        </View>
        <View style={[styles.page, { backgroundColor: "#45B7D1" }]}>
          <Text style={styles.pageText}>Página 3</Text>
        </View>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pageText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF",
  },
});

export default App;
```

## API

### Props

| Prop            | Tipo                                     | Default                           | Descripción                                               |
| --------------- | ---------------------------------------- | --------------------------------- | --------------------------------------------------------- |
| `children`      | `ReactNode`                              | -                                 | **Requerido.** Los elementos hijos a mostrar en el swiper |
| `onIndexChange` | `(index: number) => void`                | `undefined`                       | Callback ejecutado cuando cambia el índice actual         |
| `initialIndex`  | `number`                                 | `0`                               | Índice inicial del swiper                                 |
| `springConfig`  | `{ damping: number; stiffness: number }` | `{ damping: 15, stiffness: 150 }` | Configuración de la animación spring                      |
| `threshold`     | `number`                                 | `SCREEN_WIDTH * 0.3`              | Distancia mínima para activar el cambio de página         |

## Demo

Para ver la demo en acción:

```bash
git clone https://github.com/your-username/react-native-swiper-reanimated.git
cd react-native-swiper-reanimated
npm install
npm start
```

## Licencia

MIT

## Contribuir

Las contribuciones son bienvenidas! Por favor abre un issue o pull request.

## Autor

Guillermo Velasco
