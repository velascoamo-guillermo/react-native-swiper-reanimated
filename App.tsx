import React, { useState } from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import Swiper from "./src/components/Swiper";

const { width, height } = Dimensions.get("window");

interface OnboardingData {
  id: string;
  url: string;
  title: string;
  description: string;
  primaryAction: string;
  secondaryAction?: string;
}

const onboardingSlides: OnboardingData[] = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=1200&fit=crop&crop=entropy&auto=format&q=80",
    title: "Welcome to the Future",
    description:
      "Experience seamless productivity with our innovative platform designed for modern workflows.",
    primaryAction: "Get Started",
  },
  {
    id: "2",
    url: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=1200&fit=crop&crop=entropy&auto=format&q=80",
    title: "Collaborate Anywhere",
    description:
      "Connect with your team from anywhere in the world. Real-time collaboration made simple.",
    primaryAction: "Learn More",
    secondaryAction: "Skip",
  },
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=1200&fit=crop&crop=entropy&auto=format&q=80",
    title: "Stay Organized",
    description:
      "Keep your projects organized with smart tools that adapt to your workflow and boost productivity.",
    primaryAction: "Continue",
    secondaryAction: "Skip",
  },
  {
    id: "4",
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=1200&fit=crop&crop=entropy&auto=format&q=80",
    title: "Track Your Progress",
    description:
      "Monitor your achievements with detailed analytics and insights that help you improve every day.",
    primaryAction: "Start Journey",
    secondaryAction: "Maybe Later",
  },
];

// Animated Slide Component
const AnimatedSlide = ({
  item,
  index,
  progress,
}: {
  item: OnboardingData;
  index: number;
  progress: SharedValue<number>;
}) => {
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
      {/* Background Image with Blur Effect */}
      <Image
        source={{ uri: item.url }}
        style={StyleSheet.absoluteFillObject}
        resizeMode="cover"
        blurRadius={30}
      />

      {/* Foreground Image with Parallax Animation */}
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

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = ({
    item,
    index,
    progress,
  }: {
    item: OnboardingData;
    index: number;
    progress: SharedValue<number>;
  }) => <AnimatedSlide item={item} index={index} progress={progress} />;

  /*
  🎬 Animated Slides with Parallax Effects
  
  This example demonstrates:
  - Parallax scaling animations using progress SharedValue
  - Background blur effects for depth
  - Smooth interpolation based on scroll position
  - Clean, minimal design without arrows
  
  The progress SharedValue provides real-time scroll position (0.0, 0.1, 0.2...)
  enabling smooth animations that respond to user gestures.
  */

  return (
    <View style={styles.container}>
      <Swiper
        data={onboardingSlides}
        renderItem={renderItem}
        onActiveIndexChange={setActiveIndex}
        showArrows={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  slide: {
    width,
    height,
    justifyContent: "center",
    alignItems: "center",
  },
});
