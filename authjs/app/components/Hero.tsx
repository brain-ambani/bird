import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="max-w-5xl mx-auto mt-10 text-2xl flex flex-col items-center">
      <h2 className="text-7xl font-semibold my-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-700">
        The data-driven CRM for modern teams.
      </h2>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        magni velit dolorum. Nobis, nam corporis. At voluptate labore,
        exercitationem.
      </p>
      <Button className="my-5 font-semibold text-2xl py-2 px-4">Sign up</Button>
      <p>
        Already have an account?{" "}
        <span className=" text-decoration-line hover:cursor-pointer">
          Sign in
        </span>
      </p>
    </div>
  );
};

export default Hero;
