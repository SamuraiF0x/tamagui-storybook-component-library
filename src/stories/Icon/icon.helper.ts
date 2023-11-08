import { Status } from "../../interfaces/utilities.type";

export const getStatusColor = ({ status }: { status: string | undefined }) => {
	switch (status) {
		case Status.SUCCESS:
			return "$success";
		case Status.WARNING:
			return "$warning";
		case Status.ERROR:
			return "$error";
		case Status.CONNECTING:
			return "$purple";
		default:
			return "$accent";
	}
};
