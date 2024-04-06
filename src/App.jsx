import { useState } from 'react'

const wordGroups = [
  {
    level: 'easy',
    color: 'yellow',
    title: 'fruits',
    words: ['apple', 'banana', 'cherry', 'dates']
  },
  {
    level: 'medium',
    color: 'green',
    title: 'animals',
    words: ['elephant', 'giraffe', 'hippopotamus', 'iguana']
  },
  {
    level: 'difficult',
    color: 'blue',
    title: 'countries',
    words: ['australia', 'brazil', 'canada', 'denmark']
  },
  {
    level: 'hard',
    color: 'purple',
    title: 'programming languages',
    words: ['javascript', 'python', 'typescript', 'ruby']
  }
]


function App() {

  const allWords = wordGroups.map(group => group.words).flat()

  const [shuffledWords, setShuffledWords]  = useState(allWords.sort(() => Math.random() - 0.5))

  const handleShuffle = () => {
    setShuffledWords(allWords.sort(() => Math.random() - 0.5))
  }

  return (
    <div className='min-h-screen bg-gray-50 flex flex-col gap-5 justify-center items-center'>
      <h5 className='text-2xl font-bold text-gray-800 mt-6'>Connections</h5>
      <p className='text-gray-600 italic'>Create four groups of four!</p>

      <div className='grid grid-cols-4 gap-5'>
        {shuffledWords.map(word => (
          <button key={word} className='bg-gray-200 hover:bg-gray-300 uppercase p-5 rounded-lg shadow-md flex justify-center items-center'>
            <h5 className='text-lg font-medium text-gray-800 cursor-pointer'>{word}</h5>
          </button>
        ))}
      </div>
    </div>
  )
}

export default App
