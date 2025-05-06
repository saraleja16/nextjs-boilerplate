// app/components/hello-world.tsx
import React from 'react';
import Image from 'next/image';

interface HelloWorldProps {
  name: string;
}

const HelloWorld: React.FC<HelloWorldProps> = ({ name }) => {
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Big, bold heading */}
      <h1 className="text-5xl font-extrabold">Hello, {name}!</h1>

      {/* Your photo in a circular frame */}
      <div className="w-40 h-40 rounded-full overflow-hidden">
        <Image
          src="/me.jpg"          // points to public/me.jpg
          alt={`${name}'s photo`}
          width={160}            // ensure these match the container roughly
          height={160}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default HelloWorld;
