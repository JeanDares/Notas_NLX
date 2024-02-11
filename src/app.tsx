import logo from './assets/logo-nlw-experts.svg'
import { NewNoteCard } from './componets/new-note-card'
import { NoteCard } from './componets/node-card'

const note = {
  date: new Date(),
  content: 'Wello word'
}

export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12  space-y-6"> 
      <img src={logo} alt="Logo" />
      <form className='w-full'>
        <input 
          type="text" 
          placeholder='Busque suas notas' 
          className='w-full bg-transparent text-3xl font-semibold -tracking-tighter outline-none placeholder:text-slate-500'/>
      </form>
      <div className='h-px bg-slate-400'></div>

      <div className='grid grid-cols-3 gap-6 auto-rows-[250px]'>
       <NewNoteCard></NewNoteCard>
        <NoteCard note={note} />
      </div>
    </div>
  )
  
}


