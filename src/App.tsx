import { useState } from "react";
import Croquis from "./components/croquis/Croquis";
import { algoritmos, initialNodes } from "./data";
import { useForm } from "react-hook-form";
import { Options } from "./types";
import { api } from "./data/axios.config";

function App() {
    const [showCustomRoutes, setShowCustomRoutes] = useState(true);
    const [result, setResult] = useState([]);
    const { register, handleSubmit } = useForm({
        defaultValues: {
            algoritmo: "BFS",
            nodoInicial: "Cn1",
            nodoFinal: "A",
        },
    });

    const onSubmit = async (info: Options) => {
        /* Logica de llamda al endpoint */
        console.log(info);

        const { data } = await api.post("/search", info);
        console.log(data);
        setResult(data);
    };

    return (
        <main className="max-w-[1400px] m-auto">
            <h1 className="font-black font-mono text-center text-4xl md:text-5xl p-5 text-blue-800 mb-4">
                Métodos de Búsqueda
            </h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-8 mb-8 space-y-6 md:space-y-0 md:flex md:gap-4"
            >
                <div className="flex flex-col w-full">
                    <label className="font-medium text-gray-700 mb-2">
                        Algoritmo
                    </label>
                    <select
                        {...register("algoritmo")}
                        className="p-3 w-full border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    >
                        {algoritmos.map((algoritmo) => (
                            <option key={algoritmo} value={algoritmo}>
                                {algoritmo}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-col w-full">
                    <label className="font-medium text-gray-700 mb-2">
                        Nodo Inicial
                    </label>
                    <select
                        {...register("nodoInicial")}
                        className="p-3 w-full border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    >
                        {initialNodes.map((node) => (
                            <option key={node.id} value={node.id}>
                                {node.id}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-col w-full">
                    <label className="font-medium text-gray-700 mb-2">
                        Nodo Final
                    </label>
                    <select
                        {...register("nodoFinal")}
                        className="p-3 w-full border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    >
                        {initialNodes.map((node) => (
                            <option key={node.id} value={node.id}>
                                {node.id}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-col justify-end w-full md:w-auto">
                    <div className="grid grid-cols-2 gap-2 md:flex md:flex-col md:gap-3">
                        <button
                            type="submit"
                            className="p-3 md:px-6 bg-green-500 font-bold text-white text-center rounded-xl hover:bg-green-600 transition-colors shadow hover:shadow-md flex items-center justify-center gap-2"
                        >
                            Buscar
                        </button>

                        <button
                            type="reset"
                            onClick={() => setShowCustomRoutes(false)}
                            className="p-3 md:px-6 bg-blue-500 font-bold text-white text-center rounded-xl hover:bg-blue-600 transition-colors shadow hover:shadow-md flex items-center justify-center gap-2"
                        >
                            Resetear
                        </button>
                    </div>
                </div>
            </form>
            <Croquis showCustomRoutes={showCustomRoutes} data={result} />;
        </main>
    );
}

export default App;
