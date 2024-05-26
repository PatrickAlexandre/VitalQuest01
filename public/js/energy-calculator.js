// Ce fichier gérera les calculs du BMR, DEJ et l'affichage des résultats.


document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('#gender, #age, #weight, #height, #activity');
    inputs.forEach(input => {
        input.addEventListener('input', calculateEnergy);
    });
});

function calculateBMR(gender, weight, height, age) {
    if (gender === 'male') {
        return (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        return (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }
}

function calculateDEJ(bmr, activityLevel) {
    return bmr * activityLevel;
}

function calculateLifeExpectancyPercentage(gender, age) {
    const lifeExpectancy = gender === 'male' ? 80.0 : 85.7;
    const remainingLifeYears = Math.max(lifeExpectancy - age, 0);
    return {
        percentage: (remainingLifeYears / lifeExpectancy) * 100,
        lifeExpectancy
    };
}

function getInputValues() {
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value, 10);
    const activityLevel = parseFloat(document.getElementById('activity').value);
    return { gender, weight, height, age, activityLevel };
}

function displayResults(bmr, dej, activityLevel) {
    document.getElementById('bmr').innerHTML = `${bmr.toFixed(0)} kcal /jour`;
    document.getElementById('dej').innerHTML = `${dej.toFixed(0)} kcal /jour`;
    document.getElementById('nap').innerHTML = `${activityLevel.toFixed(2)}`;
}

function displayError() {
    document.getElementById('bmr').innerHTML = "Please fill all fields with valid values to calculate BMR and DEJ.";
}

function updateLifeExpectancyDisplay(gender, age) {
    const lifeData = calculateLifeExpectancyPercentage(gender, age);
    const lifePercentageFormatted = `(${lifeData.percentage.toFixed(0)}%) ${age}/ ${lifeData.lifeExpectancy.toFixed(0)}`;
    document.getElementById('ageDisplay').innerHTML = `Age: ${age}`;
    document.getElementById('lifePercentageText').innerHTML = lifePercentageFormatted;
    document.getElementById('lifePercentage').style.width = `${lifeData.percentage.toFixed(2)}%`;

    document.getElementById('displayed-age').innerHTML = age;
    updateAgeProgressBar(age, gender);
}

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

function calculateEnergy() {
    const { gender, weight, height, age, activityLevel } = getInputValues();

    if (weight > 0 && height > 0 && age > 0 && activityLevel > 0) {
        const bmr = calculateBMR(gender, weight, height, age);
        const dej = calculateDEJ(bmr, activityLevel);
        displayResults(bmr, dej, activityLevel);
        updateLifeExpectancyDisplay(gender, age);
    } else {
        displayError();
    }
}
