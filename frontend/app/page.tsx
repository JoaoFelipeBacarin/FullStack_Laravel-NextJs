export default function Home() {
  return (
    <main>
      <div className="h-screen flex justify-center items-center px-5">
        <form className="bg-slate-600 p-12 rounded-lg w-96 max-w-full flex justify-center items-center flex-col gap-2">
          <h2 className="font-bold text-xl mb-3">Faça seu Login</h2>
          <input
            type="email"
            placeholder="Email"
            className="input input-primary"
          />
          <input
            type="password"
            placeholder="Senha"
            className="input input-primary"
          />
          <button className="btn btn-primary w-full">Login</button>
        </form>
      </div>
    </main>
  );
}
