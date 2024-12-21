document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартную отправку формы

    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    const data = {
        cardNumber: cardNumber,
        expiryDate: expiryDate,
        cvv: cvv
    };

        fetch('http://127.0.0.1:5000/save-payment-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {
                document.getElementById('result-message').textContent = 'Данные успешно отправлены.';
              document.getElementById('payment-form').reset();
            } else {
                document.getElementById('result-message').textContent = 'Ошибка при отправке данных.';
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
            document.getElementById('result-message').textContent = 'Произошла ошибка при отправке данных.';
        });
});