"use client";
import { useState } from "react";
import { PhoneInput } from "@/components/phone-input/phone-input";
import { CepInput } from "@/components/cep-input/cep-input";

export default function Home() {
	const [phoneNumber, setPhoneNumber] = useState<string>("");
	const [cep, setCep] = useState<string>("");

	console.log(cep);

	return (
		<div className="text-black flex w-full h-screen items-center justify-center">
			<div className="p-6 rounded-md border border-gray-300 flex flex-col gap-4 w-[500px]">
				<div className="flex flex-col">
					<label htmlFor="phone-number" className="font-semibold mb-2">
						Número de telefone
					</label>

					<PhoneInput
						phoneNumber={phoneNumber}
						setPhoneNumber={setPhoneNumber}
					/>
				</div>

				<div className="flex flex-col">
					<label htmlFor="phone-number" className="font-semibold mb-2">
						CEP
					</label>

					<CepInput setCep={setCep} />
				</div>
			</div>
		</div>
	);
}
