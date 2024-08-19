import { getData } from "@/services/products"
// import Modal from "@/components/core/Modal"
import Image from "next/image";
import dynamic from "next/dynamic";

const Modal = dynamic(() => import('@/components/core/Modal'))

export default async function DetailProductPage(props: any) {
    const { params } = props
    // id diambil dari nama folder [id]
    const product = await getData("http://localhost:3000/api/product/?id=" + params.id)
    console.log(product);
    
    return (
        <Modal>
            <Image src={product.data.image} alt="product" className="w-full object-cover aspect-square col-span-2" width={500} height={500} />
            <div className="bg-white p-4 px-6">
                <h3>{product.data.name}</h3>
                <p>{product.data.price}</p>
            </div>
        </Modal>

    )
}