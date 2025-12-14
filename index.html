<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Protego MVP</title>

    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>

    <!-- Chart.js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js"></script>

    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet">

    <style>
        body {
            background-color: #000;
            color: #fff;
            font-family: 'Segoe UI', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
            overflow: hidden;
        }

        .app-container {
            background-color: #0f172a;
            height: 100vh;
            width: 100%;
            max-width: 450px;
            margin: 0 auto;
            position: relative;
            display: flex;
            flex-direction: column;
        }

        .content-area {
            flex: 1;
            overflow-y: auto;
            padding-bottom: 80px;
        }

        .card {
            background-color: #1e293b;
            border: 1px solid #334155;
            border-radius: 16px;
        }

        .nav-item.active {
            color: #db2777;
        }

        /* Betting Logos simulation using colors */
        .logo-sisal {
            background: #265C4B;
            color: white;
        }

        .logo-goldbet {
            background: #FFD700;
            color: black;
        }

        .logo-eurobet {
            background: #004588;
            color: white;
        }

        .logo-better {
            background: #F2F2F2;
            color: #D6001C;
        }

        .logo-snai {
            background: #E45F0F;
            color: white;
        }

        .bank-card {
            background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
            border: 1px solid #475569;
            border-radius: 12px;
            position: relative;
            overflow: hidden;
        }

        .bank-card::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -50%;
            width: 200px;
            height: 200px;
            background: radial-gradient(circle, rgba(219, 39, 119, 0.2) 0%, rgba(0, 0, 0, 0) 70%);
        }

        /* Optional: hide scrollbar on WebKit */
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }

        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
    </style>
</head>
<body>

<div class="app-container border-x border-slate-800">
    <!-- HEADER -->
    <header
        class="p-5 flex flex-col gap-2 bg-slate-900/95 backdrop-blur sticky top-0 z-20 border-b border-slate-800">
        <div class="flex justify-between items-center">
            <div class="flex items-center gap-2">
                <div
                    class="w-8 h-8 rounded bg-gradient-to-tr from-purple-600 to-pink-600 flex items-center justify-center">
                    <i class="fas fa-shield-alt text-white text-sm"></i>
                </div>
                <div class="flex flex-col">
                    <h1 class="text-xl font-bold tracking-wide leading-none">PROTEGO</h1>
                    <p class="text-[10px] text-slate-400 leading-tight mt-1">
                        Ogni volta che giochi, Protego mette da parte automaticamente una percentuale per te.
                    </p>
                </div>
            </div>
            <div class="flex items-center gap-3">
                <div
                    id="online-badge"
                    class="bg-slate-800 px-2 py-1 rounded text-xs text-green-400 border border-green-900/50 flex items-center gap-1">
                    <i class="fas fa-signal text-[10px]"></i>
                    <span>Online</span>
                </div>
                <button class="relative">
                    <i class="fas fa-bell text-slate-400"></i>
                    <span
                        class="absolute -top-1 -right-1 w-2 h-2 bg-pink-500 rounded-full border border-slate-900"></span>
                </button>
            </div>
        </div>
    </header>

    <!-- MAIN -->
    <main id="main-content" class="content-area scrollbar-hide">
        <!-- HOME -->
        <section id="view-home" class="px-5 py-4 space-y-6">
            <div class="text-center py-4">
                <p class="text-slate-400 text-sm uppercase tracking-widest mb-1">Risparmiato finora</p>
                <h1 class="text-5xl font-bold text-white mb-2">
                    € 14.500<span class="text-slate-500 text-3xl">,00</span>
                </h1>

                <!-- Banner: risparmio automatico -->
                <div
                    class="inline-flex items-center gap-2 bg-purple-900/30 px-3 py-1 rounded-full border border-purple-500/30 mb-2">
                    <i class="fas fa-magic text-pink-500 text-xs"></i>
                    <span id="saving-rate-label" class="text-xs text-pink-200">
                        Investimento autom.: <strong>12%</strong> sui volumi
                    </span>
                </div>

                <!-- Banner: protezione / limite -->
                <div
                    class="mt-2 inline-flex items-center gap-2 bg-slate-800 px-3 py-2 rounded-full border border-slate-700">
                    <i class="fas fa-heartbeat text-emerald-400 text-xs"></i>
                    <span class="text-[11px] text-slate-200">
                        Modalità <strong>Protezione</strong> attiva • Limite mensile gioco: <strong>€ 400</strong>
                    </span>
                </div>

                <!-- Progress bar obiettivo -->
                <div class="mt-5 w-full max-w-xs mx-auto text-left">
                    <div class="flex justify-between text-[10px] text-slate-400 mb-1">
                        <span>Obiettivo: Fondo Sicurezza € 20.000</span>
                        <span id="goal-percentage">73%</span>
                    </div>
                    <div class="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div id="goal-bar"
                             class="h-full bg-gradient-to-r from-pink-500 to-purple-500"
                             style="width:73%"></div>
                    </div>
                </div>
            </div>

            <!-- Transazioni -->
            <section aria-label="Transazioni recenti">
                <div class="flex justify-between items-end mb-3">
                    <h3 class="font-bold text-lg text-slate-200">Transazioni Recenti</h3>
                    <span class="text-xs text-slate-500">Ultimi 7 giorni</span>
                </div>

                <div class="space-y-3" id="transaction-list"></div>
            </section>
        </section>

        <!-- STATS -->
        <section id="view-stats" class="px-5 py-4 space-y-6 hidden">
            <h2 class="text-2xl font-bold">Patrimonio Proiettato</h2>

            <div class="grid grid-cols-2 gap-3">
                <div class="card p-4">
                    <p class="text-xs text-slate-400">Totale Versato</p>
                    <p class="text-xl font-bold">€ 14.500</p>
                    <p class="text-[10px] text-slate-500 mt-1">Capitale puro accumulato tramite Protego.</p>
                </div>
                <div class="card p-4 border-green-900/50 bg-green-900/10">
                    <p class="text-xs text-green-400">Scenario Medio (+8% netto)</p>
                    <p class="text-xl font-bold text-green-400" id="val-medio">€ 19.800</p>
                    <p class="text-[10px] text-green-500/70 mt-1" id="val-medio-breakdown">
                        Capitale: € 14.500 • Rendimento stimato: € 5.300
                    </p>
                </div>
            </div>

            <div class="card p-4">
                <div class="flex justify-between mb-4 items-center">
                    <h3 class="font-bold text-sm">Scenari di Crescita</h3>
                    <span class="text-[10px] text-slate-400">*Fee di gestione 2% già incluse</span>
                </div>

                <!-- Legenda custom -->
                <div class="flex flex-wrap gap-3 mb-3 justify-center">
                    <div class="flex items-center gap-1">
                        <div class="w-2 h-2 rounded-full bg-yellow-400"></div>
                        <span class="text-[10px] text-slate-300">Min 4% netto</span>
                    </div>
                    <div class="flex items-center gap-1">
                        <div class="w-2 h-2 rounded-full bg-green-400"></div>
                        <span class="text-[10px] text-slate-300">Med 8% netto</span>
                    </div>
                    <div class="flex items-center gap-1">
                        <div class="w-2 h-2 rounded-full bg-purple-400"></div>
                        <span class="text-[10px] text-slate-300">Max 13% netto</span>
                    </div>
                    <div class="flex items-center gap-1">
                        <div class="w-2 h-2 rounded-full bg-slate-500"></div>
                        <span class="text-[10px] text-slate-300">Versati</span>
                    </div>
                </div>

                <div class="relative h-64 w-full">
                    <canvas id="growthChart"></canvas>
                </div>
                <p class="text-[10px] text-center text-slate-500 mt-2">
                    Proiezione su 7 anni con interesse composto netto, a fini puramente illustrativi.
                    I rendimenti non sono garantiti.
                </p>
            </div>
        </section>

        <!-- CARDS -->
        <section id="view-cards" class="px-5 py-4 space-y-6 hidden">
            <h2 class="text-2xl font-bold">Wallet & Conti</h2>
            <p class="text-slate-400 text-sm">Metodi collegati per il prelievo automatico dal gioco verso Protego.</p>

            <div class="space-y-4 mt-2">
                <div class="bank-card p-5 shadow-xl transform transition hover:scale-[1.02]">
                    <div class="flex justify-between items-start mb-8">
                        <i class="fas fa-wifi text-slate-400 rotate-90"></i>
                        <span class="font-bold italic text-slate-300">VISA</span>
                    </div>
                    <div class="text-lg font-mono tracking-widest text-slate-200 mb-2">
                        **** **** **** 4589
                    </div>
                    <div class="flex justify-between text-xs text-slate-400">
                        <span>Mario Rossi</span>
                        <span>Exp 09/28</span>
                    </div>
                </div>

                <div class="card p-4 flex items-center justify-between border-blue-900/30">
                    <div class="flex items-center gap-3">
                        <div
                            class="w-10 h-10 rounded-full bg-[#003087] flex items-center justify-center text-white font-bold italic">
                            P
                        </div>
                        <div>
                            <p class="font-bold">PayPal</p>
                            <p class="text-xs text-slate-400">mario.rossi@email.it</p>
                        </div>
                    </div>
                    <div class="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded">Collegato</div>
                </div>

                <div class="card p-4 flex items-center justify-between border-slate-700">
                    <div class="flex items-center gap-3">
                        <div
                            class="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold">
                            <i class="fas fa-university"></i>
                        </div>
                        <div>
                            <p class="font-bold">Conto Direct</p>
                            <p class="text-xs text-slate-400">IT88 O 03... 8821</p>
                        </div>
                    </div>
                    <div class="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded">Collegato</div>
                </div>
            </div>
        </section>

        <!-- PROFILE -->
        <section id="view-profile" class="px-5 py-4 space-y-6 hidden">
            <div class="flex items-center gap-4 mb-6">
                <div
                    class="w-16 h-16 rounded-full bg-slate-700 border-2 border-purple-500 overflow-hidden flex items-center justify-center">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mario"
                         alt="Avatar" class="w-full h-full">
                </div>
                <div>
                    <h2 class="text-xl font-bold">Mario Rossi</h2>
                    <p class="text-sm text-slate-400">ID: #88291 • Premium</p>
                </div>
            </div>

            <div class="space-y-2">
                <div class="card p-4 flex justify-between items-center cursor-pointer hover:bg-slate-800">
                    <div class="flex items-center gap-3">
                        <div
                            class="w-8 h-8 rounded bg-slate-700 flex items-center justify-center text-blue-400">
                            <i class="fas fa-user"></i>
                        </div>
                        <span>Dati Personali</span>
                    </div>
                    <i class="fas fa-chevron-right text-slate-500 text-xs"></i>
                </div>
                <div class="card p-4 flex justify-between items-center cursor-pointer hover:bg-slate-800">
                    <div class="flex items-center gap-3">
                        <div
                            class="w-8 h-8 rounded bg-slate-700 flex items-center justify-center text-green-400">
                            <i class="fas fa-fingerprint"></i>
                        </div>
                        <span>Sicurezza & FaceID</span>
                    </div>
                    <i class="fas fa-chevron-right text-slate-500 text-xs"></i>
                </div>
                <div class="card p-4 flex justify-between items-center cursor-pointer hover:bg-slate-800">
                    <div class="flex items-center gap-3">
                        <div
                            class="w-8 h-8 rounded bg-slate-700 flex items-center justify-center text-purple-400">
                            <i class="fas fa-sliders-h"></i>
                        </div>
                        <div class="flex flex-col">
                            <span>Impostazioni % Risparmio</span>
                            <span id="profile-saving-rate"
                                  class="text-[11px] text-slate-400 mt-0.5">Attuale: 12%</span>
                        </div>
                    </div>
                    <i class="fas fa-chevron-right text-slate-500 text-xs"></i>
                </div>
            </div>
        </section>
    </main>

    <!-- BOTTOM NAV -->
    <nav
        class="h-[80px] bg-slate-900 border-t border-slate-800 flex justify-around items-center px-2 fixed bottom-0 w-full max-w-[450px] z-30">
        <button onclick="switchTab('home')" id="nav-home"
                class="nav-item active flex flex-col items-center gap-1 p-2 w-16 transition">
            <i class="fas fa-home text-xl mb-1"></i>
            <span class="text-[10px] font-semibold">Home</span>
        </button>
        <button onclick="switchTab('stats')" id="nav-stats"
                class="nav-item text-slate-500 flex flex-col items-center gap-1 p-2 w-16 transition">
            <i class="fas fa-chart-line text-xl mb-1"></i>
            <span class="text-[10px] font-semibold">Stats</span>
        </button>

        <!-- Shield central button: apre il modale % risparmio -->
        <button type="button" onclick="openSavingModal()"
                class="relative -top-6 focus:outline-none">
            <div
                class="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-900/50 border-4 border-slate-900 cursor-pointer hover:scale-105 transition">
                <i class="fas fa-shield-alt text-white text-xl"></i>
            </div>
        </button>

        <button onclick="switchTab('cards')" id="nav-cards"
                class="nav-item text-slate-500 flex flex-col items-center gap-1 p-2 w-16 transition">
            <i class="fas fa-credit-card text-xl mb-1"></i>
            <span class="text-[10px] font-semibold">Cards</span>
        </button>
        <button onclick="switchTab('profile')" id="nav-profile"
                class="nav-item text-slate-500 flex flex-col items-center gap-1 p-2 w-16 transition">
            <i class="fas fa-user text-xl mb-1"></i>
            <span class="text-[10px] font-semibold">Profile</span>
        </button>
    </nav>

    <!-- MODALE % RISPARMIO -->
    <div id="saving-modal"
         class="fixed inset-0 bg-black/70 flex items-end justify-center z-40 hidden">
        <div
            class="w-full max-w-[450px] bg-slate-900 rounded-t-2xl border-t border-slate-700 p-5 space-y-4">
            <div class="flex justify-between items-center">
                <h3 class="text-lg font-bold">Imposta la protezione</h3>
                <button onclick="closeSavingModal()" class="text-slate-400 text-sm">
                    Chiudi
                </button>
            </div>
            <p class="text-xs text-slate-400">
                Scegli la percentuale di ogni puntata che Protego sposta automaticamente nel tuo fondo
                sicuro. Puoi cambiarla in qualsiasi momento.
            </p>

            <div class="flex gap-2">
                <button type="button"
                        class="saving-option flex-1 py-3 rounded-xl border border-slate-700 text-sm text-slate-200"
                        data-rate="0.05">
                    5% • Protezione Light
                </button>
                <button type="button"
                        class="saving-option flex-1 py-3 rounded-xl border border-pink-500 bg-pink-500/10 text-sm text-pink-200"
                        data-rate="0.12">
                    12% • Standard
                </button>
                <button type="button"
                        class="saving-option flex-1 py-3 rounded-xl border border-purple-500 bg-purple-500/10 text-sm text-purple-200"
                        data-rate="0.20">
                    20% • Forte
                </button>
            </div>

            <div class="flex justify-between items-center text-xs text-slate-400">
                <span>Percentuale selezionata:</span>
                <span id="selected-rate-label" class="text-pink-300 font-semibold">12%</span>
            </div>

            <button type="button" onclick="applySavingRate()"
                    class="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 text-sm font-semibold">
                Applica impostazioni
            </button>
        </div>
    </div>
</div>

<script>
    // CONFIG CENTRALE
    const CONFIG = {
        goalValue: 20000,
        currentSaved: 14500,
        fee: 0.02,
        scenarios: {
            minGross: 0.06,
            medGross: 0.10,
            maxGross: 0.15
        },
        defaultSavingRate: 0.12
    };

    let currentSavingRate = CONFIG.defaultSavingRate;
    let pendingSavingRate = CONFIG.defaultSavingRate;

    // 1. Navigazione
    function switchTab(tabId) {
        document.querySelectorAll('[id^="view-"]').forEach(el => el.classList.add('hidden'));
        document.getElementById('view-' + tabId).classList.remove('hidden');

        document.querySelectorAll('.nav-item').forEach(el => {
            el.classList.remove('active');
            el.classList.add('text-slate-500');
        });
        const activeBtn = document.getElementById('nav-' + tabId);
        if (activeBtn) {
            activeBtn.classList.add('active');
            activeBtn.classList.remove('text-slate-500');
        }

        if (tabId === 'stats' && window.myChart) {
            window.myChart.resize();
        }
    }

    // 2. Obiettivo grafico
    function updateGoalProgress() {
        const perc = Math.round(CONFIG.currentSaved / CONFIG.goalValue * 100);
        const bar = document.getElementById('goal-bar');
        const label = document.getElementById('goal-percentage');
        if (bar) bar.style.width = perc + '%';
        if (label) label.textContent = perc + '%';
    }

    // 3. Generatore transazioni
    const bettingSites = [
        {name: "Sisal Matchpoint", class: "logo-sisal", icon: "S"},
        {name: "GoldBet", class: "logo-goldbet", icon: "G"},
        {name: "Eurobet", class: "logo-eurobet", icon: "E"},
        {name: "Lottomatica", class: "logo-better", icon: "L"},
        {name: "SNAI", class: "logo-snai", icon: "S"}
    ];

    function generateTransactions() {
        const container = document.getElementById('transaction-list');
        let html = '';
        const today = new Date();

        for (let i = 0; i < 6; i++) {
            const site = bettingSites[Math.floor(Math.random() * bettingSites.length)];
            let rawAmount = Math.floor(Math.random() * 16) * 5 + 10; // 10,15,20,...,85
            const amount = rawAmount.toFixed(2);
            const invested = (rawAmount * currentSavingRate).toFixed(2);

            let date = new Date(today);
            date.setDate(today.getDate() - (i * 1.2));
            const dateStr = date.toLocaleDateString('it-IT', {weekday: 'short', day: 'numeric'});

            html += `
            <div class="card p-3 flex justify-between items-center border-0 bg-slate-800/50">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${site.class}">
                        ${site.icon}
                    </div>
                    <div>
                        <p class="font-bold text-sm text-slate-200">${site.name}</p>
                        <p class="text-[10px] text-slate-500">${dateStr}</p>
                    </div>
                </div>
                <div class="text-right">
                    <p class="text-white font-bold">- € ${amount}</p>
                    <p class="text-[10px] text-slate-400">
                        Puntata: <span class="text-red-400">- € ${amount}</span> •
                        Protego: <span class="text-green-400">+ € ${invested}</span>
                    </p>
                    <p class="text-[10px] text-pink-400 font-semibold mt-0.5">+ € ${invested} salvati</p>
                </div>
            </div>`;
        }
        container.innerHTML = html;
    }

    // 4. Grafico multi-scenario
    const years = ['2018', '2019', '2020', '2021', '2022', '2023', '2024'];
    const depositData = [2000, 4100, 6200, 8300, 10400, 12500, 14500];

    function calculateGrowth(deposits, netRate) {
        let result = [];
        let currentVal = 0;
        for (let i = 0; i < deposits.length; i++) {
            let yearlyDeposit = deposits[i] - (i > 0 ? deposits[i - 1] : 0);
            currentVal = (currentVal + yearlyDeposit) * (1 + netRate);
            result.push(currentVal);
        }
        return result;
    }

    function setupChart() {
        const ctx = document.getElementById('growthChart').getContext('2d');

        const minNet = CONFIG.scenarios.minGross - CONFIG.fee;
        const medNet = CONFIG.scenarios.medGross - CONFIG.fee;
        const maxNet = CONFIG.scenarios.maxGross - CONFIG.fee;

        const minData = calculateGrowth(depositData, minNet);
        const medData = calculateGrowth(depositData, medNet);
        const maxData = calculateGrowth(depositData, maxNet);

        // Update card Medium
        const lastMed = medData[medData.length - 1];
        const capitale = CONFIG.currentSaved;
        const rendimento = lastMed - capitale;

        document.getElementById('val-medio').innerText =
            '€ ' + Math.floor(lastMed).toLocaleString('it-IT');
        document.getElementById('val-medio-breakdown').innerText =
            'Capitale: € ' + capitale.toLocaleString('it-IT') +
            ' • Rendimento stimato: € ' + Math.floor(rendimento).toLocaleString('it-IT');

        window.myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: years,
                datasets: [
                    {
                        label: 'Max (13% netto)',
                        data: maxData,
                        borderColor: '#c084fc',
                        backgroundColor: 'rgba(192, 132, 252, 0)',
                        borderWidth: 2,
                        borderDash: [2, 2],
                        pointRadius: 0,
                        tension: 0.4
                    },
                    {
                        label: 'Med (8% netto)',
                        data: medData,
                        borderColor: '#4ade80',
                        backgroundColor: 'rgba(74, 222, 128, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4
                    },
                    {
                        label: 'Min (4% netto)',
                        data: minData,
                        borderColor: '#facc15',
                        backgroundColor: 'rgba(250, 204, 21, 0)',
                        borderWidth: 2,
                        borderDash: [2, 2],
                        pointRadius: 0,
                        tension: 0.4
                    },
                    {
                        label: 'Versati',
                        data: depositData,
                        borderColor: '#64748b',
                        borderDash: [5, 5],
                        borderWidth: 1,
                        pointRadius: 2,
                        fill: false,
                        tension: 0.2
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {display: false},
                    tooltip: {mode: 'index', intersect: false}
                },
                scales: {
                    x: {
                        grid: {display: false},
                        ticks: {
                            color: '#64748b',
                            font: {size: 10}
                        }
                    },
                    y: {
                        grid: {color: '#1e293b'},
                        ticks: {
                            color: '#64748b',
                            font: {size: 10},
                            callback: v => '€' + (v / 1000) + 'k'
                        }
                    }
                },
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                }
            }
        });
    }

    // 5. Modale % risparmio
    function openSavingModal() {
        const modal = document.getElementById('saving-modal');
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        pendingSavingRate = currentSavingRate;
        highlightSelectedSavingOption(pendingSavingRate);
        updateSelectedRateLabel();
    }

    function closeSavingModal() {
        const modal = document.getElementById('saving-modal');
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }

    function highlightSelectedSavingOption(rate) {
        document.querySelectorAll('.saving-option').forEach(btn => {
            const btnRate = parseFloat(btn.dataset.rate);
            btn.classList.remove('ring-2', 'ring-pink-500');
            if (Math.abs(btnRate - rate) < 0.0001) {
                btn.classList.add('ring-2', 'ring-pink-500');
            }
        });
    }

    function updateSelectedRateLabel() {
        const perc = Math.round(pendingSavingRate * 100);
        const label = document.getElementById('selected-rate-label');
        if (label) label.textContent = perc + '%';
    }

    function applySavingRate() {
        currentSavingRate = pendingSavingRate;
        // Update UI labels
        const percDisplay = Math.round(currentSavingRate * 100) + '%';

        const savingRateLabel = document.getElementById('saving-rate-label');
        if (savingRateLabel) {
            savingRateLabel.innerHTML =
                'Investimento autom.: <strong>' + percDisplay + '</strong> sui volumi';
        }

        const profileSaving = document.getElementById('profile-saving-rate');
        if (profileSaving) {
            profileSaving.textContent = 'Attuale: ' + percDisplay;
        }

        // Rigenera transazioni con la nuova % di risparmio
        generateTransactions();

        closeSavingModal();
    }

    // Eventi sui bottoni del modale
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('saving-option')) {
            const newRate = parseFloat(e.target.dataset.rate);
            if (!isNaN(newRate)) {
                pendingSavingRate = newRate;
                highlightSelectedSavingOption(pendingSavingRate);
                updateSelectedRateLabel();
            }
        }
    });

    // INIT
    updateGoalProgress();
    generateTransactions();
    setupChart();
</script>
</body>
</html>
