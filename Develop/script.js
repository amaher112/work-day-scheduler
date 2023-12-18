$(function () {
  var saveBtn = $(".saveBtn");

  $(saveBtn).on("click", function () {
    var hourId = $(this).parent().attr("id");

    // var task = {
    //   hour: hourId,
    //   value: $(this).siblings(".description").val(),
    // };
    var input = $(this).siblings(".description").val();

    // localStorage.setItem(hourId, JSON.stringify(task));
    localStorage.setItem(hourId, input);
   

    //  var schedule = localStorage.getItem(JSON.parse(hourId));
    //  console.log(schedule);
  });

  var currentHour = dayjs().hour();
  var rowEl = $("textarea");

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
    
    var userInput = localStorage.getItem(currentRowHour);
    console.log(userInput);
    if (userInput) {
      $(this).find(".description").val(userInput);
    }
  
  }
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // Create an object so there will be one key, and the value will be an array

  var today = dayjs();
  $("#currentDay").text(today.format("dddd, MMMM DD, YYYY"));
});
