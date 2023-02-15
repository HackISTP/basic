const Avatar = ({ image, isNew }) => {
  return (
    <div className="avatar">
      <img className="photo" src={image} alt="avartar" />
      {isNew && <span className="new">new</span>}
    </div>
  );
};
export default Avatar;
