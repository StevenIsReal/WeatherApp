document.addEventListener('DOMContentLoaded', async function () {
	const apiKey = "68ab1f459ee008f71ca25ee6f1021856";
	const apiEndpoint = `https://api.openweathermap.org/data/2.5/weather?&appid=${apiKey}`;


    // Error handling function
    function handleError(error) {
        const errorElement = document.getElementById('error-message');
        errorElement.textContent = 'Oops! Something went wrong.';
        const descriptionElement = document.getElementById('error-description');
        descriptionElement.textContent = 'We apologize for the inconvenience. Please try again later.';
        console.error(error); // Log the error to the console for debugging
    }

    try {
        const response = await fetch(apiEndpoint);
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`API Error: ${errorData.message}`);
        }
        const data = await response.json();
        // Process data
    } catch (error) {
        handleError(error);
    }
});
