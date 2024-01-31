// 'use client'
import { createClient } from "@/utils/supabase/server";

// import { useEffect, useState } from 'react'
import { UploadBlogForm } from './UploadBlogForm'
import { cookies } from 'next/headers'
import Link from "next/link";
import { redirect } from "next/navigation";
import DeployButton from "@/components/DeployButton";
import AuthButton from "@/components/AuthButton";


export default async function Page() {
  // const [notes, setNotes] = useState<any[] | null>(null)
  // const supabase = createClient()

  // useEffect(() => {
  //   const getData = async () => {
  //     const { data } = await supabase.from('notes').select()
  //     setNotes(data)
  //   }
  //   getData()
  // }, [])

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

  const canInitSupabaseClient = () => {
    try {
      createClient(cookieStore);
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();


  return (
    <>
      <nav className="w-full flex justify-center border-b border-primary h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <DeployButton />
          {isSupabaseConnected && <AuthButton />}
        </div>
      </nav>
      <div className="flex w-[100%] justify-center">
        <div className="container py-5 px-10 flex justify-center">
          {
            user ?
              <UploadBlogForm />
              :
              <Link
                href="/login"
                className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
              >
                Login
              </Link>
          }
        </div>
      </div>

    </>

  )
}