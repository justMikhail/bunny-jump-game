const getAll = (selector, parent = document) => [...parent.querySelectorAll(selector)]

const hide = (val) => {
  const arr = typeof val === 'string' ? getAll(val) : [...val];
  arr.forEach((index) => {
    index.style.display = 'none';
  });
};

const show = (val) => {
  const arr = typeof val === 'string' ? getAll(val) : [...val];
  arr.forEach((index) => {
    index.style.display = '';
  });
};
