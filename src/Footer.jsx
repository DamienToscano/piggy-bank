export default function Footer() {

    const data = [
        {
            name: 'Piggy bank model',
            link: 'https://sketchfab.com/3d-models/piggy-bank-d4387ba82d8f4dda85826ee5815640b9',
        },
        {
            name: 'Cloud model',
            link: 'https://sketchfab.com/3d-models/stylized-cloud-5002a16c54c54a5d89ffb8f0b299b724',
        },
        {
            name: '© By Damien Toscano',
            link: 'https://twitter.com/DamienToscano',
        },
    ]

    return <>
        <footer>
            <div className="credit-container">
                {data.map((item, index) => {
                    return <a className="credit-button"
                        key={index}
                        href={item.link}
                        target="_blank"
                    >
                        {item.name}
                    </a>
                })}
            </div>
        </footer>
    </>
}