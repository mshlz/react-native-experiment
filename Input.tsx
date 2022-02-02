import { Text, TextInput } from "react-native";

interface InputProps {
    label: string
    placeholder: string
    onChange: (value: string) => void
}

export function Input(props: InputProps) {
    return <>
        <Text>{props.label}</Text>
        <TextInput
            style={{
                height: 40,
                margin: 12,
                borderWidth: 1,
                padding: 10,
            }}
            underlineColorAndroid="transparent"
            placeholder={props.placeholder}
            placeholderTextColor="black"
            autoCapitalize="none"
            keyboardType="numeric"
            onChangeText={props.onChange}
        />
    </>
}