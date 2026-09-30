export const listExercises = [
    {
        esercizio: 1,
        titolo: '1. Blocco note persistente',
        testo: `Creare un componente NotePad con una <textarea>.
                A)Il testo digitato viene salvato in localStorage a ogni modifica.
                B)Al ricaricamento della pagina il testo viene recuperato da localStorage.
                C)Sotto la textarea viene mostrato il numero di caratteri.
                D)Il titolo della tab del browser mostra X caratteri.`,
        bonus: 'un pulsante "Svuota" che cancella testo e chiave dal localStorage.'
    },

    {
        esercizio: 2,
        titolo: '2. Theme switcher (light/dark)',
        testo: `Creare un componente ThemeToggle con un pulsante che alterna tema chiaro e scuro.
                A)Lo stato theme viene salvato in localStorage e recuperato al caricamento.
                B)Un useEffect applica una classe al document per light e dark mode
                C)Il testo del pulsante cambia in base al tema attivo.`,
        bonus: 'gestire la visibilità del componente con conditional rendering e aggiungere una cleanup function di useEffect() che ripristina il tema light quando il componente viene smontato. Verificare il comportamento.',
    },

    {
        esercizio: 3,
        titolo: '3. Window size tracker',
        testo: `Creare un componente WindowSize che mostra in tempo reale larghezza e altezza della finestra.
                A)Stato inizializzato con window.innerWidth e window.innerHeight.
                B)useEffect che registra un listener sull'evento resize.
                C)Mostrare anche un badge con il breakpoint corrente: mobile (< 768px), tablet (< 992px), desktop.
                D)Cleanup con removeEventListener: la funzione handler deve quindi essere dichiarata con un nome, non anonima.`
    },
];