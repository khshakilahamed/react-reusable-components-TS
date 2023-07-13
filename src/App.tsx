import Buttons from "./pages/Buttons";

function App() {
  return (
    <>
      <h2 className="text-center text-3xl py-3 font-bold border border-x-0 border-t-0">
        Reusable components
      </h2>
      <div className="w-full flex">
        <div className="px-10 py-5 border border-y-0 border-l-0 fixed overflow-auto overflow-x-hidden">
          <h2 className="text-2xl font-semibold mb-3">Components</h2>
          <ul>
            <li className="cursor-pointer">
              <a href="#buttons">Buttons</a>
            </li>
            <li className="cursor-pointer">
              <a href="#alerts">Alerts</a>
            </li>
            <li className="cursor-pointer">
              <a href="#tables">Tables</a>
            </li>
          </ul>
        </div>

        <div className="my-5 w-full flex justify-center overflow-auto">
          <div className="flex flex-col gap-5 w-max-[600px]">
            <Buttons />
            {/* 
            <hr />
            <Alerts />
            <hr />
            <Tables /> */}
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
