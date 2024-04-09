const searchInput = document.getElementById("searchInput");
const resultsList = document.getElementById("results");

searchInput.addEventListener("input", () => {
  const searchText = searchInput.value.toLowerCase();

  resultsList.innerHTML = "";

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

const sampleData = [
  { title: "To Kill a Mockingbird", url: "https://www.example.com/result1" },
  { title: "The Woman in the Window", url: "https://www.example.com/result2" },
  { title: "The Silent Patient", url: "https://www.example.com/result3" },
  { title: "Another Result", url: "https://www.example.com/another" },
];
