(function () {
  document.getElementById("test").quiz({
    title: "Тест 2",	// type: string; default: "Тестування"
    resTitle: "Результати",				// type: string; default: "Результати"
    ansTitle: "Відповіді",				// type: string; default: "Відповіді"
    type: "letter",								// type: string; default: "letter"; Values: letter, numbers
    percent: true,									// type: boolean; default: true
    points: true,									// type: boolean; default: false
    debug: false									// type: boolean; default: false
  });
})();
