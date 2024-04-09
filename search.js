const searchInput = document.getElementById("searchInput");
const resultsList = document.getElementById("results");

searchInput.addEventListener("input", () => {
  const searchText = searchInput.value.toLowerCase();
  // Clear previous results
  resultsList.innerHTML = "";

  // Filter through sample data (replace this with your own data source)
  sampleData.forEach((item) => {
    if (item.title.toLowerCase().includes(searchText)) {
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.href = item.url;
      link.textContent = item.title;
      li.appendChild(link);
      resultsList.appendChild(li);
    }
  });
});

// Sample data (replace this with your own data source)
const sampleData = [
  { title: "Sample Result 1", url: "https://www.example.com/result1" },
  { title: "Sample Result 2", url: "https://www.example.com/result2" },
  { title: "Sample Result 3", url: "https://www.example.com/result3" },
  { title: "Another Result", url: "https://www.example.com/another" },
];
