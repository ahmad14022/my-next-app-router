export default function Layout({ children, product, analytics, payments }: { children: React.ReactNode, product: React.ReactNode, analytics: React.ReactNode, payments: React.ReactNode }) {
    return (
        <div className="p-5">
            <div>
                {children}
            </div>
            <div className="flex mt-5 justify-center items-center gap-4" >
                {product}
                {analytics}
            </div>
            {payments}
        </div>
    )
}