/* Narratore start */
const dialoguesStart = [
    {
        character: "Narratore",
        text: "Per iniziare l'avventura, trova Casa Mi Chillo!"
    }
];

const dialoguesMap = [
    {
        character: "Narratore",
        text: "Andiamo alla prossima zona!"
    }
];

/* Dialoghi Casa Mi Chillo */
const dialoguesHouse = [
    {
        character: "Narratore",
        text: "Nel chiarore fioco dell'alba, ti sveglia lentamente dal suo sonno profondo, la mente annebbiata da un torpore che si dissolve gradualmente. Le palpebre pesanti si aprono con fatica, rivelando una stanza avvolta nell'oscurità. Il suono leggero del vento che sussurra tra le fessure delle finestre crea un'atmosfera silenziosa e misteriosa, mentre la figura di un'elfa immortale giace vicino al fuoco che arde fioco nell'angolo della stanza."
    },
    {
        character: "Frieren",
        text: "Salve, viandante. È giunto il momento di risvegliarsi."
    },
    {
        character: "Narratore",
        text: "Le parole della misteriosa figura risuonano dolcemente nell'aria, come un richiamo lontano. Con uno sbadiglio sbadigliato, ti sollevi lentamente dal letto, gli occhi ancora annebbiati dalla stanchezza del sonno."
    },
    {
        character: "Cillo",
        text: "Dove... Dove sono? Chi... Chi sei tu?"
    },
    {
        character: "Frieren",
        text: "Sei in un luogo al di là del mondo con cui sei familiare, viandante. Ma non temere, perché qui inizia il tuo viaggio verso il destino che ti attende. Io sono Frieren, un'elfa immortale che ha visto molte ere passare in questo mondo. Ma non siamo qui per parlare di me. Tu sei qui per un motivo speciale, anche se forse non lo sai ancora."
    },
    {
        character: "Cillo",
        text: "Cosa intendi?"
    },
    {
        character: "Frieren",
        text: "Il tuo destino è legato a una montagna che si erge nella distanza, il Monte Mostro. Lì troverai ciò che cerco, un libro di magie. È il tuo compito raggiungerlo, ma sappi che il viaggio sarà pericoloso e pieno di sfide."
    },
    {
        character: "Cillo",
        text: "Monte Mostro? Perchè devo farlo io?"
    },
    {
        character: "Frieren",
        text: "Mani! Scusa, ho avuto un attimo di riflesso. Viandante, il tuo ruolo in questa avventura è più cruciale di quanto tu possa immaginare. Il libro di magie custodito nel Monte Mostro è un artefatto di inestimabile potere, ma le sue pagine non racchiudono solo incantesimi. Esse contengono il segreto di una magia antica, una magia che solo io posso evocare."
    },
    {
        character: "Cillo",
        text: "Quindi... il libro è per te?"
    },
    {
        character: "Frieren",
        text: "Esattamente. Mi servirà per compiere un incantesimo che risveglierà un potere dormiente, un potere che può salvare questo mondo dall'oscurità che lo minaccia. Ma il cammino verso il Monte Mostro è pericoloso, e solo un cuore coraggioso come il tuo può sperare di compierlo con successo."
    },
    {
        character: "Cillo",
        text: "Capisco. E cosa otterrò una volta che avrò trovato il libro?"
    },
    {
        character: "Frieren",
        text: "Quando riporterai il libro di magie, ti prometto una ricompensa degna del tuo coraggio. Potrà essere un dono prezioso o una conoscenza che ti servirà nei tuoi futuri viaggi. La scelta sarà tua, ma ti assicuro che non rimarrai deluso."
    },
    {
        character: "Cillo",
        text: "Mi metterò in cammino, grazie Frieren."
    },
    {
        character: "Frieren",
        text: "Che il vento sia alle tue spalle e la fortuna ti sorrida, viandante. Il Monte Mostro ti attende e, con esso, il tuo destino. Buon viaggio."
    }
];

/* Dialoghi LagoNia */
const dialoguesLagoNia = [
    {
        character: "Narratore",
        text: "Il Lago Nia si staglia davanti a te come un'enorme distesa d'acqua scura, riflettendo il cielo cupo e minaccioso sopra di esso. Le sue acque sembrano muoversi con una lentezza inquietante, quasi come se fossero vive. Il vento sibila tra gli alberi circostanti, portando con sé un senso di mistero e pericolo. Ti fermi sulla riva, guardando in modo frustrato il lago apparentemente insormontabile e sospirando."
    },
    {
        character: "Cillo",
        text: "Come posso attraversare questo maledetto lago? Non vedo né ponti, né barche. È come se non ci fosse via d'uscita..."
    },
    {
        character: "Narratore",
        text: "Alle tue spalle si avvicina una figura misteriosa con un enigmatico sorriso sul volto."
    },
    {
        character: "Killua",
        text: "Ehilà."
    },
    {
        character: "Narratore",
        text: "Cillo ti volti di scatto, spaventato."
    },
    {
        character: "Cillo",
        text: "Oh! Killua?"
    },
    {
        character: "Killua",
        text: "Esatto, sono io. Ho sentito le tue lamentele sul Lago Nia. Sembrava che avessi bisogno di un po' di assistenza."
    },
    {
        character: "Cillo",
        text: "È come se fosse un labirinto d'acqua senza uscita."
    },
    {
        character: "Killua",
        text: "Capisco. Ma non temere, ho una soluzione. Ma prima giochiamo un po'."
    },
    {
        character: "Cillo",
        text: "Che genere di gioco?"
    },
    {
        character: "Killua",
        text: "Risponderai a qualche mia domanda, se risponderai ad almeno 7 domande su 10, ti aiuterò. Ci stai?"
    }
];

const dialoguesLagoNiaWin = [
    {
        character: "Killua",
        text: "Wow, sei stato impressionante! Hai risposto correttamente a tutte e sette le domande. Sei pronto per scoprire come attraversare il lago?"
    },
    {
        character: "Cillo",
        text: "Assolutamente! Dimmi cosa devo fare."
    },
    {
        character: "Killua",
        text: "Allora, devi fare esattamente come ti dico. Segui la riva orientale del lago fino a quando non raggiungi un punto dove gli alberi si diradano leggermente. Da lì, vedrai un tronco d'albero caduto sopra il lago. Puoi usarlo come ponte improvvisato per attraversare."
    },
    {
        character: "Cillo",
        text: "Capito! Grazie mille, Killua!"
    },
    {
        character: "Killua",
        text: "Non c'è di che, Cillo. Buon cammino verso il Monte Mostro."
    },
    {
        character: "Narratore",
        text: "Cillo inizia il suo cammino, ma presto si accorge di una cosa..."
    },
    {
        character: "Cillo",
        text: "Aspetta, come fai a conoscermi?"
    },
    {
        character: "Narratore",
        text: "Ti giri nella direzione in cui si trovava Killua, ma non ci sta più nessuno. Nel silenzio del bosco, solo il vento sussurra tra gli alberi, come se l'incontro con il misterioso ragazzo fosse stato solo un fugace sogno. Guardi ancora una volta il lago, con le istruzioni di Killua ancora in mente, e ti avventuri lungo la riva orientale."
    }
];

const dialoguesLagoNiaLose = [
    {
        character: "Narratore",
        text: "Narratore:  Si, ma mettici più impegno! Dai, ti diamo un altro tentativo."
    }
];

/* Dialoghi Bosco Pasketta */
const dialoguesBoscoPasketta = [
    {
        character: "Narratore",
        text: "Dopo aver attraversato il Lago Nia, ti addentri in un bosco avvolto da un'atmosfera misteriosa. Gli alberi, alti e possenti, si ergono come guardiani silenziosi, con rami che si intrecciano formando strane forme a tridente."
    },
    {
        character: "Narratore",
        text: "Il suolo è coperto da un tappeto di foglie secche, e il chiarore del sole che filtra attraverso le fronde crea giochi di luce e ombra, conferendo al luogo un'aria magica e inquietante allo stesso tempo. È in questo scenario che si imbatte in una figura solitaria, una giovane donna con un'aura di tristezza che la circonda."
    },
    {
        character: "Utahime",
        text: "Aiuto... per favore, hai un momento?"
    },
    {
        character: "Cillo",
        text: "Utahime? Certo, posso aiutarti? Cosa ti preoccupa?"
    },
    {
        character: "Utahime",
        text: "Ho... ho bisogno del tuo aiuto. Mi sono... persa. Il bosco ha cambiato forma... non so come tornare a casa."
    },
    {
        character: "Cillo",
        text: "Capisco. Anche io devo uscire da questo posto, ne usciremo insieme."
    },
    {
        character: "Narratore",
        text: "Ti avvicini, pronto ad ascoltare la richiesta di aiuto di Utahime. Tuttavia, prima che possa pronunciare una parola, il terreno inizia a tremare leggermente sotto i tuoi piedi, e una voce risuona nell'aria, portando con sé un'eco di antica saggezza. E' l'antico protettore della foresta, Pasketta!"
    },
    {
        character: "Pasketta",
        text: "Ascolta, viandante, e presta attenzione, Se vuoi soccorrere Utahime, una prova è in azione. Il Puzzle del Tridente ti sfiderà, E solo risolvendolo la salvezza arriverà. Ma sappi, o coraggioso, che il tempo è tiranno, Entro il sorgere della luna piena, il tuo compito è sovrano. Se fallisci nel tuo intento, se il Puzzle non è risolto, Il male ancestrale si librerà, e il mondo soffrirà."
    },
    {
        character: "Pasketta",
        text: "Così affronta la sfida, con coraggio e sapienza, E salva Utahime, sconfiggendo l'oscurità con coerenza. Il destino del bosco nelle tue mani è fuggito, Ora, viandante, affronta il tuo mito."
    }

];

const dialoguesBoscoPaskettaWin = [
    {
        character: "Pasketta",
        text: "Oh viandante valoroso, con gioia ti accolgo, Nel Puzzle del Tridente la vittoria hai colto. Con ingegno e saggezza hai risolto il mistero, E Utahime ora dall'oscurità è libera e senza pensiero. Il male ancestrale respinto è stato, Grazie alla tua mente e al coraggio sognato."
    },
    {
        character: "Pasketta",
        text:  "La foresta ora festeggia la tua vittoria, E il suo destino è illuminato nella gloria. Che la tua luce risplenda sempre in questa terra, E il tuo nome sia ricordato con gioia sincera. Ora, viandante, continua il tuo cammino con fierezza, E che il bene ti accompagni tramite risolutezza."
    },
    {
        character: "Utahime",
        text: "Grazie, Cillo. Senza il tuo aiuto non so cosa sarebbe stato di me."
    },
    {
        character: "Cillo",
        text: "Non c'è di che. Ma come fai a sapere anche tu il mio nome?"
    },
    {
        character: "Utahime",
        text: "Segreto, in bocca al lupo per la tua missione."
    },
    {
        character: "Narratore",
        text: "Utahime si volta, un enigmatico sorriso sulle labbra, e senza dare ulteriori spiegazioni, scompare tra gli alberi, fondendosi con l'ombra del bosco misterioso. Seppur perplesso per il mistero che avvolge il mondo, ti concentri sul compito che lo attende."
    },
    {
        character: "Narratore",
        text: "Con uno sguardo deciso verso l'orizzonte, continui il suo cammino attraverso il bosco incantato. La luce del sole filtra tra i rami degli alberi a forma di tridente, creando un'atmosfera magica e suggestiva, mentre il vento sussurra segreti millenari tra le fronde."
    }

];

const dialoguesBoscoPaskettaLose = [
    {
        character: "Narratore",
        text: "Oh, viandante, ti trovi in difficoltà, Ma non disperare, la fortuna è mutevole, è la verità. Basta, fare le rime non fa per me, riprova a fare sto puzzle prima che Pasketta scateni la sua ira su di noi, non vorrei morire oggi."
    }

];

/* Dialogo Gragussy 1 */


/* Dialogo Negozio di Scarpe */


/* Dialogo Campo Basket */
const dialoguesCampoBasket = [
    {
        character: "Narratore",
        text: "Puzzo"
    }
];

const dialoguesCampoBasketWin = [
    {
        character: "Narratore",
        text: "Puzzo, ma di più"
    }
];

/* Dialogo Gragussy 2 */


/* Dialogo Salon */


/* Dialogo Monte Mostro */
