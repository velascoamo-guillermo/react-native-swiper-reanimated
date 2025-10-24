import React, { useRef, useState } from "react";
import { Dimensions, ListRenderItem } from "react-native";
import Animated, {
  clamp,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";
import Arrow from "./Arrow";
import Pagination from "./Pagination";

const { width, height } = Dimensions.get("window");

interface SwiperProps<T> {
  data: T[];
  customArrowLeft?: React.ReactNode;
  customArrowRight?: React.ReactNode;
  customPagination?: React.ReactNode;
  renderItem: ListRenderItem<T>;
  showPagination?: boolean;
  horizontal?: boolean;
  onActiveIndexChange?: (index: number) => void;
}

export default function Swiper<T>({
  data,
  renderItem,
  customArrowLeft,
  customArrowRight,
  customPagination,
  showPagination = true,
  horizontal = true,
  onActiveIndexChange,
}: SwiperProps<T>) {
  const flatList = useRef<Animated.FlatList>(null);
  const scrollX = useSharedValue(0);
  const [activeIndex, setAciveIndex] = useState(0);

  const interval = horizontal ? width : height;

  const onScroll = useAnimatedScrollHandler((e) => {
    scrollX.value = clamp(
      horizontal ? e.contentOffset.x / interval : e.contentOffset.y / interval,
      0,
      data.length - 1
    );
    const newActiveIndex = Math.round(scrollX.value);

    if (activeIndex !== newActiveIndex) {
      scheduleOnRN(setAciveIndex, newActiveIndex);
      if (onActiveIndexChange) {
        scheduleOnRN(onActiveIndexChange, newActiveIndex);
      }
    }
  });

  const goToPrevious = () => {
    if (activeIndex > 0) {
      const prevIndex = activeIndex - 1;
      flatList.current?.scrollToIndex({ index: prevIndex, animated: true });
      setAciveIndex(prevIndex);
    }
  };

  const goToNext = () => {
    if (activeIndex < data.length - 1) {
      const nextIndex = activeIndex + 1;
      flatList.current?.scrollToIndex({ index: nextIndex, animated: true });
      setAciveIndex(nextIndex);
    }
  };

  return (
    <>
      <Animated.FlatList
        ref={flatList}
        keyExtractor={(_, index) => index.toString()}
        horizontal={horizontal}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        bounces={false}
        data={data}
        renderItem={renderItem}
        snapToInterval={interval}
        decelerationRate={"fast"}
        scrollEventThrottle={1000 / 60}
        onScroll={onScroll}
      />
      {customArrowLeft ? (
        customArrowLeft
      ) : (
        <Arrow
          direction={horizontal ? "left" : "up"}
          activeIndex={activeIndex}
          onPress={goToPrevious}
        />
      )}
      {customArrowRight ? (
        customArrowRight
      ) : (
        <Arrow
          direction={horizontal ? "right" : "down"}
          activeIndex={activeIndex}
          total={data.length}
          onPress={goToNext}
        />
      )}
      {showPagination ? (
        customPagination ? (
          customPagination
        ) : (
          <Pagination activeIndex={activeIndex} total={data.length} />
        )
      ) : null}
    </>
  );
}
