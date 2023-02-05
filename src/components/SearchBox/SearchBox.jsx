import toast from 'react-hot-toast';

import { Input , Icon, SearchForm} from './SearchBox.styled';

export const  Searchbar =({handleOnSubmit,isLoading})=>{
  


 const  onSearch = (e) => {
      e.preventDefault();
      
      const input = e.target.elements.searchQuery.value

      if (input === '') {
          toast.error('Search field is empty!');
          
          return
      }
     handleOnSubmit(input)
     e.target.reset()
  }
    
        return (
   
  <SearchForm onSubmit={onSearch}>
    <button type="submit" className="SearchForm-button"disabled={isLoading} ><Icon className="icon"/>
    </button>

        <Input name="searchQuery"
      className="SearchForm-input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search movies"
    />
  </SearchForm>

  )
    

}