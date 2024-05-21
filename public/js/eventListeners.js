// 📄 Attends que le contenu du document soit entièrement chargé avant d'exécuter le code
document.addEventListener('DOMContentLoaded', () => {
    
    // 🎮 Boutons et sections de l'interface utilisateur
    const characterBtn = document.getElementById('character-btn');
    const energyModal = document.getElementById('energyModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const pomodoroBtn = document.getElementById('pomodoro-btn');
    const expensesBtn = document.getElementById('expenses-btn');
    const inventoryBtn = document.getElementById('inventory-btn');
    const nutritionBtn = document.getElementById('nutrition-btn');
    const scientistsBtn = document.getElementById('scientists-btn');

    const gameStatsSection = document.getElementById('game-stats-section');
    const inventorySection = document.getElementById('inventory-section');
    const nutritionSection = document.getElementById('nutrition-section');
    const scientistsSection = document.getElementById('scientists-section');
    const expensesSection = document.getElementById('expenses-section');
    const actionBar = document.getElementById('action-bar');

    // 👤 Ajoute un événement 'click' pour afficher les statistiques du personnage
    characterBtn.addEventListener('click', () => {
        gameStatsSection.classList.remove('hidden');
        energyModal.classList.remove('hidden');
        inventorySection.classList.add('hidden');
        nutritionSection.classList.add('hidden');
        scientistsSection.classList.add('hidden');
        actionBar.classList.remove('hidden');
        expensesSection.classList.add('hidden');
        setActiveButton(characterBtn);
    });

    // ❌ Ajoute un événement 'click' pour fermer la fenêtre modale
    closeModalBtn.addEventListener('click', () => {
        energyModal.classList.add('hidden');
    });

    // ⏲️ Ajoute un événement 'click' pour afficher le minuteur Pomodoro
    pomodoroBtn.addEventListener('click', () => {
        gameStatsSection.innerHTML = '<iframe src="https://flocus.com/minimalist-pomodoro-timer/" class="w-full h-96" frameborder="0"></iframe>';
        gameStatsSection.classList.remove('hidden');
        inventorySection.classList.add('hidden');
        nutritionSection.classList.add('hidden');
        scientistsSection.classList.add('hidden');
        actionBar.classList.remove('hidden');
        expensesSection.classList.add('hidden');
        setActiveButton(pomodoroBtn);
    });

    // 💰 Ajoute un événement 'click' pour afficher la section des dépenses
    expensesBtn.addEventListener('click', () => {
        expensesSection.classList.remove('hidden');
        gameStatsSection.classList.add('hidden');
        inventorySection.classList.add('hidden');
        nutritionSection.classList.add('hidden');
        scientistsSection.classList.add('hidden');
        actionBar.classList.remove('hidden');
        setActiveButton(expensesBtn);
    });

    // 📦 Ajoute un événement 'click' pour afficher l'inventaire
    inventoryBtn.addEventListener('click', () => {
        inventorySection.classList.remove('hidden');
        gameStatsSection.classList.add('hidden');
        nutritionSection.classList.add('hidden');
        scientistsSection.classList.add('hidden');
        actionBar.classList.add('hidden');
        expensesSection.classList.add('hidden');
        setActiveButton(inventoryBtn);
    });

    // 🥗 Ajoute un événement 'click' pour afficher la section nutrition
    nutritionBtn.addEventListener('click', () => {
        nutritionSection.classList.remove('hidden');
        gameStatsSection.classList.add('hidden');
        inventorySection.classList.add('hidden');
        scientistsSection.classList.add('hidden');
        actionBar.classList.remove('hidden');
        expensesSection.classList.add('hidden');
        setActiveButton(nutritionBtn);
    });

    // 👨‍🔬 Ajoute un événement 'click' pour afficher la section des scientifiques
    scientistsBtn.addEventListener('click', () => {
        scientistsSection.classList.remove('hidden');
        gameStatsSection.classList.add('hidden');
        inventorySection.classList.add('hidden');
        nutritionSection.classList.add('hidden');
        actionBar.classList.add('hidden');
        expensesSection.classList.add('hidden');
        setActiveButton(scientistsBtn);
    });

    // 📤 Affiche la fenêtre modale au chargement de la page
    energyModal.classList.remove('hidden');
});

// Fonction pour définir le bouton actif
function setActiveButton(activeButton) {
    // Réinitialise les boutons actifs
    document.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
    // Définir le bouton actif
    activeButton.classList.add('active');
}
