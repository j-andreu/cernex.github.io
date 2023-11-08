        // JavaScript to toggle FAQ answers and hide other answers
        const faqQuestions = document.querySelectorAll('.faq-question');

        faqQuestions.forEach((question) => {
            question.addEventListener('click', () => {
                faqQuestions.forEach((q) => {
                    if (q !== question) {
					q.classList.remove('active');
				}
			});
		question.classList.toggle('active');
	});
});

