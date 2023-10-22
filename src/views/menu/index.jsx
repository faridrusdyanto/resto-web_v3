import React from "react";
import menudummy from "../../services/menu-dummy";

export default function Menu() {
  return (
    <div>
      <h1>Menu</h1>
      <div
        style={{
          flexWrap: "wrap",
          flexDirection: "row",
          display: "flex",
        }}
      >
        {menudummy.map((item, index) => {
          return (
            <div key={index}>
              <img
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 100,
                }}
                src={item.image}
              />
              <p>{item.title}</p>
              <p>{item.desc}</p>
              <p>{item.price}</p>
              <p>{item.qty}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
