import SectionBase from "@/components/SectionBase";
import CoverListProduct from "./CoverListProduct";
import Banesco from "@/assets/Banesco.png"
import Bdv from "@/assets/bancovenezuelalogo.png"
import Binance from "@/assets/binance.png"
import Zelle from "@/assets/zelle.png"
import ButtonPay from "@/components/ButtonPay";

export default function Page() {

    return <SectionBase className="grid grid-cols-2">
        <div className="col-span-2 mt-8 mb-10">
            <h1 className="text-4xl font-bold">Pagar</h1>
        </div>
        <div className="col-span-1 min-h-[50vh]">
            <CoverListProduct />
        </div>
        <div className="col-span-1">
            <h2 className="text-2xl font-bold text-center">Seleccione su forma de pago</h2>
            <div className="grid grid-cols-2 grid-rows-2 gap-5 py-8">
                <ButtonPay
                    className="col-span-1 row-span-1"
                    src={Banesco}
                    width={200}
                    height={400}
                />
                <ButtonPay
                    className="col-span-1 row-span-1"
                    src={Bdv}
                    width={200}
                    height={400}
                />
                <ButtonPay
                    className="col-span-1 row-span-1"
                    src={Binance}
                    width={200}
                    height={400}
                />
                <ButtonPay
                    className="col-span-1 row-span-1"
                    src={Zelle}
                    width={200}
                    height={400}
                />
            </div>
        </div>
    </SectionBase>
}