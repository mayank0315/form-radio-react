import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [gender, setGender] = useState('');
  const [error, seterror] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Gender:', gender);
  };

  return (
    <div className='rounded mx-auto w-[80%] mt-10 p-5 bg-zinc-200'>

    

    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <div className="flex items-center">
        <label htmlFor="username" className="mr-2">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onInput={() => username.length < 4 ?seterror(true) :seterror(false)}

          required
          className="border rounded p-2"
        />
      </div>
      {error && <p className="text-red-800"> Username must be at least 5</p>}


      <div className="flex items-center">
        <label htmlFor="gender" className="mr-2">Gender:</label>
        <div className="flex space-x-2">
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={gender === 'male'}
            onChange={(e) => setGender(e.target.value)}
            className="mr-1"
          />
          <label htmlFor="male">Male</label>
        </div>
        <div className="flex space-x-2">
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={gender === 'female'}
            onChange={(e) => setGender(e.target.value)}
            className="mr-1"
          />
          <label htmlFor="female">Female</label>
        </div>
        <div className="flex space-x-2">
          <input
            type="radio"
            id="others"
            name="gender"
            value="others"
            checked={gender === 'others'}
            onChange={(e) => setGender(e.target.value)}
            className="mr-1"
          />
          <label htmlFor="others">Others</label>
        </div>
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>

    </div>
  );
}

export default App;