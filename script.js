const certCosts = {
    // CompTIA Core
    "comptia_a_plus": 530, 
    "comptia_security_plus": 425,
    "comptia_network_plus": 390,

    // CompTIA Specialist
    "comptia_data_plus": 255,
    "comptia_project_plus": 390,
    "comptia_cloud_plus": 390,
    "comptia_pentest_plus": 425,
    "comptia_tech_plus": 125,
    "comptia_linux_plus": 390,
    "comptia_cysa_plus": 425,

    // Other Vendors
    "aws_cloud_practitioner": 100,
    "microsoft_azure_fundamentals": 99,
    "ccst_it_support": 125
};

function calculateBudget() {
    let totalCost = 0;

    const selectedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    selectedCheckboxes.forEach(checkbox => {
        const certID = checkbox.value;
        
        const cost = certCosts[certID]; 

        if (cost !== undefined) {
            totalCost += cost;
        }
    });

    document.getElementById('total-cost').textContent = 
        `$${totalCost.toFixed(2)}`;
}


function clearSelections() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });

    document.getElementById('total-cost').textContent = '$0.00';
}

document.getElementById('calculate-btn').addEventListener('click', calculateBudget);
document.getElementById('clear-btn').addEventListener('click', clearSelections);