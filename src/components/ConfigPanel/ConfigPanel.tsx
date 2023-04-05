import React, { useState } from 'react';

const ConfigPanel = () => {
  const [showConfigPanel, setShowConfigPanel] = useState(true);
  const [checked, setChecked] = useState({ option1: false, option2: false });
  const [textInput, setTextInput] = useState({ input1: '', input2: '' });

  const toggleConfigPanel = () => {
    setShowConfigPanel(!showConfigPanel);
  };

  const handleCheckboxChange = (e) => {
    setChecked({ ...checked, [e.target.name]: e.target.checked });
  };

  const handleTextInputChange = (e) => {
    setTextInput({ ...textInput, [e.target.name]: e.target.value });
  };

  return (
    <>
      <button
        onClick={toggleConfigPanel}
        className="bg-gray-500 text-white p-2 md:fixed md:top-2 md:right-2"
      >
        {showConfigPanel ? 'Hide Config Panel' : 'Show Config Panel'}
      </button>
      {showConfigPanel && (
        <div className="w-full md:w-1/4 h-full bg-gray-500 text-white p-4">
          <div>
            <label>
              <input
                type="checkbox"
                name="option1"
                checked={checked.option1}
                onChange={handleCheckboxChange}
              />
              Option 1
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="option2"
                checked={checked.option2}
                onChange={handleCheckboxChange}
              />
              Option 2
            </label>
          </div>
          <div>
            <label>
              Input 1:
              <input
                type="text"
                name="input1"
                value={textInput.input1}
                onChange={handleTextInputChange}
              />
            </label>
          </div>
          <div>
            <label>
              Input 2:
              <input
                type="text"
                name="input2"
                value={textInput.input2}
                onChange={handleTextInputChange}
              />
            </label>
          </div>
        </div>
      )}
    </>
  );
};

export default ConfigPanel;