// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

const submitBtn = document.getElementById('submit-button')
const pageContainer = document.getElementById('contact-page')
const pageElements = pageContainer.childNodes

submitBtn.addEventListener('click', submitInfo)
function submitInfo()
{
    for (let i = 0 ; i < pageElements.length ; i++)
    {
        pageElements[i].innerHTML = ''
    }
    const submitMessage = document.createElement('p')
    pageContainer.appendChild(submitMessage)
    submitMessage.innerHTML = 'Thank you for your message!'
    submitMessage.style.fontSize = '22px'
}