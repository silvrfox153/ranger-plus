//TODO: Figure out how to make the front, center, back distances dynamic

const DistancePanel = () => {
  return (
    <section className="flex flex-col text-center max-h-80 m-10">
      <div className="bg-gray-100 rounded-md h-16 mb-10">
        <h2>Front</h2>
        <h3>450</h3>
      </div>
      <div className="bg-gray-100 rounded-md h-16 mb-10">
        <h2>Center</h2>
        <h3>475</h3>
      </div>
      <div className="bg-gray-100 rounded-md h-16 mb-10">
        <h2>Back</h2>
        <h3>500</h3>
      </div>
    </section>
  );
};

export default DistancePanel;
