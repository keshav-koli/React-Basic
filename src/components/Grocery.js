const Grocery = () => {
  return (
    <div className="grocery min-h-[520px]">
      <h1>Hello this is a grocery store</h1>
      <form>
        <input type="text" placeholder="Enter Name" className="border-2"></input><br/><br/>
        <input type="text" placeholder="Enter password" className="border-2"></input><br/><br/>
        <button type="submit" className="border-2">Submit</button>
      </form>

      {/* <h2>This is a grocery page</h2> */}
    </div>
  );
};

export default Grocery;
