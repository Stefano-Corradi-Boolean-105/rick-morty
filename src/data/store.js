import { reactive } from 'vue';

// le proprietà dello'oggetto reactive sono proprità reattive 
export const store = reactive({
  apiUrl: 'https://rickandmortyapi.com/api/character',
  charctersList: [],
  nameToSearch: '',
  statusToSearch: '',
  isLoading: true,
  statusList:[]
})