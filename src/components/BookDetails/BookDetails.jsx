import { useParams } from "react-router-dom";

const BookDetails = () => {

    const {bookId} = useParams();

    return (
        <div>
            <p>Book ID: {bookId}</p>
        </div>
    );
};

export default BookDetails;