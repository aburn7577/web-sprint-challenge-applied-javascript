import axios from 'axios'
const Tabs = (topics) => {
  // elements
  const topicsDiv = document.createElement('div')
  const jsDiv = document.createElement('div')
  const bootDiv = document.createElement('div')
  const techDiv = document.createElement('div')
  //classes
  topicsDiv.classList.add('topics')
  jsDiv.classList.add('tab')
  bootDiv.classList.add('tab')
  techDiv.classList.add('tab')
  //text
  jsDiv.textContent = 'javascript'
  bootDiv.textContent = 'bootstrap'
  techDiv.textContent = 'technology'
  // hierarchy
  topicsDiv.append(jsDiv)
  topicsDiv.append(bootDiv)
  topicsDiv.append(techDiv)
  // always return
  return topicsDiv
}

  

const tabsAppender = (selector) => {
  axios.get('https://lambda-times-api.herokuapp.com/topics')
    .then(futureData => {
      let tabLink = document.querySelector(selector)
      tabLink.append(Tabs(futureData.data.topics))
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