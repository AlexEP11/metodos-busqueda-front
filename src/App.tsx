import { useState } from "react";
import Croquis from "./components/croquis/Croquis";
import { algoritmos, initialNodes } from "./data";
import { useForm } from "react-hook-form";
import { Options } from "./types";
import { api } from "./data/axios.config";

function App() {
    const [showCustomRoutes, setShowCustomRoutes] = useState(true);
    const [result, setResult] = useState([]);
    const [peso, setPeso] = useState<null | number>(null);
    const { register, handleSubmit } = useForm({
        defaultValues: {
            algoritmo: "BFS",
            nodoInicial: "Cn1",
            nodoFinal: "A",
        },
    });

    const onSubmit = async (info: Options) => {
        const { data } = await api.post("api/nodo", info);
        setResult(data.camino);
        setPeso(data.peso);
        setShowCustomRoutes(true);
    };

    return (
        <main className="max-w-[1400px] m-auto mt-5 ">
            <div className="bg-blue-600 text-white p-6 rounded-t-2xl">
                <h1 className="text-3xl font-extrabold text-center tracking-tight">
                    Métodos de Búsqueda
                </h1>
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="mb-4 p-4  flex gap-4 bg-slate-100 rounded-b-2xl"
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
                            type="button"
                            onClick={() => setShowCustomRoutes(false)}
                            className="p-3 md:px-6 bg-blue-500 font-bold text-white text-center rounded-xl hover:bg-blue-600 transition-colors shadow hover:shadow-md flex items-center justify-center gap-2"
                        >
                            Resetear
                        </button>
                    </div>
                </div>
            </form>
            {peso ? (
                <div className="p-6 bg-gray-300 text-center rounded-2xl mb-3">
                    <p className="text-lg font-semibold text-gray-800">
                        El peso es:{" "}
                        <span className="text-red-600 font-black underline decoration-red-500 decoration-2">
                            {peso}
                        </span>
                    </p>
                </div>
            ) : (
                <div className="p-8.5 rounded-2xl mb-5"></div>
            )}
            <Croquis
                showCustomRoutes={showCustomRoutes}
                data={result}
                setPeso={setPeso}
            />
        </main>
    );
}

export default App;
