
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

