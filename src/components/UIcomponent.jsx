import React, {useState, useEffect} from 'react'
import Button from './Button'
import Checkbox  from './Checkbox'
import Dropdownmenu from './Dropdownmenu'
import TextField from './Textfield'
import Typography from './Typography'
import Chip from './Chip'
import Dialog from './dialog'
import Loading from './Loading'


function UIcomponent() {
    const [chips, setChips] = useState([
        'JavaScript', 'React', 'Tailwind CSS', 'Node.js'
      ]);
    
    const handleChipRemove = (chipToRemove) => {
        setChips(chips.filter(chip => chip !== chipToRemove));
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
          setLoading(false); 
        }, 3000);
      }, []);


  return (
    <div className='bg-cyan-100 h-178'>
        <div className='flex flex-wrap justify-around px-8 py-16 '>
            <div className='w-80 gap-8 px-4 py-10 bg-green-300 rounded-lg flex flex-col items-center'>
                <h1 className='text-center text-xl font-bold'>Button Component</h1>
                <Button text="Login" onClick={() => alert("Login Clicked!")} />
                    {/* disable button  */}
                <Button text="Logout" disabled />
            </div>

            {/* checkbox */}
            <div className="w-80 gap-4 p-4 bg-green-300 rounded-lg flex flex-col ">
                <h1 className="text-center text-xl font-bold">Checkbox Component</h1>
                <Checkbox label="Notebook" defaultChecked={true} />
                <Checkbox label="Mobile" defaultChecked={false} />
                <Checkbox label="Watch" defaultChecked={false} />
            </div>

            {/* dropdown */}
            <div className="w-80 gap-8 p-4 bg-green-300 rounded-lg flex flex-col items-center">
                <h1 className="text-center text-xl font-bold">Dropdown Component</h1>
                <Dropdownmenu/>
            </div>

            {/* TextField */}
            <div className="w-80 gap-4 p-4 bg-green-300 rounded-lg flex flex-col items-center">
                <h1 className="text-center text-xl font-bold">TextField Component</h1>
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

        <div className='flex flex-wrap justify-around px-4 py-8'>
            {/* Typography */}
            <div className="w-80 gap-4 h-60 p-4 bg-green-300 rounded-lg flex flex-col items-center">
                <h1 className="text-center text-xl font-bold mb-4">Typography Component</h1>

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
            <div className="w-80 gap-4 p-4 bg-green-300 rounded-lg flex flex-col items-center">

                <h1 className="text-center text-xl font-bold mb-4">Chip Component</h1>

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
            <div className="w-80 gap-4 p-4 bg-green-300 rounded-lg flex flex-col items-center">
                <h1 className="text-center mb-4 text-xl font-bold">Dialog Component</h1>

                <button
                    onClick={handleOpenModal}
                    className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600"
                >
                    Open Modal
                </button>

                <Dialog
                    isOpen={isModalOpen} 
                    onClose={handleCloseModal} 
                    title="Sample Modal"
                >
                    <p>This is a sample modal dialog content.</p>
                </Dialog>
            </div>
        
            {/* Loading */}
            <div className="w-80 gap-4 p-4 bg-green-300 rounded-lg flex flex-col items-center">
                <h1 className="text-center mb-4 text-xl font-bold">Loading/Spinner Component</h1>
                {loading ? (
                    <Loading />
                    ) : (
                    <h1 className="text-center text-xl font-semibold">Content Loaded!</h1>
                )}
            </div>

        </div>
    </div>
  )
}

export default UIcomponent
