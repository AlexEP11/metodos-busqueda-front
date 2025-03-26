import {
    ConnectionMode,
    ReactFlow,
    useEdgesState,
    useNodesState,
} from "@xyflow/react";
import { initialEdges, initialNodes } from "../../data";
import "@xyflow/react/dist/style.css";

interface CroquisProps {
    data?: { id: string; source: string; target: string }[];
    showCustomRoutes: boolean;
}

export default function Croquis({ data }: CroquisProps) {
    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, , onEdgesChange] = useEdgesState(initialEdges);

    const finalData = data?.map((edge) => ({
        ...edge,
        style: {
            stroke: "red",
            strokeWidth: 3,
        },
        type: "straight",
    }));

    return (
        <>
            <div className="h-screen relative">
                {/* Imagen de fondo */}
                <img
                    src="/mapa.jpg"
                    alt="Fondo"
                    className="absolute border-2 border-black rounded-2xl"
                />

                {/* ReactFlow encima de la imagen */}
                <ReactFlow
                    nodes={nodes}
                    edges={finalData == undefined ? finalData : edges}
                    onNodesChange={onNodesChange}
                    connectionMode={ConnectionMode.Loose}
                    onEdgesChange={onEdgesChange}
                    nodesDraggable={false}
                    panOnDrag={false}
                    zoomOnScroll={false}
                    zoomOnDoubleClick={false}
                    zoomOnPinch={false}
                    defaultEdgeOptions={{}}
                />
            </div>
        </>
    );
}
