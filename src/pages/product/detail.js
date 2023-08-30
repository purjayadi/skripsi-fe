import { Image, SafeAreaView, StyleSheet } from "react-native";
import { StyledText } from "../../common/styledText";
import { StyledView } from "../../common/styledView";
import { StyledButton } from "../../common/styledButton";
import { useEffect, useState } from "react";
import api from "../../services/api";
import Icon from "react-native-vector-icons/Feather";
import { FormatRupiah } from "../../utils/helper";

const ProductDetail = ({ navigation, route }) => {
    const [listProduct, setListProduct] = useState([]);

    useEffect(() => {
        async function getProduct() {
            const result = await api.get("/product");
            setListProduct(result.data.result.data);
        }
        getProduct();
    }, []);

    const onPressDetail = (val) => {
        navigation.navigate('Product Detail', val)
    };

    return (
        <SafeAreaView>
            <StyledView className="flex mt-10 font-semibold bg-cyan-700">
                <StyledView className="flex flex-row justify-between pl-1 pr-5">
                    <StyledText className="text-white font-semibold text-lg p-2">
                        Detail Produk
                    </StyledText>
                    <StyledView className="items-center flex justify-center">
                        <Icon name="shopping-cart" size={22} color="#ffff" />
                    </StyledView>
                </StyledView>
            </StyledView>
            <StyledView className="w-full bg-gray-300 mb-2">
                <StyledView className="flex w-[170px] flex-col space-y-3 rounded-md mt-2 pl-3">
                    <StyledView className="flex flex-row space-x-5">
                        <Image
                            source={require("../../assets/product1.jpg")}
                            className="w-full h-[100] contain rounded-t-md"
                        />
                        <StyledView className="flex flex-col space-y-2">
                            <StyledText className="font-medium">{route.params.name}</StyledText>
                            <StyledText className="font-bold">{FormatRupiah(route.params.harga)}</StyledText>
                            <StyledButton className="border-gray-200 border bg-cyan-700 p-2 w-[60px] items-center rounded-md">
                                <StyledText className="text-xs text-white">Beli</StyledText>
                            </StyledButton>
                        </StyledView>
                    </StyledView>
                    <StyledView className="mb-5">
                        <StyledText className="font-medium text-gray-900">{route.params.deskripsi}</StyledText>
                    </StyledView>
                </StyledView>
            </StyledView>
            <StyledView
                className="flex flex-row flex-wrap gap-5 p-3"
                style={styles.container}
            >
                {listProduct.map((product, index) => {
                    if (index <= 1) {
                        return (
                            <StyledView
                                key={index}
                                className="flex w-[170px] flex-col space-y-3 border border-gray-300 rounded-md"
                            >
                                <Image
                                    source={require("../../assets/product1.jpg")}
                                    className="w-full h-[100] contain rounded-t-md"
                                />
                                <StyledView className="px-3">
                                    <StyledText className="font-medium">
                                        {product.name}
                                    </StyledText>
                                    <StyledText className="font-bold mt-1">
                                        {FormatRupiah(product.harga)}
                                    </StyledText>
                                    <StyledView className="flex flex-row justify-between py-3">
                                        <StyledButton
                                            onPress={() => onPressDetail(product)}
                                            className="border-gray-200 border bg-gray-500 p-2 w-[60px] items-center rounded-md"
                                        >
                                            <StyledText className="text-xs text-white">
                                                Detail
                                            </StyledText>
                                        </StyledButton>
                                        <StyledButton className="border-gray-200 border bg-cyan-700 p-2 w-[60px] items-center rounded-md">
                                            <StyledText className="text-xs text-white">
                                                Beli
                                            </StyledText>
                                        </StyledButton>
                                    </StyledView>
                                </StyledView>
                            </StyledView>
                        );
                    }
                })}
            </StyledView>
        </SafeAreaView>
    );
};

export default ProductDetail;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
});
