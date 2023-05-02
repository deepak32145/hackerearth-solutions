var mergeTwoLists = function (list1, list2) {
  const newArr = [...list1, ...list2];
  return newArr.sort((a, b) => a - b);
};

const list1 = [];
const list2 = [0];

console.log(mergeTwoLists(list1, list2));
