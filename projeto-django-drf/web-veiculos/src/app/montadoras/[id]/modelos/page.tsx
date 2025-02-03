import { Montadora } from "../../page";

interface ModeloProps {
    params: Promise<{id: number}>;
}

interface Modelo {
    id: number;
    nome: string;
    montadora: Montadora
}

const ModelosPage = async ({params}: ModeloProps) => {
    const {id} = await params;

    const response = await fetch(`http://localhost:8000/api/montadoras/${id}/modelos`)
    const modelos = await response.json() as Modelo[];
    const montadora = modelos[0].montadora;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
            <h1 className="text-3xl font-bold mb-4 text-white">Modelos da Montadora {montadora.nome}</h1>
                <ul className="bg-gray-700 shadow-md rounded-lg p-6 w-full max-w-md">
                    {modelos.map((modelo) => (
                        <div key={modelo.id} className="bg-gray-600 shadow-md rounded-lg p-4 m-2 w-48 h-48 flex flex-col items-center justify-center text-white">
                            <h2 className="text-xl font-bold mb-2">{modelo.nome} <span className="text-gray-400">#{modelo.id}</span></h2>
                
                        </div>
                    ))}
                </ul>
        </div>
    );
};

export default ModelosPage;