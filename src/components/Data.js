import { useGetAllProductsQuery, useGetProductQuery } from "../features/apiSlice"


export const Data = ( ) => {

    const {data: allProductsData} = useGetAllProductsQuery();
    const {data: singleProductData} = useGetProductQuery("iphone");

    console.log(allProductsData); 
    console.log(singleProductData); 

    return (
        <div>
            {/* <text>{singleProductData}</text> */}
            <text>Data:</text>
        </div>
    )
}