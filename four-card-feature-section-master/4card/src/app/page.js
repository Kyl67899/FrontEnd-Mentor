import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div class="grid grid-cols-6 grid-rows-6 gap-4">
        <div class="col-span-2 row-span-4 col-start-1 row-start-2">1</div>
        <div class="col-span-2 row-span-3 col-start-3 row-start-1">2</div>
        <div class="col-span-2 row-span-3 col-start-3 row-start-4">3</div>
        <div class="col-span-2 row-span-4 col-start-5 row-start-2">4</div>
      </div>
    </main>
  );
}
