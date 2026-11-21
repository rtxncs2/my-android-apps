(function () {
  "use strict";

  var DOWNLOAD_URL = "https://t.me/rhrkfbfksnw";

  var apps = [
    "QR Maker",
    "Notes",
    "SleepWell",
    "Simple Music Player",
    "Simple Media Player",
    "Alarm",
    "Did I Lock",
    "WaveFlow Music Player",
    "Whiteboard",
    "Habit Tracker",
    "Converter",
    "Notepad",
    "Study Timer",
    "Keep Notes",
    "Screen Flashlight",
    "Zip File Player",
    "Bill Splitter",
    "Ledger",
    "Calculator",
    "Credit and Debit Tracker",
    "Expense Tracker",
    "Minimal Launcher",
    "Diary",
    "Interval Timer",
    "Handwritten Notes",
    "HTTP File Transfer",
    "Renewal Tracker",
    "MP4 to MP3",
    "To Do List",
    "System Monitor"
  ];

  var list = document.getElementById("list");
  var search = document.getElementById("search");
  var count = document.getElementById("count");
  var empty = document.getElementById("empty");

  var rows = apps.map(function (name) {
    var tr = document.createElement("tr");

    var iconTd = document.createElement("td");
    iconTd.className = "col-icon";
    iconTd.innerHTML = '<span class="icon" aria-hidden="true">&#128230;</span>';

    var nameTd = document.createElement("td");
    var nameLink = document.createElement("a");
    nameLink.href = DOWNLOAD_URL;
    nameLink.target = "_blank";
    nameLink.rel = "noopener";
    nameLink.textContent = name;
    nameTd.appendChild(nameLink);

    var dlTd = document.createElement("td");
    var dlLink = document.createElement("a");
    dlLink.href = DOWNLOAD_URL;
    dlLink.target = "_blank";
    dlLink.rel = "noopener";
    dlLink.textContent = "Download";
    dlTd.appendChild(dlLink);

    tr.appendChild(iconTd);
    tr.appendChild(nameTd);
    tr.appendChild(dlTd);
    list.appendChild(tr);

    return { el: tr, name: name.toLowerCase() };
  });

  function update() {
    var q = search.value.trim().toLowerCase();
    var shown = 0;
    rows.forEach(function (r) {
      var match = r.name.indexOf(q) !== -1;
      r.el.hidden = !match;
      if (match) shown++;
    });
    count.textContent = shown + " of " + rows.length + " apps";
    empty.hidden = shown !== 0;
  }

  search.addEventListener("input", update);
  update();
})();
