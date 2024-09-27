const New = ({data}) => {
  return (
    <div>
      <h2>Pass Function As a from NEW Props</h2>
      {/* <button onClick={data}>Get Your Data</button> */}
      <button onClick={() => data()}>Get Your NEW Data</button>
    </div>
  );
};

export default New;
