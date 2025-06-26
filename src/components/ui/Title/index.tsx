import { Poppins } from "next/font/google";

interface TitleProps {
  name: string;
}
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const Title: React.FC<TitleProps> = ({ name }) => {
  return (
    <h2 className={`font-semibold text-3xl ${poppins.className}`}>{name}</h2>
  );
};

export default Title;
