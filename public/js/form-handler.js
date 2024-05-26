// Ce fichier gérera la sauvegarde et le chargement des données du formulaire, ainsi que l'écoute des événements liés au formulaire.


document.addEventListener('DOMContentLoaded', function() {
    const energyForm = document.getElementById('energyForm');
    const characterName = document.getElementById('character-name');
    const mbtiType = document.getElementById('mbti-type');

    function saveFormData() {
        const formData = {
            gender: document.getElementById('gender').value,
            age: document.getElementById('age').value,
            weight: document.getElementById('weight').value,
            height: document.getElementById('height').value,
            activity: document.getElementById('activity').value,
            characterName: characterName.innerText,
            mbtiType: mbtiType.value
        };
        localStorage.setItem('energyFormData', JSON.stringify(formData));
    }

    function loadFormData() {
        const savedData = localStorage.getItem('energyFormData');
        if (savedData) {
            const formData = JSON.parse(savedData);
            document.getElementById('gender').value = formData.gender;
            document.getElementById('age').value = formData.age;
            document.getElementById('weight').value = formData.weight;
            document.getElementById('height').value = formData.height;
            document.getElementById('activity').value = formData.activity;
            characterName.innerText = formData.characterName;
            mbtiType.value = formData.mbtiType;
            calculateEnergy(); // Met à jour les résultats après le chargement des données
        }
    }

    energyForm.addEventListener('input', saveFormData);
    characterName.addEventListener('input', saveFormData);
    mbtiType.addEventListener('change', saveFormData);

    loadFormData();
});

document.getElementById('closeModalBtn').addEventListener('click', function() {
    document.getElementById('energyModal').classList.add('hidden');
});
