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
        text: "Wow, sei stato impressionante! Hai risposto correttamente ad almeno sette domande. Sei pronto per scoprire come attraversare il lago?"
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
        text: "Si, ma mettici più impegno! Dai, ti diamo un altro tentativo."
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
const dialoguesGragussy = [
    {
        character: "Narratore",
        text: "Avanzando con passo sicuro attraverso la vallata, il protagonista si ritrova di fronte a un'imponente figura che barrica la strada. È un gigante, ma non uno comune: un gigante Gragussy, con la sua stazza maestosa che sembra riempire l'intero sentiero. I suoi occhi sono chiusi, e il suo respiro profondo fa vibrare l'aria intorno al giovane eroe."
    },
    {
        character: "Cillo",
        text: "Ehi, King! Posso passare?"
    },
    {
        character: "Gragussy",
        text: "Zzz..."
    },
    {
        character: "Narratore",
        text: "Gragussy dorme, ignaro della sua presenza. Ma non disperare, Cillo. C'è una strada che conduce a una struttura insolita, dalla forma curiosa di una scarpa. Forse là troverai una soluzione al tuo dilemma."
    }
];

/* Dialogo Negozio di Scarpe */
const dialoguesNegozioScarpe = [
    {
        character: "Narratore",
        text: "Cillo entra nel Negozio delle Scarpe ed è subito avvolto da un'atmosfera accogliente e vivace. Le pareti sono ricoperte da scaffali che ospitano una vasta selezione di calzature di ogni tipo e colore, mentre il profumo di cuoio e gomma mescolato con l'odore fresco delle scarpe nuove riempie l'aria. Dalla finestra entra il sole che splende brillante nel cielo."
    },
    {
        character: "Narratore",
        text: "Sul balcone, un cane dal pelo folto lo osserva con curiosità, mentre tiene una scarpa tra le zampe con aria di sfida. Anche il ragazzo dai ricci selvaggi smette di guardare il telefono per concentrarsi su di lui."
    },
    {
        character: "Shuba",
        text: "Bellaaaaaa Cillo, che ci fai qua?"
    },
    {
        character: "Kiba",
        text: "Woof woof!"
    },
    {
        character: "Cillo",
        text: "Shuba? Kiba?"
    },
    {
        character: "Shuba",
        text: "Cosa ti porta qua?"
    },
    {
        character: "Cillo",
        text: "Cosa porta voi qui?"
    },
    {
        character: "Shuba",
        text: "Sei tu che sei nel nostro negozio! Comunque, lo sapevi che sono Leone ascendente Bilancia? Sono proprio io, leggi qua!"
    },
    {
        character: "Narratore",
        text: "Shuba ti mostra il cellulare, ma si vede una ragazza asiatica con le tette di fuori che balla."
    },
    {
        character: "Cillo",
        text: "Ehm, mi sa che mi stai mostrando la cosa sbagliata, Shuba."
    },
    {
        character: "Shuba",
        text: "Oh, cavolo. Che figa però... Che ti dovevo far vedere?"
    },
    {
        character: "Kiba",
        text: "Woof woof!!!"
    },
    {
        character: "Shuba",
        text: "Hai proprio ragione amico mio. Che ci fai qua?"
    },
    {
        character: "Cillo",
        text: "La strada per il Monte Mostro è bloccata."
    },
    {
        character: "Kiba",
        text: "Woof?"
    },
    {
        character: "Shuba",
        text: "Si, sicuramente è Gragussy, Kiba."
    },
    {
        character: "Cillo",
        text: "Esatto, avete idea di come posso farlo alzare?"
    },
    {
        character: "Shuba",
        text: "Conosco qualcuno che ti può aiutare."
    },
    {
        character: "Kiba",
        text: "Woof woof woof?!"
    },
    {
        character: "Shuba",
        text: "Si, dai, se la caverà."
    },
    {
        character: "Cillo",
        text: "Posso essere partecipe?"
    },
    {
        character: "Shuba",
        text: "Per andare in questo posto ti serviranno delle scarpe speciali. Le ho personalizzate io stesso. Sai, ci ho messo un sacco di tempo. Praticamente..."
    },
    {
        character: "Kiba",
        text: "Woof..."
    },
    {
        character: "Shuba",
        text: "Dai amico, non rompere."
    },
    {
        character: "Cillo",
        text: "Penso abbia ragione Kiba."
    },
    {
        character: "Shuba",
        text: "Non ti ci mettere pure tu. Vuoi un po' di mirto?"
    },
    {
        character: "Cillo",
        text: "Shuba, mi devi dare le scarpe."
    },
    {
        character: "Shuba",
        text: "Rilassati un po'."
    },
    {
        character: "Cillo",
        text: "Sono nel cill."
    },
    {
        character: "Shuba",
        text: "'Ste cazzo di battute, dio."
    },
    {
        character: "Kiba",
        text: "Woof woof?"
    },
    {
        character: "Shuba",
        text: "Prima di darti le scarpe, dovrai rispondere ad un paio di domande, niente si ottiene gratis."
    }
];

const dialoguesNegozioScarpeWin = [
    {
        character: "Kiba",
        text: "Woof woof!!!!!"
    },
    {
        character: "Shuba",
        text: "Vabbé, ma quanto sei forte? Neanche un gorilla ti può battere!"
    },
    {
        character: "Cillo",
        text: "Cosa c'entra un gorilla con delle domande sul basket? Erano banali..."
    },
    {
        character: "Kiba",
        text: "Woof..."
    },
    {
        character: "Shuba",
        text: "Potresti aver ragione, ma tutto sommato anche noi siamo scimmie. Ammaestrate, ma comunque scimmie. Dato che hai risposto correttamente alle domande, ti sei guadagnato queste fantasmagoricissime scarpe!"
    },
    {
        character: "Cillo",
        text: "Grazie. Di che posto parlavate prima?"
    },
    {
        character: "Shuba",
        text: "Oh, è un posto terribile, terrificante, ed è a due passi da qui. Devi andare al campo da basket, e da lì troverai una persona che ti aiuterà."
    },
    {
        character: "Narratore",
        text: "Kiba inizia a tremare al solo pensiero."
    },
    {
        character: "Cillo",
        text: "Terribile? Terrificante? Ma è un comune campo da basket."
    },
    {
        character: "Shuba",
        text: "Forse capirai, forse no, spero solo che la Forza sia con te, giovane Cillowan..."
    }
];

const dialoguesNegozioScarpeLose = [
    {
        character: "Kiba",
        text: "Woof woof?"
    },
    {
        character: "Shuba",
        text: "Dai, ritenta... hai sbagliato così tanto che i capelli mi si sono spettinati da soli, tanto erano sorpresi dall'ignoranza. Torno tra poco..."
    },
    {
        character: "Narratore",
        text: "Shuba va a sistemarsi i capelli, e dopo qualche giorno torna, fresco di pettinatura, arricciatura e spuma per capelli..."
    }
];

/* Dialogo Campo Basket */
const dialoguesCampoBasket = [
    {
        character: "Narratore",
        text: "Cillo ti allontani dal negozio, indossando con orgoglio le nuove scarpe comode che hai appena ottenuto da Shuba. Con passo deciso, ti dirigi verso il campetto da basket, sperando di trovare una soluzione al tuo problema. Arrivato al campetto, ti fermi un attimo, scrutando l'area circostante. Ma il campo è deserto, vede solo un cespuglio che vola via. Sospiri."
    },
    {
        character: "Cillo",
        text: "Sembra che sia arrivato troppo tardi. Non c'è nessuno qui."
    },
    {
        character: "Narratore",
        text: "Proprio quando stai per voltarti e tornare indietro, un rumore improvviso ti fa sobbalzare. Alzi lo sguardo e vedi Power, che plana dall'alto come se fosse caduta dal cielo."
    },
    {
        character: "Cillo",
        text: "Power?"
    },
    {
        character: "Power",
        text: "Ah, Cillo, Cillo, Cillo... Sai quanto mi piace una bella partita a basket!"
    },
    {
        character: "Cillo",
        text: "In realtà no."
    },
    {
        character: "Narratore",
        text: "Power fa finta di non sentirti, continuando con il suo monologo."
    },
    {
        character: "Power",
        text: "Quando ho sentito che avevi bisogno di un po' di aiuto, ho pensato: \"Beh, è tempo di fare il mio ingresso!\""
    },
    {
        character: "Cillo",
        text: "Beh si, effettivamente c'è Gragussy che sta occupando la strada. Shuba e Kiba mi hanno detto di venire qua, dato che sai come aiutarmi."
    },
    {
        character: "Narratore",
        text: "Power si gonfia il petto con la fierezza di un demone e le iniziano a brillare gli occhi."
    },
    {
        character: "Power",
        text: "Certo che so come aiutarti!"
    },
    {
        character: "Cillo",
        text: "Quindi?"
    },
    {
        character: "Power",
        text: "Prima giochiamo un po'."
    },
    {
        character: "Cillo",
        text: "Adesso?"
    },
    {
        character: "Power",
        text: "No, domani. Siii, adesso, stupido umano. Se mi farai 5 canestri, ti aiuterò."
    }
];

const dialoguesCampoBasketWin = [
    {
        character: "Power",
        text: "Lo ammetto, è stato molto divertente vederti fallire, ma per mia sfortuna sei riuscito a fare i canestri prima del previsto. Prendi questo barile, ti aiuterà a far svegliare il gigante obeso laggiù."
    },
    {
        character: "Cillo",
        text: "Grazie. Posso farti ancora una domanda?"
    },
    {
        character: "Power",
        text: "Assolutamente no, mica sono qua a tua disposizione. Ora vai, devo trovare qualcosa da fare per ammazzare il tempo. Ci sono! Ammmazzare! Cioè, volevo dire, in bocca al lupo Cillo!"
    },
    {
        character: "Narratore",
        text: "Un po' interdetto, ritorni sui tuoi passi, insieme al barile dato dal demone. Speriamo sia utile."
    }
];

/* Dialogo Gragussy 2 */
const dialoguesGragussyWake = [
    {
        character: "Narratore",
        text: "Dopo aver recuperato il barile, il mostro... ovvero tu ritorni sui tuoi passi. La maestosa figura del gigante giace immobile davanti a lui, un ostacolo imponente che sembra insormontabile. Con passi decisi, ti avvicini e posi il barile di birra accanto a Gragussy addormentato, osservando con ansia la sua reazione. Il colosso procede a grugnire leggermente nel sonno, risvegliandosi poi improvvisamente."
    },
    {
        character: "Gragussy",
        text: "Che cosa...?"
    },
    {
        character: "Cillo",
        text: "E-Ehi, Gragussy, ho una cosa per te."
    },
    {
        character: "Narratore",
        text: "Gragussy procede ad alzarsi molto faticosamente, sfregandosi gli occhi."
    },
    {
        character: "Gragussy",
        text: "Birra...?"
    },
    {
        character: "Narratore",
        text: "Si china per prendere il barile e lo guarda con interesse, prima di aprirlo la sua mano enorme e bere avidamente, ruttando rumorosamente e soddisfatto della bevuta fatta."
    },
    {
        character: "Gragussy",
        text: "Ah, che birra! Questo mi dà la carica!"
    },
    {
        character: "Narratore",
        text: "Con un movimento fluido, Gragussy si rialza in piedi, il suo imponente corpo tremolante di energia. Con un cenno verso di te, indica la strada liberata dietro di lui, offrendo un sorriso compiaciuto. Una via larga e aperta si estende verso l'orizzonte, invitandolo a proseguire il suo viaggio. Lungo i lati della strada, alti alberi si ergono fieri, mentre il sole filtra attraverso le fronde, creando pattern di luci danzanti sul selciato."
    },
    {
        character: "Narratore",
        text: "Ai margini della strada, un edificio imponente si staglia contro il cielo, con le sue mura maestose e le finestre che brillano al sole. La struttura sembra emanare un'aura di mistero e promessa, invitando il protagonista a esplorare ulteriormente. Con passo sicuro e determinato, si avventura lungo la strada libera, ansioso di scoprire cosa lo attenderà oltre quell'edificio."
    }
];

/* Dialogo Salon */
const dialoguesSalon = [
    {
        character: "Narratore",
        text: "Ti trovi in un luogo davvero strano. La struttura che ti circonda ha la forma di una mano gigantesca, come se fosse stata scolpita nella pietra dai giganti. Al centro della stanza, s'innalza un pilastro enorme, così alto che sembra toccare il cielo. Tutto intorno a te sono presenti delle postazioni particolari, ognuna dedicata alla cura delle mani, con strumenti e lozioni di ogni tipo."
    },
    {
        character: "Cillo",
        text: "C'è nessuno?"
    },
    {
        character: "Narratore",
        text: "Mentre ti guardi intorno, noti qualcosa di curioso. Dietro una delle postazioni spunta fuori una creatura familiare, con guance rosse e orecchie appuntite."
    },
    {
        character: "Bibik",
        text: "Oh signor egregio Mostro, non la stavo aspettando. Cosa ci fa lei qua nel mio negozio? Mi mostri le sue mani, preparo un trattamento completo. Ovviamente se lei mi da il suo permesso. Non oserei mai trattare delle mani così importanti e magiche. Chi sono io per avere un diritto del genere?"
    },
    {
        character: "Cillo",
        text: "Bibik, devo solo passare per andare al Monte Mostro..."
    },
    {
        character: "Bibik",
        text: "Ahhh, preparo subito la sedia per lei. Sa, non si può affrontare un viaggio senza avere delle mani perfette. Ti MOSTRO i miei attrezzi di metalmeccanica."
    },
    {
        character: "Cillo",
        text: "Ma quello... è un pilastro?"
    },
    {
        character: "Bibik",
        text: "Sì, il nostro trattamano speciale si svolge tutto intorno a questo incredibile pilastro."
    },
    {
        character: "Cillo",
        text: "Ah, particolare. In ogni caso, vorrei fermarmi qua, però purtroppo devo proprio andare."
    },
    {
        character: "Bibik",
        text: "Signor Mostro, dicendo questo mi ferisce. Per poter andare oltre, deve spaccare quel muro di mani. Non può farlo senza avere delle mani perfette, sarebbe un po' poco mostro."
    },
    {
        character: "Cillo",
        text: "Mh, allora mi affido a te!"
    },
    {
        character: "Bibik",
        text: "Ma con piacere! Pronto a farti baciare dalle mie cure?"
    }
];

const dialoguesSalonWin = [
    {
        character: "Bibik",
        text: "Guardi, non vorrei essere scortese, ma le do un 25/30 a questa sua prova. Può fare di meglio, forse con un trattamano migliore..."
    },
    {
        character: "Cillo",
        text: "No, guarda, devo proprio andare."
    },
    {
        character: "Bibik",
        text: "Oh, ma che peccato, sarà per un'altra volta."
    },
    {
        character: "Cillo",
        text: "Chi sono io per spegnere un entusiasmo del genere?"
    },
    {
        character: "Narratore",
        text: "Esci dal negozio di Bibik con le mani lucenti e curate, pronte per affrontare la prossima sfida. Mentre ti dirigi verso il Monte Mostro, il sole inizia a calare, tingendo il cielo di un arancione acceso."
    }
];

/* Dialogo Monte Mostro */

const dialoguesMonteMostro = [
    {
        character: "Narratore",
        text: "Dopo ore di cammino, finalmente raggiungi il Monte Mostro. La cima è sorprendentemente tranquilla. Il terreno è pianeggiante e coperto da un sottile strato di erba verde, che ondeggia leggermente al flebile venticello. L'aria è serena e silenziosa, quasi surreale dopo il tumultuoso viaggio per arrivare fin qui."
    },
    {
        character: "Narratore",
        text: "Al centro si trova un piedistallo, decorato con incisioni intricate che raccontano storie di tempi passati. Ti avvicini, e noti un libro appoggiato sopra ad esso. La curiosità prende il sopravvento e lo apri. Guardi la prima pagina ed è vuota. La seconda, la terza e la quarta anche, e così tutte le altre."
    },
    {
        character: "Cillo",
        text: "Ma che cazzo?"
    },
    {
        character: "Frieren",
        text: "Viaggiatore, sono felice che ce l'hai fatta."
    },
    {
        character: "Cillo",
        text: "Frieren? Ma il libro è bianco."
    },
    {
        character: "Frieren",
        text: "E' bianco per gli stolti, ma con un po' di magia..."
    },
    {
        character: "Narratore",
        text: "Frieren si avvicina e sul libro compare una scritta: 'Quanto fa 2+2? PESCE!!!!'"
    },
    {
        character: "Cillo",
        text: "E' uno scherzo?"
    },
    {
        character: "Narratore",
        text: "Non ricevi risposta. Quando alzi lo sguardo per cercarla, l'elfa è scomparsa."
    },
    {
        character: "Cillo",
        text: "Frieren?!"
    },
    {
        character: "Narratore",
        text: "Ancora nessuna risposta."
    },
    {
        character: "Cillo",
        text: "Dio, che palle."
    },
    {
        character: "Kiba",
        text: "Woof!!!!!"
    },
    {
        character: "Cillo",
        text: "Kiba?"
    },
    {
        character: "Kiba",
        text: "Woof!!! Woof!!!"
    },
    {
        character: "Narratore",
        text: "Cammini verso il cucciolo, che inizia a correre. Lo segui fino a che non vedi un'enorme tavolata e tutti gli amici incontrati fino ad ora radunati intorno ad una torta gigante. In coro, procedono a dirti: TANTI AUGURI!!!!!"
    },
    {
        character: "Cillo",
        text: "Che significa?"
    },
    {
        character: "Frieren",
        text: "E' il tuo compleanno."
    },
    {
        character: "Cillo",
        text: "E come lo sapete?"
    },
    {
        character: "Frieren",
        text: "Io non lo sapevo, gli altri si. Mi hanno costretto ad organizzarti tutto."
    },
    {
        character: "Cillo",
        text: "Wow! Grazie... io-"
    },
    {
        character: "Killua",
        text: "Non è finita qua, amico mio."
    },
    {
        character: "Cillo",
        text: "In che senso?"
    },
    {
        character: "Shuba",
        text: "Ajo, mica ti abbiamo fatto fare tutta questa strada per niente... cioè, un po' si."
    },
    {
        character: "Frieren",
        text: "Guarda di nuovo il libro."
    },
    {
        character: "Narratore",
        text: "Appaiono due codici..."
    },
    {
        character: "Cillo",
        text: "Cos'è?"
    },
    {
        character: "Power",
        text: "Il tuo regalo, pazzoide."
    },
    {
        character: "Cillo",
        text: "Grazie ragazzi."
    },
    {
        character: "Utahime",
        text: "Ora godiamoci la festa!"
    },
    {
        character: "Narratore",
        text: "Iniziano così i festeggiamenti per il Mostro di Udine con fiumi di alcol! Il nostro viaggio di conclude qui, magari ci vedremo per una prossima avventura."
    }
];