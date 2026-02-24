
let interviewList = [];
let rejectedList = [];
let currentStatus = 'tab-all';

// Dashboard Elements
let totalCount = document.getElementById('all-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');
let jobTotalText = document.getElementById('job-total-text');

// Navigation Buttons
const allFilterBtn = document.getElementById('tab-all');
const interviewFilterBtn = document.getElementById('tab-interview');
const rejectedFilterBtn = document.getElementById('tab-rejected');

// Containers
const allCardSection = document.getElementById('allCards');
const mainContainer = document.getElementById('job-container');

/**
 * Updates all dashboard numbers and the total jobs text
 */
function calculateCount() {
    
    const totalPhysicalCards = allCardSection.querySelectorAll('.card').length;
    
    totalCount.innerText = totalPhysicalCards;
    jobTotalText.innerText = totalPhysicalCards;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}

/**
 * Section Visibility
 */
function toggleStyle(id) {
    // Reset all buttons to default white/gray style
    [allFilterBtn, interviewFilterBtn, rejectedFilterBtn].forEach(btn => {
        btn.classList.remove('btn-primary', 'text-white');
        btn.classList.add('bg-white', 'text-slate-500');
    });

    const selected = document.getElementById(id);
    currentStatus = id;

    // Apply active "Primary" style to selected button
    selected.classList.remove('bg-white', 'text-slate-500');
    selected.classList.add('btn-primary', 'text-white');

    // Show/Hide cards based on their badge text
    const allCards = allCardSection.querySelectorAll('.card');
    
    allCards.forEach(card => {
        const badgeText = card.querySelector('.bg-blue-50, .bg-emerald-50, .bg-rose-50').innerText.toUpperCase();
        
        if (id === 'tab-all') {
            card.classList.remove('hidden');
        } else if (id === 'tab-interview') {
            badgeText === 'INTERVIEW' ? card.classList.remove('hidden') : card.classList.add('hidden');
        } else if (id === 'tab-rejected') {
            badgeText === 'REJECTED' ? card.classList.remove('hidden') : card.classList.add('hidden');
        }
    });

    checkEmptyState();
}


// EMPTY STATE CHECK
function checkEmptyState() {
    const visibleCards = Array.from(allCardSection.children).filter(card => 
        !card.classList.contains('hidden') && card.id !== 'empty-state'
    );

    const existingEmpty = document.getElementById('empty-state');
    if (existingEmpty) existingEmpty.remove();  //prevents message repeat by multi-click.

    if (visibleCards.length === 0) {
        const emptyHTML = `
            <div id="empty-state" class="flex flex-col items-center justify-center py-20 bg-white border border-slate-100 rounded-xl shadow-sm w-full">
                <img src="./jobs.png" class="mb-4 w-20">
                <h3 class="text-xl font-bold">No jobs available</h3>
                <p class="text-slate-400">Check back soon for new job opportunities</p>
            </div>`;
        allCardSection.insertAdjacentHTML('beforeend', emptyHTML);
    }
}

// Nav Listener
allFilterBtn.addEventListener('click', () => toggleStyle('tab-all'));
interviewFilterBtn.addEventListener('click', () => toggleStyle('tab-interview'));
rejectedFilterBtn.addEventListener('click', () => toggleStyle('tab-rejected'));

