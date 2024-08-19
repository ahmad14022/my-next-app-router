

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <h1>This is Layout Profile</h1>
            <div>{children}</div>
        </>
    )
}