const Hero = ({
    id,
    content: { title }
}) => {

    return (
        <section id={id} className='container'>
            <h1>{title}</h1>
        </section>
    );
}

export default Hero;