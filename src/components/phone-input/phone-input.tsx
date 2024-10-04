"use client";
import { type Dispatch, type SetStateAction } from "react";
import InputMask from "react-input-mask";

interface PhoneInputProps {
	phoneNumber: string;
	setPhoneNumber: Dispatch<SetStateAction<string>>;
}

export function PhoneInput({ phoneNumber, setPhoneNumber }: PhoneInputProps) {
	const validatePhoneNumber = (phone: string) => {
		const phoneRegex = /^(?!(\d)\1{9,10})\d{10,11}$/;
		const cleanedPhone = phone.replace(/\D/g, "");
		return phoneRegex.test(cleanedPhone);
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPhoneNumber(event.target.value);
	};

	return (
		<div style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
			<InputMask
				mask="(99) 99999-9999"
				placeholder="(00) 00000-0000"
				value={phoneNumber}
				onChange={handleChange}
				className="border border-gray-200 p-2 rounded-md ring-red-500"
			/>

			{phoneNumber.length > 2 && !validatePhoneNumber(phoneNumber) && (
				<span style={{ fontSize: "12px", color: "red" }}>
					Número de telefone inválido
				</span>
			)}
		</div>
	);
}
