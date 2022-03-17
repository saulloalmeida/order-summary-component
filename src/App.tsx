const ImageAvatarSound = () => {
  return (
    <img
      className="w-12 h-12 border border-white rounded-full"
      src="/assets/images/icon-music.svg"
      alt=""
    />
  );
};
const ImageHeaderCard = () => {
  return (
    <img
      className="rounded-t-xl"
      src="/assets/images/illustration-hero.svg"
      alt=""
    />
  );
};
const PriceSelect = () => {
  return (
    <div
      className={`
    bg-blue-desaturated/10 flex flex-row justify-between items-center text-soft-blue
  rounded-lg
`}
    >
      <div className="flex space-x-4 p-3">
        <ImageAvatarSound />
        <div className="flex flex-col">
          <p className="text-blue-dark font-bold text-lg">Annual Plan</p>
          <span className="text-blue-desaturated">$59.99/year</span>
        </div>
      </div>
      <a
        href=""
        className="text-blue-bright underline pr-4 hover:text-blue-bright/60"
      >
        Change
      </a>
    </div>
  );
};

function App() {
  return (
    <div
      className={`
    bg-blue-pale min-h-screen flex flex-col justify-center items-center
  `}
    >
      <div
        className={`
        flex flex-col justify-center items-center
        bg-blue-very-pale rounded-xl shadow-md
        w-96
      `}
      >
        <ImageHeaderCard />
        <p
          className={`
        text-blue-dark text-2xl font-bold
        pt-6 pb-4
        `}
        >
          Order Summary
        </p>
        <span className={`text-blue-desaturated text-center px-6 pb-4`}>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </span>
        <div className="flex flex-col w-10/12 space-y-5">
          <PriceSelect />
          <button
            className={`
          bg-blue-bright rounded-lg shadow-lg px-6 py-2 text-white
          hover:bg-blue-bright/60
        `}
          >
            Proceed to Payment
          </button>
          <button className="pb-6 text-blue-desaturated hover:text-black">
            Cancel Order
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
