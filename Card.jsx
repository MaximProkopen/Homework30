const Card = (props) => {
    const { img1, img2, img3, img4, img5, img, title, author, students, level, rating, duration, modules } = props;

    return <div class="container">
        <div class="img-level">
            <img class="img" src={img} alt=""></img>
            <div class="level">{level}</div>
        </div>
        <div class="all-down">
            <h1 class="title">{title}</h1>
            <div class="range-one">
                <div class="author-img">
                    <img class="img1" src={img1} alt=""></img>
                    <span class="author">{author}</span>
                </div>
                <div class="rating-img">
                    <img class="img4" src={img4} alt=""></img>
                    <span class="rating">{rating}</span>
                </div>
            </div>
            <div class="range-two">
                <div class="students-img">
                    <img class="img5" src={img5} alt=""></img>
                    <span class="students">{students} Students</span>
                </div>
                <div class="modules-img">
                    <img class="img3" src={img3} alt=""></img>
                    <span class="modules">{modules} Modul</span>
                </div>
                <div class="duration-img">
                    <img class="img2" src={img2} alt=""></img>
                    <span class="duration">{duration} hour</span>
                </div>
            </div>
        </div>
    </div>;
};

export default Card;