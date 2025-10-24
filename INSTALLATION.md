# Installation Guide

## Quick Start

```bash
npm install react-native-swiper-reanimated
```

## Required Peer Dependencies

```bash
npm install react-native-reanimated react-native-gesture-handler expo-glass-effect @expo/vector-icons
```

## Platform Setup

### iOS

No additional setup required if using Expo.

For bare React Native:

```bash
cd ios && pod install
```

### Android

No additional setup required if using Expo.

## Basic Usage

```tsx
import React from "react";
import { Swiper } from "react-native-swiper-reanimated";

const data = [
  { id: "1", title: "Slide 1" },
  { id: "2", title: "Slide 2" },
  { id: "3", title: "Slide 3" },
];

export default function App() {
  return (
    <Swiper
      data={data}
      renderItem={({ item }) => <YourSlideComponent item={item} />}
    />
  );
}
```

See README.md for full documentation and examples.
