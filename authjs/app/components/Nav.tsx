import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <Link href="/home">
            <h1 className="text-2xl font-semibold text-primary">BIRD.</h1>
          </Link>
        </div>
        <div>
          <Button>Sign in</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
