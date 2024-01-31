import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AuthButton() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    await supabase.auth.signOut();
    return redirect("/login");
  };

  return user ? (
    <div className="flex items-center gap-10">
      <span className="text-primary"> Hey, {user.email} </span>
      <form action={signOut}>
        <button className="py-2 px-4 rounded-md no-underliner border border-red-500 text-red-500 hover:text-white hover:bg-red-500 transition duration-300">
          Logout
        </button>
      </form>
    </div>
  ) : (
    <Link
      href="/login"
      className="py-2 px-3 flex rounded-md no-underline border border-green-400 text-greenborder-green-400 hover:text-white hover:bg-greenborder-green-400 transition duration-300"
    >
      Login
    </Link>
  );
}
