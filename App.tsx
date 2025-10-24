import React, { useState } from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import Animated, {
  interpolate,
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

// Onboarding Screen Component
const OnboardingSlide = ({
  item,
  index,
  isActive,
  isLast,
  progress,
  goToNext,
  goToPrevious,
}: {
  item: OnboardingData;
  index: number;
  isActive: boolean;
  isLast: boolean;
  goToNext: () => void;
  goToPrevious: () => void;
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
      {/* Background Image with Overlay */}
      <Image
        source={{ uri: item.url }}
        style={StyleSheet.absoluteFillObject}
        resizeMode="cover"
        blurRadius={30}
      />

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
    goToNext,
    goToPrevious,
  }: {
    item: OnboardingData;
    index: number;
    progress;
    goToNext: () => void;
    goToPrevious: () => void;
  }) => (
    <OnboardingSlide
      item={item}
      index={index}
      isActive={index === activeIndex}
      progress={progress}
      isLast={index === onboardingSlides.length - 1}
      goToNext={goToNext}
      goToPrevious={goToPrevious}
    />
  );

  /*
  🚀 ADVANCED USAGE with Progress Shared Value:
  
  The 'progress' shared value gives you smooth, real-time scroll position.
  Use it for:
  - Smooth opacity transitions
  - Scale animations based on scroll
  - Custom progress indicators
  - Parallax effects
  
  Example with interpolate:
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(progress.value, [0, 1], [0.5, 1]),
    transform: [{ 
      scale: interpolate(progress.value, [0, 0.5, 1], [0.8, 1, 0.8]) 
    }],
  }));
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
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingBottom: 120,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 16,
    lineHeight: 40,
  },
  description: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.9)",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    width: "100%",
    gap: 12,
  },
  primaryButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 25,
    alignItems: "center",
    shadowColor: "#007AFF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  secondaryButton: {
    paddingVertical: 12,
    alignItems: "center",
  },
  secondaryButtonText: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.7)",
    fontWeight: "500",
  },
  progressContainer: {
    position: "absolute",
    top: 80,
    right: 30,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backdropFilter: "blur(10px)",
  },
  progressText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
  // Custom Pagination Styles
  customPaginationContainer: {
    position: "absolute",
    bottom: 50,
    right: 0,
  },
  navButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  navButtonDisabled: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    opacity: 0.5,
  },
  navButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
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
  activeDot: {
    backgroundColor: "#FFFFFF",
    width: 24,
    borderRadius: 4,
  },
  // Custom Arrow Styles - Now Active!
  customArrow: {
    position: "absolute",
    width: 60,
    bottom: 50,
    height: 60,
    borderRadius: 30,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  customArrowLeft: {
    left: 20,
  },
  customArrowRight: {
    right: 20,
  },
  customArrowDisabled: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    opacity: 0.5,
  },
  arrowText: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "600",
  },
  arrowTextDisabled: {
    color: "rgba(255, 255, 255, 0.5)",
  },
  // Enhanced Pagination Styles
  navButtonTextDisabled: {
    color: "rgba(255, 255, 255, 0.3)",
  },
  paginationText: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: 12,
    fontWeight: "500",
    marginTop: 8,
    textAlign: "center",
  },
});
