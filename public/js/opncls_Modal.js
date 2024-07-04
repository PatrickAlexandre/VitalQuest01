// 📄 Attends que le contenu du document soit entièrement chargé avant d'exécuter le code
document.addEventListener('DOMContentLoaded', () => {

    // 🎮 Boutons et sections de l'interface utilisateur
    const characterBtn = document.getElementById('character-btn');
    const energyModal = document.getElementById('energyModal');
    const closeModalBtn = document.getElementById('closeModalBtn');

    // 👤 Ajoute un événement 'click' pour afficher les statistiques du personnage
    characterBtn.addEventListener('click', () => {
        energyModal.classList.remove('hidden');
    });

    // ❌ Ajoute un événement 'click' pour fermer la fenêtre modale
    closeModalBtn.addEventListener('click', () => {
        energyModal.classList.add('hidden');
    });

    // 📤 Affiche la fenêtre modale au chargement de la page
    energyModal.classList.remove('hidden');
});
