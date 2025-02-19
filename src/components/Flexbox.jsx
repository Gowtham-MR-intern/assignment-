import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

function Flexbox() {
  // State variables for various flex properties.
  const [flexDirection, setFlexDirection] = useState("row");
  const [flexWrap, setFlexWrap] = useState("nowrap");
  const [justifyContent, setJustifyContent] = useState("start");
  const [alignItems, setAlignItems] = useState("start");
  const [alignContent, setAlignContent] = useState("start");

  // State for dynamically adding items and selected item
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeTab, setActiveTab] = useState("container");

  // Function to add new items dynamically
  const addItem = () => {
    setItems((prevItems) => [...prevItems, { 
      name: `Item ${prevItems.length + 1}`, 
      flexGrow: 0, 
      flexShrink: 1, 
      flexBasis: 'auto', 
      alignSelf: 'auto', 
      order: 0
    }]);
  };

  // Function to always delete the last item
  const deleteLastItem = () => {
    setItems((prevItems) => prevItems.slice(0, prevItems.length - 1));
  };

  // Function to update the selected item's CSS properties
  const updateItemProperty = (index, property, value) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[index] = {
        ...updatedItems[index],
        [property]: value,
      };
      return updatedItems;
    });
  };

  const handleItemClick = (index) => {
    if (selectedItem === index) {
      setSelectedItem(null);
      setActiveTab("container");
    } else {
      setSelectedItem(index);
      setActiveTab("items");
    }
  };

  const handlePropertyChange = (property, value) => {
    if (selectedItem !== null) {
      const parsedValue = property === "flexGrow" || property === "flexShrink" || property === "order" ? parseInt(value, 10) : value;
      updateItemProperty(selectedItem, property, parsedValue);
    }
  };

  // Mapping objects to convert selected values into Tailwind CSS classes.
  const flexDirectionClasses = {
    row: "flex-row",
    "row-reverse": "flex-row-reverse",
    column: "flex-col",
    "column-reverse": "flex-col-reverse"
  };

  const flexWrapClasses = {
    nowrap: "flex-nowrap",
    wrap: "flex-wrap",
    "wrap-reverse": "flex-wrap-reverse"
  };

  const justifyContentClasses = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly"
  };

  const alignItemsClasses = {
    stretch: "items-stretch",
    start: "items-start",
    center: "items-center",
    end: "items-end",
    baseline: "items-baseline"
  };

  const alignContentClasses = {
    stretch: "content-stretch",
    start: "content-start",
    center: "content-center",
    end: "content-end",
    between: "content-between",
    around: "content-around",
  };

  // Compose the dynamic Tailwind CSS class string.
  const flexClasses = `flex 
    ${flexDirectionClasses[flexDirection]} 
    ${flexWrapClasses[flexWrap]} 
    ${justifyContentClasses[justifyContent]} 
    ${alignItemsClasses[alignItems]} 
    ${alignContentClasses[alignContent]} 
    h-full p-4 border rounded-md bg-gray-100 overflow-auto`;

  return (
    <div className="flex h-screen bg-white overflow-hidden ">
      {/* Sidebar */}
      <div className="w-75 flex-none bg-gray-800 text-white h-screen p-4 overflow-y-auto">
        

        {/* Tab Navigation */}
        <div className="flex mb-4">
          <button 
            className={`flex-1 p-2 ${activeTab === "container" ? "bg-gray-600" : "bg-gray-700"}`} 
            onClick={() => setActiveTab("container")}
          >
            Container
          </button>
          <button 
            className={`flex-1 p-2 ${activeTab === "items" ? "bg-gray-600" : "bg-gray-700"}`} 
            onClick={() => setActiveTab("items")}
          >
            Items
          </button>
        </div>

          <button 
            onClick={addItem} 
            className="w-full bg-blue-500 text-white p-2 rounded mb-4 hover:bg-blue-600"
          >
            Add Item
          </button>
        {activeTab === "container" && (
          <div>
            <h2 className="text-xl font-bold mb-4">Flex Settings</h2>
            <p className="text-blue-900 font-small text-sm bg-blue-200 p-2 mb-4">
              Edit properties of the flex container here. Click an item to the right to edit its properties.
            </p>

            {/* Flex Direction */}
            <div className="mb-4">
              <label className="block mb-2">Flex Direction</label>
              <select
                onChange={(e) => setFlexDirection(e.target.value)}
                className="w-full bg-gray-500 text-white p-2 rounded"
              >
                <option value="row">Row</option>
                <option value="row-reverse">Row Reverse</option>
                <option value="column">Column</option>
                <option value="column-reverse">Column Reverse</option>
              </select>
            </div>

            {/* Flex Wrap */}
            <div className="mb-4">
              <label className="block mb-2">Flex Wrap</label>
              <select
                onChange={(e) => setFlexWrap(e.target.value)}
                className="w-full bg-gray-500 text-white p-2 rounded"
              >
                <option value="nowrap">No Wrap</option>
                <option value="wrap">Wrap</option>
                <option value="wrap-reverse">Wrap Reverse</option>
              </select>
            </div>

            {/* Justify Content */}
            <div className="mb-4">
              <label className="block mb-2">Justify Content</label>
              <select
                onChange={(e) => setJustifyContent(e.target.value)}
                className="w-full bg-gray-500 text-white p-2 rounded"
              >
                <option value="start">Flex Start</option>
                <option value="center">Center</option>
                <option value="end">Flex End</option>
                <option value="between">Space Between</option>
                <option value="around">Space Around</option>
                <option value="evenly">Space Evenly</option>
              </select>
            </div>

            {/* Align Items */}
            <div className="mb-4">
              <label className="block mb-2">Align Items</label>
              <select
                onChange={(e) => setAlignItems(e.target.value)}
                className="w-full bg-gray-500 text-white p-2 rounded"
              >
                <option value="start">Flex Start</option>
                <option value="center">Center</option>
                <option value="end">Flex End</option>
                <option value="stretch">Stretch</option>
                <option value="baseline">Baseline</option>
              </select>
            </div>

            {/* Align Content */}
            <div className="mb-4">
              <label className="block mb-2">Align Content</label>
              <select
                onChange={(e) => setAlignContent(e.target.value)}
                className="w-full bg-gray-500 text-white p-2 rounded"
              >
                
                <option value="start">Flex Start</option>
                <option value="center">Center</option>
                <option value="end">Flex End</option>
                <option value="stretch">Stretch</option>
                <option value="between">Space Between</option>
                <option value="around">Space Around</option>
              </select>
            </div>
          </div>
        )}
        
        {activeTab === "items" && selectedItem === null &&(
          <div>
            <p className="text-blue-900 font-small bg-blue-200 p-2 mb-4">
            Add an item in the other tab first.
            </p>
          </div>
        )}


        {activeTab === "items" && selectedItem !== null && items[selectedItem] && (
          <div>
            <h2 className="text-xl font-bold mb-4">Item Settings</h2>
            <p className="text-blue-900 font-small text-sm bg-blue-200 p-2 mb-4">
              Edit properties of the flex items here. The selected item will have a green border. Click the selected item again to stop editing it.
            </p>

            {/* Order */}
            <div className="mb-4">
              <label className="block mb-2">Order</label>
              <input
                type="number"
                value={items[selectedItem].order}
                onChange={(e) => handlePropertyChange("order", e.target.value)}
                className="w-full bg-gray-500 text-white p-2 rounded"
              />
            </div>

            {/* Flex Grow */}
            <div className="mb-4">
              <label className="block mb-2">Flex Grow</label>
              <input
                type="number"
                value={items[selectedItem].flexGrow}
                onChange={(e) => handlePropertyChange("flexGrow", e.target.value)}
                className="w-full bg-gray-500 text-white p-2 rounded"
              />
            </div>

            {/* Flex Shrink */}
            <div className="mb-4">
              <label className="block mb-2">Flex Shrink</label>
              <input
                type="number"
                value={items[selectedItem].flexShrink}
                onChange={(e) => handlePropertyChange("flexShrink", e.target.value)}
                className="w-full bg-gray-500 text-white p-2 rounded"
              />
            </div>

            {/* Flex Basis */}
            <div className="mb-4">
              <label className="block mb-2">Flex Basis</label>
              <input
                type="text"
                value={items[selectedItem].flexBasis}
                onChange={(e) => handlePropertyChange("flexBasis", e.target.value)}
                className="w-full bg-gray-500 text-white p-2 rounded"
              />
            </div>

            {/* Align Self */}
            <div className="mb-4">
              <label className="block mb-2">Align Self</label>
              <select
                value={items[selectedItem].alignSelf}
                onChange={(e) => handlePropertyChange("alignSelf", e.target.value)}
                className="w-full bg-gray-500 text-white p-2 rounded"
              >
                <option value="auto">Auto</option>
                <option value="flex-start">Flex Start</option>
                <option value="center">Center</option>
                <option value="flex-end">Flex End</option>
                <option value="stretch">Stretch</option>
                <option value="baseline">Baseline</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Main content area */}
      <div className="flex-1 p-4">
        <div className={flexClasses}>
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => handleItemClick(index)} 
              className={`bg-gray-300 p-4 mx-2 my-2 rounded-md shadow flex items-center justify-between cursor-pointer ${selectedItem === index ? 'border-2 border-green-500' : ''}`}
              style={{
                flexGrow: item.flexGrow,
                flexShrink: item.flexShrink,
                flexBasis: item.flexBasis,
                alignSelf: item.alignSelf,
                order: item.order
              }}
            >
              
              <span>{item.name}</span>
              {/* Delete button/icon that always deletes the last item */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); //handled bubbling
                  deleteLastItem();
                }}
                className="text-red-400 hover:text-red-700 mx-2 cursor-pointer"
                title="Delete Last Item"
              >
                <FaTrash size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Flexbox;