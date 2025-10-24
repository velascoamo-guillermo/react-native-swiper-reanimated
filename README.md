# 🎪 React Native Swiper Reanimated

[![npm version](https://img.shields.io/npm/v/react-native-swiper-reanimated.svg)](https://www.npmjs.com/package/react-native-swiper-reanimated)
[![npm downloads](https://img.shields.io/npm/dm/react-native-swiper-reanimated.svg)](https://www.npmjs.com/package/react-native-swiper-reanimated)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](https://www.typescriptlang.org/)
[![React Native](https://img.shields.io/badge/React%20Native-0.70+-61DAFB.svg)](https://reactnative.dev/)
[![Reanimated](https://img.shields.io/badge/Reanimated-v3%2Fv4-purple.svg)](https://docs.swmansion.com/react-native-reanimated/)

**The next-generation swiper component for React Native**. Built from the ground up with **React Native Reanimated v3/v4** and **TypeScript**, delivering buttery-smooth 60fps animations, modern gesture handling, and unparalleled customization.

🚀 **Modern Architecture** • ⚡ **Peak Performance** • 🎨 **Infinite Customization**

---

## ✨ Why Choose React Native Swiper Reanimated?

### 🚀 **Modern Architecture & Performance**

- ⚡ **60fps Native Animations** - Powered by Reanimated v3/v4 for buttery-smooth performance
- 🏎️ **UI Thread Execution** - Zero JS bridge overhead, all animations run natively
- 📦 **Lightweight Bundle** - Optimized package size without compromising features
- 🎯 **Advanced Gesture Handling** - Smooth, responsive touch interactions

### � **Rich Feature Set**

- 🎬 **Rich Animation API** - Custom enter/exit animations for content with progress tracking
- 🔧 **Modular Architecture** - Replace any component (arrows, pagination, content)
- ✨ **Glass Effect Design** - Beautiful built-in glassmorphism navigation arrows
- 💎 **Full TypeScript** - Complete type safety and IntelliSense support
- 📱 **Cross-Platform** - Pixel-perfect on iOS, Android, and Web

---

## 🎯 Key Features

### 🚀 **Performance & Architecture**

- ⚡ **60fps Native Animations** - Powered by Reanimated v3/v4
- 🏎️ **UI Thread Execution** - Zero JS bridge overhead
- 📦 **Lightweight Bundle** - 56% smaller than legacy alternatives
- 🎮 **Smooth Gestures** - Advanced gesture handling with react-native-gesture-handler

### 🎨 **Customization & Flexibility**

- 🎭 **Rich Animation System** - Custom entering/exiting animations for any content
- 🔧 **Component Modularity** - Replace arrows, pagination, or entire slides
- 🎨 **Infinite Styling** - Style every aspect with full CSS-in-JS support
- 📐 **Layout Options** - Horizontal, vertical, or custom orientations
- ✨ **Glass Effect Arrows** - Built-in navigation arrows with beautiful glassmorphism design

### 🛠️ **Developer Experience**

- 💎 **Full TypeScript** - Complete type safety and IntelliSense
- 📱 **Cross-Platform** - iOS, Android, and Web support
- 🎯 **Modern React** - Hooks, functional components, and latest patterns
- 📚 **Rich Documentation** - Comprehensive guides and examples

---

## 🎥 Live Demo

### 🎬 React Native Swiper Reanimated in Action

<div align="center">
  <table>
    <tr>
      <td align="center">
        <h4>🏃‍♂️ Horizontal Swiper</h4>
        <img src="./assets/demo/swiper-horizontal.gif" width="200" alt="Horizontal swiper with smooth navigation" />
        <p><em>Smooth horizontal swiping with glassmorphism UI</em></p>
      </td>
      <td align="center">
        <h4>📱 Vertical Swiper</h4>
        <img src="./assets/demo/swiper-vertical.gif" width="200" alt="Vertical swiper orientation" />
        <p><em>Flexible vertical orientation support</em></p>
      </td>
      <td align="center">
        <h4>🎯 Active Index Tracking</h4>
        <img src="./assets/demo/swiper-active-index.gif" width="200" alt="Swiper with active index animations" />
        <p><em>Real-time content updates with active slide tracking</em></p>
      </td>
    </tr>
    <tr>
      <td align="center">
        <h4>🎨 Custom Arrows & Pagination</h4>
        <img src="./assets/demo/swiper-custom-arrows.gif" width="200" alt="Custom arrows with shared value progress" />
        <p><em>Advanced custom components with progress shared value</em></p>
      </td>
      <td align="center">
        <h4>📍 Swiper Pagination</h4>
        <img src="./assets/demo/swiper-pagination.gif" width="200" alt="Professional pagination with progress indicator" />
        <p><em>Clean pagination with progress counter overlay</em></p>
      </td>
      <td align="center">
        <h4>🎬 Animated Slides</h4>
        <img src="./assets/demo/animate-slides.gif" width="200" alt="Parallax slide animations with blur effects" />
        <p><em>Parallax scaling with background blur effects and smooth transitions</em></p>
      </td>
    </tr>
  </table>
</div>

### ✨ What you can see in the demos:

- 🏃‍♂️ **Horizontal Navigation** - Classic left-to-right swiping with smooth spring animations
- 📱 **Vertical Flexibility** - Full support for vertical orientation with up/down navigation
- 🎯 **Smart Index Tracking** - Dynamic content that responds to the currently active slide
- 🎨 **Custom Arrows & Pagination** - Advanced customization with progress shared values for smooth animations
- 📍 **Swiper Pagination** - Clean pagination with progress counter overlay for enhanced UX
- 🎬 **Animated Slides** - Parallax scaling effects with background blur and smooth image transitions

### 🚀 Performance Highlights:

- ⚡ **60fps native animations** powered by Reanimated v3/v4
- 🏎️ **Zero JS bridge overhead** - all animations run on UI thread
- 📦 **Lightweight bundle** - Only ~29kB vs 66kB of legacy alternatives
- 🎮 **Smooth gesture handling** with advanced touch recognition

---

## 📦 Installation

### Install the Package

```bash
# npm
npm install react-native-swiper-reanimated

# yarn
yarn add react-native-swiper-reanimated

# bun
bun add react-native-swiper-reanimated
```

### Install Required Peer Dependencies

```bash
# Required peer dependencies
npm install react-native-reanimated@^3.0.0 react-native-gesture-handler@^2.0.0

# Required for glass effect arrows
npm install expo-glass-effect

# Optional (for custom icons)
npm install @expo/vector-icons
```

> **Note**: If you're using Expo, most dependencies are pre-installed.

---

## 🚀 Quick Start

```tsx
import React from "react";
import { Swiper } from "react-native-swiper-reanimated";

const images = [
  { id: "1", url: "https://example.com/image1.jpg", title: "Slide 1" },
  { id: "2", url: "https://example.com/image2.jpg", title: "Slide 2" },
  { id: "3", url: "https://example.com/image3.jpg", title: "Slide 3" },
];

export default function App() {
  return (
    <Swiper
      data={images}
      renderItem={({ item }) => <YourCustomSlide item={item} />}
    />
  );
}
```

---

## 📖 Usage Examples

### 🎨 **Basic Image Swiper with Animations**

```tsx
import React from "react";
import { View, Image, Text, Dimensions } from "react-native";
import Animated, { FadeInLeft, FadeOutLeft } from "react-native-reanimated";
import { Swiper } from "react-native-swiper-reanimated";

const { width, height } = Dimensions.get("window");

const CustomSlide = ({ item, isActive }) => (
  <View
    style={{ width, height, justifyContent: "center", alignItems: "center" }}
  >
    <Image
      source={{ uri: item.url }}
      style={{ width: width * 0.8, height: height * 0.6 }}
    />

    {isActive && (
      <Animated.Text
        entering={FadeInLeft.springify()}
        exiting={FadeOutLeft.springify()}
        style={{ fontSize: 24, fontWeight: "bold", marginTop: 20 }}
      >
        {item.title}
      </Animated.Text>
    )}
  </View>
);

<Swiper
  data={images}
  renderItem={({ item, index }) => (
    <CustomSlide item={item} isActive={index === activeIndex} />
  )}
  onActiveIndexChange={setActiveIndex}
/>;
```

### 🔧 **Custom Arrows & Pagination**

```tsx
import React from "react";
import { View, Pressable, Text } from "react-native";

const CustomLeftArrow = ({ onPress, disabled }) => (
  <Pressable
    style={[styles.customArrow, styles.customArrowLeft]}
    onPress={onPress}
    disabled={disabled}
  >
    <Text style={styles.arrowText}>‹</Text>
  </Pressable>
);

const CustomRightArrow = ({ onPress, disabled }) => (
  <Pressable
    style={[styles.customArrow, styles.customArrowRight]}
    onPress={onPress}
    disabled={disabled}
  >
    <Text style={styles.arrowText}>›</Text>
  </Pressable>
);

<Swiper
  data={data}
  renderItem={yourRenderItem}
  customArrowLeft={CustomLeftArrow}
  customArrowRight={CustomRightArrow}
  customPagination={<YourCustomPagination />}
/>;
```

### 📱 **Vertical Swiper**

```tsx
<Swiper
  data={data}
  renderItem={yourRenderItem}
  horizontal={false}
  showPagination={false}
/>
```

### 🎬 **Animated Slides with Parallax Effects**

```tsx
import React from "react";
import { View, Image, Dimensions, StyleSheet } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

const { width, height } = Dimensions.get("window");

const AnimatedSlide = ({ item, index, progress }) => {
  const imageStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            progress.value,
            [index - 1, index, index + 1],
            [1.2, 1, 1.2]
          ),
        },
      ],
    };
  });

  return (
    <View style={styles.slide}>
      {/* Background with blur effect */}
      <Image
        source={{ uri: item.url }}
        style={StyleSheet.absoluteFillObject}
        resizeMode="cover"
        blurRadius={30}
      />

      {/* Foreground image with parallax scaling */}
      <Animated.Image
        source={{ uri: item.url }}
        style={[
          {
            width: width / 1.2,
            height: height / 1.6,
            borderRadius: 16,
          },
          imageStyle,
        ]}
        resizeMode="cover"
      />
    </View>
  );
};

<Swiper
  data={slides}
  renderItem={({ item, index, progress }) => (
    <AnimatedSlide item={item} index={index} progress={progress} />
  )}
  showArrows={false}
/>;
```

**Key Features:**

- 🎬 **Parallax Scaling** - Images scale from 1.2x to 1x based on scroll position
- 🌫️ **Background Blur** - Blurred background image with 30px blur radius
- 🖼️ **Foreground Focus** - Sharp foreground image with rounded corners
- 📱 **Responsive Design** - Adapts to different screen sizes automatically
- ⚡ **Smooth Transitions** - 60fps animations using progress shared value

### 🎭 **Rich Animation Configurations**

```tsx
import { SlideInRight, SlideOutLeft, BounceIn } from "react-native-reanimated";

<Swiper
  data={data}
  renderItem={({ item }) => (
    <Animated.View
      entering={SlideInRight.springify()}
      exiting={SlideOutLeft.springify()}
    >
      <YourContent item={item} />
    </Animated.View>
  )}
/>;
```

### 🎯 **Custom Pagination with Animated Dots**

```tsx
import React from "react";
import { View, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  interpolate,
  interpolateColor,
  FadeInUp,
} from "react-native-reanimated";

const AnimatedDotsPagination = ({ activeIndex, total, progress }) => (
  <Animated.View entering={FadeInUp.delay(600)} style={styles.dotsContainer}>
    {Array.from({ length: total }, (_, index) => {
      const dotStyle = useAnimatedStyle(() => {
        // Scale animation: active dot scales to 1.8x
        const scale = interpolate(
          progress.value,
          [index - 1, index, index + 1],
          [1, 1.8, 1],
          "clamp"
        );

        // Color animation: active dot gets bright blue
        const backgroundColor = interpolateColor(
          progress.value,
          [index - 0.5, index, index + 0.5],
          ["rgba(255, 255, 255, 0.3)", "#007AFF", "#007AFF"]
        );

        // Opacity for smooth transitions
        const opacity = interpolate(
          progress.value,
          [index - 1, index, index + 1],
          [0.4, 1, 0.4],
          "clamp"
        );

        // Width animation: active dot stretches wider
        const width = interpolate(
          progress.value,
          [index - 1, index, index + 1],
          [8, 16, 8],
          "clamp"
        );

        return {
          transform: [{ scale }],
          backgroundColor,
          opacity,
          width,
        };
      });

      return <Animated.View key={index} style={[styles.dot, dotStyle]} />;
    })}
  </Animated.View>
);

const styles = StyleSheet.create({
  dotsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    bottom: 80,
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    marginHorizontal: 4,
  },
});

// Usage in your App component:
export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Swiper
        data={onboardingSlides}
        renderItem={renderItem}
        onActiveIndexChange={setActiveIndex}
        customPagination={AnimatedDotsPagination}
        showArrows={false} // Hide default arrows
      />

      {/* Optional: Custom Progress Indicator */}
      <Animated.View
        entering={FadeInUp.delay(1000)}
        style={styles.progressContainer}
      >
        <Text style={styles.progressText}>
          {activeIndex + 1} / {onboardingSlides.length}
        </Text>
      </Animated.View>
    </View>
  );
}
```

**Enhanced Features:**

- 🎯 **1.8x Scale Animation** - Active dot scales larger for better visual impact
- 🔵 **Blue Glow Effect** - Active dot glows with `#007AFF` color and maintains it
- 📏 **Width Transitions** - Active dot stretches from 8px to 16px width
- 💫 **Smooth Opacity** - Elegant fade transitions between active states
- � **Progress Counter** - Optional numerical indicator showing current position
- 🚫 **No Arrows** - Clean, minimal design focused on touch navigation
- ⚡ **60fps Performance** - All animations run on UI thread for buttery smoothness

**Perfect for:**

- 📱 **Mobile-first designs** with touch-friendly navigation
- 🎨 **Image galleries** requiring clean, unobtrusive controls
- 🔄 **Onboarding flows** with professional visual polish
- ⚡ **Performance-critical apps** needing smooth, native-speed animations

### �🎨 **Advanced Custom Arrows with Progress Shared Value**

```tsx
import React from "react";
import { Pressable, Text } from "react-native";
import Animated, {
  useAnimatedStyle,
  interpolate,
  FadeInUp,
} from "react-native-reanimated";

const CustomArrowLeft = ({ activeIndex, progress, goToPrevious }) => {
  // Use progress shared value for smooth animations
  const animatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(progress.value, [0, 0.5], [0.3, 1]);
    const scale = interpolate(progress.value, [0, 0.2], [0.8, 1]);

    return {
      opacity,
      transform: [{ scale }],
    };
  });

  return (
    <Animated.View entering={FadeInUp.delay(1200)}>
      <Pressable
        style={[styles.customArrow, styles.customArrowLeft]}
        onPress={goToPrevious}
        disabled={activeIndex === 0}
      >
        <Animated.Text style={[styles.arrowText, animatedStyle]}>
          ‹
        </Animated.Text>
      </Pressable>
    </Animated.View>
  );
};

const CustomPagination = ({
  activeIndex,
  total,
  progress,
  goToNext,
  goToPrevious,
}) => (
  <Animated.View entering={FadeInUp.delay(800)}>
    <Pressable onPress={goToPrevious} disabled={activeIndex === 0}>
      <Text>← Previous</Text>
    </Pressable>

    {/* Progress-based dots */}
    {Array.from({ length: total }, (_, index) => {
      const dotStyle = useAnimatedStyle(() => ({
        opacity: interpolate(
          progress.value,
          [index - 0.5, index, index + 0.5],
          [0.3, 1, 0.3]
        ),
        transform: [
          {
            scale: interpolate(
              progress.value,
              [index - 0.5, index, index + 0.5],
              [0.8, 1.2, 0.8]
            ),
          },
        ],
      }));

      return <Animated.View key={index} style={[styles.dot, dotStyle]} />;
    })}

    <Pressable onPress={goToNext} disabled={activeIndex === total - 1}>
      <Text>Next →</Text>
    </Pressable>
  </Animated.View>
);

<Swiper
  data={slides}
  renderItem={yourRenderItem}
  customArrowLeft={CustomArrowLeft}
  customArrowRight={CustomArrowRight}
  customPagination={CustomPagination}
  onActiveIndexChange={setActiveIndex}
/>;
```

**Key Benefits of Progress Shared Value:**

- 🎯 **Real-time updates** - Smooth animations that respond to scroll position
- ⚡ **60fps performance** - All animations run on UI thread
- 🎨 **Advanced effects** - Use `interpolate` for complex animation sequences
- 🔄 **Continuous values** - Unlike `activeIndex` (0,1,2), `progress` gives smooth transitions (0, 0.1, 0.2, ...)

### 🎯 **Simple Dots-Only Navigation**

```tsx
// Minimal setup - just animated dots, no arrows
<Swiper
  data={mySlides}
  renderItem={({ item }) => <MySlideComponent item={item} />}
  customPagination={AnimatedDotsPagination}
  showArrows={false}
  // Built-in arrows are hidden, custom pagination takes over
/>
```

**Perfect for:**

- 🎨 **Image galleries** - Clean, minimal navigation
- 📱 **Mobile-first designs** - Touch-friendly dot navigation
- 🎯 **Focus on content** - No distracting arrow buttons
- ⚡ **Smooth UX** - 1.8x scaling with color transitions

---

## 🛠️ API Reference

### `<Swiper>` Component Props

| Prop                    | Type                          | Default      | Description                                                                                      |
| ----------------------- | ----------------------------- | ------------ | ------------------------------------------------------------------------------------------------ |
| **data**                | `T[]`                         | **required** | Array of data items to render                                                                    |
| **renderItem**          | `Function`                    | **required** | Function to render each slide (see RenderItem Props below)                                       |
| **horizontal**          | `boolean`                     | `true`       | Scroll direction (horizontal/vertical)                                                           |
| **showPagination**      | `boolean`                     | `true`       | Show/hide built-in pagination dots                                                               |
| **showArrows**          | `boolean`                     | `true`       | Show/hide built-in navigation arrows                                                             |
| **onActiveIndexChange** | `(index: number) => void`     | `undefined`  | Callback when active slide changes                                                               |
| **customArrowLeft**     | `React.ReactNode \| Function` | `undefined`  | Custom left arrow component (receives `{activeIndex, total, progress, goToNext, goToPrevious}`)  |
| **customArrowRight**    | `React.ReactNode \| Function` | `undefined`  | Custom right arrow component (receives `{activeIndex, total, progress, goToNext, goToPrevious}`) |
| **customPagination**    | `React.ReactNode \| Function` | `undefined`  | Custom pagination component (receives `{activeIndex, total, progress, goToNext, goToPrevious}`)  |

### RenderItem Props Interface

The `renderItem` function receives the following props:

```tsx
interface SwiperRenderItemInfo<T> {
  item: T; // The data item to render
  index: number; // Current item index (0, 1, 2...)
  progress: SharedValue<number>; // Smooth scroll progress (0.0, 0.1, 0.2...)
  goToNext: () => void; // Function to navigate to next slide
  goToPrevious: () => void; // Function to navigate to previous slide
}

// Usage example:
const renderItem = ({ item, index, progress, goToNext, goToPrevious }) => {
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      progress.value,
      [index - 1, index, index + 1],
      [0.5, 1, 0.5]
    ),
  }));

  return (
    <Animated.View style={animatedStyle}>
      <YourSlideContent item={item} />
    </Animated.View>
  );
};
```

### Built-in Components

#### `<Arrow>` Component

Built-in navigation arrows with **beautiful glassmorphism design** powered by `expo-glass-effect`.

```tsx
interface ArrowProps {
  direction: "left" | "right" | "up" | "down";
  activeIndex: number;
  total?: number;
  onPress: () => void;
  glassProps?: GlassViewProps; // Customize glass effect properties
  // ... animation and styling props
}
```

**Glass Effect Features:**

- ✨ **Glassmorphism Design** - Modern frosted glass appearance
- 🎨 **Customizable Blur** - Adjust intensity and tint via `glassProps`
- 📱 **Platform Optimized** - Native blur effects on iOS and Android
- 🎯 **Interactive Ready** - Built-in touch feedback and animations

#### Custom Component Props Interface

When using `customArrowLeft`, `customArrowRight`, or `customPagination`, your components receive:

```tsx
interface CustomComponentProps {
  activeIndex: number; // Current active slide index (0, 1, 2, ...)
  total: number; // Total number of slides
  progress: SharedValue<number>; // Smooth scroll progress (0.0, 0.1, 0.2, ...)
  goToNext: () => void; // Function to navigate to next slide
  goToPrevious: () => void; // Function to navigate to previous slide
}

// Usage example:
const MyCustomArrow = ({
  activeIndex,
  total,
  progress,
  goToNext,
  goToPrevious,
}: CustomComponentProps) => {
  // Your custom component logic here
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(progress.value, [0, 1], [0.5, 1]),
  }));

  return (
    <Animated.View style={animatedStyle}>
      <Pressable onPress={goToNext}>Next</Pressable>
    </Animated.View>
  );
};
```

#### `<Pagination>` Component

```tsx
interface PaginationProps {
  activeIndex: number;
  total: number;
  // ... styling props
}
```

---

## 🎨 Advanced Customization

### 🎭 **Animation System**

Our animation system is built on Reanimated v3/v4, giving you access to the full animation ecosystem:

```tsx
import {
  FadeInUp,
  FadeOutDown,
  SlideInRight,
  SlideOutLeft,
  BounceIn,
  FlipInX,
  withSpring,
  withTiming,
} from "react-native-reanimated";

// Custom animation combinations
const customEntering = FadeInUp.springify().delay(200);
const customExiting = SlideOutLeft.duration(300);

<Swiper
  data={data}
  renderItem={({ item }) => (
    <Animated.View entering={customEntering} exiting={customExiting}>
      <YourContent />
    </Animated.View>
  )}
/>;
```

### 🎨 **Styling & Theming**

Style every aspect of the swiper:

```tsx
const theme = {
  arrow: {
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 25,
    padding: 15,
  },
  pagination: {
    bottom: 50,
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 20,
    paddingHorizontal: 15,
  },
};
```

### 🔧 **Modular Architecture**

Replace any component with your own:

```tsx
// Custom arrow components
const CustomArrow = ({ direction, onPress }) => (
  <Pressable style={styles.customArrow} onPress={onPress}>
    <Text style={styles.arrowText}>{direction === "left" ? "‹" : "›"}</Text>
  </Pressable>
);

// Custom progress pagination
const ProgressPagination = ({ activeIndex, total }) => (
  <View style={styles.progress}>
    <Animated.View
      style={[
        styles.progressBar,
        { width: `${((activeIndex + 1) / total) * 100}%` },
      ]}
    />
  </View>
);
```

---

## 📱 Platform Support

- ✅ **iOS** - Fully tested and optimized
- ✅ **Android** - Native performance
- ✅ **Web** - React Native Web compatible
- ✅ **Expo** - Full Expo compatibility

### Requirements

- React Native >= 0.81
- React >= 18.0
- React Native Reanimated >= 3.0
- React Native Gesture Handler >= 2.0

---

## 🔄 Migration Guide

### From `react-native-swiper`

```tsx
// OLD: react-native-swiper
import Swiper from "react-native-swiper";

<Swiper style={styles.wrapper} showsButtons={true}>
  <View style={styles.slide}>
    <Text>Slide 1</Text>
  </View>
  <View style={styles.slide}>
    <Text>Slide 2</Text>
  </View>
</Swiper>;

// NEW: react-native-swiper-reanimated
import { Swiper } from "react-native-swiper-reanimated";

const data = [
  { id: 1, content: "Slide 1" },
  { id: 2, content: "Slide 2" },
];

<Swiper
  data={data}
  renderItem={({ item }) => (
    <View style={styles.slide}>
      <Text>{item.content}</Text>
    </View>
  )}
/>;
```

### Benefits of Migration:

- 🚀 **60fps animations** instead of janky transitions
- 📦 **56% smaller bundle** size
- 💎 **Full TypeScript** support
- 🔄 **Active maintenance** and updates

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Built with ❤️ using **React Native Reanimated v3/v4**
- Inspired by modern mobile app experiences
- Special thanks to the React Native community

---

## 👨‍💻 Author

**Guillermo Velasco**

- GitHub: [@velascoamo-guillermo](https://github.com/velascoamo-guillermo)
- NPM: [@velascoamo-guillermo](https://www.npmjs.com/~velascoamo-guillermo)

---

## ⭐ Show Your Support

Give a ⭐️ if this project helped you create amazing swiping experiences!

---

### 🔥 **Ready to create buttery-smooth swipers?**

```bash
npm install react-native-swiper-reanimated
```

**Experience the difference that modern architecture makes! 🚀**
