// Dati condivisi delle slide, Corso Allievi Agenti
// Usato sia da presentazione.html (relatore) sia da partecipa.html (allievi)
// Versione aggiornata 16/06/2026

const slides = [
// 0 — TITLE
{ type:'title',
eyebrow:'SILP CGIL · Coordinamento Nazionale Scuole di Polizia',
title:'{{CORSO}}°',
sub:'Corso Allievi Agenti — Conferenze SILP',
note:'Versione interattiva. Naviga con le freccette o i tasti ← →.'
},

// N1 — Chi siamo
{ type:'narrazione', section:'p1',
titolo:'Chi siamo',
testo:'SILP CGIL è il sindacato di polizia di ispirazione confederale, parte della CGIL, la più grande organizzazione sindacale italiana con oltre 5 milioni di iscritti. Rappresentiamo lavoratrici e lavoratori della Polizia di Stato in tutta Italia.'
},

// N2 — Coordinamento scuole
{ type:'narrazione', section:'p1',
titolo:'Perché siamo qui',
testo:'Il Coordinamento Nazionale Scuole di Polizia SILP CGIL organizza conferenze sindacali in tutti gli istituti di formazione. Vogliamo che tu conosca i tuoi diritti dal primo giorno.'
},

// PERIODO 1 — Preferenze e aspettative (1-4)
{ type:'wordcloud', section:'p1', num:1,
q:'Con una parola. Perché sei entrato in Polizia.',
options:['Vocazione','Stabilità','Stipendio','Famiglia','Sfida','Avventura','Futuro','Servire','Passione','Casualità','Opportunità','Orgoglio','Sicurezza','Valori','Carattere','Mia mamma','Disperazione','Ci ho provato','Ripiego'],
maxSelect:2 },

{ type:'wordcloud', section:'p1', num:2,
q:'Con una parola. In quale tipo di reparto ti piacerebbe lavorare.',
options:['Volante','Squadra Mobile','Polizia Stradale','Polizia Ferroviaria','Polizia di Frontiera','Scientifica','DIGOS','Anticrimine','Cinofili','Reparto Mobile','Volo','Artificieri','NOCS','Tiratori Scelti','Cavalleria','Nautica','Postale','Corpo di Guardia'],
maxSelect:2 },

{ type:'wordcloud', section:'p1', num:3,
q:'Con una parola. In quale città ti piacerebbe prestare servizio.',
options:['Roma','Milano','Napoli','Torino','Palermo','Genova','Bologna','Firenze','Bari','Catania','Venezia','Verona','Messina','Padova','Trieste','Brescia'],
maxSelect:2 },

{ type:'wordcloud', section:'p1', num:4,
q:'Con una parola. Come immagini la tua vita tra dieci anni.',
options:['Famiglia','Stabilità','Carriera','Trasferimento','Proprietà di casa','Specializzato','Sindacalista','Realizzato','Stanco','Mamma/Papà','Esperto','Soddisfatto','Radici','Appagato','Cambiato','Fiero'],
maxSelect:2 },

// PAUSA 1
{ type:'pausa', section:'pausa1', label:'Pausa 1',
list:[
'Vieni a conoscerci al tavolo SILP CGIL',
'Fai le domande che non hai fatto allo schermo',
'Scopri cosa significa avere un sindacato al tuo fianco',
'Si ricomincia tra poco'
]},

// N3-N6 — Motivi 1-4
{ type:'narrazione', section:'p2', motivo:1,
titolo:'Siamo la forza della confederazione',
testo:'Siamo l\'espressione del più grande sindacato confederale italiano e siamo in grado di offrire ai nostri iscritti una reale, concreta e fattiva tutela.'
},
{ type:'narrazione', section:'p2', motivo:2,
titolo:'Le nostre priorità',
testo:'Al primo posto tra i nostri obiettivi mettiamo il contratto di lavoro, la salvaguardia delle nostre pensioni, la tutela dei presidi di polizia, il rafforzamento dei mezzi e delle strutture, la formazione continua e le assunzioni.'
},
{ type:'narrazione', section:'p2', motivo:3,
titolo:'Nessun corporativismo',
testo:'Difendiamo le lavoratrici e i lavoratori della Polizia di Stato senza guardare al potente di turno, senza corporativismi, senza ostentare false autonomie o indipendenze.'
},
{ type:'narrazione', section:'p2', motivo:4,
titolo:'La dignità del lavoro',
testo:'Per noi al primo posto ci sono la dignità del lavoro e i diritti dei lavoratori, da salvaguardare in ogni Questura, Commissariato, Reparto o Ufficio.'
},

// PERIODO 2 — ANQ e diritti contrattuali (5-11)
{ type:'quiz', section:'p2', num:5,
q:'Quante ore settimanali prevede il <span class="hl">nostro</span> contratto?',
options:['36 ore','40 ore','42 ore','Dipende dal reparto'],
answer:'Risposta a cura del relatore regionale o provinciale presente in sala.' },

{ type:'quiz', section:'p2', num:6,
q:'Hai già sentito parlare di FESI?',
options:['So cos\'è e so quanto mi spetta','Ne ho sentito parlare ma non so i dettagli','Mai sentito','Pensavo fosse una marca di pasta'],
answer:'FESI sta per Fondo per l\'Efficienza dei Servizi Istituzionali. È l\'indennità legata alla produttività e ai giorni di presenza in servizio, e finisce direttamente nella tua busta paga.' },

// N7-N8 — Motivi 5-6
{ type:'narrazione', section:'p2', motivo:5,
titolo:'Non l\'iscritto, il poliziotto',
testo:'A noi non interessa l\'iscritto fine a se stesso, ma il poliziotto partecipe e consapevole dei propri diritti e doveri, parte della grande famiglia CGIL che non lo abbandonerà mai.'
},
{ type:'narrazione', section:'p2', motivo:6,
titolo:'Il sindacato dei diritti',
testo:'Il nostro modello è quello dei diritti, dei valori e del progetto, che punta a difendere quei diritti del lavoratore-poliziotto che oggi vengono messi in discussione.'
},

{ type:'quiz', section:'p2', num:7,
q:'Cosa prevede la normativa quando lavoriamo di domenica con programmazione già pubblicata?',
options:['Recuperiamo il riposo nella settimana successiva','Recuperiamo entro le due settimane successive','Recuperiamo entro le 4 settimane successive','Non si recupera nulla'],
answer:'Risposta a cura del relatore regionale o provinciale presente in sala.' },

{ type:'quiz', section:'p2', num:8,
q:'Siamo tenuti a prestare servizio oltre il limite del <span class="hl">nostro</span> orario giornaliero?',
options:['Sì, quando lo decide il collega anziano','Sì, se autorizzato dal Dirigente per esigenze straordinarie','Sì, quando vogliamo noi','A discrezione del Dirigente'],
answer:'Risposta a cura del relatore regionale o provinciale presente in sala.' },

{ type:'quiz', section:'p2', num:9,
q:'In quali casi può essere sospeso il <span class="hl">nostro</span> diritto alle ferie?',
options:['In eccezionali casi di servizio urgente e non programmabile','Quando manca personale in ufficio','In caso di ferie già fruite','A discrezione del Dirigente'],
answer:'Risposta a cura del relatore regionale o provinciale presente in sala.' },

{ type:'quiz', section:'p2', num:10,
q:'Le <span class="hl">nostre</span> ferie aumentano nel corso della carriera?',
options:['No, sono sempre le stesse da inizio a fine carriera','Aumentano al 15° e al 25° anno','Aumentano al 17° e al 27° anno','Aumentano al 20° e al 30° anno'],
answer:'Risposta a cura del relatore regionale o provinciale presente in sala.' },

{ type:'quiz', section:'p2', num:11,
q:'Sai quanti giorni di malattia puoi fare prima di essere escluso dal corso?',
options:['Non c\'è limite, siamo dipendenti','Dipende dal medico','C\'è un limite preciso nel bando','Non lo so'],
answer:'L\'articolo 4 del decreto istitutivo del 233° fissa il limite massimo di assenze a 50 giorni per qualsiasi motivo, o 75 giorni se l\'assenza è dovuta a infermità contratta durante il corso. Otto periodi didattici di assenza, anche in giorni diversi, valgono come una giornata intera. Superato il limite si rischia la dimissione dal corso.' },

// N9-N12 — Motivi 7-9 e mobilitazione 18 giugno
{ type:'narrazione', section:'p2', motivo:7,
titolo:'Formazione e salute',
testo:'Consideriamo la formazione un elemento fondamentale della vita del poliziotto. Il SILP CGIL organizza eventi e iniziative gratuite e si impegna a tutelare la salute del lavoratore, comprese le malattie professionali.'
},
{ type:'narrazione', section:'p2', motivo:8,
titolo:'Sempre a disposizione',
testo:'L\'iscritto SILP CGIL può contare su rappresentanti sindacali preparati e su una segreteria nazionale sempre a disposizione per qualsiasi necessità.'
},
{ type:'narrazione', section:'p2', motivo:9,
titolo:'No ai contratti beffa',
testo:'Siamo in prima linea nella lotta per un contratto degno. Dal 2022 al 2024 il potere d\'acquisto è calato del 10%, inflazione reale oltre il 17% contro aumenti reali sotto il 5,78%. Il nuovo contratto 2025-2027 ha risorse totalmente inadeguate. Noi diciamo no ai contratti beffa.'
},
{ type:'narrazione', section:'p2',
titolo:'Il 18 giugno eravamo in piazza',
testo:'SILP CGIL, SILF, SIAM e LRM si sono mobilitati davanti alle Prefetture di tutta Italia. Abbiamo chiesto risorse adeguate per il contratto 2025-2027, l\'avvio della previdenza dedicata e complementare, e il pieno riconoscimento dei diritti di cittadinanza al personale in uniforme. Questo è un sindacato che scende in piazza.'
},

// PAUSA 2
{ type:'pausa', section:'pausa2', label:'Pausa 2',
list:[
'Passa al tavolo SILP CGIL',
'Lascia un contatto per farti aiutare con la scelta delle preferenze',
'Fai due chiacchiere con i delegati',
'Si ricomincia tra poco'
]},

// PERIODO 3 — Alloggio, portale e previdenza (12-20)
{ type:'sondaggio', section:'p3', num:12,
q:'Conosci l\'argomento Sanzioni disciplinari e premi per lodevole comportamento?',
options:['Sì, me le hanno insegnate','Le conosco solo in parte','Ne ho sentito parlare ma non le conosco','No, non ne so niente'] },

{ type:'sondaggio', section:'p3', num:13,
q:'Hai già in mente una sistemazione alloggiativa?',
options:['Sì, penso di alloggiare con qualche collega in appartamento','Conto sull\'alloggio di servizio','Scelgo solo sedi con alloggi','Non ci ho ancora pensato'] },

{ type:'sondaggio', section:'p3', num:14,
q:'Hai un fidanzato o una fidanzata che dovrà seguirti, o state già litigando sulla sede?',
options:['Sì, e siamo d\'accordo','Sì, e ne stiamo discutendo','No, sono single e libero o libera','Non ci avevo ancora pensato'] },

// N13 — Motivo 10
{ type:'narrazione', section:'p3', motivo:10,
titolo:'I servizi CGIL valgono la tessera',
testo:'Garantiamo a tutti i nostri aderenti i servizi straordinari e le convenzioni uniche della CGIL, assicurando benefit e risparmi che da soli valgono abbondantemente il costo della tessera sindacale.'
},

{ type:'quiz', section:'p3', num:15,
q:'Sapevi che nel portale non puoi escludere nessun reparto della provincia che scegli?',
options:['Sì, lo sapevo','No, non lo sapevo','Ho capito solo adesso perché è importante l\'ordine','Sto rivalutando tutto'],
answer:'Esatto: una volta scelta la provincia sei disponibile per tutti i reparti al suo interno. Per questo conviene studiarla bene prima di metterla tra le preferenze.' },

{ type:'quiz', section:'p3', num:16,
q:'A quanti anni andremo in pensione se entriamo oggi, a normativa invariata?',
options:['58 anni con 35 anni di contributi','60 anni con 36 anni di contributi','Prima dei 60 anni con 41 anni di contributi','Non lo so'],
answer:'Vecchiaia: 60 anni di età e 36 anni di contributi. Anzianità: 58 anni di età e 35 anni di contributi. Anticipata: 41 anni di contributi, senza vincolo di età. Dal 2027 è previsto un adeguamento alla speranza di vita, con ulteriori incrementi per il comparto sicurezza dal 2028. Dati 2026, commentati da Daniele.' },

{ type:'quiz', section:'p3', num:17,
q:'Abbiamo una previdenza complementare integrativa?',
options:['No','Sì','Dipende dalla data di assunzione','Non lo so'],
answer:'Risposta data dal referente sindacale presente in aula.' },

{ type:'quiz', section:'p3', num:18,
q:'Cos\'è il riscatto della laurea e a cosa serve?',
options:['Serve a ottenere un titolo di studio riconosciuto dall\'amministrazione','Permette di trasformare gli anni di università in anni di contributi previdenziali','È un bonus economico per chi si è laureato prima di entrare in polizia','Non lo so'],
answer:'Risposta data dal referente sindacale presente in aula.' },

{ type:'quiz', section:'p3', num:19,
q:'Cos\'è la ricongiunzione dei contributi?',
options:['Il riscatto degli anni prestati nelle forze armate','Il trasferimento di contributi previdenziali da una cassa all\'altra','Il riscatto della laurea','Non lo so'],
answer:'Risposta data dal referente sindacale presente in aula.' },

{ type:'quiz', section:'p3', num:20,
q:'Qual è il primo passo da compiere appena arrivati in sede?',
options:['Iscrivermi subito al sindacato','Aspettare e vedere come va','Cercare il delegato SILP del reparto','Studiare da solo il regolamento'],
answer:'Iscriverti al SILP CGIL e prendere contatto con il delegato locale: è il modo più semplice per non restare solo davanti a qualsiasi domanda.' },

// CLOSING
{ type:'closing',
title:'Grazie',
sub:'SILP CGIL è il vostro riferimento da oggi in poi.'
}
];

const sectionLabels = {
p1:'Periodo 1 · Preferenze e aspettative',
pausa1:'Pausa 1',
p2:'Periodo 2 · ANQ e diritti contrattuali',
pausa2:'Pausa 2',
p3:'Periodo 3 · Alloggio, portale e previdenza'
};

const badgeLabels = {
wordcloud:{cls:'wordcloud', text:'Word cloud'},
sondaggio:{cls:'sondaggio', text:'Sondaggio'},
quiz:{cls:'quiz', text:'Quiz'},
narrazione:{cls:'narrazione', text:'SILP CGIL'}
};
