const Shimer = () => {
  return (
    // <div className="shimer-container">
    //   <div></div>
    //   <div className="shimer"></div>
    //   <div className="shimer"></div>
    //   <div className="shimer"></div>
    //   <div className="shimer"></div>
    //   <div className="shimer"></div>
    //   <div className="shimer"></div>
    //   <div className="shimer"></div>
    //   <div className="shimer"></div>
    //   <div className="shimer"></div>
    //   <div className="shimer"></div>
    //   <div className="shimer"></div>
    //   <div className="shimer"></div>
    //   <div className="shimer"></div>
    //   <div className="shimer"></div>
    //   <div className="shimer"></div>
    // </div>
<div className="shimer-container">
{[...Array(10)].map((_, i) => (
  <div key={i} className="shimer">
    <div className="shimer-inner large"></div>
    <div className="shimer-inner small"></div>
    <div className="shimer-inner medium"></div>
    <div className="shimer-inner small"></div>
    <div className="shimer-inner medium"></div>
    <div className="shimer-inner small"></div>
  </div>
))}
</div>

  );
};
export default Shimer;
