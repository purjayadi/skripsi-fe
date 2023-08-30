import { Image, SafeAreaView, StyleSheet } from "react-native";
import { StyledText } from "../../common/styledText";
import { StyledView } from "../../common/styledView";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import api from "../../services/api";
import Icon from "react-native-vector-icons/Feather";
import MI from 'react-native-vector-icons/MaterialIcons'
import { StyledButton } from "../../common/styledButton";

const Dashboard = () => {
    const navigation = useNavigation();
    const [listProduct, setListProduct] = useState([]);

    useEffect(() => {
        async function getProduct() {
            const result = await api.get("/product");
            setListProduct(result.data.result.data);
        }
        getProduct();
    }, []);

    return (
        <SafeAreaView>
            <StyledView className="flex mt-10 font-semibold bg-cyan-700 h-[270px]">
                <StyledView className="flex flex-row justify-between pl-2 pr-5">
                    <StyledText className="text-white font-semibold text-lg p-2">
                        Bilal Beleka ArtShop
                    </StyledText>
                    <StyledView className="items-center flex justify-center">
                        <Icon name="shopping-cart" size={22} color="#ffff" />
                    </StyledView>
                </StyledView>
                <StyledView className="flex items-center">
                    <Image source={require('../../assets/logo.png')} style={styles.image} />
                </StyledView>
            </StyledView>
            <StyledView className="rounded-t-3xl p-20 items-center top-[-20px] bg-white h-full ">
                <StyledView className="flex flex-row flex-wrap gap-10 justify-center">
                    <StyledButton className="flex flex-col items-center" onPressIn={() => navigation.navigate('Product')}>
                        <StyledView className="border border-gray-300 h-[80px] w-[80px] rounded-md items-center flex justify-center">
                            <MI name="list-alt" size={50} />
                        </StyledView>
                        <StyledText className="font-semibold">Produk</StyledText>
                    </StyledButton>
                    <StyledButton className="flex flex-col items-center">
                        <StyledView className="border border-gray-300 h-[80px] w-[80px] rounded-md items-center flex justify-center">
                            <Icon name="shopping-bag" size={48} />
                        </StyledView>
                        <StyledText className="font-semibold">Transaksi</StyledText>
                    </StyledButton>
                    <StyledButton className="flex flex-col items-center">
                        <StyledView className="border border-gray-300 h-[80px] w-[80px] rounded-md items-center flex justify-center">
                            <Icon name="alert-circle" size={48} />
                        </StyledView>
                        <StyledText className="font-semibold">Tentang</StyledText>
                    </StyledButton>
                    <StyledButton className="flex flex-col items-center">
                        <StyledView className="border border-gray-300 h-[80px] w-[80px] rounded-md items-center flex justify-center">
                            <Icon name="user" size={48} />
                        </StyledView>
                        <StyledText className="font-semibold">Profile</StyledText>
                    </StyledButton>
                </StyledView>
            </StyledView>
        </SafeAreaView>
    );
};

export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },
});
