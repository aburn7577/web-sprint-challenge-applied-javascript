import axios from 'axios'

const Tabs = (topics) => {
  // elements
  const topicsDiv = document.createElement('div')
  //class
  topicsDiv.classList.add('topics')
  
//array from argument
  topics.forEach(element => {
    const tabDivs = document.createElement('div')
    //class
    tabDivs.classList.add('tab')
  //  text
    tabDivs.textContent = element
    //hierarchy
    topicsDiv.appendChild(tabDivs)
    });
  // always return
  return topicsDiv
}

  
const tabsAppender = (selector) => {
  const tabLink = document.querySelector(selector)
  axios.get('https://lambda-times-api.herokuapp.com/topics')
    .then(futureData => {
      tabLink.appendChild(Tabs(futureData.data.topics))
    })
    .catch(error => console.log(error))
}

export { Tabs, tabsAppender }
// TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
 // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: ``
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //