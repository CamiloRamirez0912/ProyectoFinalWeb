document.addEventListener('DOMContentLoaded', () => {
    const categorySelect = document.getElementById('category-select');
    const categoryContainer = document.getElementById('category-container');
    const restaurantSurveyContainer = document.getElementById('restaurant-survey-container');
    const deliverySurveyContainer = document.getElementById('delivery-survey-container');

    categorySelect.addEventListener('change', () => {
        const selectedOption = categorySelect.value;

        if (selectedOption === 'restaurantes') {
            categoryContainer.style.display = 'none';
            restaurantSurveyContainer.style.display = 'block';
            deliverySurveyContainer.style.display = 'none';
        } else if (selectedOption === 'domicilios') {
            categoryContainer.style.display = 'none';
            deliverySurveyContainer.style.display = 'block';
            restaurantSurveyContainer.style.display = 'none';
        }
    });

    const restaurantSurveyForm = document.getElementById('restaurant-survey-form');
    restaurantSurveyForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(restaurantSurveyForm);
        let surveyResults = 'Resultados de la Encuesta :\n';
        formData.forEach((value, key) => {
            surveyResults += `${key}: ${value}\n`;
        });
        alert(surveyResults);
        restaurantSurveyForm.reset();
        categoryContainer.style.display = 'block';
        restaurantSurveyContainer.style.display = 'none';
        window.location.href = 'index.html'; // Redirige al index principal
    });

    const deliverySurveyForm = document.getElementById('delivery-survey-form');
    deliverySurveyForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(deliverySurveyForm);
        let surveyResults = 'Resultados de la Encuesta - Domicilios:\n';
        formData.forEach((value, key) => {
            surveyResults += `${key}: ${value}\n`;
        });
        alert(surveyResults);
        deliverySurveyForm.reset();
        categoryContainer.style.display = 'block';
        deliverySurveyContainer.style.display = 'none';
        window.location.href = 'index.html'; // Redirige al index principal
    });
});
