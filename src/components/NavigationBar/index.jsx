import React from 'react'
import LeftNav from './LeftNav'
import SearchBar from './SearchBar'
import RightNav from './RightNav'
import { BiArrowBack } from 'react-icons/bi'
import { ImSearch } from 'react-icons/im'
import { MdKeyboardVoice } from 'react-icons/md'

const NavigationBar = () => {

  const specialSearchBarRender = (
    <div className='special_searchbar'>
      <button>
        <BiArrowBack size={25} />
      </button>
      <form>
        <input type='text' name='search' placeholder='Search' />
        <button type='submit'>
          <ImSearch size={20} />
        </button>
      </form>
      <button className='icon-container voiceIcon'>
        <MdKeyboardVoice size={25} />
      </button>
    </div>
  )

  return (
    <nav className='Navbar'>
      <LeftNav />
      <SearchBar />
      <RightNav />
    </nav>
  )
}

export default NavigationBar