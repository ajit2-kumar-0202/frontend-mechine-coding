import { useState } from "react";
import Store from "../../Pages/TabChildComponents/Store";
import Product from "../../Pages/TabChildComponents/Product";
import Order from "../../Pages/TabChildComponents/Order";

const Tabs = () => {

    const [activeTab, setActiveTab] = useState(0)

    const tabs = [
        { name: "store", component: Store },
        { name: "products", component: Product },
        { name: "order", component: Order }
    ]

    const ActiveTabComponent = tabs[activeTab].component;

    return <>
        <div className='tab_container'>
        {tabs.map((tab, index) => {
          return (<>
            <div className='tab_name' onClick={() => setActiveTab(index)}>{tab.name}</div>
          </>)
        })}
      </div>
      <div className='tab_screen'><ActiveTabComponent /> </div>
    </>
}

export default Tabs;