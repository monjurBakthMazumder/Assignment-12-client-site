import { useParams } from "react-router-dom";
import Container from "../../Component/Ui/Container";
import useGetBiodataDetails from "../../Hock/useGetBiodataDetails";
import BioDataDetailsCard from "./BioDataDetailsCard";

const BioDataDetails = () => {
    const id = useParams()
    const info = useGetBiodataDetails(id)
    console.log(info);
    return (
        <Container>
            <div className="flex flex-col lg:flex-row gap-5">
                <div className="flex-1">
                    <BioDataDetailsCard info={info} />
                </div>
                <div className="lg:w-80">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque veritatis soluta voluptatem atque pariatur nemo deserunt eligendi dolorum iste quibusdam quaerat vel iure illo commodi magni vitae voluptas necessitatibus accusantium reiciendis temporibus cupiditate dolor, alias id recusandae? Provident autem quo asperiores perferendis, sunt sed nostrum alias nihil dicta possimus ea rerum sapiente earum est atque inventore! Quia ad tenetur minima et, voluptatem, molestias non animi autem quo dolorem reiciendis, natus aspernatur illum. Fuga obcaecati laborum, eum dolorem hic aliquam minima adipisci quam tempore voluptates nihil dicta! Excepturi itaque quidem, odit id soluta quis aut debitis, a eaque, quae ipsam magni.
                </div>
            </div>
        </Container>
    );
};

export default BioDataDetails;