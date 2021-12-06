const renderContactsListItem = (person) => {
  const li = document.createElement("li");
  const strong = document.createElement("strong");

  strong.innerText = person.name || "";

  li.setAttribute("data-person-id", person.id);

  li.appendChild(strong);

  li.addEventListener("click", function () {
    console.log(this);
  });

  return li;
};

const renderContactsList = (data) => {
  const contactsList = document.querySelector("#contactsList");
  const fragment = document.createDocumentFragment();

  Object.values(data).forEach((person) => {
    fragment.appendChild(renderContactsListItem(person));
  });

  contactsList.appendChild(fragment);
};

import data from "../../data.json";

const normilizeData = (data) => {
  const newData = {};
  const popularity = {};

  data.forEach((t) => {
    newData[t.id] = t;

    t.friends.forEach((id) => {
      if (popularity[id]) popularity[id] += 1;
      else popularity[id] = 1;
    });
  });

  Object.keys(popularity).forEach((personId) => {
    newData[personId].popularity = popularity[personId];
  });

  return newData;
};

const _data = normilizeData(data);

renderContactsList(_data);
