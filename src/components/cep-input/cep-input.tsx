import type { Dispatch, SetStateAction } from "react";
import { InputCep } from "react-input-cep";

interface CepInputProps {
	setCep: Dispatch<SetStateAction<string>>;
}

const styles = {
	input: {
		padding: "0.5rem",
		border: "1px solid #e5e7eb",
		borderRadius: "8px",
	},
};

export function CepInput({ setCep }: CepInputProps) {
	return (
		<InputCep
			placeholder="00000-000"
			name="cep"
			onValueChange={setCep}
			styles={styles}
		/>
	);
}
