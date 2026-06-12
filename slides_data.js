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

// PERIODO 1 — Preferenze e aspettative (1-5)
{ type:'wordcloud', section:'p1', num:1,
q:'Quale città vorresti come prima sede?',
hint:'Scrivi una parola dal tuo cellulare.' },
{ type:'sondaggio', section:'p1', num:2,
q:'Hai già googlato quanto costa un appartamento a Roma o Milano?',
options:['Sì, più volte 😅','No, non ancora','Meglio non saperlo'] },
{ type:'wordcloud', section:'p1', num:3,
q:'In quale tipo di reparto ti piacerebbe lavorare?',
hint:'Scrivi una parola dal tuo cellulare.' },
{ type:'wordcloud', section:'p1', num:4,
q:'Quando pensi alle dieci preferenze da compilare, cosa provi?',
hint:'Scrivi una parola dal tuo cellulare.' },
{ type:'wordcloud', section:'p1', num:5,
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

// PERIODO 2 — ANQ e diritti contrattuali (6-12)
{ type:'quiz', section:'p2', num:6,
q:'Quante ore settimanali prevede il <span class="hl">nostro</span> contratto?',
options:['36 ore','38 ore','40 ore','42 ore'],
answer:'Risposta a cura del relatore regionale o provinciale presente in sala.' },
{ type:'quiz', section:'p2', num:7,
q:'Hai già sentito parlare di FESI?',
options:['Sì, certo','Pensavo fosse una marca di pasta 🍝','Mai sentito nominare'],
answer:'FESI sta per Fondo per l\'Efficienza dei Servizi Istituzionali. È l\'indennità legata alla produttività e ai giorni di presenza in servizio, e finisce direttamente nella tua busta paga.' },
{ type:'quiz', section:'p2', num:8,
q:'Cosa prevede la normativa quando lavoriamo di domenica con programmazione già pubblicata?',
answer:'Risposta a cura del relatore regionale o provinciale presente in sala.' },
{ type:'quiz', section:'p2', num:9,
q:'Siamo tenuti a prestare servizio oltre il limite del <span class="hl">nostro</span> orario giornaliero?',
options:['Sì, sempre','No, mai','Solo in casi specifici'],
answer:'Risposta a cura del relatore regionale o provinciale presente in sala.' },
{ type:'quiz', section:'p2', num:10,
q:'In quali casi può essere sospeso il <span class="hl">nostro</span> diritto alle ferie?',
answer:'Risposta a cura del relatore regionale o provinciale presente in sala.' },
{ type:'quiz', section:'p2', num:11,
q:'Le <span class="hl">nostre</span> ferie aumentano nel corso della carriera?',
options:['Sì','No'],
answer:'Risposta a cura del relatore regionale o provinciale presente in sala.' },
{ type:'quiz', section:'p2', num:12,
q:'Sai quanti giorni di malattia puoi fare prima di essere escluso dal corso?',
answer:'Risposta a cura del relatore regionale o provinciale presente in sala.' },

// PAUSA 2
{ type:'pausa', section:'pausa2', label:'Pausa 2',
list:[
'Circa 15 minuti, proselitismo attivo',
'Scambio contatti',
'Tessera a chi mostra interesse',
'Presentatevi come riferimento sulla sede di destinazione'
]},

// PERIODO 3 — Alloggio, portale e previdenza (13-20)
{ type:'sondaggio', section:'p3', num:13,
q:'Hai già in mente una sistemazione alloggiativa?',
options:['Con qualche collega in appartamento','In una struttura convenzionata','Non ci ho ancora pensato','Vivo già in zona'] },
{ type:'sondaggio', section:'p3', num:14,
q:'Hai un fidanzato o una fidanzata che dovrà seguirti, o state già litigando sulla sede?',
options:['Viene con me, problema risolto','È un argomento delicato','Sono libero o libera','Non rispondo 😄'] },
{ type:'quiz', section:'p3', num:15,
q:'Sapevi che nel portale non puoi escludere nessun reparto della provincia che scegli?',
options:['Sì, lo sapevo','No, non lo sapevo'],
answer:'Esatto: una volta scelta la provincia sei disponibile per tutti i reparti al suo interno. Per questo conviene studiarla bene prima di metterla tra le preferenze.' },
{ type:'quiz', section:'p3', num:16,
q:'A quanti anni andremo in pensione se entriamo oggi, a normativa invariata?',
answer:'Vecchiaia: 60 anni di età e 36 anni di contributi. Anzianità: 58 anni di età e 35 anni di contributi. Anticipata: 41 anni di contributi, senza vincolo di età. Dal 2027 è previsto un adeguamento alla speranza di vita, con ulteriori incrementi per il comparto sicurezza dal 2028. Dati 2026, commentati da Daniele.' },
{ type:'quiz', section:'p3', num:17,
q:'Abbiamo una previdenza complementare integrativa?',
options:['Sì','No'],
answer:'Risposta a cura di Daniele.' },
{ type:'quiz', section:'p3', num:18,
q:'Cos\'è il riscatto della laurea e a cosa serve?',
answer:'Risposta a cura di Daniele.' },
{ type:'quiz', section:'p3', num:19,
q:'Cos\'è la ricongiunzione dei contributi?',
answer:'Risposta a cura di Daniele.' },
{ type:'quiz', section:'p3', num:20,
q:'Qual è il primo passo da compiere appena arrivati in sede?',
answer:'Iscriverti al SILP CGIL e prendere contatto con il delegato locale: è il modo più semplice per non restare solo davanti a qualsiasi domanda.' },

// CLOSING
{ type:'closing',
title:'Grazie',
sub:'SILP CGIL è il vostro riferimento da oggi in poi.' }
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
