var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
const options = {
  itemSelectText: "Lütfen Seçin Yapınız",
  loadingText: "Yükleniyor...",
  noResultsText: "Sonuç Bulunamadı",
  noChoicesText: "Seçenek Bulunamadı",
};
new Choices("#select-default", options);
new Choices("#select-hover", options);
new Choices("#select-active", options);
new Choices("#select-locked", options);
new Choices("#search-default", options);
new Choices("#search-two", options);
