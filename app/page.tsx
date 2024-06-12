import Image from "next/image";


function Card ({title}: {title: string}) {
  return <div className={"w-40 rounded border-amber-50 border-2 bg-amber-50 text-black" }>
    <div className={"flex flex-row justify-between"}>
      <h1>
        {title}
      </h1>
      <img className={"w-12"} src={"/next.svg"} alt={"logo"} />
    </div>
    <div>
      <span>
        h1
      </span>
      <span>
        23
      </span>
      <span>
        345
      </span>
    </div>
    <div>
      <span>
        23
      </span>
      <span>
        456
      </span>
      <span>
        890
      </span>
    </div>
    <div className="relative h-2">
      <div className="absolute w-full h-2 border-2"/>
      <div className="absolute w-4/5 bg-amber-800 h-2"/>
    </div>
  </div>
}

export default function Home() {
  return (
      <main className="bg-black ">
        <Card title="hello"></Card>
      </main>
  );
}
