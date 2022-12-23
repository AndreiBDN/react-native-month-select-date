import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeType } from '../../types';

const SHOULD_NOT_UPDATE = true;

interface WeekColumnProps {
  day: string;
  theme: ThemeType;
  index: number;
  weekendsDaysIndexes?: number[];
}

const styles = StyleSheet.create({
  weekColumnContainer: {
    flex: 1,
    alignItems: 'center',
  },
  weekDaysContainer: {
    flexDirection: 'row',
  },
});

const WeekColumn = React.memo<WeekColumnProps>(
  (props: WeekColumnProps) => {
    const isWeekEnd = props?.weekendsDaysIndexes?.includes(props.index);
    return (
      <View style={[styles.weekColumnContainer, props.theme.weekColumnStyle]}>
        {isWeekEnd ? (
          <Text
            allowFontScaling={false}
            style={[isWeekEnd && props.theme.weekendNameTextStyle]}
          >
            {props.day}
          </Text>
        ) : (
          <Text
            allowFontScaling={false}
            style={[props.theme.weekColumnTextStyle]}
          >
            {props.day}
          </Text>
        )}
      </View>
    );
  },
  () => SHOULD_NOT_UPDATE
);

interface WeekDaysProps {
  days: string[];
  theme: ThemeType;
  weekendsDaysIndexes?: number[];
}

export default React.memo<WeekDaysProps>(
  (props: WeekDaysProps) => (
    <View
      style={[styles.weekDaysContainer, props.theme.weekColumnsContainerStyle]}
    >
      {props.days.map((day: string, index: number) => (
        <WeekColumn
          key={day}
          weekendsDaysIndexes={props.weekendsDaysIndexes}
          day={day}
          index={index}
          theme={props.theme}
        />
      ))}
    </View>
  ),
  () => SHOULD_NOT_UPDATE
);
