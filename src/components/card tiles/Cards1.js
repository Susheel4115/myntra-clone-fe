import React from "react";
import "./Cards.css";
const Cards = (props) => {
  return (
    <div className="img-container">
      <img
        className="text"
        src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/8d1fc23b-892d-4e4d-aed2-0697a5104d341654785362666-Budget-Buys.jpg"
        alt="img"
      />
      <div className="imagecontainer">
        <div className="c1">
          <img
            src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/8972e6d6-fa51-477c-9191-80bcb98abc571653371609423-BudgetBuys_Innerwear.jpg"
            alt=""
          />
          <img
            src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/8972e6d6-fa51-477c-9191-80bcb98abc571653371609423-BudgetBuys_Innerwear.jpg"
            alt=""
          />
          <img
            src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/d1b24c63-35f0-4800-8673-e404eff3678c1653371609502-BudgetBuys_Loungewear.jpg"
            alt=""
          />
        </div>
        <div className="c2">
          <img
            src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/80fc29d1-16f6-4043-82ce-35e4db4ebbf31653371609520-BudgetBuys_Makeup.jpg"
            alt=""
          />
          <img
            src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/3b16a87f-4bdb-4349-bfd2-25cb3114d8741653371609559-BudgetBuys_Shampoos_Conditioners.jpg"
            alt=""
          />
          <img
            src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/f54d3d79-4d55-4353-8dda-61be55def9371653371609475-BudgetBuys_Kurtas_Sets.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
