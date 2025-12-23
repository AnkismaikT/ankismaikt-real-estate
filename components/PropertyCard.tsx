export default function PropertyCard({ property }: any) {
  return (
    <div>
      <h3>{property.title}</h3>
      <p>₹{property.price}</p>
      <a href={`/properties/${property.id}`}>View</a>
    </div>
  );
}

