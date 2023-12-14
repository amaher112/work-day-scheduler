// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  var saveBtn = $(".saveBtn");

  $(saveBtn).on("click", function () {
    // Grabbing the id of the parent element, (the 'hour')
    var parentElement = this.parentNode;
    var parentId = parentElement.id;

    // Grabbing the value of the text area associated with the clicked save button
    var siblingElement = $(this).siblings(".description").val();

    // Saving the parent element id and text area value to local storage
    localStorage.setItem(parentId, siblingElement);
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
  }
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  var today = dayjs();
  $("#currentDay").text(today.format("dddd, MMMM DD, YYYY"));
});
