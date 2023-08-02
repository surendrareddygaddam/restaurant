import React from "react";
import { connect } from "react-redux";
import Header from "./Container/Header";

const Orders = ({ list }) => {
  return (
    <div>
      <Header />
      <center>
        {list.length > 0 ? (
          <div className="container">
            <div className="row">
              {list.map((item, id) => (
                <div className="col-md-4" key={id} style={{ padding: "5px" }}>
                  <div
                    className="card"
                    style={{ width: "18rem", padding: "3px" }}
                  >
                    <img src={item.url} alt="" className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <div className="card-text">Billing Rs.{item.prize}</div>
                      <p>table number : {item.table_number}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="">
            <h4>No order placed yet</h4>
          </div>
        )}
      </center>
    </div>
  );
};

const mapStateToProps = (state) => ({
  list: state.orderreducer,
});

export default connect(mapStateToProps)(Orders);
