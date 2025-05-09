// app/page.tsx
import HelloWorld from "./components/hello-world";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <HelloWorld name="World" />
    </div>
  );
}

