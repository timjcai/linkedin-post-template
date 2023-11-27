import Image from "next/image";
import { Tiles } from "./components/Tiles";
import { ClippingBorder } from "./components/ClippingBorder";

export default function Home() {
    return (
        <main className="">
            <Tiles />
            <ClippingBorder />
        </main>
    );
}
