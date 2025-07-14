import Image from "next/image";

export default function Home() {
  console.log('hello env', process.env.XXX);
  return <>Hello</>;
}
