import { parseISO, format } from "date-fns";
import { pt } from "date-fns/locale";

export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);

  return (
    <time dateTime={dateString}>
      {format(date, "dd MMM, yyyy", { locale: pt })}
    </time>
  );
}
