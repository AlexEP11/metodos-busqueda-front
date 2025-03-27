export const nodeStyle = {
    backgroundColor: "#136282",
    color: "white",
    borderRadius: "50%",
    width: 35,
    height: 35,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    border: "2px solid black",
};

// Definición de los nodos
export const initialNodes = [
    { id: "A", position: { x: 1240, y: 420 }, data: { label: "A" } },
    { id: "B", position: { x: 1130, y: 360 }, data: { label: "B" } },
    { id: "C", position: { x: 1040, y: 440 }, data: { label: "C" } },
    { id: "D", position: { x: 1040, y: 350 }, data: { label: "D" } },
    { id: "E", position: { x: 980, y: 320 }, data: { label: "E" } },
    { id: "F", position: { x: 940, y: 420 }, data: { label: "F" } },
    { id: "G", position: { x: 920, y: 340 }, data: { label: "G" } },
    { id: "H", position: { x: 840, y: 290 }, data: { label: "H" } },
    { id: "I", position: { x: 850, y: 430 }, data: { label: "I" } },
    { id: "J", position: { x: 790, y: 450 }, data: { label: "J" } },
    { id: "K", position: { x: 780, y: 250 }, data: { label: "K" } },
    { id: "L", position: { x: 750, y: 340 }, data: { label: "L" } },
    { id: "M", position: { x: 720, y: 260 }, data: { label: "M" } },
    { id: "N", position: { x: 650, y: 230 }, data: { label: "N" } },
    { id: "Ñ", position: { x: 660, y: 400 }, data: { label: "Ñ" } },
    { id: "O", position: { x: 630, y: 300 }, data: { label: "O" } },
    { id: "P", position: { x: 660, y: 470 }, data: { label: "P" } },
    { id: "Q", position: { x: 580, y: 350 }, data: { label: "Q" } },
    { id: "R", position: { x: 490, y: 380 }, data: { label: "R" } },
    { id: "S", position: { x: 440, y: 470 }, data: { label: "S" } },
    { id: "T", position: { x: 420, y: 380 }, data: { label: "T" } },
    { id: "U", position: { x: 420, y: 320 }, data: { label: "U" } },
    { id: "V", position: { x: 340, y: 460 }, data: { label: "V" } },
    { id: "W", position: { x: 230, y: 380 }, data: { label: "W" } },
    { id: "X", position: { x: 140, y: 470 }, data: { label: "X" } },
    { id: "Y", position: { x: 200, y: 340 }, data: { label: "Y" } },
    { id: "Z", position: { x: 160, y: 250 }, data: { label: "Z" } },
    { id: "T1", position: { x: 280, y: 300 }, data: { label: "T1" } },
    { id: "T2", position: { x: 410, y: 250 }, data: { label: "T2" } },
    { id: "CC", position: { x: 240, y: 460 }, data: { label: "CC" } },
    { id: "FF", position: { x: 720, y: 470 }, data: { label: "FF" } },
    { id: "Cn1", position: { x: 50, y: 320 }, data: { label: "Cn1" } },
    { id: "Cn2", position: { x: 310, y: 380 }, data: { label: "Cn2" } },
    { id: "Et1", position: { x: 1220, y: 490 }, data: { label: "Et1" } },
    { id: "Et2", position: { x: 940, y: 490 }, data: { label: "Et2" } },
    { id: "Et3", position: { x: 790, y: 510 }, data: { label: "Et3" } },
    { id: "Et4", position: { x: 320, y: 510 }, data: { label: "Et4" } },
    { id: "Et5", position: { x: 120, y: 390 }, data: { label: "Et5" } },
    { id: "Et6", position: { x: 100, y: 330 }, data: { label: "Et6" } },
].map((node) => ({ ...node, style: nodeStyle, type: "default" })); // Aplica el estilo a cada nodo

export const edgeStyles = {
    stroke: "#136282",
    strokeWidth: 2,
};

export const initialEdges = [
    // Conexiones desde A
    { id: "A-Et1", source: "A", target: "Et1" },
    { id: "A-C", source: "A", target: "C" },
    { id: "A-B", source: "A", target: "B" },

    // Conexiones desde B
    { id: "B-D", source: "B", target: "D" },
    { id: "B-C", source: "B", target: "C" },

    // Conexiones desde C
    { id: "C-Et2", source: "C", target: "Et2" },
    { id: "C-Et1", source: "C", target: "Et1" },
    { id: "C-F", source: "C", target: "F" },
    { id: "C-E", source: "C", target: "E" },
    { id: "C-D", source: "C", target: "D" },

    // Conexiones desde D
    { id: "D-E", source: "D", target: "E" },

    // Conexiones desde E
    { id: "E-G", source: "E", target: "G" },
    { id: "E-F", source: "E", target: "F" },

    // Conexiones desde F
    { id: "F-Et2", source: "F", target: "Et2" },
    { id: "F-I", source: "F", target: "I" },
    { id: "F-G", source: "F", target: "G" },

    // Conexiones desde G
    { id: "G-I", source: "G", target: "I" },
    { id: "G-H", source: "G", target: "H" },

    // Conexiones desde H
    { id: "H-L", source: "H", target: "L" },
    { id: "H-K", source: "H", target: "K" },
    { id: "H-I", source: "H", target: "I" },

    // Conexiones desde I
    { id: "I-Et3", source: "I", target: "Et3" },
    { id: "I-J", source: "I", target: "J" },

    // Conexiones desde J
    { id: "J-Et3", source: "J", target: "Et3" },
    { id: "J-FF", source: "J", target: "FF" },
    { id: "J-L", source: "J", target: "L" },

    // Conexiones desde K
    { id: "K-M", source: "K", target: "M" },
    { id: "K-L", source: "K", target: "L" },

    // Conexiones desde L
    { id: "L-FF", source: "L", target: "FF" },
    { id: "L-O", source: "L", target: "O" },
    { id: "L-Ñ", source: "L", target: "Ñ" },
    { id: "L-M", source: "L", target: "M" },

    // Conexiones desde M
    { id: "M-N", source: "M", target: "N" },

    // Conexiones desde N
    { id: "N-O", source: "N", target: "O" },

    // Conexiones desde Ñ
    { id: "Ñ-S", source: "Ñ", target: "S" },
    { id: "Ñ-Q", source: "Ñ", target: "Q" },
    { id: "Ñ-P", source: "Ñ", target: "P" },
    { id: "Ñ-O", source: "Ñ", target: "O" },

    // Conexiones desde O
    { id: "O-U", source: "O", target: "U" },
    { id: "O-Q", source: "O", target: "Q" },

    // Conexiones desde P
    { id: "P-FF", source: "P", target: "FF" },
    { id: "P-S", source: "P", target: "S" },

    // Conexiones desde Q
    { id: "Q-U", source: "Q", target: "U" },
    { id: "Q-R", source: "Q", target: "R" },

    // Conexiones desde R
    { id: "R-U", source: "R", target: "U" },
    { id: "R-T", source: "R", target: "T" },
    { id: "R-S", source: "R", target: "S" },

    // Conexiones desde S
    { id: "S-Et4", source: "S", target: "Et4" },
    { id: "S-V", source: "S", target: "V" },

    // Conexiones desde T
    { id: "T-Cn2", source: "T", target: "Cn2" },
    { id: "T-V", source: "T", target: "V" },
    { id: "T-U", source: "T", target: "U" },

    // Conexiones desde U
    { id: "U-Cn2", source: "U", target: "Cn2" },
    { id: "U-T2", source: "U", target: "T2" },
    { id: "U-T1", source: "U", target: "T1" },

    // Conexiones desde V
    { id: "V-Et4", source: "V", target: "Et4" },
    { id: "V-Cn2", source: "V", target: "Cn2" },
    { id: "V-CC", source: "V", target: "CC" },

    // Conexiones desde W
    { id: "W-Cn2", source: "W", target: "Cn2" },
    { id: "W-CC", source: "W", target: "CC" },
    { id: "W-T1", source: "W", target: "T1" },
    { id: "W-Y", source: "W", target: "Y" },
    { id: "W-X", source: "W", target: "X" },

    // Conexiones desde X
    { id: "X-Et5", source: "X", target: "Et5" },
    { id: "X-Et4", source: "X", target: "Et4" },
    { id: "X-CC", source: "X", target: "CC" },

    // Conexiones desde Y
    { id: "Y-Et6", source: "Y", target: "Et6" },
    { id: "Y-Et5", source: "Y", target: "Et5" },
    { id: "Y-Z", source: "Y", target: "Z" },

    // Conexiones desde Z
    { id: "Z-Et6", source: "Z", target: "Et6" },

    // Conexiones desde T1
    { id: "T1-Cn2", source: "T1", target: "Cn2" },

    // Conexiones desde CC
    { id: "CC-Et4", source: "CC", target: "Et4" },

    // Conexiones desde FF
    { id: "FF-Et3", source: "FF", target: "Et3" },

    // Conexiones desde Et3
    { id: "Et3-Et2", source: "Et3", target: "Et2" },

    // Conexiones desde Et6
    { id: "Et6-Et5", source: "Et6", target: "Et5" },
    { id: "Et6-Cn1", source: "Et6", target: "Cn1" },
].map((edge) => ({ ...edge, style: edgeStyles, type: "straight" }));

export const algoritmos = ["BFS", "DFS", "DIJSKTRA", "VORAZ", "A*", "HILL"];
