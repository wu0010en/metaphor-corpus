document.addEventListener('DOMContentLoaded', () => {
    const corpusList = document.getElementById('corpus-list');
    const searchInput = document.getElementById('search');
    const categorySelect = document.getElementById('category');

    function renderCorpus(data) {
        corpusList.innerHTML = '';
        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.all}</td>
                <td>${item.metaphor ? '是' : '否'}</td>
                <td>${item.source || '-'}</td>
                <td>${item.target || '-'}</td>
            `;
            corpusList.appendChild(row);
        });
    }

    function filterCorpus() {
        const searchTerm = searchInput.value.toLowerCase();
        const category = categorySelect.value;

        const filteredData = corpusData.filter(item => {
            const matchesSearch = item.all.toLowerCase().includes(searchTerm) ||
                                  (item.source && item.source.toLowerCase().includes(searchTerm)) ||
                                  (item.target && item.target.toLowerCase().includes(searchTerm));
            const matchesCategory = category === 'all' || 
                (category === 'metaphor' && item.metaphor === 1) || 
                (category === 'non-metaphor' && item.metaphor === 0);
            return matchesSearch && matchesCategory;
        });

        renderCorpus(filteredData);
    }

    searchInput.addEventListener('input', filterCorpus);
    categorySelect.addEventListener('change', filterCorpus);

    renderCorpus(corpusData);
});