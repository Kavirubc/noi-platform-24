"use client";

import Herosec from '@/components/herosec';
import Heroseclog from '@/components/heroseclog';
import LoadingScreen from '@/components/loadingscreen';
import Mobilenav from '@/components/mobilenav';
import Navbar from '@/components/navbar';
import { LoginButton, LogoutButton } from '@/components/ui/login'
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data, status } = useSession();
  const profileData = data?.user?.profile;

  if (status === "loading") {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <LoadingScreen />
      </main>
    )
  }

const state = String(status) === "authenticated" ? "authenticated" : "unauthenticated";


  return (
    <>
      {status === "authenticated" ? (
        <main className="">
          <Navbar
            status={state} // Add the status prop to the Navbar component
          />
          <Heroseclog />
          <Mobilenav />
        </main>
      ) : (
        <main className="">
          <Navbar
            // Add the status prop to the Navbar component
          />
          <Herosec />
        </main>
      )}
    </>

  )
}
