import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col gap-4 justify-center items-center
        w-full h-screen mx-auto">
            <div className="p-2 text-center">
                <h1 className="text-2xl font-bold">404 Error!</h1>
                <h1>Sorry Page Not Found!</h1>
            </div>
            <div className="my-2">
                <p>Go Back to <Link to="/">
                    <span className="font-bold tracking-wide p-2 bg-slate-400
                    text-black
                    text-sm 
                    border-2 
                    rounded-2xl">
                        Home
                    </span>
                </Link></p>
            </div>
        </div>
    )
}

export default NotFound;
