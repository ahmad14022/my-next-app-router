import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";
const data = [
    {
        id: 1,
        title: 'Sepatu Baru',
        price: 1003,
        image: 'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_524,c_limit/d03926f6-5717-4fbb-8d32-1231042cb9ef/v2k-run-shoes-bzSrtC.png',
    },
    {
        id: 2,
        title: 'Sepatu Baruuu',
        price: 1006,
        image: 'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_524,c_limit/d03926f6-5717-4fbb-8d32-1231042cb9ef/v2k-run-shoes-bzSrtC.png',
    },
    {
        id: 3,
        title: 'Sepatu Baruuu',
        price: 1006,
        image: 'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_524,c_limit/d03926f6-5717-4fbb-8d32-1231042cb9ef/v2k-run-shoes-bzSrtC.png',
    },
]
export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")

    if (id) {
        // HARUS SESUAI DENGAN NAMA FIREBASE
        const detailProduct = await retrieveDataById("product", id)
        if (detailProduct) {
            return NextResponse.json({ status: 200, message: "success", data: detailProduct })
        }
        return NextResponse.json({ status: 404, message: "Not Found", data: {} })
    }
    // HARUS SESUAI DENGAN NAMA FIREBASE
    const product = await retrieveData('product')
    return NextResponse.json({ status: 200, message: "success", data: product })

}