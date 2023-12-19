$(function () {
  var saveBtn = $(".saveBtn");

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
    if (currentRowHour < currentHour) {
      $(rowEl[i]).addClass("past");
    }
    if (currentRowHour == currentHour) {
      $(rowEl[i]).addClass("present");
    }
    if (currentRowHour > currentHour) {
      $(rowEl[i]).addClass("future");
    }

    
    // if (userInput)
    // {
    //   var textEl = $(this).find(`#${currentRowHour}`);
    //   // console.log(textEl);

    //   var textArea = textEl.find("textarea");
    //   // console.log(textArea);

    //   $(this).find(".description").val(userInput);
    // }
  }

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // Create an object so there will be one key, and the value will be an array

  var today = dayjs();
  $("#currentDay").text(today.format("dddd, MMMM DD, YYYY"));
});
