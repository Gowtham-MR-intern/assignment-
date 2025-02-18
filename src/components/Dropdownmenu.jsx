import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dropdownmenu() {
  const navigate = useNavigate();

  const handleChange = (event) => {
    const value = event.target.value;
    if (value) {
      navigate(value);
    }
  };

    return (
        <div className="w-50 gap-4 bg-white rounded-lg flex flex-col items-center">
            
            <select
                className="w-full p-2 rounded-md cursor-pointer"
                onChange={handleChange}
            >
                <option value="/">Home</option>
                <option value="/flexbox">Flexbox</option>
                <option value="/fetch">Fetch API</option>
                <option value="/uicomponent">UI Component</option>
            </select>
        </div>
    );
}

export default Dropdownmenu;
