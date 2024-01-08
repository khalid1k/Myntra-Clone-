import { useSelector } from "react-redux";
import BagSummary from "../components/BagSummery";
import BagItems from "../components/bagItems";
const Bag = () => {
    const bagItems=useSelector((store)=>store.bag);
    const SliceItems=useSelector((store)=>store.items);
    const finalItems=SliceItems.filter((item)=>{
      const itemIndex=bagItems.indexOf(item.id);
      return itemIndex >=0;
    })
  return (
    <>
      <main>
        <div className="bag-page">
          {finalItems.map((item)=><div className="bag-items-container"><BagItems item={item}/></div>)}
          
          <div className="bag-summary"><BagSummary/></div>
        </div>
      </main>
    </>
  );
};
export default Bag;
