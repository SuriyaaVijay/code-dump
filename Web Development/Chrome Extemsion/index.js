let myLeads = [];
const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el');

const deleteBtn = document.getElementById('delete-btn');
// localStorage.clear()
const leadsfromlocalstorage = JSON.parse(localStorage.getItem('myLeads'));
// console.log(leadsfromlocalstorage)

const tabBtn = document.getElementById('tab-btn');

tabBtn.addEventListener('click', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem('myLeads', JSON.stringify(myLeads));
    // console.log(tabs[0].url)
    render(myLeads);
  });
});

if (leadsfromlocalstorage) {
  myLeads = leadsfromlocalstorage;
  render(myLeads);
}

deleteBtn.addEventListener('dblclick', function () {
  // console.log("Double clicked")
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

inputBtn.addEventListener('click', function () {
  myLeads.push(inputEl.value);
  localStorage.setItem('myLeads', JSON.stringify(myLeads));
  inputEl.value = '';

  render(myLeads);

  // console.log(myLeads)
});
function render(leads) {
  let listItems = '';
  for (let i = 0; i < leads.length; i++) {
    listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `;
  }
  ulEl.innerHTML = listItems;
}
