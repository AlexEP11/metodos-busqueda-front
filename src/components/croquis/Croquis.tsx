import {
    ConnectionMode,
    ReactFlow,
    useEdgesState,
    useNodesState,
} from "@xyflow/react";
import { initialEdges, initialNodes } from "../../data";
import { useState, useEffect } from "react";
import { api } from "../../data/axios.config";
import "@xyflow/react/dist/style.css";

interface CroquisProps {
    data?: { id: string; source: string; target: string }[];
    showCustomRoutes: boolean;
    setPeso: (value: number | null) => void;
}

export default function Croquis({
    data,
    showCustomRoutes,
    setPeso,
}: CroquisProps) {
    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const [selectedNode, setSelectedNode] = useState<{
        nombre: string;
        adyacentes: [string, number][];
    } | null>(null);

    const handleNodeClick = async (node: React.MouseEvent) => {
        try {
            const nodeId = (node.target as HTMLElement).innerText;
            const { data } = await api.get(`/api/nodo?nodo=${nodeId}`);
            setSelectedNode(data);
        } catch (error) {
            console.error("Error fetching node data:", error);
            setPeso(null);
        }
    };

    useEffect(() => {
        if (data && data.length > 0) {
            const finalData = data.map((edge) => ({
                ...edge,
                style: {
                    stroke: "red",
                    strokeWidth: 4,
                },
                type: "straight",
            }));

            setEdges(finalData);
        }
    }, [data, setEdges]);

    useEffect(() => {
        if (!showCustomRoutes) {
            setEdges(initialEdges);
            setPeso(null);
        }
    }, [showCustomRoutes, setEdges, setPeso]);

    return (
        <>
            <div className="h-screen relative hover:scale-103 transition-all duration-300">
                <img
                    src="/mapa.jpg"
                    alt="Fondo"
                    className="absolute border-2 border-black rounded-2xl"
                />

                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    connectionMode={ConnectionMode.Loose}
                    onEdgesChange={onEdgesChange}
                    nodesDraggable={false}
                    panOnDrag={false}
                    zoomOnScroll={false}
                    zoomOnDoubleClick={false}
                    zoomOnPinch={false}
                    defaultEdgeOptions={{}}
                    onNodeClick={handleNodeClick}
                />
            </div>

            {/* Modal */}
            {selectedNode && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/40">
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                        <h2 className="text-xl font-bold mb-4">
                            Información del Nodo
                        </h2>
                        <p>
                            <strong>Nombre:</strong> {selectedNode.nombre}
                        </p>
                        <h3 className="font-semibold mt-3">Adyacentes:</h3>
                        <ul className="list-disc ml-5">
                            {selectedNode.adyacentes.map(
                                ([nodo, peso], index) => (
                                    <li key={index}>
                                        Nodo {nodo} - Peso: {peso}
                                    </li>
                                )
                            )}
                        </ul>
                        <button
                            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                            onClick={() => setSelectedNode(null)}
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
