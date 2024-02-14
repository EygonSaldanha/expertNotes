import logo from "./assets/logo-nlw-expert.svg"

export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="nlw expert"/>

      <form className="w-full">
        <input 
          type="text" 
          placeholder="Busque me suas notas" 
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
          />
      </form>

      <div className="h-px bg-slate-700"/>

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <div className="rounded-md bg-slate-700 p-5 space-y-3">
          <span className="text-sm font-medium text-slate-200">Adicionar nota</span>

          <p className="text-sm leading-6 text-slate-400">
            Grave uma nota em áudio que será convertida para texto</p>
        </div>

        <div className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden">
          <span className="text-sm font-medium text-slate-300">Adicionar nota</span>

          <p className="text-sm leading-6 text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ratione quod facilis est velit rem, sapiente cum magni vel obcaecati quis tenetur modi nisi iure ipsam doloribus cupiditate odio assumenda.
            </p>
        </div>

        <div className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden">
          <span className="text-sm font-medium text-slate-300">Adicionar nota</span>

          <p className="text-sm leading-6 text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ratione quod facilis est velit rem, sapiente cum magni vel obcaecati quis tenetur modi nisi iure ipsam doloribus cupiditate odio assumenda.
            </p>
        </div>
        
      </div>
    </div>
  )
}
