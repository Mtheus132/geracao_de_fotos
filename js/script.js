document.addEventListener('click', async (event) => {
    // Verifica se o elemento clicado (ou o pai dele) é o botão de cópia
    const btn = event.target.closest('.copy-btn');
    
    if (btn) {
        // Encontra o container principal (article) deste card específico
        const card = btn.closest('article');
        // Encontra o parágrafo de texto dentro desse article
        const textElement = card.querySelector('.target-text');

        if (textElement) {
            const text = textElement.innerText.trim();
            const originalContent = btn.innerHTML;

            try {
                await navigator.clipboard.writeText(text);

                // Feedback visual
                btn.innerHTML = '<span class="material-symbols-outlined text-sm">check</span> Copiado!';
                btn.classList.add('active:neo-pressed');

                setTimeout(() => {
                    btn.innerHTML = originalContent;
                }, 2000);
            } catch (err) {
                console.error('Falha ao copiar:', err);
            }
        }
    }
});