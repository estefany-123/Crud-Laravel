
export default function DefaultLayout({children} : {children : React.ReactNode}){
    return(
        <div className="min-h-screen bg-white text-black">
            <div className="h-16 bg-gray-50 flex w-full items-center ">
                <span className="ms-6">CRUD</span>
            </div>
            <div className="box-border p-6">
                {children}
            </div>
        </div>
    )
}