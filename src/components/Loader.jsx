import { useEffect, useState } from "react";

function Loader({ onFinish }) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);

        const timer = setTimeout(() => {
            setShow(false);

            setTimeout(() => {
                onFinish && onFinish();
            }, 500);
        }, 3500);

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div
            className={`fixed inset-0 flex items-center justify-center bg-[#050B1E] transition-opacity duration-500 ${show ? "opacity-100" : "opacity-0"
                }`}
        >
            <div className="flex flex-col items-center gap-4">

                {/* HEXAGON CONTAINER */}
                <div className="relative w-24 h-24 flex items-center justify-center">

                    {/* SN */}
                    <div className="sn-text text-blue-500 text-2xl font-bold tracking-[5px]">
                         SN
                    </div>

                    {/* HEXAGON */}
                    <svg
                        viewBox="0 0 100 100"
                        className="absolute w-full h-full"
                    >
                        <polygon
                            points="50,8 88,28 88,72 50,92 12,72 12,28"
                            fill="none"
                            stroke="#3B82F6"
                            strokeWidth="4"
                            className="hexagon-path"
                        />
                    </svg>
                </div>

            </div>
        </div>
    );
}

export default Loader;