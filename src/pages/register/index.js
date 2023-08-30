import { Image, SafeAreaView, StyleSheet } from "react-native"
import { StyledText } from "../../common/styledText"
import { StyledView } from "../../common/styledView"
import { StyledTextInput } from '../../common/styledInput';
import { StyledButton } from "../../common/styledButton";
import Input from "../../components/input";
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
    const navigation = useNavigation();

    const login = () => {
        navigation.navigate('Welcome');
    }

    return (
        <SafeAreaView>
            <StyledView className="flex mt-10 items-center font-semibold bg-white h-full">
                <Image source={require('../../assets/logo.png')} style={styles.image} />
                <StyledText className="text-gray-800 font-semibold text-2xl pb-5">Form Daftar</StyledText>
                <StyledView className="flex flex-col space-y-3 w-full p-5">
                    <Input placeholder="Nama" />
                    <Input placeholder="Email" />
                    <Input placeholder="Alamat" />
                    <Input placeholder="No. Hp" />
                    <Input placeholder="Kata Sandi" />
                    <Input placeholder="Ulang Sandi" />
                    <StyledButton className="bg-primary rounded-md text-white p-3 items-center font-semibold text-lg" >
                        <StyledText>Daftar</StyledText>
                    </StyledButton>
                    <StyledView className="flex flex-row justify-between px-1">
                        <StyledText>Sudah punya akun?</StyledText>
                        <StyledButton onPressIn={login}><StyledText className="text-primary">Masuk</StyledText></StyledButton>
                    </StyledView>
                </StyledView>
            </StyledView >
        </SafeAreaView>
    )
}

export default Signup

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain', // You can adjust the resizeMode as needed
    },
});