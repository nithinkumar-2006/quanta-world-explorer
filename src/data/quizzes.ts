export type Question = {
  q: string;
  options: string[];
  answer: number;
  explanation: string;
};

export const quizzes: Record<"Beginner" | "Intermediate" | "Advanced", Question[]> = {
  Beginner: [
    {
      q: "What is a qubit?",
      options: ["A classical bit", "A quantum bit that can be in superposition", "A type of CPU", "A measurement device"],
      answer: 1,
      explanation: "A qubit can exist as 0, 1, or any superposition of both states.",
    },
    {
      q: "What happens when you measure a qubit in superposition?",
      options: ["Nothing", "It stays in superposition", "It collapses to 0 or 1", "It teleports"],
      answer: 2,
      explanation: "Measurement collapses the wavefunction to a definite basis state.",
    },
    {
      q: "How many classical states do n qubits represent?",
      options: ["n", "2n", "n²", "2ⁿ"],
      answer: 3,
      explanation: "n qubits span a 2ⁿ-dimensional Hilbert space.",
    },
    {
      q: "Schrödinger's cat illustrates which concept?",
      options: ["Entanglement", "Superposition", "Tunneling", "Decoherence"],
      answer: 1,
      explanation: "The cat is both alive and dead — a superposition until observed.",
    },
  ],
  Intermediate: [
    {
      q: "Which gate creates a superposition from |0⟩?",
      options: ["Pauli-X", "CNOT", "Hadamard", "Toffoli"],
      answer: 2,
      explanation: "H|0⟩ = (|0⟩ + |1⟩)/√2.",
    },
    {
      q: "Two entangled qubits in a Bell state share what property?",
      options: ["Identical mass", "Perfectly correlated measurement outcomes", "Same color", "Faster-than-light signaling"],
      answer: 1,
      explanation: "Bell states give correlated outcomes; no usable signaling though.",
    },
    {
      q: "On the Bloch sphere, where is the |1⟩ state?",
      options: ["North pole", "South pole", "Equator", "Center"],
      answer: 1,
      explanation: "Convention: |0⟩ at north, |1⟩ at south.",
    },
    {
      q: "Which gate flips a qubit (quantum NOT)?",
      options: ["Hadamard", "Pauli-X", "Phase", "S gate"],
      answer: 1,
      explanation: "Pauli-X swaps |0⟩ ↔ |1⟩.",
    },
  ],
  Advanced: [
    {
      q: "Shor's algorithm provides what speedup?",
      options: ["Linear", "Quadratic", "Exponential for factoring", "None"],
      answer: 2,
      explanation: "Shor's gives polynomial-time factoring vs classical sub-exponential.",
    },
    {
      q: "Grover's algorithm searches an unsorted database in:",
      options: ["O(N)", "O(log N)", "O(√N)", "O(N²)"],
      answer: 2,
      explanation: "Grover gives a quadratic speedup.",
    },
    {
      q: "Surface codes are an example of:",
      options: ["A search algorithm", "A quantum error correction code", "An ML model", "A cryptographic hash"],
      answer: 1,
      explanation: "Surface codes are leading topological QEC schemes.",
    },
    {
      q: "BB84 protocol enables:",
      options: ["Quantum teleportation", "Secure key distribution", "Faster ML", "Error correction"],
      answer: 1,
      explanation: "BB84 is the original quantum key distribution protocol.",
    },
    {
      q: "Which is NOT a quantum hardware modality?",
      options: ["Superconducting", "Trapped ions", "Photonic", "Neuromorphic"],
      answer: 3,
      explanation: "Neuromorphic is classical brain-inspired computing.",
    },
  ],
};
