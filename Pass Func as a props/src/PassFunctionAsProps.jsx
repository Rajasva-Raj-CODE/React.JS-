const PassFunctionAsProps = ({data}) => {
  return (
    <div>
      <h2>Pass Function As Props</h2>
      {/* <button onClick={data}>Get Your Data</button> */}
      <button onClick={()=>data()}>Get Your Data</button>
    </div>
  );
};

export default PassFunctionAsProps;
