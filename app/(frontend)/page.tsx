import { SELECTALL } from "../(backend)/api/(modules)/cycles/services";
import MainList from "./(modules)/mainList";

export default async function Home() {
  const data = await SELECTALL()
  console.log(data);
  

  return (
    <>
      <main className="p-4">
        <h1>Geek Bee <strong>lms</strong></h1>
        <div className="pl-4">
          <MainList data={data}/>
          
        </div>
      </main>
      <footer className="mt-10">
        <h1>todos</h1>
        everething
      </footer>
    </>
  );
}
