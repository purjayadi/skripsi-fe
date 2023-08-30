export const FormatRupiah = (val) => {
    const formattedPrice = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(val);
    return formattedPrice
}