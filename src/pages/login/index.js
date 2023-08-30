import { Image, SafeAreaView, StyleSheet } from "react-native"
import { StyledText } from "../../common/styledText"
import { StyledView } from "../../common/styledView"
import { StyledButton } from "../../common/styledButton";
import { useNavigation } from "@react-navigation/native";
import Input from "../../components/input";
import { useState } from "react";
import api from "../../services/api";
import * as SecureStore from 'expo-secure-store';

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = () => {
        navigation.navigate('Register');
    }

    const onSubmit = async () => {
        try {
            const result = await api.post('/auth/login', {
                email,
                sandi: password
            })
            await SecureStore.setItemAsync('isLoggedIn', JSON.stringify(true));
            await SecureStore.setItemAsync('token', result.data.accessToken);
            navigation.navigate('Dashboard');
        } catch (error) {
            alert("Email atau sandi salah")
        }
    }

    return (
        <SafeAreaView>
            <StyledView className="flex mt-10 items-center font-semibold bg-cyan-700">
                <Image source={require('../../assets/logo.png')} style={styles.image} />
                <StyledText className="text-white font-bold text-3xl">Welcome</StyledText>
                <StyledText className="text-white font-semibold text-lg pb-14">Bilal Beleka ArtShop</StyledText>
            </StyledView >
            <StyledView className="rounded-t-3xl p-5 items-center top-[-20px] bg-white h-full flex flex-col">
                <StyledText className="pb-5 text-lg font-semibold">Form Login</StyledText>
                <StyledView className="flex flex-col space-y-3 w-full">
                    <Input placeholder="Email" onChange={setEmail} />
                    <Input placeholder="Password" onChange={setPassword} secureTextEntry={true} />
                    <StyledButton className="bg-primary rounded-md text-white p-3 items-center font-semibold text-lg" onPressIn={onSubmit}>
                        <StyledText>Masuk</StyledText>
                    </StyledButton>
                    <StyledView className="flex flex-row justify-between px-1">
                        <StyledText>Belum punya akun?</StyledText>
                        <StyledButton onPressIn={register}><StyledText className="text-primary">Daftar</StyledText></StyledButton>
                    </StyledView>
                </StyledView>
            </StyledView>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },
});