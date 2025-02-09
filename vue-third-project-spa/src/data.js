import { ref } from 'vue'

const pagesKey = "pages";
let pagesJson = localStorage.getItem(pagesKey);
const pagesStore = ref(JSON.parse(pagesJson));

function save() {
  localStorage.setItem(pagesKey, JSON.stringify(pagesStore.value));
}

export default {
  addPage(page) {
    pagesStore.value.push(page);
    save();
  },

  getAllPages() {
    return pagesStore.value;
  },

  getSinglePage(index) {
    return pagesStore.value[index];
  },

  editPage(index, page) {
    pagesStore.value[index] = page;
    save();
  },

  removePage(index) {
    pagesStore.value.splice(index, 1);
    save();
  },
};