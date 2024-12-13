document.getElementById('showMoreBtn').addEventListener('click', function() {
    const moreResources = document.getElementById('moreResources');
    if (moreResources.style.display === 'none') {
        moreResources.style.display = 'block';
        this.textContent = 'Скрыть ресурсы';
    } else {
        moreResources.style.display = 'none';
        this.textContent = 'Показать больше ресурсов';
    }
});
