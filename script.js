const documentCorpus = [
  "Introduction to Algorithms",
  "The Art of Computer Programming",
  "Binary Search",
  "QuickSort",
  "The Pragmatic Programmer",
  "Graph Theory",
  "Dynamic Programming",
  "The Mythical Man-Month",
  "Neural Networks",
  "HashMap",
];

const searchInput = document.getElementById("search-box");
const resultsContainer = document.getElementById("results-list");

searchInput.addEventListener("input", (event) => {
  resultsContainer.innerHTML = "";

  const searchQuery = event.target.value.trim().toLowerCase();

  if (searchQuery.length === 0) {
    return;
  }

  const matchedDocuments = documentCorpus.filter((documentTitle) =>
    documentTitle.toLowerCase().includes(searchQuery),
  );

  const resultsFragment = document.createDocumentFragment();

  matchedDocuments.forEach((match) => {
    const listItem = document.createElement("li");
    listItem.textContent = match;
    resultsFragment.appendChild(listItem);
  });

  resultsContainer.appendChild(resultsFragment);
});
