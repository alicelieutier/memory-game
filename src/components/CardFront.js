
function CardFront({ url, name }) {
  return (
    <div
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100%',
      }}
    >
      <img src={url} alt={name} loading="lazy" style={{visibility: "hidden"}}/>
      <p>{name}</p>
    </div>
  )
}

export default CardFront;