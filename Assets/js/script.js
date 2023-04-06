//the date and time at the top of the page//
$(document).ready(function () {
  $('#currentDay').text(dayjs().format('DD/MM/YYYY h:mm:ss A'))
  setInterval(function(){
    $('#currentDay').text(dayjs().format('DD/MM/YYYY h:mm:ss A'));
    }, 1000);

setColors();
saveContent();

//button you press to log your text//
var saveButtons = document.querySelectorAll('.saveBtn');
saveButtons.forEach(btn => {
  btn.addEventListener('click', function(event) {
    event.preventDefault();
    saveContent();
    });
  })
});

//how the box colors change according to the time// 
function setColors()
{
  const timeBlocks = document.querySelectorAll('.time-block');
  timeBlocks.forEach(block => {
    var timeID = block.getAttribute('id').split('-');
      if(parseInt(timeID[1]) < dayjs().$H)
      {
      block.classList.add('past');
      }
      else if(parseInt(timeID[1]) > dayjs().$H)
      {
      block.classList.add('future');
      }
      else
      {
      block.classList.add('present');
      }
  });
}

//how to log and save your information into local storage//
function saveContent()
{
  localStorage.clear();
  var descriptions = document.querySelectorAll('.description');
  var descText = [];
  descriptions.forEach(element => {
    descText.push(element.value);
  });

localStorage.setItem('descriptionData', JSON.stringify(descText));
}
