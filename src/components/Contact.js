import { useForm } from "react-hook-form";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <section className="pb-32">
      <h2 className="text-center text-themeColor mb-8">Get In Touch</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Your name"
          {...register("name", { required: true, maxLength: 80 })}
          className="form-input"
        />

        <input
          type="text"
          placeholder="Email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          className="form-input"
        />
        <input
          type="text"
          placeholder="Subject"
          {...register("subject", { required: true, maxLength: 100 })}
          className="form-input"
        />
        <textarea
          type="text"
          placeholder="Your message..."
          {...register("message", { required: true, maxLength: 1000 })}
          className="form-input"
          rows="10"
        />

        <input type="submit" className="hidden"/>
        <button
        //   onClick=
          class="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-white group"
        >
          <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-themeColor rounded-full blur-md ease"></span>
          <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
            <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-[#ff5983] rounded-full blur-md"></span>
            <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-themeColor rounded-full blur-md"></span>
          </span>
          <span class="relative text-white">Submit</span>
        </button>
      </form>
    </section>
  );
};
