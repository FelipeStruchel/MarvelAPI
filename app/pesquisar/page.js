import Marvel from "../components/Marvel";
import ProtectedRoute from "../components/ProtectedRoute";


export default function Pesquisar(){
    return (
        <ProtectedRoute>
            <Marvel/>
        </ProtectedRoute>
    )
}