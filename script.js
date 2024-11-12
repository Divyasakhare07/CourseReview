function openTab(tabId) {
    // Hide all tab contents
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.style.display = 'none');
  
    document.getElementById(tabId).style.display = 'block';
  }
  


  // Initialize the first tab as visible
  document.addEventListener('DOMContentLoaded', () => {
    openTab('home');
  });
  