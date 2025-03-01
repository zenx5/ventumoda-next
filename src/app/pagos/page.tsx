import Image from "next/image";
import SectionBase from "@/components/SectionBase";
import PaymentCard from "@/components/PaymentCard";

import paymenst from "@/assets/payments.jpg"
import Banesco from "@/assets/Banesco.png"
import Bdv from "@/assets/bancovenezuelalogo.png"
import Binance from "@/assets/binance.png"
import Zelle from "@/assets/zelle.png"

export default function Page() {

    return <SectionBase>
        <div className="grid grid-cols-2 mt-5">
            <Image src={paymenst} alt="" className="col-span-1"/>
            <div className="col-span-1 flex flex-col justify-center gap-10 mx-6">
                <h1 className="text-3xl font-bold">¡Hacer pagos nunca ha sido tan sencillo!</h1>
                <p className="text-lg">Te ofrecemos múltiples opciones para que elijas la que mejor se adapte a tu comodidad</p>
            </div>
        </div>
        <div className="grid grid-cols-4 gap-5 py-8">
            <span className="col-span-1">
                <PaymentCard src={Banesco} className="flex flex-col gap-1 pt-2">
                    <span className="font-bold">Numero de cuenta</span>
                    <span className="">0000000000000000000000</span>
                    <span className="font-bold">Cuenta corriente</span>
                    <span className="flex flex-row gap-2">
                        <span className="font-bold">Pago Movil</span>
                        <span className="">Pago Movil</span>
                    </span>
                </PaymentCard>
            </span>
            <span className="col-span-1">
                <PaymentCard src={Bdv} className="flex flex-col gap-1 pt-2">
                    <span className="font-bold">Numero de cuenta</span>
                    <span className="">0000000000000000000000</span>
                    <span className="font-bold">Cuenta corriente</span>
                    <span className="flex flex-row gap-2">
                        <span className="font-bold">Pago Movil</span>
                        <span className="">Pago Movil</span>
                    </span>
                </PaymentCard>
            </span>
            <span className="col-span-1">
                <PaymentCard src={Binance} className="flex flex-col gap-1 pt-2">
                    <span className="font-bold">Numero de cuenta</span>
                    <span className="">0000000000000000000000</span>
                    <span className="font-bold">Cuenta corriente</span>
                    <span className="flex flex-row gap-2">
                        <span className="font-bold">Pago Movil</span>
                        <span className="">Pago Movil</span>
                    </span>
                </PaymentCard>
            </span>
            <span className="col-span-1">
                <PaymentCard src={Zelle} className="flex flex-col gap-1 pt-2">
                    <span className="font-bold">Numero de cuenta</span>
                    <span className="">0000000000000000000000</span>
                    <span className="font-bold">Cuenta corriente</span>
                    <span className="flex flex-row gap-2">
                        <span className="font-bold">Pago Movil</span>
                        <span className="">Pago Movil</span>
                    </span>
                </PaymentCard>
            </span>
        </div>
    </SectionBase>
}

