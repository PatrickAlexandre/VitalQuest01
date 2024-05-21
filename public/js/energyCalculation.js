// 📄 Attends que le contenu du document soit entièrement chargé avant d'exécuter le code
document.addEventListener('DOMContentLoaded', () => {
    // 📝 Sélectionne tous les éléments de formulaire d'entrée pertinents
    const inputs = document.querySelectorAll('#gender, #age, #weight, #height, #activity');
    // ⌨️ Ajoute un événement 'input' pour recalculer l'énergie chaque fois qu'une entrée change
    inputs.forEach(input => {
        input.addEventListener('input', calculateEnergy);
    });
});

// 🧮 Fonction pour calculer le BMR (Basal Metabolic Rate) en fonction du genre, poids, taille et âge
function calculateBMR(gender, weight, height, age) {
    if (gender === 'male') {
        // 🧑‍🤵 Formule BMR pour les hommes
        return (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        // 👩‍🦳 Formule BMR pour les femmes
        return (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }
}

// ⚖️ Fonction pour calculer la DEJ (Dépense Énergétique Journalière) en fonction du BMR et du niveau d'activité
function calculateDEJ(bmr, activityLevel) {
    return bmr * activityLevel;
}

// ⏳ Fonction pour calculer le pourcentage d'espérance de vie restant
function calculateLifeExpectancyPercentage(gender, age) {
    // 📈 Détermine l'espérance de vie en fonction du genre
    const lifeExpectancy = gender === 'male' ? 80.0 : 85.7;
    const remainingLifeYears = Math.max(lifeExpectancy - age, 0);
    return {
        percentage: (remainingLifeYears / lifeExpectancy) * 100,
        lifeExpectancy
    };
}

// 🔍 Fonction pour récupérer les valeurs d'entrée du formulaire
function getInputValues() {
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value, 10);
    const activityLevel = parseFloat(document.getElementById('activity').value);
    return { gender, weight, height, age, activityLevel };
}

// 📊 Fonction pour afficher les résultats du calcul BMR et DEJ
function displayResults(bmr, dej, activityLevel) {
    document.getElementById('bmr').innerHTML = `${bmr.toFixed(0)} kcal /jour Métabolisme de Base au Repos (BMR)`;
    document.getElementById('dej').innerHTML = `${dej.toFixed(0)} kcal /jour Dépense Énergétique Journalière (DEJ)`;
    document.getElementById('nap').innerHTML = `${activityLevel.toFixed(2)} Niveau d'Activité Physique (NAP)`;
}

// ⚠️ Fonction pour afficher un message d'erreur si les valeurs d'entrée sont invalides
function displayError() {
    document.getElementById('bmr').innerHTML = "Please fill all fields with valid values to calculate BMR and DEJ.";
}

// 🔄 Fonction pour mettre à jour l'affichage de l'espérance de vie
function updateLifeExpectancyDisplay(gender, age) {
    const lifeData = calculateLifeExpectancyPercentage(gender, age);
    const lifePercentageFormatted = `(${lifeData.percentage.toFixed(0)}%) ${age}/ ${lifeData.lifeExpectancy.toFixed(0)}`;
    document.getElementById('ageDisplay').innerHTML = `Age: ${age}`;
    document.getElementById('lifePercentageText').innerHTML = lifePercentageFormatted;
    document.getElementById('lifePercentage').style.width = `${lifeData.percentage.toFixed(2)}%`;

    // 📋 Met à jour la section d'informations supplémentaires
    document.getElementById('displayed-age').innerHTML = age;
    updateAgeProgressBar(age, gender);
}

// 📈 Fonction pour mettre à jour la barre de progression de l'âge
function updateAgeProgressBar(age, gender) {
    const lifeExpectancy = (gender === 'male') ? 80.0 : 85.7;
    const agePercentage = ((age / lifeExpectancy) * 100).toFixed(2);
    const ageProgressBarContainer = document.getElementById('ageProgressBarContainer');
    ageProgressBarContainer.innerHTML = `
        <div class="rounded bg-green-500 relative overflow-hidden">
            <div class="bg-green-700 text-black text-lg px-2 rounded" style="width: ${agePercentage}%; max-width: 100%; white-space: nowrap;">
                (${agePercentage}%) ${age} / ${lifeExpectancy}
            </div>
        </div>
    `;
}

// 🧮 Fonction principale pour calculer et afficher l'énergie (BMR, DEJ) et mettre à jour l'espérance de vie
function calculateEnergy() {
    const { gender, weight, height, age, activityLevel } = getInputValues();

    // ✅ Vérifie que toutes les valeurs d'entrée sont valides
    if (weight > 0 && height > 0 && age > 0 && activityLevel > 0) {
        const bmr = calculateBMR(gender, weight, height, age);
        const dej = calculateDEJ(bmr, activityLevel);
        displayResults(bmr, dej, activityLevel);
        updateLifeExpectancyDisplay(gender, age);
    } else {
        displayError();
    }
}
