import { SignIn } from '@clerk/nextjs';
import Image from 'next/image';

export default function Page() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
        {/* Full-Screen Image */}
        <div className="w-full h-screen relative">
          <Image
            src={'/login.jpg'}
            alt="login"
            layout="fill" // Makes the image cover the div
            objectFit="cover" // Ensures full coverage
          />
        </div>

        {/* Sign-In Section */}
        <div className="flex justify-center items-center h-screen">
          <SignIn />
        </div>
      </div>
    </>
  );
}
