$(function () {
  var saveBtn = $(".saveBtn");
  var data = [];

  // Add event listener for each of the 'save' buttons to save and store the data
  $(saveBtn).on("click", function () {
    var hourId = $(this).parent().attr("id");
    var input = $(this).siblings(".description").val();
    localStorage.setItem(hourId, input);
  });

  var currentHour = dayjs().hour();
  var rowEl = $("textarea");

  // Iterates over each div and compares the current time with the div id ('hour')
  for (var i = 0; i < rowEl.length; i++) {
    var currentRowHour = $(rowEl[i]).parent().attr("id");

    // Sets a class based on what hour it currently is
    if (currentRowHour < currentHour) {
      $(rowEl[i]).addClass("past");
    }
    if (currentRowHour == currentHour) {
      $(rowEl[i]).addClass("present");
    }
    if (currentRowHour > currentHour) {
      $(rowEl[i]).addClass("future");
    }

    // Getting the saved data out of local storage and pushing it into an empty array
    var savedData = localStorage.getItem(currentRowHour) || "";
    if (savedData) {
      data.push({
        hour: currentRowHour,
        text: savedData,
      });
    }
  }

  // Renders data in local storage on the page
  data.forEach((i) => {
    var textEl = $(this).find(`#${i.hour}`).find("textarea");
    textEl[0].innerText = i.text;
    console.log(textEl);
  });

  // Gets and sets the current day
  var today = dayjs();
  $("#currentDay").text(today.format("dddd, MMMM DD, YYYY"));
});
