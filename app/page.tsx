import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-brand-blue">
      <header className="flex justify-center items-center p-4">
        <Image
          src="/myp-dark.png"
          alt="MyPersonas Logo"
          width={400}
          height={100}
          priority
        />
      </header>
      <main className="flex-grow flex justify-center items-center">
        <div id="myp-container" className="w-[94vw] h-[75vh]">
          <div id="my-chat-container" className="w-full h-full relative">
            {/* The iframe #IG-persona-iframe-container will be injected here by the script */}
          </div>
        </div>
      </main>
    </div>
  );
}
