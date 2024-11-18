// Expo

// React

// React Native
import { Pressable, Text, View, ViewStyle } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
// Hooks

// Definitions

// Components
// Props
interface Props {
  handlePress: any;
  text: string;
  showPicker: boolean;
  pickerValue: Date;
  handleDateChange: any;
  styles?: ViewStyle;
  styles_text?: any;
}
// Api

export default function DatePicker({
  handlePress,
  text,
  showPicker,
  pickerValue,
  handleDateChange,
  styles,
  styles_text,
}: Props) {
  return (
    <View>
      <View>
        <Pressable onPress={handlePress}>
          <View style={styles}>
            <Text style={styles_text}>{text}</Text>
          </View>
        </Pressable>
      </View>

      {showPicker && (
        <DateTimePicker
          value={pickerValue}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
    </View>
  );
}
