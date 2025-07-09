    const searchInput = document.getElementById('searchInput');
    const resultsDiv = document.getElementById('results');


    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        if (query.length === 0) {
            resultsDiv.innerHTML = '<p class="not-found">Enter a drug name (e.g., Lovenox, Eliquis, Plavix) to see the guidelines.</p>';
            return;
        }


        const filteredData = drugData.filter(drug => 
            drug.name.toLowerCase().includes(query) || (drug.brand && drug.brand.toLowerCase().includes(query))
        );


        displayResults(filteredData);
    });


    function displayResults(data) {
        if (data.length === 0) {
            resultsDiv.innerHTML = '<p class="not-found">No matching drugs found.</p>';
            return;
        }


        resultsDiv.innerHTML = data.map(drug => {
            let brandText = drug.brand ? ` (${drug.brand})` : '';
            let doseText = drug.dose ? `<p><strong>Dose:</strong> ${drug.dose}<br></p>` : '';
            let subText = drug.subName ? `<h3>${drug.subName}</h3>` : '';
            
            return `
                <div class="drug-card">
                    <h2>${drug.name}${brandText}</h2>${subText}
                    ${doseText}
                    <p><strong>Hold Before Procedure:</strong>${drug.holdBefore}<br></p>
                    <p><strong>While Catheter is in Place:</strong>${drug.catheterInPlace || 'N/A'}<br></p>
                    <p><strong>Resume After Procedure:</strong>${drug.resumeAfter || 'N/A'}<br></p>
                </div>
            `;
        }).join('');
    }