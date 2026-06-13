// Dati condivisi delle slide, Corso Allievi Agenti
// Usato sia da presentazione.html (relatore) sia da partecipa.html (allievi)

const slides = [
// 0 — TITLE
{ type:'title',
eyebrow:'SILP CGIL · Coordinamento Nazionale Scuole di Polizia',
title:'{{CORSO}}°',
sub:'Corso Allievi Agenti — Conferenze SILP',
note:'Versione interattiva. Naviga con le freccette o i tasti ← →.'
},

// PERIODO 1 — Preferenze e aspettative (1-4)
{ type:'wordcloud', section:'p1', num:1,
q:'Prima di entrare in polizia, cosa pensavi facessero i poliziotti tutto il giorno?',
hint:'Scrivi una parola dal tuo cellulare.' },
{ type:'wordcloud', section:'p1', num:2,
q:'In quale tipo di reparto ti piacerebbe lavorare?',
hint:'Scrivi una parola dal tuo cellulare.' },
{ type:'sondaggio', section:'p1', num:3,
q:'Quando pensi alle dieci preferenze da compilare, cosa provi?',
options:['Ansia totale','Eccitazione','Andrà come andrà','Sto già studiando le mappe'] },
{ type:'wordcloud', section:'p1', num:4,
q:'Cosa ti aspetti dai primi mesi in reparto?',
hint:'Scrivi una parola dal tuo cellulare.' },

// PAUSA 1
{ type:'pausa', section:'pausa1', label:'Pausa 1',
list:[
'Circa 15 minuti, proselitismo attivo',
'Primo contatto con i ragazzi',
'Nessuna tessera in questa pausa',
'Raccogliete nomi e contatti per la pausa 2'
]},

// PERIODO 2 — ANQ e diritti contrattuali (5-11)
{ type:'quiz', section:'p2', num:5,
q:'Quante ore settimanali prevede il <span class="hl">nostro</span> contratto?',
options:['36 ore','40 ore','42 ore','Dipende dal reparto'],
answer:'Risposta a cura del relatore regionale o provinciale presente in sala.' },
{ type:'quiz', section:'p2', num:6,
q:'Hai già sentito parlare di FESI?',
options:['So cos\'è e so quanto mi spetta','Ne ho sentito parlare ma non so i dettagli','Mai sentito','Pensavo fosse una marca di pasta'],
answer:'FESI sta per Fondo per l\'Efficienza dei Servizi Istituzionali. È l\'indennità legata alla produttività e ai giorni di presenza in servizio, e finisce direttamente nella tua busta paga.' },
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
answer:'Risposta a cura del relatore regionale o provinciale presente in sala.' },

// PAUSA 2
{ type:'pausa', section:'pausa2', label:'Pausa 2',
list:[
'Circa 15 minuti, proselitismo attivo',
'Scambio contatti',
'Tessera a chi mostra interesse',
'Presentatevi come riferimento sulla sede di destinazione'
]},

// PERIODO 3 — Alloggio, portale e previdenza (12-20)
{ type:'sondaggio', section:'p3', num:12,
q:'Hai già googlato quanto costa un appartamento a Roma o Milano?',
options:['Sì, e mi sono pentito','Sì, ma conto sull\'alloggio di servizio','No, preferisco non saperlo','No, tanto non ci vado di sicuro'] },
{ type:'sondaggio', section:'p3', num:13,
q:'Hai già in mente una sistemazione alloggiativa?',
options:['Sì, penso di alloggiare con qualche collega in appartamento','No, conto sull\'alloggio di servizio','Non ci ho ancora pensato'] },
{ type:'sondaggio', section:'p3', num:14,
q:'Hai un fidanzato o una fidanzata che dovrà seguirti, o state già litigando sulla sede?',
options:['Sì, e siamo d\'accordo','Sì, e ne stiamo discutendo','No, sono single e libero o libera','Non ci avevo ancora pensato'] },
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
options:['No','Sì','Dipende dalla data di assunzione'],
answer:'Risposta a cura di Daniele.' },
{ type:'quiz', section:'p3', num:18,
q:'Cos\'è il riscatto della laurea e a cosa serve?',
options:['Serve a ottenere un titolo di studio riconosciuto dall\'amministrazione','Permette di trasformare gli anni di università in anni di contributi previdenziali','È un bonus economico per chi si è laureato prima di entrare in polizia','Non lo so'],
answer:'Risposta a cura di Daniele.' },
{ type:'quiz', section:'p3', num:19,
q:'Cos\'è la ricongiunzione dei contributi?',
options:['Il riscatto degli anni prestati nelle forze armate','Il trasferimento di contributi previdenziali da una cassa all\'altra','Il riscatto della laurea'],
answer:'Risposta a cura di Daniele.' },
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
pausa1:'Pausa 1 · Proselitismo attivo',
p2:'Periodo 2 · ANQ e diritti contrattuali',
pausa2:'Pausa 2 · Proselitismo attivo',
p3:'Periodo 3 · Alloggio, portale e previdenza'
};

const badgeLabels = {
wordcloud:{cls:'wordcloud', text:'Word cloud'},
sondaggio:{cls:'sondaggio', text:'Sondaggio'},
quiz:{cls:'quiz', text:'Quiz'}
};
