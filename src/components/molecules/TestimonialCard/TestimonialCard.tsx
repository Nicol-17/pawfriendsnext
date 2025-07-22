import Image, {StaticImageData} from "next/image";
import "./TestimonialCard.css"

type TestimonialCardProps = {
    name: string;
    comment: number | string | React.ReactNode;
    avatar: string ;
    rating?: number;
    variant?: "food" | "testimonial";
    
};

function TestimonialCard ({name, comment, avatar, rating = 5, variant = "food"} :TestimonialCardProps){
    const stars = Array.from({length: 5}, (_, i) => (
        <span key={i} className={i < rating ? "star filled" : "star"}>
            ★
        </span>
    ))
    
    return(
        <div className="testimonial-card ">
            <Image
                src={avatar}
                alt={`photo of ${name}`}
                width={96}
                height={96}
                className="testimonial-avatar "
            
            />

            
            <h3 className="text-white text-chewy text-center text-2xl">{name}</h3>
            <div className="testimonial-stars">{stars}</div>
            <p className="text-white text-quicksand">{comment}</p>
        </div>



)

}

export default TestimonialCard;