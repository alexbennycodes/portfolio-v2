export const Contact = () => {
  return (
    <section className="pb-32">
      <h2 className="text-center text-themeColor mb-8">Get In Touch</h2>
      <form
        name="register"
        className="form"
        onsubmit="event.preventDefault(); return validateForm(this);"
      >
        <div className="form-control relative w-full h-12 mb-10">
          <input
            type="text"
            name="name"
            placeholder="name"
            id="name"
            className="form-input w-full text-base top-0 left-0 px-3  py-4 z-[1] outline-none border-themeColor border-2 bg-transparent text-white bg-clip-padding transition-all ease-in-out duration-300 placeholder:hidden placeholder:opacity-0 placeholder:invisible"
          />
          <label
            for="name"
            className="form-label absolute text-base left-3 top-3 py-1 px-2 bg-black text-white transition-all ease-in-out duration-300"
          >
            Your name
          </label>
          <span className="form-check">
            <i className="ion-success ion-md-checkmark-circle"></i>
            <i className="ion-invalid ion-md-information-circle"></i>
          </span>
        </div>
      </form>
      <button
        //   onClick=
        className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-white group"
      >
        <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-themeColor rounded-full blur-md ease"></span>
        <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
          <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-[#ff5983] rounded-full blur-md"></span>
          <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-themeColor rounded-full blur-md"></span>
        </span>
        <span className="relative text-white">Submit</span>
      </button>
    </section>
  );
};
