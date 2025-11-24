const certCosts = {
    // CompTIA Core
    "comptia_a_plus": 530, 
    "comptia_security_plus": 425,
    "comptia_network_plus": 390,

    // CompTIA Specialist/Advanced
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

let totalCostElement;


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

    if (totalCostElement) {
        totalCostElement.textContent = `$${totalCost.toFixed(2)}`;
    }
}

function clearSelections() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
        
        const certItem = checkbox.closest('.cert-item');
        if (certItem) {
            certItem.classList.remove('bg-blue-100', 'shadow-inner', 'border-green-500', 'border-2');
            certItem.classList.add('border-gray-200'); 
        }
    });
    
    if (totalCostElement) {
        totalCostElement.textContent = '$0.00';
    }
}

function handleSelection(event) {
    
    const certItem = event.target.closest('.cert-item'); 
    
    if (!certItem) {
        return;
    }
    
    event.preventDefault();
    event.stopPropagation();
    
    const checkbox = certItem.querySelector('input[type="checkbox"]');
    
    if (!checkbox) {
        return; 
    }
    
    checkbox.checked = !checkbox.checked;

    if (checkbox.checked) {
        certItem.classList.remove('border-gray-200');
        certItem.classList.add('bg-blue-100', 'shadow-inner', 'border-green-500', 'border-2');
    } else {
        certItem.classList.remove('bg-blue-100', 'shadow-inner', 'border-green-500', 'border-2');
        certItem.classList.add('border-gray-200');
    }
    
    calculateBudget(); 
}


document.addEventListener('DOMContentLoaded', () => {
    totalCostElement = document.getElementById('total-cost');
    const certListContainer = document.getElementById('cert-list');
    
    if (certListContainer) {
        certListContainer.addEventListener('click', handleSelection);
    }

    const calculateBtn = document.getElementById('calculate-btn');
    const clearBtn = document.getElementById('clear-btn');

    if (calculateBtn) {
        calculateBtn.addEventListener('click', calculateBudget);
    }
    if (clearBtn) {
        clearBtn.addEventListener('click', clearSelections);
    }
    
    calculateBudget();
});