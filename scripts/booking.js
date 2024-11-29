/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?


const fullRate = 35
const halfRate = 20
let dailyRate = fullRate

let weekdayButton = []
const weekdayIds = ["monday","tuesday","wednesday","thursday","friday"]
for (let i = 0; i<=4 ; i++) {
    weekdayButton[i] = document.getElementById(weekdayIds[i])
    weekdayButton[i].addEventListener("click", function(){updateClicked(weekdayButton[i])})
}

const fullButton = document.getElementById("full")
fullButton.addEventListener("click", function(){changeDay("full")})
const halfButton = document.getElementById("half")
halfButton.addEventListener("click", function(){changeDay("half")})

const resetButton = document.getElementById("clear-button")
resetButton.addEventListener("click", resetClicked)

let calculatedCost = document.getElementById("calculated-cost")

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!


function updateClicked(element)
{   
    console.log(element.classList.contains("clicked"))
    if (element.classList.contains("clicked") === false) 
    {
        element.classList.add("clicked")
    } else {
        element.classList.remove("clicked")
    }
    recalculateCost()
}

function getClicked()
{   
    let countClicked = 0
    for (let i = 0 ; i <= 4 ; i++)
    {
        if (weekdayButton[i].classList.contains("clicked") === true) 
        {
            countClicked += 1
        }
    }
    return countClicked
}


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function resetClicked()
{
    for (let i = 0 ; i <= 4 ; i++)
    {
        weekdayButton[i].classList.remove("clicked")
    }
    dailyRate = fullRate
    fullButton.classList.add("clicked")
    halfButton.classList.remove("clicked")
    recalculateCost()
}


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function changeDay(type)
{
    if (type === "full")
    {
        dailyRate = fullRate
        fullButton.classList.add("clicked")
        halfButton.classList.remove("clicked")
    } 
    else 
    {
        dailyRate = halfRate
        fullButton.classList.remove("clicked")
        halfButton.classList.add("clicked")
    }
    recalculateCost()
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function recalculateCost()
{
    calculatedCost.innerHTML = getClicked() * dailyRate
}
