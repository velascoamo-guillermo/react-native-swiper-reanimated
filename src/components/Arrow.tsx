import { GlassView } from "expo-glass-effect";
import React from "react";
import {
  Dimensions,
  Pressable,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";
import Animated, {
  ComplexAnimationBuilder,
  FadeInDown,
  FadeInLeft,
  FadeInRight,
  FadeInUp,
  FadeOutDown,
  FadeOutLeft,
  FadeOutRight,
  FadeOutUp,
} from "react-native-reanimated";
import ExpoVectorIcon from "./ExpoVectorIcons";

interface ArrowProps {
  activeIndex: number;
  total?: number;
  arrowLeftAnimation?: {
    entering: ComplexAnimationBuilder;
    exiting: ComplexAnimationBuilder;
  };
  arrowRightAnimation?: {
    entering: ComplexAnimationBuilder;
    exiting: ComplexAnimationBuilder;
  };
  arrowLeftStyle?: StyleProp<ViewStyle>;
  arrowRightStyle?: StyleProp<ViewStyle>;
  arrowUpAnimation?: {
    entering: ComplexAnimationBuilder;
    exiting: ComplexAnimationBuilder;
  };
  arrowDownAnimation?: {
    entering: ComplexAnimationBuilder;
    exiting: ComplexAnimationBuilder;
  };
  arrowUpStyle?: StyleProp<ViewStyle>;
  arrowDownStyle?: StyleProp<ViewStyle>;
  onPress: () => void;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const { height } = Dimensions.get("window");

export default function Arrow({
  direction,
  activeIndex,
  total = 0,
  arrowLeftAnimation = {
    entering: FadeInLeft.springify(),
    exiting: FadeOutLeft.springify(),
  },
  arrowRightAnimation = {
    entering: FadeInRight.springify(),
    exiting: FadeOutRight.springify(),
  },
  arrowDownAnimation = {
    entering: FadeInDown.springify(),
    exiting: FadeOutDown.springify(),
  },
  arrowUpAnimation = {
    entering: FadeInUp.springify(),
    exiting: FadeOutUp.springify(),
  },
  arrowLeftStyle,
  arrowRightStyle,
  arrowDownStyle,
  arrowUpStyle,
  onPress,
}: ArrowProps & { direction: "left" | "right" | "up" | "down" }) {
  if (direction === "left") {
    return activeIndex === 0 ? null : (
      <AnimatedPressable
        entering={arrowLeftAnimation.entering}
        exiting={arrowLeftAnimation.exiting}
        style={[{ left: 0 }, styles.arrowContainer, arrowLeftStyle]}
        onPress={onPress}
      >
        <GlassView isInteractive={true} style={styles.glass}>
          <ExpoVectorIcon
            family="MaterialCommunityIcons"
            name={`chevron-left`}
            size={24}
          />
        </GlassView>
      </AnimatedPressable>
    );
  }

  if (direction === "right") {
    return activeIndex === total - 1 ? null : (
      <AnimatedPressable
        entering={arrowRightAnimation.entering}
        exiting={arrowRightAnimation.exiting}
        style={[{ right: 0 }, styles.arrowContainer, arrowRightStyle]}
        onPress={onPress}
      >
        <GlassView isInteractive={true} style={styles.glass}>
          <ExpoVectorIcon
            family="MaterialCommunityIcons"
            name={`chevron-right`}
            size={24}
          />
        </GlassView>
      </AnimatedPressable>
    );
  }

  if (direction === "up") {
    return activeIndex === 0 ? null : (
      <AnimatedPressable
        entering={arrowUpAnimation.entering}
        exiting={arrowUpAnimation.exiting}
        style={[{ left: 0 }, styles.arrowContainer, arrowUpStyle]}
        onPress={onPress}
      >
        <GlassView isInteractive={true} style={styles.glass}>
          <ExpoVectorIcon
            family="MaterialCommunityIcons"
            name={`chevron-up`}
            size={24}
          />
        </GlassView>
      </AnimatedPressable>
    );
  }

  if (direction === "down") {
    return activeIndex === total - 1 ? null : (
      <AnimatedPressable
        entering={arrowDownAnimation.entering}
        exiting={arrowDownAnimation.exiting}
        style={[{ right: 0 }, styles.arrowContainer, arrowDownStyle]}
        onPress={onPress}
      >
        <GlassView isInteractive={true} style={styles.glass}>
          <ExpoVectorIcon
            family="MaterialCommunityIcons"
            name={`chevron-down`}
            size={24}
          />
        </GlassView>
      </AnimatedPressable>
    );
  }
}

const styles = StyleSheet.create({
  arrowContainer: {
    marginHorizontal: 16,
    top: height / 2,
    position: "absolute",
  },
  glass: {
    padding: 8,
    borderRadius: 8,
  },
});
