import {  type Dispatch, type SetStateAction } from "react";
import { InputCep } from "react-input-cep";

interface CepInputProps {
	cep: string;
	setCep: Dispatch<SetStateAction<string>>;
}

const styles = {
	input: {
		padding: "0.5rem",
		border: "1px solid #e5e7eb",
		borderRadius: "8px",
	},
};

export function CepInput({ setCep, cep }: CepInputProps) {
	return (
		<InputCep
			placeholder="00000-000"
			name="cep"
			value={cep}
			onValueChange={setCep}
			styles={styles}
		/>
	);
}
