export type Topic = {
  id: string;
  title: string;
  summary: string;
  analogy: string;
  keyPoints: string[];
};

export const roadmap: { level: "Beginner" | "Intermediate" | "Advanced"; topics: Topic[] }[] = [
  {
    level: "Beginner",
    topics: [
      {
        id: "bits-vs-qubits",
        title: "Bits vs Qubits",
        summary: "Classical bits are 0 or 1. Qubits can be 0, 1, or any quantum superposition of both, giving exponential representational power.",
        analogy: "A bit is a coin lying flat — heads or tails. A qubit is a coin spinning in mid-air, both at once until it lands.",
        keyPoints: ["Classical = deterministic", "Quantum = probabilistic state vector", "n qubits represent 2ⁿ amplitudes"],
      },
      {
        id: "superposition",
        title: "Superposition",
        summary: "A qubit can exist in a linear combination |ψ⟩ = α|0⟩ + β|1⟩ where |α|² + |β|² = 1.",
        analogy: "Like Schrödinger's cat — alive AND dead until observed.",
        keyPoints: ["Amplitudes are complex numbers", "Probabilities = |amplitude|²", "Powers parallel computation"],
      },
      {
        id: "measurement",
        title: "Measurement",
        summary: "Measuring a qubit collapses its superposition into a definite 0 or 1 with probabilities given by its amplitudes.",
        analogy: "Opening the box forces the cat to pick: alive or dead.",
        keyPoints: ["Irreversible", "Destroys interference", "Basis-dependent outcomes"],
      },
    ],
  },
  {
    level: "Intermediate",
    topics: [
      {
        id: "entanglement",
        title: "Entanglement",
        summary: "Two qubits become correlated such that the state of one instantly determines the other, even at a distance.",
        analogy: "Two magic dice that always sum to 7, no matter how far apart you roll them.",
        keyPoints: ["Bell states", "Non-local correlations", "Resource for teleportation"],
      },
      {
        id: "bloch-sphere",
        title: "Bloch Sphere",
        summary: "A geometric representation of a single qubit state as a point on the surface of a unit sphere.",
        analogy: "A globe where the north pole is |0⟩, south pole is |1⟩, and the equator is equal superposition.",
        keyPoints: ["θ and φ parameterize state", "Pure states on surface", "Visualizes gate rotations"],
      },
      {
        id: "gates-circuits",
        title: "Quantum Gates & Circuits",
        summary: "Unitary operations like Hadamard, Pauli-X, CNOT manipulate qubits. Circuits compose gates over time.",
        analogy: "Logic gates for quantum information — but reversible and probabilistic.",
        keyPoints: ["H creates superposition", "CNOT entangles", "All gates are reversible"],
      },
    ],
  },
  {
    level: "Advanced",
    topics: [
      {
        id: "algorithms",
        title: "Deutsch • Grover • Shor",
        summary: "Landmark algorithms: Deutsch-Jozsa proves quantum advantage; Grover gives √N search; Shor breaks RSA in polynomial time.",
        analogy: "Classical = checking every door. Grover = checking √N. Shor = teleporting to the right door.",
        keyPoints: ["Oracle queries", "Quantum Fourier Transform", "Exponential speedup for factoring"],
      },
      {
        id: "cryptography",
        title: "Quantum Cryptography",
        summary: "QKD (BB84) lets two parties share keys with security guaranteed by physics, not math.",
        analogy: "An envelope that visibly tears if anyone peeks inside.",
        keyPoints: ["BB84 protocol", "Eavesdropping detected", "Post-quantum cryptography"],
      },
      {
        id: "error-correction",
        title: "Quantum Error Correction",
        summary: "Logical qubits encoded across many physical qubits to fight decoherence (Shor, Steane, Surface codes).",
        analogy: "Spelling a word in skywriting — write it 100 times so wind erasing a few doesn't matter.",
        keyPoints: ["No-cloning workaround", "Stabilizer codes", "Threshold theorem"],
      },
      {
        id: "qml",
        title: "Quantum Machine Learning",
        summary: "Variational circuits, QNNs, quantum kernels — using quantum hardware to accelerate or enhance ML.",
        analogy: "ML where the feature map lives in Hilbert space.",
        keyPoints: ["VQE / QAOA", "Hybrid classical-quantum", "Active research area"],
      },
      {
        id: "supremacy",
        title: "Quantum Supremacy & Hardware",
        summary: "Google's Sycamore (2019) and others demonstrated tasks intractable for classical supercomputers. Hardware spans superconducting, trapped ions, photonics, neutral atoms.",
        analogy: "The Wright brothers' first flight — short, but proves it can fly.",
        keyPoints: ["NISQ era", "Decoherence is the enemy", "Many competing modalities"],
      },
      {
        id: "frameworks",
        title: "Qiskit, Cirq & the Quantum Internet",
        summary: "Open-source SDKs (Qiskit, Cirq, PennyLane) let anyone code quantum circuits. Quantum networks aim to entangle nodes globally.",
        analogy: "Today's quantum internet ≈ the ARPANET of the 1970s.",
        keyPoints: ["Python-first ecosystems", "Cloud quantum access", "Repeaters & memories"],
      },
    ],
  },
];
