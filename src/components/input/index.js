const { StyledTextInput } = require("../../common/styledInput");

const Input = (props) => {
    return (
        <StyledTextInput
            placeholder={props.placeholder}
            className="border rounded-md h-10 p-3 border-gray-500 mb-3"
            onChangeText={props.onChange}
            secureTextEntry={props.secureTextEntry}
        />
    );
};

export default Input;
