import { Icon_MapPin } from "./components/Icon";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 min-h-screen p-10">
      <div className="grid grid-cols-1 w-full">
        <div className="card card-side border bg-base-100 shadow-xl w-full">
          <div className="card-body justify-between">
            <div>
              <h1 className="card-title">Weather</h1>
              <p className="flex gap-2">
                <span><Icon_MapPin /></span>Undefined Location
              </p>
            </div>
            <span className="flex flex-col">
              <p className="text-6xl">24°</p>
              <p>Weather Conditions</p>
            </span> 
          </div>

          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              alt="Movie" />
          </figure>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 w-full">
        <div className="card card-side bg-base-100 shadow-xl w-full">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl w-full">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 w-full">
        <div className="card card-side bg-base-100 shadow-xl w-full">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl w-full">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
