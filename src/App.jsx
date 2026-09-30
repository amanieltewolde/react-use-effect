import Esercizio from "./Esercizio";
import { listaExercises } from "./utilities/Lista-esercizi";

export default function App() {

  // const [item] = listaExercises;
  return (
    <>
      <h2 className="display-1 text-center">React useEffect</h2>
      <Esercizio key={listaExercises[0].esercizio}
        titolo={listaExercises[0].titolo}
        testo={listaExercises[0].testo}
        bonus={listaExercises[0].bonus} />
    </>
  )
}