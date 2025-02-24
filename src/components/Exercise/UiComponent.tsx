import React, { useState } from 'react'
import Button from '../common/Button'
import Checkbox  from '../common/CheckBox'
import Dropdownmenu from '../common/Dropdown'
import TextField from '../common/TextField'
import Typography from '../common/TypoGraphy'
import Chip from '../common/Chip'
import Dialog from '../common/Dialog'
import Loading from '../common/Loading'


const UIcomponent:React.FC = () => {
    const [chips, setChips] = useState<string[]>([
        'JavaScript', 'React', 'Tailwind CSS', 'Node.js'
      ]);
    
    const handleChipRemove = (chipToRemove:string) => {
        setChips(chips.filter(chip => chip !== chipToRemove));
    };

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleOpenModal = ():void => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = ():void => {
      setIsModalOpen(false);
    };


  return (
    <div className='bg-gray-800 h-full'>
        <div className='flex flex-wrap justify-around px-4 py-12'>
            <div className='w-80 gap-2 px-4 py-6 m-4 bg-gray-700 rounded-lg flex flex-col items-center'>
                <h1 className='text-center text-2xl font-bold text-white'>Button Component</h1>
                <Button text="Login" onClick={() => alert("Login Clicked!")} />
                    {/* disable button  */}
                <Button text="Logout" disabled />
            </div>

            {/* checkbox */}
            <div className="w-80 gap-4 px-4 py-6 m-4 bg-gray-700 rounded-lg flex flex-col text-white">
                <h1 className="text-center text-2xl font-bold">Checkbox Component</h1>
                <Checkbox label="Notebook" defaultChecked={true} />
                <Checkbox label="Mobile" defaultChecked={false} />
                <Checkbox label="Watch" defaultChecked={false} />
            </div>

            {/* dropdown */}
            <div className="w-80 gap-8 px-4 py-6 m-4 bg-gray-700 rounded-lg flex flex-col items-center ">
                <h1 className="text-center text-2xl font-bold text-white">Dropdown Component</h1>
                <Dropdownmenu/>
            </div>

            {/* TextField */}
            <div className="w-80 gap-4 px-4 py-6 m-4 bg-gray-700 rounded-lg flex flex-col items-center">
                <h1 className="text-center text-2xl font-bold text-white">TextField Component</h1>
                <TextField 
                    type="text"
                    label="Username" 
                    placeholder="Enter your name "
                />
                <TextField 
                    type="password"
                    label="Password" 
                    placeholder="Enter your password"
                />
            </div>
       
        </div>

        <div className='flex flex-wrap justify-around p-4'>
            {/* Typography */}
            <div className="w-80 gap-4 h-60 px-4 py-6 m-4 bg-gray-700 rounded-lg flex flex-col items-center ">
                <h1 className="text-center text-2xl font-bold  text-white">Typography Component</h1>

                <Typography variant="h4" className="text-center">
                    This is a Heading 1
                </Typography>
                <Typography variant="h3" className="text-center mt-2">
                    This is a Heading 2
                </Typography>
                <Typography variant="h2" className="text-center mt-2">
                    This is a Heading 3
                </Typography>
            </div>
      
            {/* Chip */}
            <div className="w-80 gap-4 px-4 py-6 m-4 bg-gray-700 rounded-lg flex flex-col items-center">

                <h1 className="text-center text-2xl font-bold mb-4 text-white">Chip Component</h1>

                <div className="flex flex-wrap gap-4 justify-center">
                {chips.map((chip, index) => (
                    <Chip 
                    key={index} 
                    label={chip} 
                    onClose={() => handleChipRemove(chip)} 
                    color="gray" 
                    />
                ))}
                </div>
            </div>

            {/* Dialog */}
            <div className="w-80 gap-4 px-4 py-6 m-4 bg-gray-700 rounded-lg flex flex-col items-center">
                <h1 className="text-center mb-4 text-2xl font-bold text-white">Dialog Component</h1>

                <button
                    onClick={handleOpenModal}
                    className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 cursor-pointer"
                >
                    Open Modal
                </button>

                <Dialog
                    isOpen={isModalOpen} 
                    onClose={handleCloseModal} 
                    title="Dialog Box"
                >
                    <p>Are you sure to proceed.</p>
                </Dialog>
            </div>
        
            {/* Loading */}
            <div className="w-80 gap-4 px-4 py-6 m-4 bg-gray-700 rounded-lg flex flex-col items-center">
                <h1 className="text-center mb-4 text-2xl font-bold text-white">Loading Component</h1>
                    <Loading text="Loading..." className="w-8 h-8" />
            </div>

        </div>
    </div>
  )
}

export default UIcomponent
