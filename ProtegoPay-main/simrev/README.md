# SimRev - Revenue Simulator

## Descrizione

SimRev è un simulatore di ricavi per il modello business ProtegoPay. Permette di proiettare l'evoluzione di ricavi, utenti e AUM (Assets Under Management) su un orizzonte temporale definito.

**Versione 3.0** - Modello Transaction-Driven con premio fisso una tantum: i premi assicurativi derivano dai depositi degli utenti tramite un meccanismo di split, più un versamento fisso una tantum per ogni nuovo assicurato, con fee merchant dal 4° anno.

## Funzionalità

- **Input Parametri**: Configurazione semplice tramite parametri base (Utenti Anno 1, Anni Simulazione)
- **Assunzioni Avanzate**: Accordion espandibile per parametri dettagliati
  - **Depositi & Split Assicurativo**: Configurazione volume depositi e split verso fondo
  - **Fee Transazioni Merchant**: Fee applicata dal 4° anno sui volumi
- **KPI Cards**: Visualizzazione immediata di metriche chiave (mix ricavi su 3 componenti)
- **Tabella Annuale**: Breakdown dettagliato anno per anno con volumi e ricavi
- **Grafici Interattivi**: Visualizzazioni con Chart.js per Revenue (4 serie) e AUM
- **Export CSV**: Download dei risultati per analisi offline

## Parametri

### Parametri Base (Obbligatori)
- **U1**: Utenti Anno 1 (numero iniziale di utenti)
- **T**: Anni Simulazione (orizzonte temporale 1-30 anni)

### Assunzioni Avanzate (Default)

#### Dinamica Utenti
- **gU**: Crescita Utenti = 35%
- **r**: Retention = 85%
- **newUsersMethod**: Metodo Nuovi Utenti = incremental o percentage

#### Depositi & Split Assicurativo
- **F**: Premio fisso sottoscrizione = €50 (versamento una tantum per ogni nuovo assicurato)
- **D0**: Depositi per Utente = €2.700 (depositi/spesa annua media)
- **gD**: Crescita Depositi = 0%
- **aTx**: Utenti via ProtegoPay = 100% (% utenti che depositano tramite ProtegoPay)
- **splitRate**: Split verso Fondo = 2,5% (quota depositi che va nel fondo/polizza, range 2,5%-25%)
- **cPolicy**: Adozione Polizza = 100% (% depositanti per cui split viene applicato)

#### Investimento e Rendimento
- **ret**: Rendimento = 3%

#### Fee di Ricavo
- **fSub**: Fee Sottoscrizione = 5% (su nuovi assicurati, una tantum)
- **fAdv**: Fee Advisory = 0,8% (annuale su AUM)
- **aumBase**: Base AUM = avg (media) o end (fine anno)

#### Fee Transazioni Merchant (dal 4° Anno)
- **fTx**: Fee Transazioni = 0,5% (range 0%-1%)
- **txFeeBase**: Base Fee Transazioni = GROSS (volume totale) o MERCHANT (post-split)
- **startTxYear**: Anno Inizio Fee Tx = 4 (read-only)

## Formule (Modello Transaction-Driven con Premio Fisso)

### Utenti
Per anno y = 1..T:

- **Anno 1**: U₁ = U1 (input)
- **Metodo Incremental (default)**:
  - Utenti retained: retained = U_{y-1} × r
  - Utenti totali: U_y = U_{y-1} × (1 + gU) × r
  - Nuovi utenti: New_y = max(0, U_y - retained)

- **Metodo Percentage**:
  - Utenti retained: retained = U_{y-1} × r
  - Nuovi utenti: New_y = U_{y-1} × gU
  - Utenti totali: U_y = retained + New_y

### Depositi e Volumi
- **Depositi per utente**: D_y = D0 × (1 + gD)^(y-1)
- **Utenti con transazioni**: TxUsers_y = U_y × aTx
- **Utenti assicurati**: InsuredUsers_y = TxUsers_y × cPolicy
- **Nuovi assicurati**:
  - Anno 1: NewInsured_1 = InsuredUsers_1
  - Anno y>1: NewInsured_y = max(0, InsuredUsers_y - InsuredUsers_{y-1} × r)

### Volume Gross e Premi al Fondo
- **Volume Gross (depositi totali)**: GrossVolume_y = U_y × aTx × D_y
- **Premi da split (ricorrente)**: PremiumsSplit_y = GrossVolume_y × cPolicy × splitRate
- **Premio fisso una tantum**: PremiumFixed_y = NewInsured_y × F
- **Versamenti totali al fondo**: FundInflowGross_y = PremiumsSplit_y + PremiumFixed_y
- **Volume Merchant (post-split)**: MerchantVolume_y = GrossVolume_y - PremiumsSplit_y

### Ricavi Fee Sottoscrizione
- **Ricavi sottoscrizione**: Rev_Sub_y = PremiumsSplit_y × fSub
  - *Nota: la fee è applicata SOLO ai premi da split, NON al premio fisso*

### Investimento e AUM
- **Contributo netto investito**: NetContrib_y = (PremiumsSplit_y - Rev_Sub_y) + PremiumFixed_y
  - *Nota: il fondo riceve i premi da split (al netto della fee) più il premio fisso (senza fee)*
- **AUM**:
  - AUM_begin_1 = 0
  - AUM_end_y = (AUM_begin_y × (1 + ret)) + NetContrib_y
  - AUM_avg_y = (AUM_begin_y + AUM_end_y) / 2
  - AUM_begin_{y+1} = AUM_end_y

### Ricavi Fee Advisory
- Base selezionabile: AUM_avg_y (default) o AUM_end_y
- Rev_Adv_y = AUM_base_y × fAdv

### Ricavi Fee Transazioni Merchant (dal 4° anno)
- **Base volume**:
  - TxBase_y = GrossVolume_y (se txFeeBase = "GROSS")
  - TxBase_y = MerchantVolume_y (se txFeeBase = "MERCHANT")
- **Ricavi transazioni**:
  - Rev_Tx_y = 0 se y < startTxYear (4)
  - Rev_Tx_y = TxBase_y × fTx se y >= startTxYear

### Ricavi Totali
- **Rev_Total_y = Rev_Sub_y + Rev_Adv_y + Rev_Tx_y**

## Struttura File

```
/simrev/
├── index.html           # Pagina principale del simulatore
├── simrev.math.js       # Logica di calcolo e formule
├── simrev.format.js     # Formattazione EUR/percentuali
├── simrev.export.js     # Export CSV
└── README.md            # Questa documentazione
```

## Dipendenze

- **Tailwind CSS** (CDN): Framework CSS per styling
- **Chart.js 3.9.1** (CDN): Libreria per grafici
- **Font Awesome 6.0.0** (CDN): Icone

## Utilizzo

1. Aprire `/simrev/` nel browser
2. Inserire i parametri base (U1, T)
3. (Opzionale) Espandere "Assunzioni Avanzate" per personalizzare
   - Configurare depositi, split verso fondo e fee merchant
4. Cliccare "Calcola Simulazione"
5. Visualizzare KPI (con mix ricavi 3 componenti), tabella e grafici
6. (Opzionale) Esportare risultati in CSV

## Note Tecniche

- Tutto client-side, nessun backend richiesto
- Calcoli eseguiti in JavaScript puro
- Responsive design (mobile e desktop)
- Integrato con il branding ProtegoPay (CSS variables)
- Fallback: se Chart.js non disponibile, mostra KPI+tabella con messaggio

## Disclaimer

Questa simulazione è basata su assunzioni semplificate e serve esclusivamente a scopi illustrativi. I risultati effettivi possono variare significativamente in base a:
- Condizioni di mercato
- Comportamento effettivo degli utenti
- Cambiamenti normativi
- Altri fattori esterni

**Non costituisce previsione ufficiale o garanzia di performance future.**

Consultare sempre analisi dettagliate e professionisti qualificati per decisioni strategiche.

## Versione

v3.0 - Gennaio 2026 - Transaction-driven model con deposit split, premio fisso una tantum e merchant fees
