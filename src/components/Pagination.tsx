import React from "react";
import { StyleSheet } from "react-native";
import Animated, { LinearTransition } from "react-native-reanimated";

export default function Pagination({
  activeIndex,
  total,
}: {
  activeIndex: number;
  total: number;
}) {
  return (
    <Animated.View
      style={styles.container}
      layout={LinearTransition.springify()}
    >
      {Array.from({ length: total }).map((_, index) => {
        const isActive = index === activeIndex;
        return (
          <Animated.View
            key={`index-${index}`}
            style={[
              {
                width: isActive ? 16 : 8,
                backgroundColor: isActive ? "lightblue" : "lightgray",
              },
              styles.dot,
            ]}
            layout={LinearTransition.springify()}
          />
        );
      })}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
});
