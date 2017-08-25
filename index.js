function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n) {
  const elements = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < elements.length; i++) {
    elements[i].innerHTML = (parseInt(elements[i].innerHTML, 10) + n).toString();
  }

}

function deepestChild() {
  const parent = document.querySelector('div#grand-node')
  const children = parent.querySelectorAll('*')

  for (let i = 0; i < children.length; i++) {
    if (children[i].querySelectorAll('*').length === 0) {
      return children[i]
    }
  }
}
