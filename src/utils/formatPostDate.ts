import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

type PostDateInput = {
    date: string;
    dateUtc?: string;
};

export const formatPostDate = ({date}: PostDateInput) => {
    const parsed = dayjs.utc(date);

    if (!parsed.isValid()) {
        return date;
    }

    return parsed.format("D MMMM YYYY");
};
