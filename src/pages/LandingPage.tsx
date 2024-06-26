import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../cmps/Header';
import DynamicButton from '../shared/Button';
import TextInput from '../shared/TextInput';
import DynamicTitle from '../shared/Title';

const LandingPage: React.FC = () => {

  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const navigateToSearchRe = ()=>{
    // need to figure out
    // navigate(`/search-results?query=${encodeURIComponent(inputValue)}`);
  }

  

  return (
    <div className="landing-page flex column full-width">
      <div className='view-full-height'>
      <Header />
      <div className="content-container flex column align-center justify-center full-width">
        <DynamicTitle
          text="Find your next Talent"
          style={{ fontSize: '36px', fontWeight: '600', lineHeight: '1.25', letterSpacing: '5px' }}
        />
        <div className="input-section flex align-center gap-large margin-large-t">
        <TextInput
            type="text"
            name="search"
            label="Role"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <DynamicButton text="Search" className='btn main-btn margin-medium-l' onClick={navigateToSearchRe}/>
        </div>
      </div>
      </div>
      {/* <div className='view-full-height'>
      <ReasonsToUseList/>
      </div> */}
    </div>
  );
};

export default LandingPage;
